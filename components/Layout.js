import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';
import ShareModal from './ShareModal';
import QuickCharMap from './QuickCharMap';
import CookieConsent from './CookieConsent';

/**
 * Layout wraps every page with shared header/footer/modals and
 * sets page-level body attributes (data-page / data-topic / data-logic)
 * required by the original /public/js/font-generator.js logic.
 */
export default function Layout({
  children,
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://hindifontstyle.site/assets/images/hero-home.webp',
  dataPage,
  dataTopic,
  dataLogic,
  extraScripts = [],
  jsonLd,
}) {
  const router = useRouter();
  const [sideNavOpen, setSideNavOpen] = useState(false);

  // Set body data attributes (the original font-generator.js reads them)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (dataPage) body.setAttribute('data-page', dataPage);
    else body.removeAttribute('data-page');
    if (dataTopic) body.setAttribute('data-topic', dataTopic);
    else body.removeAttribute('data-topic');
    if (dataLogic) body.setAttribute('data-logic', dataLogic);
    else body.removeAttribute('data-logic');

    // Re-initialize legacy scripts now that DOM and attributes are ready
    if (typeof window !== 'undefined' && typeof window.__hfsInitAll === 'function') {
      window.__hfsInitAll();
    }
  }, [dataPage, dataTopic, dataLogic, router.pathname]);

  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.shareSite = async () => {
        const data = {
          title: document.title,
          text: document.querySelector('meta[name="description"]')?.content || document.title,
          url: window.location.href
        };
        if (navigator.share && navigator.canShare && navigator.canShare(data)) {
          try { await navigator.share(data); return; }
          catch (err) { if (err && err.name === 'AbortError') return; }
        }
        setShareModalOpen(true);
      };
    }
  }, []);

  // Close side nav on route change
  useEffect(() => {
    const handle = () => setSideNavOpen(false);
    router.events.on('routeChangeStart', handle);
    return () => router.events.off('routeChangeStart', handle);
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content="Hindi Font Style" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF9933" />
        {canonical && <link rel="canonical" href={canonical} />}

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hindi Font Style" />
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        {canonical && <meta property="og:url" content={canonical} />}
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={ogImage} />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;800&display=swap"
        />


        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>

      {/* Apply saved theme as early as possible to avoid flash */}
      <Script id="theme-init" strategy="beforeInteractive">
        {`(function(){try{var t=localStorage.getItem('hfs_theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){}})();`}
      </Script>

      <Header onOpenNav={() => setSideNavOpen(true)} />
      <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />

      <main>{children}</main>

      <Footer />

      <button
        className="fab-share"
        id="shareFab"
        aria-label="Share this site"
        title="Share this site"
        type="button"
        onClick={() => window.shareSite && window.shareSite()}
      >
        <i className="fas fa-share-alt"></i>
      </button>
      <button
        className="fab-keyboard"
        id="keyboardFab"
        aria-label="Quick character map"
        title="Quick character map"
        type="button"
      >
        <i className="fas fa-keyboard"></i>
      </button>

      <ShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
      <QuickCharMap />
      <CookieConsent />

      {/* html2canvas required for PNG / Transparent PNG download */}
      <Script src="/vendor/html2canvas/html2canvas.min.js" strategy="afterInteractive" />

      {/* Page-specific scripts (e.g. font-generator.js or kruti-to-mangal.js) */}
      {extraScripts.map((src) => (
        <Script
          key={src}
          src={src}
          strategy="afterInteractive"
        />
      ))}
    </>
  );
}
