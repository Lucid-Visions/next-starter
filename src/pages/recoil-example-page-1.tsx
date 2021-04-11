import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Input from '../components/recoil-example/input';

const RecoilExamplePage1 = (): ReactElement => {
  const router = useRouter();

  return (
    <Layout title="About | Next.js + TypeScript Example" pathname={router.pathname}>
      <h1>Recoil Example</h1>
      <div className="flex space-x-4">
        <Input />
        <button className="px-2 border text-sm" onClick={() => router.push('/recoil-example-page-2')}>
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default RecoilExamplePage1;
