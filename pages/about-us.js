import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout
      title="About Us – Hindi Font Style"
      description="About Hindi Font Style — the team behind the free Hindi font generator, our mission and our typography philosophy."
      keywords="about hindi font style, hindi font team"
      canonical="https://hindifontstyle.site/about-us"
      ogImage="https://hindifontstyle.site/assets/images/hero-about.webp"
      dataPage="util"
      dataLogic="UTIL"
      extraScripts={['/js/font-generator.js']}
      jsonLd={{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://hindifontstyle.site/#organization", "name": "Hindi Font Style", "url": "https://hindifontstyle.site/", "logo": {"@type": "ImageObject", "url": "https://hindifontstyle.site/favicons/apple-touch-icon.png", "width": 180, "height": 180}}, {"@type": "WebSite", "@id": "https://hindifontstyle.site/#website", "url": "https://hindifontstyle.site/", "name": "Hindi Font Style", "description": "Free Hindi font style generator with 200+ stylish & calligraphy Hindi fonts.", "inLanguage": "en-IN", "publisher": {"@id": "https://hindifontstyle.site/#organization"}, "potentialAction": {"@type": "SearchAction", "target": "https://hindifontstyle.site/?q={search_term_string}", "query-input": "required name=search_term_string"}}, {"@type": "WebPage", "@id": "https://hindifontstyle.site/about-us.html#webpage", "url": "https://hindifontstyle.site/about-us.html", "name": "About Us \u2013 Hindi Font Style", "description": "About Hindi Font Style \u2014 the team behind the free Hindi font generator, our mission and our typography philosophy.", "isPartOf": {"@id": "https://hindifontstyle.site/#website"}, "inLanguage": "en-IN", "primaryImageOfPage": {"@type": "ImageObject", "url": "https://hindifontstyle.site/assets/images/hero-about.webp"}}, {"@type": "SoftwareApplication", "name": "About Us \u2013 Hindi Font Style", "url": "https://hindifontstyle.site/about-us.html", "applicationCategory": "DesignApplication", "operatingSystem": "All", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}, "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1240"}}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://hindifontstyle.site/"}, {"@type": "ListItem", "position": 2, "name": "About Us \u2013 Hindi Font Style", "item": "https://hindifontstyle.site/about-us.html"}]}]}}
    >

    <section className="hero">
      <div className="container">
        <h1>About Hindi Font Style</h1>
        <p>We make beautiful Devanagari typography free for every designer, student and creator.</p>
      </div>
    </section>


    <article className="container">
      <section className="article-section">
        <div className="feature-image-wrapper">
          <img src="/images/hero-about.webp" alt="About Hindi Font Style" width="1200" height="630" loading="lazy" />
        </div>
        <p>Welcome to <strong>Hindi Font Style</strong> (hindifontstyle.site) — the premier destination for high-quality, free, and accessible Devanagari typography. We are dedicated to providing an expansive library of Hindi typefaces, curated specifically for modern designers, content creators, students, and typing professionals.</p>
        
        <h2>Our Mission</h2>
        <p>Our core mission is to bridge the gap between traditional Indian typography and modern web design. We believe that beautiful Devanagari typography should be <strong>free, highly accessible, and just one click away</strong> for everyone.</p>
        
        <h2>What We Offer</h2>
        <p>We provide a robust suite of tools and a comprehensive library consisting of over 200+ meticulously categorized Hindi fonts:</p>
        <ul>
          <li><strong>Calligraphy & Stylish Fonts:</strong> 100+ AMS calligraphy typefaces featuring live previews, customizable size and color controls, and instant download options.</li>
          <li><strong>Professional Typing Fonts:</strong> Standard legacy fonts including Kruti Dev, DevLys, Raj, and Shivaji, perfect for DTP, MS Word, and government typing tests.</li>
          <li><strong>Modern Web Typography:</strong> Unicode standards like Mangal, Aparajita, Kokila, and Google's Noto Devanagari series designed for flawless digital rendering.</li>
          <li><strong>Smart Converters:</strong> High-accuracy Kruti Dev to Mangal Unicode converters and comprehensive AMS text conversion utilities.</li>
          <li><strong>Advanced Character Maps:</strong> An interactive, tabbed mapping system to easily discover and copy complex Hindi characters, matras, and unique symbols.</li>
        </ul>
        
        <h2>Our Commitment to Quality & Licensing</h2>
        <p>We take licensing seriously. Every typeface hosted on Hindi Font Style is thoroughly vetted. We exclusively provide Open Font License (OFL) Google Webfonts, widely circulated public-domain legacy fonts, and system-bundled Indic typefaces. We strictly prohibit the distribution of pirated commercial fonts, ensuring a safe and legally sound resource for the creative community.</p>
        
        <h2>Connect With Us</h2>
        <p>We are constantly evolving and love collaborating with our community. Whether you have a specific font request, a suggestion for a new feature, or a partnership inquiry, we are always eager to hear from you. Please visit our <a href="/contact-us">Contact Us</a> page to get in touch.</p>
      </section>
    </article>
  
    </Layout>
  );
}
