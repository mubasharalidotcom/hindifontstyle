import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout
      title="Contact Us – Hindi Font Style"
      description="Contact Hindi Font Style for font requests, partnerships, ad placements and feedback. We reply within 48 hours."
      keywords="contact hindi font style, font requests"
      canonical="https://hindifontstyle.site/contact-us"
      ogImage="https://hindifontstyle.site/assets/images/hero-contact.webp"
      dataPage="util"
      dataLogic="UTIL"
      extraScripts={['/js/font-generator.js']}
      jsonLd={{"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://hindifontstyle.site/#organization", "name": "Hindi Font Style", "url": "https://hindifontstyle.site/", "logo": {"@type": "ImageObject", "url": "https://hindifontstyle.site/favicons/apple-touch-icon.png", "width": 180, "height": 180}}, {"@type": "WebSite", "@id": "https://hindifontstyle.site/#website", "url": "https://hindifontstyle.site/", "name": "Hindi Font Style", "description": "Free Hindi font style generator with 200+ stylish & calligraphy Hindi fonts.", "inLanguage": "en-IN", "publisher": {"@id": "https://hindifontstyle.site/#organization"}, "potentialAction": {"@type": "SearchAction", "target": "https://hindifontstyle.site/?q={search_term_string}", "query-input": "required name=search_term_string"}}, {"@type": "WebPage", "@id": "https://hindifontstyle.site/contact-us.html#webpage", "url": "https://hindifontstyle.site/contact-us.html", "name": "Contact Us \u2013 Hindi Font Style", "description": "Contact Hindi Font Style for font requests, partnerships, ad placements and feedback. We reply within 48 hours.", "isPartOf": {"@id": "https://hindifontstyle.site/#website"}, "inLanguage": "en-IN", "primaryImageOfPage": {"@type": "ImageObject", "url": "https://hindifontstyle.site/assets/images/hero-contact.webp"}}, {"@type": "SoftwareApplication", "name": "Contact Us \u2013 Hindi Font Style", "url": "https://hindifontstyle.site/contact-us.html", "applicationCategory": "DesignApplication", "operatingSystem": "All", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}, "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1240"}}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://hindifontstyle.site/"}, {"@type": "ListItem", "position": 2, "name": "Contact Us \u2013 Hindi Font Style", "item": "https://hindifontstyle.site/contact-us.html"}]}]}}
    >

    <section className="hero">
      <div className="container">
        <h1>Contact Hindi Font Style</h1>
        <p>Got a font request, feedback or partnership idea? We'd love to hear from you.</p>
      </div>
    </section>


    <article className="container">
      <section className="article-section">
        <div className="feature-image-wrapper">
          <img src="/images/hero-contact.webp" alt="Contact Hindi Font Style" width="1200" height="630" loading="lazy" />
        </div>
        <p>At <strong>Hindi Font Style</strong>, we value our community of designers, typists, and creative professionals. Whether you have a question about a specific typeface, need assistance with our conversion tools, or wish to explore a business partnership, we are here to help. We strive to respond to all inquiries within 24 to 48 hours.</p>
        
        <h2>General Inquiries & Support</h2>
        <p>For general questions, technical support, or feedback on our website's functionality, please reach out to our primary support channel:</p>
        <p>📧 <strong>Email:</strong> <a href="mailto:hello@hindifontstyle.site">hello@hindifontstyle.site</a></p>
        
        <h2>Request a New Font</h2>
        <p>Can't find the specific Hindi font you're looking for? We regularly update our database based on user requests. To request a new typeface, please email us with the following details:</p>
        <ul>
          <li>The exact name of the font (e.g., "Kruti Dev 040" or "AMS Aakash").</li>
          <li>A sample image, screenshot, or a link demonstrating the font in use.</li>
          <li>The intended use case (e.g., DTP software, web design, or typing practice).</li>
        </ul>
        <p><em>Note: We only process requests for free, public-domain, or open-source fonts. Valid requests are typically fulfilled and added to our registry within one week.</em></p>
        
        <h2>Business, Advertising & Partnerships</h2>
        <p>If you are interested in advertising on our platform, sponsoring a font category, or discussing a co-marketing partnership, please direct your correspondence to our business relations team:</p>
        <p>💼 <strong>Business Email:</strong> <a href="mailto:partners@hindifontstyle.site">partners@hindifontstyle.site</a></p>
        
        <h2>Report an Issue or Copyright Concern</h2>
        <p>We respect intellectual property rights and strive to ensure all hosted fonts adhere to appropriate licensing. If you believe a typeface on our site infringes upon a valid copyright, or if you encounter a broken feature, please contact us immediately at <a href="mailto:hello@hindifontstyle.site">hello@hindifontstyle.site</a> with the relevant URLs and details.</p>
      </section>
    </article>
  
    </Layout>
  );
}
