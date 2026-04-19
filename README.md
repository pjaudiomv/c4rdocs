# 12 Step Meeting List — Knowledge Base

A searchable Docusaurus site compiled from community
[discussions](https://github.com/code4recovery/12-step-meeting-list/discussions)
and [issues](https://github.com/code4recovery/12-step-meeting-list/issues)
on the [code4recovery/12-step-meeting-list](https://github.com/code4recovery/12-step-meeting-list)
WordPress plugin.

---

## Content pipeline

Content is generated in three stages. Stages 1 and 2 only need to be re-run when
GitHub data changes; stage 3 runs every time you edit the curation file.

```
  GitHub  →  fetch  →  data/issues.json + data/discussions.json   (raw)
                   ↘  build-curation  →  data/curation.json       (reviewable)
                                     ↘  generate-docs  →  docs/*  (site)
```

### 1. Fetch raw data from GitHub

Requires `gh` to be authenticated (`gh auth status`).

```bash
node scripts/fetch-github-data.mjs
```

Pulls every issue + discussion with their comments/answers into `data/issues.json`
and `data/discussions.json`. Takes a couple of minutes.

### 2. Build the curation file

```bash
node scripts/build-curation.mjs
```

Reads the raw data, classifies every item into a topic, picks the best answer,
extracts code blocks, clusters near-duplicate titles, and writes a single
**`data/curation.json`** file that you can review and edit.

Each entry has an `include: true/false` flag:

- **`true`** — goes into the site
- **`false`** — held back (low quality, duplicate, off-topic)

Edit entries directly — change titles, fix categorisation, flip `include`,
rewrite `answer` to clean up typos or rude comments, drop a bad entry to
`include: false`, promote a gem by adding code to `codeExamples`.

### 3. Generate the docs site

```bash
node scripts/generate-docs.mjs
```

Consumes `data/curation.json` and rewrites:

- `docs/faq/*.md` — one page per category, each question rendered as a
  collapsible `<details>` block.
- `docs/recipes/*.md` — one page per entry flagged as a code recipe (has
  substantial code examples).
- `docs/top-questions.md` — cross-category links to highest-scoring Q&A.
- `docs/sources.md` — stats and credits.

Hand-written pages (`docs/intro.md`, anything outside `faq/` and `recipes/`)
are untouched.

### 4. Preview locally

```bash
npm start
```

Runs the Docusaurus dev server at <http://localhost:3000>. Search is provided
by [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local)
and indexes every page (⌘K / Ctrl+K).

### 5. Build & deploy

```bash
npm run build        # emits build/ ready for any static host
npm run deploy       # pushes to gh-pages (needs GIT_USER or USE_SSH=true)
```

---

## Recommended curation workflow

1. Re-run stages 1 and 2 when you want to refresh from GitHub.
2. Open `data/curation.json` in your editor.
3. Search for `"include": true` — these are the candidates.
4. Skim each entry's `title` + `answer`; flip to `include: false` on any
   noise (vent posts, unanswered complaints, stale bug reports that were
   fixed with no documentation value).
5. For anything staying, feel free to rewrite `title` or clean `answer`.
6. Commit `data/curation.json` — that's the editorial record.
7. Re-run stage 3, preview, commit the regenerated `docs/`.

---

## File layout

```
scripts/
  fetch-github-data.mjs    # stage 1 — GitHub GraphQL fetch
  build-curation.mjs       # stage 2 — classify, dedupe, score
  generate-docs.mjs        # stage 3 — emit Docusaurus markdown
  lib/
    categorize.mjs         # topic regex rules
    text.mjs               # text utilities (slugify, jaccard, code-block extract)
data/
  issues.json              # raw GitHub issues (gitignored if you like)
  discussions.json         # raw GitHub discussions
  curation.json            # HUMAN-EDITABLE — the editorial source of truth
docs/
  intro.md                 # hand-written landing
  top-questions.md         # generated
  sources.md               # generated
  faq/*.md                 # generated
  recipes/*.md             # generated
docusaurus.config.ts
```

---

## Docusaurus docs

This is a [Docusaurus 3](https://docusaurus.io/) site. For Docusaurus-specific
questions (sidebars, theming, deployment) see the
[official docs](https://docusaurus.io/docs).
