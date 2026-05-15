import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout
      title="Hindi Character Map – Devanagari Unicode Reference"
      description="Complete Hindi character maps: Devanagari Unicode, AMS Roman, Kruti Dev mappings. Click any character to copy instantly."
      keywords="hindi character map, devanagari unicode chart, ams roman, kruti dev mapping"
      canonical="https://hindifontstyle.site/character-map"
      ogImage="https://hindifontstyle.site/assets/images/hero-charmap.webp"
      dataPage="util"
      dataLogic="UTIL"
      extraScripts={['/js/font-generator.js']}
      jsonLd={{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://hindifontstyle.site/#organization", "name": "Hindi Font Style", "url": "https://hindifontstyle.site/", "logo": {"@type": "ImageObject", "url": "https://hindifontstyle.site/favicons/apple-touch-icon.png", "width": 180, "height": 180}}, {"@type": "WebPage", "@id": "https://hindifontstyle.site/character-map.html#webpage", "url": "https://hindifontstyle.site/character-map.html", "name": "Hindi Character Map \u2013 Complete Devanagari Unicode Reference", "description": "Complete Hindi character maps: Devanagari Unicode, AMS Roman, Kruti Dev mappings. Click any character to copy instantly.", "inLanguage": "en-IN"}, {"@type": "SoftwareApplication", "name": "Hindi Character Map Tool", "url": "https://hindifontstyle.site/character-map.html", "applicationCategory": "DesignApplication", "operatingSystem": "All", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}}]}}
    >

    <section className="hero">
      <div className="container">
        <h1>Hindi Character Maps</h1>
        <p>Complete collection of Hindi characters, symbols, AMS & Kruti Dev mappings. Click any character to copy
          instantly.</p>
      </div>
    </section>

    <div className="container">

      {/* Character Map Tabs */}
      <div className="charmap-tabs">
        <button className="tab-btn active" data-tab="devanagari">
          <i className="fas fa-font"></i>
          <span>Devanagari</span>
          <small>अ आ इ ई</small>
        </button>
        <button className="tab-btn" data-tab="ams-mapping">
          <i className="fas fa-exchange-alt"></i>
          <span>AMS Roman</span>
          <small>अ → A</small>
        </button>
        <button className="tab-btn" data-tab="kruti-mapping">
          <i className="fas fa-keyboard"></i>
          <span>Kruti Dev</span>
          <small>अ → v</small>
        </button>
        <button className="tab-btn" data-tab="symbols">
          <i className="fas fa-icons"></i>
          <span>Symbols</span>
          <small>₹ © ® ™</small>
        </button>
        <button className="tab-btn" data-tab="punctuation">
          <i className="fas fa-quote-left"></i>
          <span>Punctuation</span>
          <small>। ॥ ॐ ऽ</small>
        </button>
        <button className="tab-btn" data-tab="numbers">
          <i className="fas fa-hashtag"></i>
          <span>Numbers</span>
          <small>० १ २ ३</small>
        </button>
        <button className="tab-btn" data-tab="arrows">
          <i className="fas fa-arrows-alt"></i>
          <span>Arrows</span>
          <small>← → ↑ ↓</small>
        </button>
        <button className="tab-btn" data-tab="math">
          <i className="fas fa-calculator"></i>
          <span>Math</span>
          <small>+ − × ÷</small>
        </button>
      </div>

      {/* Character Map Content */}
      <div className="charmap-content">

        {/* Devanagari Tab */}
        <div className="tab-content active" id="devanagari">
          <div className="map-section">
            <h3>Independent Vowels (स्वर)</h3>
            <div className="charmap-grid" id="vowels"></div>
          </div>
          <div className="map-section">
            <h3>Consonants (व्यंजन)</h3>
            <div className="charmap-grid" id="consonants"></div>
          </div>
          <div className="map-section">
            <h3>Vowel Signs / Matras (मात्राएँ)</h3>
            <div className="charmap-grid" id="matras"></div>
          </div>
          <div className="map-section">
            <h3>Combining Marks</h3>
            <div className="charmap-grid" id="combining"></div>
          </div>
        </div>

        {/* AMS Mapping Tab */}
        <div className="tab-content" id="ams-mapping">
          <div className="map-section">
            <h3>AMS Roman Mapping (Hindi → English Keys)</h3>
            <p>AMS fonts use this mapping. Click any character to copy the Hindi letter.</p>
            <div className="mapping-grid" id="ams-vowels"></div>
          </div>
          <div className="map-section">
            <h3>AMS Consonant Mapping</h3>
            <div className="mapping-grid" id="ams-consonants"></div>
          </div>
          <div className="map-section">
            <h3>AMS Matra Mapping</h3>
            <div className="mapping-grid" id="ams-matras"></div>
          </div>
        </div>

        {/* Kruti Dev Mapping Tab */}
        <div className="tab-content" id="kruti-mapping">
          <div className="map-section">
            <h3>Kruti Dev Mapping (Hindi → Remington Keys)</h3>
            <p>Kruti Dev fonts use this mapping. Click any character to copy the Hindi letter.</p>
            <div className="mapping-grid" id="kruti-vowels"></div>
          </div>
          <div className="map-section">
            <h3>Kruti Dev Consonant Mapping</h3>
            <div className="mapping-grid" id="kruti-consonants"></div>
          </div>
          <div className="map-section">
            <h3>Kruti Dev Matra Mapping</h3>
            <div className="mapping-grid" id="kruti-matras"></div>
          </div>
        </div>

        {/* Symbols Tab */}
        <div className="tab-content" id="symbols">
          <div className="map-section">
            <h3>Currency Symbols</h3>
            <div className="charmap-grid" id="currency"></div>
          </div>
          <div className="map-section">
            <h3>Common Symbols</h3>
            <div className="charmap-grid" id="common-symbols"></div>
          </div>
          <div className="map-section">
            <h3>Religious & Cultural</h3>
            <div className="charmap-grid" id="religious"></div>
          </div>
        </div>

        {/* Punctuation Tab */}
        <div className="tab-content" id="punctuation">
          <div className="map-section">
            <h3>Hindi Punctuation</h3>
            <div className="charmap-grid" id="hindi-punct"></div>
          </div>
          <div className="map-section">
            <h3>General Punctuation</h3>
            <div className="charmap-grid" id="general-punct"></div>
          </div>
          <div className="map-section">
            <h3>Quotation Marks</h3>
            <div className="charmap-grid" id="quotes"></div>
          </div>
        </div>

        {/* Numbers Tab */}
        <div className="tab-content" id="numbers">
          <div className="map-section">
            <h3>Devanagari Digits</h3>
            <div className="charmap-grid" id="hindi-digits"></div>
          </div>
          <div className="map-section">
            <h3>ASCII Digits</h3>
            <div className="charmap-grid" id="ascii-digits"></div>
          </div>
          <div className="map-section">
            <h3>Fractions</h3>
            <div className="charmap-grid" id="fractions"></div>
          </div>
        </div>

        {/* Arrows Tab */}
        <div className="tab-content" id="arrows">
          <div className="map-section">
            <h3>Basic Arrows</h3>
            <div className="charmap-grid" id="basic-arrows"></div>
          </div>
          <div className="map-section">
            <h3>Double Arrows</h3>
            <div className="charmap-grid" id="double-arrows"></div>
          </div>
          <div className="map-section">
            <h3>Curved Arrows</h3>
            <div className="charmap-grid" id="curved-arrows"></div>
          </div>
        </div>

        {/* Math Tab */}
        <div className="tab-content" id="math">
          <div className="map-section">
            <h3>Basic Operations</h3>
            <div className="charmap-grid" id="math-basic"></div>
          </div>
          <div className="map-section">
            <h3>Comparison</h3>
            <div className="charmap-grid" id="math-comparison"></div>
          </div>
          <div className="map-section">
            <h3>Advanced Math</h3>
            <div className="charmap-grid" id="math-advanced"></div>
          </div>
        </div>

      </div>
    </div>

    <article className="container">
      <section className="article-section">
        <div className="feature-image-wrapper">
          <img src="/images/hero-charmap.webp"
            alt="Hindi character map interface illustration, AMS Roman mapping, Kruti Dev keys, Devanagari letters grid"
            width="1200" height="630" loading="lazy" />
        </div>
        <div className="entity-chips" aria-label="Related entities">
          <span>hindi character map</span><span>devanagari unicode</span><span>ams roman mapping</span><span>kruti dev
            keys</span><span>unicode reference</span>
        </div>

        <p>Our comprehensive <strong>Hindi Character Map</strong> now includes <strong>AMS Roman</strong> and
          <strong>Kruti Dev</strong> keyboard mappings alongside the complete Devanagari Unicode collection. Perfect for
          developers, designers, and typists working with Hindi fonts and legacy text conversion.
        </p>

        <h2>Character Map Categories</h2>
        <ul>
          <li><strong>Devanagari:</strong> Complete Unicode block (U+0900-U+097F) including vowels, consonants, and
            combining marks</li>
          <li><strong>AMS Roman:</strong> Shows how Hindi characters map to English keys in AMS fonts (अ → A, आ → Aa)
          </li>
          <li><strong>Kruti Dev:</strong> Displays Remington/Typewriter key mappings used in Kruti Dev fonts (अ → v, आ →
            vk)</li>
          <li><strong>Symbols:</strong> Currency symbols (₹), copyright marks, trademarks, and cultural symbols</li>
          <li><strong>Punctuation:</strong> Hindi-specific punctuation (।॥) and international marks</li>
          <li><strong>Numbers:</strong> Both Devanagari digits (०१२) and ASCII numbers</li>
          <li><strong>Arrows & Math:</strong> Directional indicators and mathematical operators</li>
        </ul>

        <h2>Understanding Font Mappings</h2>
        <p><strong>AMS Roman</strong> fonts map Hindi characters to logical English equivalents (अ = A, क = k).
          <strong>Kruti Dev</strong> uses the traditional Remington typewriter layout where key positions matter more
          than logic (अ = v, क = d). Use our mapping tables to understand how text converts between these systems.
        </p>

        <section className="paa-section">
          <h2>FAQs about Font Mappings</h2>

          <h3>What's the difference between AMS and Kruti Dev mappings?</h3>
          <p>AMS Roman uses intuitive mappings (अ → A, आ → Aa) while Kruti Dev follows the traditional Remington
            typewriter layout (अ → v, आ → vk). AMS is easier for English speakers to learn, but Kruti Dev is more widely
            used in India.</p>

          <h3>Can I convert between AMS and Kruti Dev text?</h3>
          <p>Yes! Use our <a href="/ams-font-converter">AMS Font Converter</a> to convert Hindi text to AMS Roman
            format, or our <a href="/kruti-dev-to-mangal-converter">Kruti Dev to Mangal Converter</a> for legacy
            text conversion to Unicode.</p>

          <h3>Which mapping should I use for new projects?</h3>
          <p>For new projects, we recommend Unicode (Mangal, Noto Sans Devanagari) as it's universally supported. Use
            AMS or Kruti Dev only when working with existing documents or when specific stylistic fonts require them.
          </p>
        </section>
      </section>
    </article>
  
    </Layout>
  );
}
