import React, { ReactElement } from 'react';

import Layout from '../components/Layout';
import Display from '../components/recoil-example/display';

const RecoilExamplePage2 = (): ReactElement => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Recoil Example</h1>

    <Display />
  </Layout>
);

export default RecoilExamplePage2;
