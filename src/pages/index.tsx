import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Feature({title, href, blurb}: {title: string; href: string; blurb: string}) {
  return (
    <Link to={href} className={styles.card}>
      <h3>{title}</h3>
      <p>{blurb}</p>
    </Link>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline as string}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.sub}>
            Every question and answer from the
            {' '}
            <a href="https://github.com/code4recovery/12-step-meeting-list/discussions">discussions</a>
            {' '}and{' '}
            <a href="https://github.com/code4recovery/12-step-meeting-list/issues">issues</a>
            {' '}on GitHub — curated, deduplicated, and searchable.
          </p>
          <div className={styles.ctas}>
            <Link to="/docs/intro" className="button button--primary button--lg">Start here</Link>
            <Link to="/docs/top-questions" className="button button--secondary button--lg">Top questions</Link>
            <Link to="/docs/category/code-recipes" className="button button--secondary button--lg">Code recipes</Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Feature
            title="Browse by category"
            href="/docs/category/faq"
            blurb="Questions grouped by topic: meetings, imports, shortcodes, TSML UI, maps, styling, and more."
          />
          <Feature
            title="Search everything"
            href="/search"
            blurb="Hit ⌘K (Ctrl+K) from any page to search questions and answers instantly — no server round-trip."
          />
          <Feature
            title="Go to the source"
            href="/docs/sources"
            blurb="Every page links back to its original GitHub thread. Follow the chain, thank the author, keep the conversation going."
          />
        </div>
      </main>
    </Layout>
  );
}
