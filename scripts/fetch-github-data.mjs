#!/usr/bin/env node
// Fetches all issues + discussions + comments from a repo via the GitHub GraphQL API.
// Uses `gh api graphql` under the hood to reuse the user's gh auth.

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const execFileP = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));

const OWNER = 'code4recovery';
const NAME = '12-step-meeting-list';
const OUT_DIR = resolve(__dirname, '..', 'data');

async function gql(query, variables = {}) {
  const args = ['api', 'graphql', '-f', `query=${query}`];
  for (const [k, v] of Object.entries(variables)) {
    if (v === null || v === undefined) continue;
    args.push('-F', `${k}=${v}`);
  }
  const { stdout } = await execFileP('gh', args, { maxBuffer: 32 * 1024 * 1024 });
  const json = JSON.parse(stdout);
  if (json.errors) throw new Error(JSON.stringify(json.errors, null, 2));
  return json.data;
}

const ISSUES_QUERY = `
query($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    issues(first: 40, after: $cursor, states: [OPEN, CLOSED], orderBy: {field: CREATED_AT, direction: ASC}) {
      pageInfo { hasNextPage endCursor }
      nodes {
        number title body state createdAt closedAt url
        author { login }
        labels(first: 20) { nodes { name } }
        reactions { totalCount }
        comments(first: 50) {
          totalCount
          pageInfo { hasNextPage endCursor }
          nodes {
            body createdAt url
            author { login }
            reactions { totalCount }
          }
        }
      }
    }
  }
}`;

const ISSUE_COMMENTS_QUERY = `
query($owner: String!, $name: String!, $number: Int!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    issue(number: $number) {
      comments(first: 50, after: $cursor) {
        pageInfo { hasNextPage endCursor }
        nodes {
          body createdAt url
          author { login }
          reactions { totalCount }
        }
      }
    }
  }
}`;

const DISCUSSIONS_QUERY = `
query($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    discussions(first: 30, after: $cursor, orderBy: {field: CREATED_AT, direction: ASC}) {
      pageInfo { hasNextPage endCursor }
      nodes {
        number title body createdAt url answerChosenAt
        author { login }
        category { name slug }
        labels(first: 20) { nodes { name } }
        upvoteCount
        answer {
          body createdAt url
          author { login }
          upvoteCount
        }
        comments(first: 40) {
          totalCount
          pageInfo { hasNextPage endCursor }
          nodes {
            body createdAt url isAnswer
            author { login }
            upvoteCount
            replies(first: 20) {
              nodes {
                body createdAt url
                author { login }
                upvoteCount
              }
            }
          }
        }
      }
    }
  }
}`;

const DISCUSSION_COMMENTS_QUERY = `
query($owner: String!, $name: String!, $number: Int!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    discussion(number: $number) {
      comments(first: 40, after: $cursor) {
        pageInfo { hasNextPage endCursor }
        nodes {
          body createdAt url isAnswer
          author { login }
          upvoteCount
          replies(first: 20) {
            nodes { body createdAt url author { login } upvoteCount }
          }
        }
      }
    }
  }
}`;

async function fetchAllIssues() {
  const issues = [];
  let cursor = null;
  let page = 0;
  while (true) {
    page += 1;
    const data = await gql(ISSUES_QUERY, { owner: OWNER, name: NAME, cursor });
    const { nodes, pageInfo } = data.repository.issues;
    for (const issue of nodes) {
      if (issue.comments.pageInfo.hasNextPage) {
        let cCursor = issue.comments.pageInfo.endCursor;
        while (cCursor) {
          const more = await gql(ISSUE_COMMENTS_QUERY, {
            owner: OWNER, name: NAME, number: issue.number, cursor: cCursor,
          });
          issue.comments.nodes.push(...more.repository.issue.comments.nodes);
          const pi = more.repository.issue.comments.pageInfo;
          cCursor = pi.hasNextPage ? pi.endCursor : null;
        }
      }
      issues.push(issue);
    }
    process.stderr.write(`  issues page ${page}: +${nodes.length} (total ${issues.length})\n`);
    if (!pageInfo.hasNextPage) break;
    cursor = pageInfo.endCursor;
  }
  return issues;
}

async function fetchAllDiscussions() {
  const discussions = [];
  let cursor = null;
  let page = 0;
  while (true) {
    page += 1;
    const data = await gql(DISCUSSIONS_QUERY, { owner: OWNER, name: NAME, cursor });
    const { nodes, pageInfo } = data.repository.discussions;
    for (const d of nodes) {
      if (d.comments.pageInfo.hasNextPage) {
        let cCursor = d.comments.pageInfo.endCursor;
        while (cCursor) {
          const more = await gql(DISCUSSION_COMMENTS_QUERY, {
            owner: OWNER, name: NAME, number: d.number, cursor: cCursor,
          });
          d.comments.nodes.push(...more.repository.discussion.comments.nodes);
          const pi = more.repository.discussion.comments.pageInfo;
          cCursor = pi.hasNextPage ? pi.endCursor : null;
        }
      }
      discussions.push(d);
    }
    process.stderr.write(`  discussions page ${page}: +${nodes.length} (total ${discussions.length})\n`);
    if (!pageInfo.hasNextPage) break;
    cursor = pageInfo.endCursor;
  }
  return discussions;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  process.stderr.write('Fetching issues…\n');
  const issues = await fetchAllIssues();
  await writeFile(resolve(OUT_DIR, 'issues.json'), JSON.stringify(issues, null, 2));
  process.stderr.write(`Wrote ${issues.length} issues → data/issues.json\n\n`);

  process.stderr.write('Fetching discussions…\n');
  const discussions = await fetchAllDiscussions();
  await writeFile(resolve(OUT_DIR, 'discussions.json'), JSON.stringify(discussions, null, 2));
  process.stderr.write(`Wrote ${discussions.length} discussions → data/discussions.json\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
