import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout
      title="DevLys 010 Font Download – Raj & Shivaji Hindi Free"
      description="Free DevLys 010 / 240 font download plus Raj 01, Raj 23, Shivaji 01 and 02 Hindi typing styles."
      keywords="devlys 010 font download, devlys 240, raj 01, shivaji 01, hindi typing font"
      canonical="https://hindifontstyle.site/devlys-raj-hindi-fonts"
      ogImage="https://hindifontstyle.site/assets/images/hero-devlys.webp"
      dataPage="kd3"
      dataTopic="devlys"
      dataLogic="KRUTIDEV"
      extraScripts={['/js/font-generator.js']}
      jsonLd={{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://hindifontstyle.site/#organization", "name": "Hindi Font Style", "url": "https://hindifontstyle.site/", "logo": {"@type": "ImageObject", "url": "https://hindifontstyle.site/favicons/apple-touch-icon.png", "width": 180, "height": 180}}, {"@type": "WebSite", "@id": "https://hindifontstyle.site/#website", "url": "https://hindifontstyle.site/", "name": "Hindi Font Style", "description": "Free Hindi font style generator with 200+ stylish & calligraphy Hindi fonts.", "inLanguage": "en-IN", "publisher": {"@id": "https://hindifontstyle.site/#organization"}, "potentialAction": {"@type": "SearchAction", "target": "https://hindifontstyle.site/?q={search_term_string}", "query-input": "required name=search_term_string"}}, {"@type": "WebPage", "@id": "https://hindifontstyle.site/devlys-raj-hindi-fonts.html#webpage", "url": "https://hindifontstyle.site/devlys-raj-hindi-fonts.html", "name": "DevLys 010 Font Download \u2013 Raj & Shivaji Hindi Free", "description": "Free DevLys 010 / 240 font download plus Raj 01, Raj 23, Shivaji 01 and 02 Hindi typing styles.", "isPartOf": {"@id": "https://hindifontstyle.site/#website"}, "inLanguage": "en-IN", "primaryImageOfPage": {"@type": "ImageObject", "url": "https://hindifontstyle.site/assets/images/hero-devlys.webp"}}, {"@type": "SoftwareApplication", "name": "DevLys, Raj & Shivaji Hindi Font Generator", "url": "https://hindifontstyle.site/devlys-raj-hindi-fonts.html", "applicationCategory": "DesignApplication", "operatingSystem": "All", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://hindifontstyle.site/"}, {"@type": "ListItem", "position": 2, "name": "Kruti Dev & Typing", "item": "https://hindifontstyle.site/#typing-fonts"}, {"@type": "ListItem", "position": 3, "name": "DevLys, Raj & Shivaji", "item": "https://hindifontstyle.site/devlys-raj-hindi-fonts.html"}]}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is DevLys 010 the same as Kruti Dev 010?", "acceptedAnswer": {"@type": "Answer", "text": "No, while both use the Remington keyboard layout, their character designs are slightly different. DevLys often appears cleaner and slightly wider than Kruti Dev. However, if you know how to type in Kruti Dev, you can type in DevLys without learning a new layout."}}, {"@type": "Question", "name": "Which font is used in court typing?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on the specific court or state. Many courts use DevLys 010 or Shivaji 01. Always check the official notification of the exam or office before practicing."}}, {"@type": "Question", "name": "How to convert DevLys text to Mangal?", "acceptedAnswer": {"@type": "Answer", "text": "DevLys is a legacy font, so it won't display correctly on the web. You can use our Free Font Converter Tool to instantly convert your DevLys text into Mangal Unicode."}}]}]}}
    >

    <section className="hero">
      <div className="container">
        <h1>DevLys, Raj & Shivaji Hindi Fonts</h1>
        <p>DevLys 010 / 240, Raj 01 / 23 and Shivaji 01 / 02 — the classic Remington-keyboard Hindi family.</p>
      </div>
    </section>

    <div className="container">
      <section className="tool-card" aria-label="Live Hindi font generator">
        <textarea id="inputText" rows="2"
          placeholder="Type your text in English or Hindi & press space …" defaultValue="Mera bharat mahan"></textarea>
        <div className="controls">
          <div className="control-group">
            <label htmlFor="fontSize"><i className="fas fa-text-height"></i> Font Size: <span
                id="fontSizeValue">40</span>px</label>
            <input type="range" id="fontSize" min="20" max="180" defaultValue="40" />
          </div>
          <div className="control-group">
            <label htmlFor="fontColor"><i className="fas fa-palette"></i> Text Color</label>
            <input type="color" id="fontColor" defaultValue="#1a1a1a" />
          </div>
          <div className="control-group">
            <label htmlFor="bgColor"><i className="fas fa-fill-drip"></i> Background Color</label>
            <input type="color" id="bgColor" defaultValue="#ffffff" />
          </div>
        </div>
      </section>

      <section className="fonts-grid" id="previews" aria-live="polite"></section>
      <nav className="pagination" aria-label="Kruti Dev pagination">
        <span className="label">Kruti Dev:</span>
        <a href="/kruti-dev-bold-fonts" rel="prev"><i className="fas fa-chevron-left"></i> Prev</a>
        <a href="/kruti-dev-font-style">1</a>
        <a href="/kruti-dev-bold-fonts">2</a>
        <a href="/devlys-raj-hindi-fonts" className="active">3</a>
      </nav>
    </div>

    <article className="container">
      <section className="article-section">
        <div className="feature-image-wrapper">
          <img src="/images/hero-devlys.webp"
            alt="DevLys Raj Hindi font showcase, professional typing workspace, classic Hindi typography, software inspired educational design, clean modern layout"
            width="1200" height="630" loading="lazy" />
        </div>
        <div className="entity-chips" aria-label="Related entities">
          <span>devlys 010 font download</span><span>raj 01 font</span><span>shivaji 01 font</span><span>hindi court
            typing</span><span>legacy hindi font</span>
        </div>

        <p>While Kruti Dev is the most famous, it’s not the only legacy Hindi font out there. <strong>DevLys, Raj, and
            Shivaji fonts</strong> are the backbone of Hindi typing in many government offices, courts, and local
          printing presses across India. If you are applying for a clerical job, working in a legal court, or preparing
          for a state-level typing exam that specifically asks for <em>DevLys 010</em> or <em>Shivaji 01</em>, you can
          download and preview them all right here for free.</p>

        <h2>Where are DevLys & Raj Fonts Used?</h2>
        <p>These fonts use the same Remington keyboard layout as Kruti Dev but have slightly different character
          designs. Here’s where they are mandatory:</p>
        <ul>
          <li><strong>Court & Legal Documents:</strong> Many district courts and legal departments use DevLys or Raj
            fonts for typing affidavits and judgments.</li>
          <li><strong>State Government Exams:</strong> Some state-level clerical exams specify DevLys 010 or Shivaji 01
            instead of Kruti Dev for the typing test.</li>
          <li><strong>Local Printing Presses:</strong> Traditional printing shops often have DevLys installed as their
            default Hindi font for newspapers and books.</li>
        </ul>

        <h2>How to Type in DevLys & Shivaji Fonts</h2>
        <p>Since these are Remington-based fonts, the typing method is identical to Kruti Dev:</p>
        <ol>
          <li><strong>Download & Install:</strong> Click the "TTF" button below your required font (DevLys 010, Raj 01,
            etc.) and install it on your PC.</li>
          <li><strong>Set Keyboard Layout:</strong> Ensure your Windows keyboard is set to "Hindi Traditional" or use
            Google Input Tools with the Remington layout.</li>
          <li><strong>Select in MS Word:</strong> Open MS Word, choose the installed DevLys or Shivaji font, and start
            typing.</li>
          <li><strong>Need to Convert?</strong> If you need to send this text via email or web, convert it first using
            our <a href="/kruti-dev-to-mangal-converter">Kruti Dev to Mangal Converter</a>, as legacy fonts don't
            work on the internet.</li>
        </ol>

        <h2>Explore Related Typing Fonts</h2>
        <ul>
          <li>Need the standard exam font? Download <a href="/kruti-dev-font-style">Kruti Dev 010</a>.</li>
          <li>Want the modern web standard? See <a href="/mangal-unicode-fonts">Mangal Unicode Fonts</a>.</li>
          <li>Looking for bold official fonts? Check out <a href="/kruti-dev-bold-fonts">Kruti Dev Bold Fonts</a>.
          </li>
        </ul>

        <section className="paa-section">
          <h2>FAQs about DevLys, Raj & Shivaji Fonts</h2>
          <h3>Is DevLys 010 the same as Kruti Dev 010?</h3>
          <p>No, while both use the Remington keyboard layout, their character designs are slightly different. DevLys
            often appears cleaner and slightly wider than Kruti Dev. However, if you know how to type in Kruti Dev, you
            can type in DevLys without learning a new layout.</p>

          <h3>Which font is used in court typing?</h3>
          <p>It depends on the specific court or state. Many courts use <strong>DevLys 010</strong> or <strong>Shivaji
              01</strong>. Always check the official notification of the exam or office before practicing.</p>

          <h3>How to convert DevLys text to Mangal?</h3>
          <p>DevLys is a legacy font, so it won't display correctly on the web. You can use our <a
              href="/kruti-dev-to-mangal-converter">Free Font Converter Tool</a> to instantly convert your DevLys
            text into Mangal Unicode.</p>
        </section>
      </section>
    </article>
  
    </Layout>
  );
}
