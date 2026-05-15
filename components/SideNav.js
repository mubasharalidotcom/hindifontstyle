import Link from 'next/link';
import { useRouter } from 'next/router';
import { sideNavSections } from '../lib/navConfig';

export default function SideNav({ isOpen, onClose }) {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (href) => {
    if (href === '/') return currentPath === '/';
    return currentPath === href;
  };

  return (
    <>
      <nav
        className={`side-nav${isOpen ? ' open' : ''}`}
        id="sideNav"
        aria-label="Mobile navigation"
      >
        <div className="side-nav-header">
          <div className="logo">
            <Link href="/">
              <span className="logo-dev">हिंदी</span>{' '}
              <span className="logo-mark">Font Style</span>
            </Link>
          </div>
          <button
            id="navClose"
            className="icon-btn"
            aria-label="Close navigation"
            onClick={onClose}
            type="button"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {sideNavSections.map((section) => (
          <div key={section.label}>
            <div className="nav-section-label">{section.label}</div>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? 'active' : ''}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div
        className={`nav-overlay${isOpen ? ' show' : ''}`}
        id="navOverlay"
        onClick={onClose}
      ></div>
    </>
  );
}
