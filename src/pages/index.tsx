import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import { cn } from '@site/src/utils/cn';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <header className={cn()}></header>;
}

export default function HomePage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
