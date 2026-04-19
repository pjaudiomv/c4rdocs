// Small text utilities used by the curation pipeline.

export function stripHtmlComments(md = '') {
  return md.replace(/<!--[\s\S]*?-->/g, '');
}

export function normalizeTitle(title = '') {
  return title
    .toLowerCase()
    .replace(/[\u2018\u2019\u201c\u201d]/g, "'")
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const STOPWORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'be', 'but', 'by', 'can', 'cannot', 'do', 'does', 'for', 'from',
  'how', 'i', 'if', 'in', 'is', 'it', 'its', 'my', 'not', 'of', 'on', 'or', 'that', 'the', 'this',
  'to', 'was', 'we', 'what', 'when', 'where', 'which', 'who', 'why', 'will', 'with', 'you', 'your',
  'me', 'am', 'are', 'have', 'has', 'had', 'get', 'getting', 'there', 'their', 'please', 'help',
  'any', 'some', 'need', 'question',
]);

export function tokens(text) {
  return normalizeTitle(text)
    .split(' ')
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
}

export function jaccard(a, b) {
  if (!a.length || !b.length) return 0;
  const A = new Set(a);
  const B = new Set(b);
  let inter = 0;
  for (const x of A) if (B.has(x)) inter += 1;
  const union = A.size + B.size - inter;
  return union ? inter / union : 0;
}

// Extract fenced code blocks. Returns { cleanedBody, codeBlocks: [{lang, code}] }.
export function extractCodeBlocks(md = '') {
  const blocks = [];
  const re = /```([\w+\-]*)\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(md)) !== null) {
    const lang = (m[1] || '').trim();
    const code = m[2].trim();
    if (code) blocks.push({ lang, code });
  }
  return blocks;
}

// Trim giant body down to a manageable snippet (for curation preview), keeping paragraphs intact.
export function clipBody(md = '', maxChars = 4000) {
  const cleaned = stripHtmlComments(md).trim();
  if (cleaned.length <= maxChars) return cleaned;
  const cut = cleaned.slice(0, maxChars);
  const lastBreak = cut.lastIndexOf('\n\n');
  return (lastBreak > maxChars * 0.6 ? cut.slice(0, lastBreak) : cut) + '\n\n…';
}

// Escape any text we\u2019ll place into YAML frontmatter as a double-quoted scalar.
export function yamlString(s = '') {
  return `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;
}

// Redact user-pasted credentials that GitHub push-protection will otherwise block.
// Patterns are intentionally liberal — we'd rather over-redact than leak a token.
const SECRET_PATTERNS = [
  // Mapbox access tokens (public pk.*, secret sk.*, temporary tk.*)
  [/\b([pst])k\.ey[JIj][A-Za-z0-9_.-]{20,}/g, '$1k.REDACTED_MAPBOX_TOKEN'],
  // AWS access key IDs
  [/\b(AKIA|ASIA)[A-Z0-9]{16}\b/g, '$1REDACTED_AWS_KEY'],
  // GitHub personal access tokens (classic) + fine-grained + app tokens
  [/\b(ghp|ghs|gho|ghu|ghr|github_pat)_[A-Za-z0-9_]{20,}/g, '$1_REDACTED_GH_TOKEN'],
  // Google API keys
  [/\bAIza[0-9A-Za-z_-]{35}\b/g, 'AIza_REDACTED_GOOGLE_KEY'],
  // Slack tokens
  [/\bxox[aboprs]-[0-9A-Za-z-]{10,}/g, 'xox_REDACTED_SLACK_TOKEN'],
  // Generic long JWTs (three base64url parts)
  [/\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, 'eyJ_REDACTED_JWT'],
];

export function redactSecrets(text = '') {
  let out = text;
  for (const [re, replacement] of SECRET_PATTERNS) out = out.replace(re, replacement);
  return out;
}

// Make an MDX/Markdown-safe slug.
export function slugify(s = '') {
  return normalizeTitle(s).replace(/\s+/g, '-').slice(0, 80) || 'untitled';
}
