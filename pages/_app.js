import '../styles/styles.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Re-run page-script setup on every client-side route change so
  // dynamic content (font cards, character maps, share modal, etc.)
  // is rebuilt for the new page.


  return <Component {...pageProps} />;
}
