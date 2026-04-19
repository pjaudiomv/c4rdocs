import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SOURCE_REPO = 'https://github.com/code4recovery/12-step-meeting-list';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '12 Step Meeting List Knowledge Base',
  tagline: 'Community Q&A for the 12 Step Meeting List WordPress plugin',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://c4rdocs.pjbuilds.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pjaudiomv', // Usually your GitHub org/user name.
  projectName: 'c4r-docs', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Parse .md files as CommonMark and only .mdx as MDX. The auto-generated
  // FAQ pages contain user text that can look like JSX expressions (e.g. `{#id}`)
  // which MDX's acorn parser chokes on.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // The FAQ/recipe pages are auto-generated — no point sending users to edit them here.
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: 'en',
        docsRouteBasePath: '/docs',
        searchResultLimits: 12,
        searchResultContextMaxLength: 80,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '12 Step Meeting List KB',
      logo: {
        alt: 'Code For Recovery Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          to: '/docs/top-questions',
          label: 'Top Questions',
          position: 'left',
        },
        {
          to: '/docs/category/code-recipes',
          label: 'Code Recipes',
          position: 'left',
        },
        {
          href: SOURCE_REPO,
          label: 'Plugin on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge Base',
          items: [
            { label: 'Welcome', to: '/docs/intro' },
            { label: 'Top Questions', to: '/docs/top-questions' },
            { label: 'Code Recipes', to: '/docs/category/code-recipes' },
            { label: 'Sources & Credits', to: '/docs/sources' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Code4Recovery', href: 'https://code4recovery.org/' },
            { label: 'Discussions', href: `${SOURCE_REPO}/discussions` },
            { label: 'Issues', href: `${SOURCE_REPO}/issues` },
          ],
        },
        {
          title: 'Plugin',
          items: [
            { label: 'Source on GitHub', href: SOURCE_REPO },
            { label: 'WordPress.org Page', href: 'https://wordpress.org/plugins/12-step-meeting-list/' },
          ],
        },
      ],
      copyright: `Content © contributors to ${SOURCE_REPO}. This archive is licensed under GPL v2+.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
