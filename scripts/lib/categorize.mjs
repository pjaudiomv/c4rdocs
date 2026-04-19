// Heuristic topic classifier for 12-step-meeting-list Q&A.
// Order matters: first category that matches wins. Keep regexes tight.

export const CATEGORIES = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    description: 'Installation, activation, and first-run setup.',
    patterns: [
      /\b(install|installation|activate|activation|first[- ]time|getting started|setup|set up)\b/i,
      /\b(where do i (start|begin))\b/i,
    ],
  },
  {
    id: 'meetings',
    label: 'Managing Meetings',
    description: 'Adding, editing, deleting, and bulk-managing meetings.',
    patterns: [
      /\b(add|edit|delete|bulk|duplicate|clone)\b.*\bmeeting(s)?\b/i,
      /\bmeeting[- ]data\b/i,
      /\b(recurring|repeat(ing)?)\b.*meeting/i,
    ],
  },
  {
    id: 'import-export',
    label: 'Import & Export',
    description: 'CSV import, data export, migrations between sites.',
    patterns: [
      /\b(csv|import(ing)?|export(ing)?|migrat(e|ion))\b/i,
      /\bgoogle sheet(s)?\b/i,
      /\bspreadsheet\b/i,
    ],
  },
  {
    id: 'shortcodes',
    label: 'Shortcodes & Display',
    description: 'Using and configuring shortcodes, controlling what appears on pages.',
    patterns: [
      /\bshortcode(s)?\b/i,
      /\[tsml/i,
      /\bembed(ding)?\b/i,
      /\bdisplay (on|the|a|only)\b/i,
    ],
  },
  {
    id: 'tsml-ui',
    label: 'TSML UI & Data Feed',
    description: 'The TSML UI front-end, JSON feed, third-party integration.',
    patterns: [
      /\btsml[- ]?ui\b/i,
      /\b(json[- ]?feed|data[- ]?feed|feed[- ]?url)\b/i,
      /\bmeeting[- ]?guide\b/i,
    ],
  },
  {
    id: 'maps-location',
    label: 'Maps & Locations',
    description: 'Google Maps, Mapbox, geocoding, location data.',
    patterns: [
      /\b(map|maps|mapbox|google\s*maps|geocod(e|ing)|lat(itude)?|long(itude)?)\b/i,
      /\b(location|address)\b/i,
    ],
  },
  {
    id: 'types-filters',
    label: 'Types, Regions & Custom Fields',
    description: 'Meeting types, regions, custom taxonomies and meta.',
    patterns: [
      /\b(meeting[- ]?type|custom[- ]?type|region(s)?|district(s)?|taxonom(y|ies)|custom[- ]?(field|meta))\b/i,
      /\bfilter(s)?\b/i,
    ],
  },
  {
    id: 'online-meetings',
    label: 'Online & Hybrid Meetings',
    description: 'Zoom, virtual meetings, hybrid meetings, conference numbers.',
    patterns: [
      /\b(zoom|online|virtual|hybrid|conference (number|url)|dial[- ]?in|telephone)\b/i,
    ],
  },
  {
    id: 'styling',
    label: 'Styling & Customization',
    description: 'CSS, theming, layout overrides, visual tweaks.',
    patterns: [
      /\b(css|style|stylesheet|theme[- ]?style|color(s)?|font|layout)\b/i,
      /\bcustomiz(e|ing|ation)\b/i,
    ],
  },
  {
    id: 'languages',
    label: 'Languages & Translation',
    description: 'i18n, translation strings, localization.',
    patterns: [
      /\b(languag(e|es)|translat(e|ion)|i18n|localization|localise|localize)\b/i,
      /\b(spanish|french|german|portuguese|italian|dutch|swedish)\b/i,
    ],
  },
  {
    id: 'compatibility',
    label: 'Theme & Plugin Compatibility',
    description: 'Conflicts and integrations with WP themes and other plugins.',
    patterns: [
      /\b(theme|plugin)\b.*(conflict|compatib|break|broken|not working)/i,
      /\b(divi|elementor|avada|astra|kadence|oxygen|beaver|wpbakery|bricks|generate[- ]?press)\b/i,
    ],
  },
  {
    id: 'development',
    label: 'Development & Hooks',
    description: 'Filters, actions, extending the plugin programmatically.',
    patterns: [
      /\b(hook|filter|action|apply_filters|do_action|wp_|wordpress[- ]?filter)\b/i,
      /\bextend(ing)?\b/i,
      /\brest[- ]?api\b/i,
    ],
  },
  {
    id: 'performance',
    label: 'Performance & Caching',
    description: 'Load times, caching, large datasets.',
    patterns: [
      /\b(slow|performance|cache|caching|speed|timeout|load[- ]?time)\b/i,
    ],
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    description: 'Errors, bugs, things that aren\u2019t working.',
    patterns: [
      /\b(error|bug|broken|not working|doesn'?t work|fatal|white[- ]?screen|500|404)\b/i,
      /\b(issue|problem)\b/i,
    ],
  },
];

const FALLBACK = { id: 'general', label: 'General', description: 'Other Q&A not fitting elsewhere.' };

export function classify({ title = '', body = '', labels = [] }) {
  const hay = `${title}\n${body}\n${labels.join(' ')}`;
  for (const c of CATEGORIES) {
    if (c.patterns.some((re) => re.test(hay))) return c.id;
  }
  return FALLBACK.id;
}

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id) ?? FALLBACK;
}

export function allCategories() {
  return [...CATEGORIES, FALLBACK];
}
