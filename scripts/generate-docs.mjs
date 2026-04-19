#!/usr/bin/env node
// Generates Docusaurus markdown from data/curation.json.
// Layout:
//   docs/
//     intro.md                       (hand-written, left in place)
//     faq/                           (one MDX page per category containing all included Q&As)
//       _category_.json
//       getting-started.md
//       managing-meetings.md
//       ...
//     recipes/                       (one page per code recipe)
//       _category_.json
//       <slug>.md
//     top-questions.md              (cross-category top N)
//     sources.md                    (transparency / credits)
//
// MDX is used everywhere so we can render details/summary and syntax-highlighted code blocks.

import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { allCategories, getCategory } from './lib/categorize.mjs';
import { redactSecrets, slugify } from './lib/text.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(__dirname, '..', 'data');
const DOCS = resolve(__dirname, '..', 'docs');

const REPO_URL = 'https://github.com/code4recovery/12-step-meeting-list';

function esc(text = '') {
  // Minimal MDX-safe escape for inline text that would otherwise be parsed as JSX.
  // We leave fenced code blocks alone (caller passes those as-is).
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '\\{').replace(/\}/g, '\\}');
}

function fmFrontmatter(fields) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      lines.push(`${k}: [${v.map((x) => JSON.stringify(x)).join(', ')}]`);
    } else if (typeof v === 'string' && (v.includes(':') || v.includes('#') || v.includes('"'))) {
      lines.push(`${k}: ${JSON.stringify(v)}`);
    } else {
      lines.push(`${k}: ${v}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

function sourceBadge(e) {
  const label = e.type === 'discussion' ? `Discussion #${e.number}` : `Issue #${e.number}`;
  return `[${label}](${e.url})`;
}

// Turn a raw markdown body (user-authored) into something safe to inline inside MDX.
// We keep fenced code blocks intact; the rest gets MDX escaping on `{` `}` `<` `>` outside of code.
function sanitizeBody(md = '') {
  if (!md) return '';
  // Defense-in-depth: redact again in case curation.json was hand-edited after build-curation ran.
  const input = redactSecrets(md);
  const parts = input.split(/(```[\w+\-]*\n[\s\S]*?```)/g);
  return parts
    .map((p) => {
      if (p.startsWith('```')) return p;
      const cleaned = p.replace(/\[([^\]]+)\]\(\s*\)/g, '$1');
      return esc(cleaned);
    })
    .join('');
}

function renderQA(e) {
  const q = e.question?.trim() ?? '';
  const a = e.answer?.trim() ?? '';
  const who = e.answerAuthor ? `_by @${e.answerAuthor}_` : '';
  const src = sourceBadge(e);
  const anchor = e.slug;

  // Collapsible details block. Question in the summary, question body + answer inside.
  return `
### ${esc(e.title)} {#${anchor}}

<details>
<summary>Show question &amp; answer</summary>

**Question**

${sanitizeBody(q)}

**Answer** ${who}

${sanitizeBody(a) || '_No accepted answer recorded._'}

<div class="c4r-source">Source: ${src}</div>

</details>
`;
}

function renderCategoryPage(cat, items, sidebarPosition) {
  const count = items.length;
  const fm = fmFrontmatter({
    id: cat.id,
    title: cat.label,
    description: cat.description,
    sidebar_position: sidebarPosition,
    tags: [cat.id],
  });
  const head = `# ${cat.label}\n\n${cat.description}\n\n_${count} question${count === 1 ? '' : 's'} — sourced from GitHub discussions & issues._\n`;

  const seen = new Set();
  const withUniqueSlugs = items.map((e) => {
    let s = e.slug;
    let n = 2;
    while (seen.has(s)) { s = `${e.slug}-${n}`; n += 1; }
    seen.add(s);
    return { ...e, slug: s };
  });
  const body = withUniqueSlugs.map(renderQA).join('\n');
  return `${fm}${head}\n${body}\n`;
}

function renderRecipePage(e, sidebarPosition) {
  const fm = fmFrontmatter({
    id: e.slug,
    title: e.title,
    description: (e.question || '').split('\n').find((l) => l.trim())?.slice(0, 150) || e.title,
    sidebar_position: sidebarPosition,
    tags: ['recipe', e.category],
  });
  const codeSections = e.codeExamples.map((b, i) => {
    const lang = b.lang || 'text';
    const header = e.codeExamples.length > 1 ? `\n### Snippet ${i + 1}\n` : '';
    return `${header}\n\`\`\`${lang}\n${b.code}\n\`\`\`\n`;
  }).join('\n');

  return `${fm}
# ${esc(e.title)}

> ${esc(getCategory(e.category).label)} • ${sourceBadge(e)}${e.answerAuthor ? ` • _answer by @${e.answerAuthor}_` : ''}

## The question

${sanitizeBody(e.question)}

## The answer

${sanitizeBody(e.answer || '_No accepted answer recorded._')}

## Code

${codeSections}

---

_Original source: [${e.type} #${e.number}](${e.url})._
`;
}

