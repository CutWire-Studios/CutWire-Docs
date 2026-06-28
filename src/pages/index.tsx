import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProductList from '@site/src/components/ProductList';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Docs"
      description="Documentation for CutWire Studios software — CutWire Prism and what comes next.">
      <main className={styles.main}>
        <div className="container">
          <header className={styles.pageHead}>
            <span className={styles.eyebrow}>CutWire Studios · Docs</span>
            <h1 className={styles.pageTitle}>{siteConfig.title}</h1>
            <p className={styles.pageLede}>
              Documentation for the software CutWire Studios builds. Pick a
              product to get started.
            </p>
          </header>
          <ProductList />
        </div>
      </main>
    </Layout>
  );
}
