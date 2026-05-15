export default function CookieConsent() {
  return (
    <div id="cookieConsent" className="cookie-consent" style={{ display: 'none' }}>
      <div className="cookie-content">
        <div className="cookie-text">
          <span className="cookie-emoji">🍪</span>
          <div className="cookie-message">
            <strong className="cookie-title">Do you like cookies? 🍪</strong>
            <p className="cookie-description">
              हम आपकी बेहतर अनुभव के लिए cookies का उपयोग करते हैं। जारी रखने से आप हमारी{' '}
              <a href="/privacy-policy" target="_blank" className="cookie-link">
                Privacy Policy
              </a>{' '}
              से सहमत हैं।
            </p>
          </div>
        </div>
        <div className="cookie-buttons">
          <button id="acceptCookies" className="btn-accept" type="button">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="btn-icon">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            Accept
          </button>
          <button id="rejectCookies" className="btn-reject" type="button">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="btn-icon">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
