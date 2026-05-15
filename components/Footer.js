import Link from 'next/link';
import { footerSections } from '../lib/navConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Link href="/">
                <span className="logo-dev">हिंदी</span>
                <span className="logo-mark">Font Style</span>
              </Link>
            </div>
            <p className="footer-tagline">
              Create stunning Hindi typography with 200+ free fonts and live preview generator.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {footerSections.map((section) => (
              <div className="footer-nav-section" key={section.title}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="copy">
            &copy; 2026 Hindi Font Style · hindifontstyle.site · All rights reserved.
          </p>
          <p className="disclaimer">
            All fonts are provided for educational and design purposes. Please respect font licenses
            for commercial use.
          </p>
        </div>
      </div>
    </footer>
  );
}
