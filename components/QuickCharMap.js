export default function QuickCharMap() {
  return (
    <div id="quickCharMap" role="dialog" aria-modal="true" aria-label="Quick character map">
      <div className="quick-modal-card">
        <div className="quick-modal-header">
          <h3>
            <i className="fas fa-keyboard"></i> Quick Character Map
          </h3>
          <button className="modal-close" aria-label="Close" type="button">
            &times;
          </button>
        </div>
        <div className="quick-modal-body">
          <div className="quick-tabs">
            <button className="quick-tab active" data-quick="ams-roman" type="button">AMS Roman</button>
            <button className="quick-tab" data-quick="kruti-dev" type="button">Kruti Dev</button>
            <button className="quick-tab" data-quick="vowels" type="button">Vowels</button>
            <button className="quick-tab" data-quick="consonants" type="button">Consonants</button>
            <button className="quick-tab" data-quick="matras" type="button">Matras</button>
            <button className="quick-tab" data-quick="combining" type="button">Combining</button>
            <button className="quick-tab" data-quick="currency" type="button">Currency</button>
            <button className="quick-tab" data-quick="common-symbols" type="button">Common</button>
            <button className="quick-tab" data-quick="religious" type="button">Religious</button>
            <button className="quick-tab" data-quick="hindi-punct" type="button">Hindi Punct</button>
            <button className="quick-tab" data-quick="general-punct" type="button">Gen Punct</button>
            <button className="quick-tab" data-quick="quotes" type="button">Quotes</button>
            <button className="quick-tab" data-quick="hindi-digits" type="button">Hindi Digits</button>
            <button className="quick-tab" data-quick="ascii-digits" type="button">ASCII Digits</button>
            <button className="quick-tab" data-quick="fractions" type="button">Fractions</button>
            <button className="quick-tab" data-quick="basic-arrows" type="button">Basic Arrows</button>
            <button className="quick-tab" data-quick="double-arrows" type="button">Double Arrows</button>
            <button className="quick-tab" data-quick="curved-arrows" type="button">Curved Arrows</button>
            <button className="quick-tab" data-quick="math-basic" type="button">Math Basic</button>
            <button className="quick-tab" data-quick="math-comparison" type="button">Math Compare</button>
            <button className="quick-tab" data-quick="math-advanced" type="button">Math Advanced</button>
          </div>
          <div className="quick-content">
            <div className="qcm-mapping-grid" id="quickAmsGrid"></div>
            <div className="qcm-mapping-grid" id="quickKrutiGrid" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickVowels" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickConsonants" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickMatras" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickCombining" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickCurrency" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickCommon-symbols" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickReligious" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickHindi-punct" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickGeneral-punct" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickQuotes" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickHindi-digits" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickAscii-digits" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickFractions" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickBasic-arrows" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickDouble-arrows" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickCurved-arrows" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickMath-basic" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickMath-comparison" style={{ display: 'none' }}></div>
            <div className="quick-grid" id="quickMath-advanced" style={{ display: 'none' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
