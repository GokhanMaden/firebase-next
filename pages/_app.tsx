import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

import Layout from '../components/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
