import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
    noFooter={true}
      title={`صفحه اصلی`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.hero__title}>مسعود معبودی</h1>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              شروع کنیم
            </Link>
          </div>
        </div>
      </header>
      <footer className={clsx('hero hero--primary', styles.heroFooter)}>
        <div className="container">
          <p className={styles.customHero__subtitle}>Massoud Maboudi - Datagir.ir © 2018</p>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
