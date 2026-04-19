#!/usr/bin/env node
// Processes raw issues.json + discussions.json into a single reviewable curation.json
// that a human can edit before docs are generated.

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { classify, allCategories } from './lib/categorize.mjs';
import {
  clipBody, extractCodeBlocks, jaccard, redactSecrets, slugify, stripHtmlComments, tokens,
} from './lib/text.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(__dirname, '..', 'data');

const MAINTAINERS = new Set(['joshreisner', 'code4recovery']);
const BODY_MIN_CHARS = 80;
const ANSWER_MIN_CHARS = 60;
const DUPLICATE_SIMILARITY = 0.68;
const INCLUDE_SCORE_THRESHOLD = 6;
const RECIPE_MIN_CODE_CHARS = 80;

function pickIssueAnswer(issue) {
  const comments = (issue.comments?.nodes ?? []).filter((c) => (c.body || '').trim().length > 0);
  if (!comments.length) return null;
  const scored = comments.map((c) => {
    let s = 0;
    s += c.reactions?.totalCount ?? 0;
    if (c.author?.login && MAINTAINERS.has(c.author.login)) s += 3;
    if (/```/.test(c.body || '')) s += 2;
    if ((c.body || '').length > 120) s += 1;
    return { comment: c, score: s };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0].comment;
}

function pickDiscussionAnswer(d) {
  if (d.answer) return { ...d.answer, isAnswer: true };
  const comments = (d.comments?.nodes ?? []).filter((c) => (c.body || '').trim().length > 0);
  if (!comments.length) return null;
  const withReplies = comments.flatMap((c) => [c, ...(c.replies?.nodes ?? [])]);
  const scored = withReplies.map((c) => {
    let s = 0;
    if (c.isAnswer) s += 10;
    s += c.upvoteCount ?? 0;
    if (c.author?.login && MAINTAINERS.has(c.author.login)) s += 3;
    if (/```/.test(c.body || '')) s += 2;
    if ((c.body || '').length > 120) s += 1;
    return { comment: c, score: s };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0].score >= 1 ? scored[0].comment : null;
}

function normalizeIssue(issue) {
  const answer = pickIssueAnswer(issue);
  const labels = (issue.labels?.nodes ?? []).map((l) => l.name);
  const body = redactSecrets(stripHtmlComments(issue.body || '').trim());
  const answerBody = redactSecrets(stripHtmlComments(answer?.body || '').trim());
  const codeFromAnswer = extractCodeBlocks(answerBody);
  const codeFromBody = extractCodeBlocks(body);
  const codeExamples = [...codeFromAnswer, ...codeFromBody];

  // Quality score
  let score = 0;
  if (answer) score += 3;
  if (issue.state === 'CLOSED') score += 1;
  if (codeExamples.length) score += 2;
  score += issue.reactions?.totalCount ?? 0;
  if (body.length > 200) score += 1;
  if (answerBody.length > 200) score += 2;
  if (/\b(fixed|resolved|released|merged|closing)\b/i.test(answerBody)) score += 1;
  if (labels.some((l) => /duplicate|invalid|wontfix|wont-fix|won't fix/i.test(l))) score -= 4;

  const category = classify({ title: issue.title, body, labels });

  return {
    id: `issue-${issue.number}`,
    type: 'issue',
    number: issue.number,
    state: issue.state,
    url: issue.url,
    title: issue.title.trim(),
    author: issue.author?.login ?? null,
    createdAt: issue.createdAt,
    closedAt: issue.closedAt,
    labels,
    category,
    question: clipBody(body),
    answer: answerBody ? clipBody(answerBody) : null,
    answerAuthor: answer?.author?.login ?? null,
    answerUrl: answer?.url ?? null,
    codeExamples,
    score,
    raw: {
      hasAnswer: !!answer,
      commentCount: issue.comments?.totalCount ?? issue.comments?.nodes?.length ?? 0,
      reactions: issue.reactions?.totalCount ?? 0,
    },
  };
}

function normalizeDiscussion(d) {
  const answer = pickDiscussionAnswer(d);
  const labels = (d.labels?.nodes ?? []).map((l) => l.name);
  const body = redactSecrets(stripHtmlComments(d.body || '').trim());
  const answerBody = redactSecrets(stripHtmlComments(answer?.body || '').trim());
  const codeFromAnswer = extractCodeBlocks(answerBody);
  const codeFromBody = extractCodeBlocks(body);
  const codeExamples = [...codeFromAnswer, ...codeFromBody];

  let score = 0;
  if (answer) score += 3;
  if (d.answerChosenAt) score += 4;
  if (codeExamples.length) score += 2;
  score += d.upvoteCount ?? 0;
  if (body.length > 200) score += 1;
  if (answerBody.length > 200) score += 2;

  // Category from the discussion section carries weight: Q&A and Show and tell are golden.
  const cat = d.category?.slug ?? '';
  if (cat === 'q-a') score += 2;
  if (cat === 'show-and-tell') score += 1;
  if (cat === 'announcements' || cat === 'polls') score -= 5;

  const category = classify({ title: d.title, body, labels });

  return {
    id: `disc-${d.number}`,
    type: 'discussion',
    number: d.number,
    discussionCategory: d.category?.name ?? null,
    url: d.url,
    title: d.title.trim(),
    author: d.author?.login ?? null,
    createdAt: d.createdAt,
    answerChosenAt: d.answerChosenAt,
    labels,
    category,
    question: clipBody(body),
    answer: answerBody ? clipBody(answerBody) : null,
    answerAuthor: answer?.author?.login ?? null,
    answerUrl: answer?.url ?? null,
    codeExamples,
    score,
    raw: {
      hasAnswer: !!answer,
      hasChosenAnswer: !!d.answerChosenAt,
      commentCount: d.comments?.totalCount ?? d.comments?.nodes?.length ?? 0,
      upvotes: d.upvoteCount ?? 0,
    },
  };
}

function clusterDuplicates(entries) {
  // Group by category, then O(n^2) similarity within category (fine at this scale).
  const byCat = new Map();
  for (const e of entries) {
    if (!byCat.has(e.category)) byCat.set(e.category, []);
    byCat.get(e.category).push(e);
  }
  for (const list of byCat.values()) {
    const toks = list.map((e) => tokens(e.title));
    for (let i = 0; i < list.length; i += 1) {
      list[i].duplicates = list[i].duplicates ?? [];
      for (let j = 0; j < list.length; j += 1) {
        if (i === j) continue;
        const sim = jaccard(toks[i], toks[j]);
        if (sim >= DUPLICATE_SIMILARITY) list[i].duplicates.push(list[j].id);
      }
    }
  }
}

// Within each duplicate cluster, pick a canonical entry (highest score) and demote the rest.
function applyCanonicalSelection(entries) {
  const byId = new Map(entries.map((e) => [e.id, e]));
  const seen = new Set();
  for (const e of entries) {
    if (seen.has(e.id)) continue;
    const cluster = [e];
    for (const dupId of e.duplicates ?? []) {
      const other = byId.get(dupId);
      if (other && !seen.has(other.id)) cluster.push(other);
    }
    cluster.sort((a, b) => b.score - a.score);
    const winner = cluster[0];
    for (const member of cluster) {
      seen.add(member.id);
      member.canonicalId = winner.id;
      member.isCanonical = member.id === winner.id;
    }
  }
}

function decideInclusion(e) {
  if (!e.isCanonical) return false;
  if (e.labels?.some((l) => /duplicate|invalid|wontfix|won't fix|not planned|spam/i.test(l))) return false;
  if (!e.question || e.question.length < BODY_MIN_CHARS) return false;
  if (!e.answer || e.answer.length < ANSWER_MIN_CHARS) return false;
  if (e.discussionCategory === 'Announcements') return false;
  if (e.discussionCategory === 'Polls') return false;
  // Always include if a maintainer explicitly chose the answer.
  if (e.raw.hasChosenAnswer) return true;
  if (e.score < INCLUDE_SCORE_THRESHOLD) return false;
  return true;
}

function isRecipe(e) {
  if (!e.include) return false;
  const total = (e.codeExamples ?? []).reduce((n, b) => n + (b.code?.length ?? 0), 0);
  return total >= RECIPE_MIN_CODE_CHARS;
}

async function main() {
  const issues = JSON.parse(await readFile(resolve(DATA, 'issues.json'), 'utf8'));
  const discussions = JSON.parse(await readFile(resolve(DATA, 'discussions.json'), 'utf8'));

  const entries = [
    ...issues.map(normalizeIssue),
    ...discussions.map(normalizeDiscussion),
  ];

  clusterDuplicates(entries);
  applyCanonicalSelection(entries);

  for (const e of entries) {
    e.include = decideInclusion(e);
    e.isRecipe = isRecipe(e);
    e.slug = slugify(e.title);
  }

  // Sort by category then score desc — makes human review friendlier.
  entries.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return b.score - a.score;
  });

  const categoryStats = {};
  for (const c of allCategories()) categoryStats[c.id] = { label: c.label, total: 0, included: 0 };
  for (const e of entries) {
    const s = categoryStats[e.category] ?? (categoryStats[e.category] = { label: e.category, total: 0, included: 0 });
    s.total += 1;
    if (e.include) s.included += 1;
  }

  const output = {
    generatedAt: new Date().toISOString(),
    source: { issues: issues.length, discussions: discussions.length },
    categoryStats,
    categories: allCategories().map((c) => ({ id: c.id, label: c.label, description: c.description })),
    config: {
      duplicateSimilarity: DUPLICATE_SIMILARITY,
      includeScoreThreshold: INCLUDE_SCORE_THRESHOLD,
      bodyMinChars: BODY_MIN_CHARS,
    },
    entries,
  };

  await writeFile(resolve(DATA, 'curation.json'), JSON.stringify(output, null, 2));

  const included = entries.filter((e) => e.include).length;
  const recipes = entries.filter((e) => e.isRecipe).length;
  const candidates = entries.filter((e) => e.isCanonical && !e.include).length;
  const duplicates = entries.filter((e) => !e.isCanonical).length;
  process.stderr.write(
    `\nWrote data/curation.json\n` +
    `  total entries:  ${entries.length}\n` +
    `  included:       ${included}  (of which ${recipes} flagged as code recipes)\n` +
    `  canonical but excluded (low score / no answer / etc.): ${candidates}\n` +
    `  duplicates rolled up into canonicals:                 ${duplicates}\n\n` +
    `Category breakdown:\n`,
  );
  const rows = Object.entries(categoryStats)
    .map(([id, s]) => `  ${s.label.padEnd(36)} ${String(s.included).padStart(4)} / ${String(s.total).padStart(4)}`);
  process.stderr.write(rows.join('\n') + '\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
