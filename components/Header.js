import Link from 'next/link';
import { useRouter } from 'next/router';
import { mainNavLinks, sideNavSections } from '../lib/navConfig';
import { useEffect, useState } from 'react';

export default function Header({ onOpenNav }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const t = document.documentElement.getAttribute('data-theme');
      if (t) setTheme(t);
    }
  }, []);

  const isActive = (href) => {
    if (href === '/') return currentPath === '/';
    return currentPath === href;
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    setTheme(next);
    try { localStorage.setItem('hfs_theme', next); } catch (e) {}
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Open navigation"
          onClick={onOpenNav}
          type="button"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="logo">
          <Link href="/" aria-label="Hindi Font Style — home">
            <span className="logo-dev">हिंदी</span>
            <span className="logo-mark">Font Style</span>
          </Link>
        </div>
        <nav className="main-nav" aria-label="Primary navigation">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            id="themeToggle"
            className="icon-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title="Toggle dark mode"
            type="button"
            onClick={toggleTheme}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <button
            id="shareSiteBtn"
            className="icon-btn"
            aria-label="Share this site"
            title="Share this site"
            type="button"
            onClick={() => window.shareSite && window.shareSite()}
          >
            <i className="fas fa-share-alt"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
