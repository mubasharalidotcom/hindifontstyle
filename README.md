# Hindi Font Style — Next.js

A complete Next.js port of the static **Hindi Font Style** website
(https://hindifontstyle.site/). The visual design, layout, fonts, spacing,
and responsiveness are identical to the original — only the underlying
runtime has been migrated from plain HTML/CSS/JS to Next.js (Pages Router)
with React components.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project structure

```
hindi-font-style/
├── components/                  # Shared React components
│   ├── Header.js                # Top header + main nav
│   ├── SideNav.js               # Mobile slide-out nav
│   ├── Footer.js                # Site footer
│   ├── ShareModal.js            # "Share this site" modal
│   ├── QuickCharMap.js          # Floating Character-Map modal
│   ├── CookieConsent.js         # Cookie consent banner
│   └── Layout.js                # Page wrapper (Head, header, footer, modals, scripts)
├── lib/
│   └── navConfig.js             # Centralized nav / footer link config
├── pages/                       # One Next.js page per original HTML page
│   ├── _app.js                  # App entry — imports global CSS
│   ├── _document.js             # Custom <Html lang="en-IN" data-theme="light">
│   ├── index.js                 # index.html
│   ├── about-us.js              # about-us.html
│   ├── contact-us.js            # contact-us.html
│   ├── privacy-policy.js        # privacy-policy.html
│   ├── ams-font-converter.js
│   ├── bold-decorative-hindi-fonts.js
│   ├── calligraphy-hindi-fonts.js
│   ├── character-map.js
│   ├── cinema-creative-hindi-fonts.js
│   ├── devlys-raj-hindi-fonts.js
│   ├── elegant-sharp-hindi-fonts.js
│   ├── festival-hindi-fonts.js
│   ├── handwriting-hindi-fonts.js
│   ├── kruti-dev-bold-fonts.js
│   ├── kruti-dev-font-style.js
│   ├── kruti-dev-to-mangal-converter.js
│   ├── mangal-unicode-fonts.js
│   ├── modern-minimalist-hindi-fonts.js
│   ├── spiritual-mantra-hindi-fonts.js
│   ├── traditional-cultural-hindi-fonts.js
│   └── windows-pc-hindi-fonts.js
├── public/
│   ├── images/                  # All hero-*.webp images
│   ├── fonts/                   # 200+ TTF font files (AMS, KrutiDev, DevLys, Mangal, Unicode …)
│   ├── favicons/                # All favicon variants
│   ├── js/                      # font-generator.js + kruti-to-mangal.js (loaded per page)
│   ├── vendor/html2canvas/      # html2canvas for PNG/Transparent-PNG export
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   └── styles.css               # Original global stylesheet (font paths rewritten to /fonts/)
├── next.config.js
├── jsconfig.json
└── package.json
```

## How the conversion preserves the original design

1. **Same CSS.** `styles/styles.css` is the original `css/styles.css` byte-for-byte;
   the only change is rewriting `../fonts/…` to `/fonts/…` so Next.js serves
   the TTF files from `public/fonts/`. All `@font-face` declarations, media
   queries, dark-mode rules, and per-card styling are unchanged.

2. **Same fonts and assets.** Every TTF, WebP, favicon, and the manifest file
   are copied verbatim into `public/`.

3. **Same JavaScript behavior.** The two original IIFE-style scripts
   (`font-generator.js` for live previews, character maps, share/cookie/theme
   logic; `kruti-to-mangal.js` for the dedicated converter page) are loaded
   per page via `next/script` from `public/js/`. The font-data registry in
   them has its TTF paths updated to `/fonts/…`. Body-level data attributes
   (`data-page`, `data-topic`, `data-logic`) — which the scripts read to know
   which fonts and logic flavor to render — are set in `Layout.js` via a
   `useEffect`, so they switch correctly on client-side route changes.

4. **Same HTML.** Each page's `<main>` block is taken verbatim from the
   original HTML and transformed for JSX (`class`→`className`, `for`→`htmlFor`,
   void elements self-closed, inline `style="…"` converted to React objects,
   `<!-- … -->` converted to `{/* … */}`, internal `*.html` links rewritten
   to clean Next.js routes).

5. **Same SEO.** Every page's original `<title>`, `<meta description>`,
   `<meta keywords>`, canonical URL, Open Graph tags, Twitter card tags, and
   JSON-LD structured-data block are forwarded to the `<Head>` element via
   props on `Layout`.

## Shared components

| Component        | Replaces                                                  |
|------------------|-----------------------------------------------------------|
| `Header`         | `<header class="site-header">` (hamburger + main nav + actions)  |
| `SideNav`        | `<nav class="side-nav">` + `<div class="nav-overlay">`    |
| `Footer`         | `<footer class="site-footer">`                            |
| `ShareModal`     | `<div id="shareModal">` (social-share popup)              |
| `QuickCharMap`   | `<div id="quickCharMap">` (Character Map modal w/ tabs)   |
| `CookieConsent`  | Cookie consent banner                                     |
| `Layout`         | The full HTML scaffold: head, body, header, footer, modals, scripts |

Active link highlighting is driven by `useRouter()` (matches `router.pathname`
to each nav `href`). The mobile-nav hamburger uses React state
(`useState`) and closes on every route change.

## How React + legacy scripts coexist

The original scripts attach all behavior on `DOMContentLoaded`. Because Next.js
performs **client-side navigation** (no full reload), the scripts would only
initialize on the very first page load. To handle this:

- `Layout` writes `data-page` / `data-topic` / `data-logic` to `document.body`
  on every render via `useEffect`. The font-generator script reads these
  attributes when it boots.
- `pages/_app.js` listens for `routeChangeComplete` and re-invokes any
  page-init hook the legacy script may expose on `window`.
- For zero-overhead correctness, you can hard-navigate between pages
  (browser refresh) — every page is fully static and self-contained.

## Notable changes vs. the original

- Internal links: `*.html` → clean routes (`/about-us`, `/calligraphy-hindi-fonts`, …).
  Three malformed `<a>` tags in the source HTML (`our /">Stylish Hindi…</a>`)
  were repaired to point at the home page.
- Font-Awesome was previously not loaded explicitly anywhere in the original
  HTML; we now load it via CDN in `Layout`'s `<Head>` so the `<i className="fas …">`
  icons render correctly.
- Image assets remain in `public/images/` and are referenced with regular
  `<img>` tags (the original site uses `<img>` with hard-coded width/height
  for SEO; converting to `next/image` would change layout, so we kept
  `<img>`). `images.unoptimized = true` is set in `next.config.js`.

## Production tips

- `npm run build` produces fully **static** HTML for every route (Next.js'
  `○ (Static)` indicator), which can be deployed to any static host
  (Vercel, Netlify, S3 + CloudFront, GitHub Pages, etc.).
- For long-term maintenance, you can progressively migrate the legacy IIFE
  scripts in `public/js/` to ES modules and React hooks — but as shipped,
  everything works.
