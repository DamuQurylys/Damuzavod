// src/pages/_app.tsx
import '@/styles/globals.css'; // Tailwind и глобальные стили
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
