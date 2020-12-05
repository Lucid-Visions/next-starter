import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = (): ReactElement => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <h2 className="text-purple-600">Some purple text to show tailwind works</h2>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
