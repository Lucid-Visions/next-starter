import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Display from '../components/recoil-example/display';

const RecoilExamplePage2 = (): ReactElement => {
  const router = useRouter();

  return (
    <Layout title="About | Next.js + TypeScript Example" pathname={router.pathname}>
      <h1>Recoil Example</h1>

      <Display />
    </Layout>
  );
};

export default RecoilExamplePage2;