function renderTopQuestions(topN) {
  const items = topN.map((e) => {
    const cat = getCategory(e.category);
    return `- [${esc(e.title)}](./faq/${cat.id}.md#${e.slug}) — _${cat.label}_`;
  }).join('\n');
  return `${fmFrontmatter({ id: 'top-questions', title: 'Top Questions', sidebar_position: 2 })}
# Top Questions

The most-upvoted, most-reacted, and maintainer-accepted answers from across the knowledge base.

${items}
`;
}

function renderSourcesPage(stats) {
  return `${fmFrontmatter({ id: 'sources', title: 'Sources & Credits', sidebar_position: 99 })}
# Sources & Credits

This knowledge base is auto-compiled from public discussions and issues on the
[${REPO_URL.replace('https://', '')}](${REPO_URL}) repository, then human-curated for quality, deduplication, and clarity.

- Issues processed: **${stats.sourceIssues}**
- Discussions processed: **${stats.sourceDiscussions}**
- Entries included after curation: **${stats.included}**
- Entries filtered as duplicates: **${stats.duplicates}**
- Code recipes extracted: **${stats.recipes}**

Every Q&A page links back to the original GitHub thread — please visit the source for the full conversation, to say thanks, or to follow up.

_Last rebuilt: ${new Date().toISOString().slice(0, 10)}._
`;
}

async function writeIfChanged(path, content) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
}

async function main() {
  const curation = JSON.parse(await readFile(resolve(DATA, 'curation.json'), 'utf8'));
  const included = curation.entries.filter((e) => e.include);

  // Group by category.
  const byCategory = new Map();
  for (const e of included) {
    if (!byCategory.has(e.category)) byCategory.set(e.category, []);
    byCategory.get(e.category).push(e);
  }
  // Sort each group by score desc so the best Q&A is first on the page.
  for (const list of byCategory.values()) list.sort((a, b) => b.score - a.score);

  // Reset generated folders (keep intro.md etc. untouched).
  await rm(resolve(DOCS, 'faq'), { recursive: true, force: true });
  await rm(resolve(DOCS, 'recipes'), { recursive: true, force: true });

  // Per-category FAQ pages.
  await mkdir(resolve(DOCS, 'faq'), { recursive: true });
  await writeFile(
    resolve(DOCS, 'faq', '_category_.json'),
    JSON.stringify({
      label: 'FAQ',
      position: 3,
      link: { type: 'generated-index', description: 'Questions and answers distilled from GitHub.' },
      collapsed: false,
    }, null, 2),
  );

  const categories = allCategories();
  let position = 1;
  for (const cat of categories) {
    const items = byCategory.get(cat.id) ?? [];
    if (!items.length) continue;
    const file = resolve(DOCS, 'faq', `${cat.id}.md`);
    await writeIfChanged(file, renderCategoryPage(cat, items, position));
    position += 1;
  }

  // Recipes.
  const recipes = included.filter((e) => e.isRecipe);
  recipes.sort((a, b) => b.score - a.score);
  await mkdir(resolve(DOCS, 'recipes'), { recursive: true });
  await writeFile(
    resolve(DOCS, 'recipes', '_category_.json'),
    JSON.stringify({
      label: 'Code Recipes',
      position: 4,
      link: { type: 'generated-index', description: 'Copy-pasteable code examples from real user questions.' },
      collapsed: false,
    }, null, 2),
  );
  const usedSlugs = new Set();
  for (const [i, e] of recipes.entries()) {
    let slug = e.slug;
    let n = 2;
    while (usedSlugs.has(slug)) {
      slug = `${e.slug}-${n}`;
      n += 1;
    }
    usedSlugs.add(slug);
    e.slug = slug;
    const file = resolve(DOCS, 'recipes', `${slug}.md`);
    await writeIfChanged(file, renderRecipePage(e, i + 1));
  }

  // Top questions across all categories (by score).
  const topN = [...included].sort((a, b) => b.score - a.score).slice(0, 30);
  await writeIfChanged(resolve(DOCS, 'top-questions.md'), renderTopQuestions(topN));

  // Sources / credits.
  await writeIfChanged(resolve(DOCS, 'sources.md'), renderSourcesPage({
    sourceIssues: curation.source.issues,
    sourceDiscussions: curation.source.discussions,
    included: included.length,
    duplicates: curation.entries.filter((e) => !e.isCanonical).length,
    recipes: recipes.length,
  }));

  // Summary.
  const catSummary = categories
    .map((c) => `  ${c.label.padEnd(40)} ${String((byCategory.get(c.id) ?? []).length).padStart(4)}`)
    .join('\n');
  process.stderr.write(
    `\nGenerated ${included.length} Q&A entries across ${byCategory.size} categories.\n` +
    `Recipes: ${recipes.length}\n\n` +
    `Counts per category:\n${catSummary}\n\n` +
    `Output: docs/faq/*.md, docs/recipes/*.md, docs/top-questions.md, docs/sources.md\n`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
