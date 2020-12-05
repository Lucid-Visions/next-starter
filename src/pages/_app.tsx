/**
 *
 * Using custom `App` paradigm here to add in global tailwind import
 *
 */
import React, { ReactElement } from 'react';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
