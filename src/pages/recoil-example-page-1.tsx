import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Input from '../components/recoil-example/input';

const RecoilExamplePage1 = (): ReactElement => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Recoil Example</h1>

    <Input />
    <Link href="/recoil-example-page-2">Click to go to next page</Link>
  </Layout>
);

export default RecoilExamplePage1;
