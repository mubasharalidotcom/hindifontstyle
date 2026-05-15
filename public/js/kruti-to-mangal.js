/**
 * kruti-to-mangal.js
 * Standalone Kruti Dev → Mangal Unicode converter
 * Works independently — does NOT depend on font-generator.js
 */
(function() {
  'use strict';

  // ══════════════════════════════════════════════════════════
  // KRUTI DEV → UNICODE MAPPING TABLE
  // ══════════════════════════════════════════════════════════
  // Order: LONGEST sequences FIRST (greedy match)
  
  var MAP = {
    // ── 3-char sequences ────────────────────────────────────
    'vkS': 'औ',
    'vks': 'ओ',
    'vk¡': 'आँ',
    'vka': 'आं',

    // ── 2-char sequences: vowels ────────────────────────────
    'vk':  'आ',
    'va':  'अं',
    'bZ':  'ई',
    ',s':  'ऐ',

    // ── 2-char sequences: compound consonants ───────────────
    '[k':  'ख',
    '?k':  'घ',
    'Fk':  'थ',
    '.k':  'ण',
    'Hk':  'भ',
    '\'k': 'श',
    '"k':  'ष',

    // ── 2-char sequences: special ───────────────────────────
    'Jh':  'श्री',

    // ── 2-char sequences: nukta ─────────────────────────────
    '<+':  'ढ़',
    'd+':  'क़',
    '[+':  'ख़',
    'x+':  'ग़',
    't+':  'ज़',
    'Q+':  'फ़',

    // ── 2-char sequences: punctuation ───────────────────────
    '||':  '॥',

    // ── 1-char sequences: special conjuncts (Unicode chars) ─
    'Ø':   'क्र',
    'Ý':   'प्र',
    'Þ':   'भ्र',
    'ß':   'श्र',
    'Ü':   'त्र',
    'Û':   'ध्र',
    'Ú':   'द्र',
    'Ù':   'त्त',
    'Ñ':   'ज्ञ',
    'æ':   'त्त',
    'ç':   'त्थ',
    'é':   'द्ध',
    'ë':   'द्ध',
    'ê':   'द्ब',
    'ì':   'द्व',
    'í':   'द्य',
    'î':   'श्च',
    'ï':   'श्व',
    'ð':   'क्त',
    'ñ':   'श्न',
    'á':   'ह्म',
    'â':   'ह्य',
    'ã':   'ह्र',
    'ä':   'ह्ल',
    'à':   'ह्',
    '«':   'द्द',
    '»':   'द्ध',
    '¼':   '(',
    '½':   ')',
    '¾':   'द्व',
    'Ê':   'ट्ठ',
    'Ë':   'ठ्ठ',
    'Í':   'ण्ड',
    'Î':   'ण्ढ',
    'Ï':   'ट्ड',
    'Ð':   'ज्ज',
    'º':   'ह्न',
    '¶':   'फ्',

    // ── 1-char sequences: independent vowels ────────────────
    'v':   'अ',
    'b':   'इ',
    'm':   'उ',
    'Å':   'ऊ',
    '_':   'ऋ',
    ',':   'ए',

    // ── 1-char sequences: consonants ────────────────────────
    'd':   'क',
    'D':   'क्',
    'x':   'ग',
    'X':   'ग्',
    '³':   'ङ',
    'p':   'च',
    'P':   'च्',
    'N':   'छ',
    't':   'ज',
    'T':   'ज्',
    '>':   'झ',
    '¥':   'ञ',
    'V':   'ट',
    'B':   'ठ',
    'M':   'ड',
    'W':   'ड़',
    '<':   'ढ',
    'r':   'त',
    'R':   'त्',
    'n':   'द',
    'u':   'न',
    'U':   'न',
    'i':   'प',
    'I':   'प्',
    'Q':   'फ',
    'K':   'फ',
    'c':   'ब',
    'C':   'ब्',
    'e':   'म',
    'E':   'म्',
    ';':   'य',
    'j':   'र',
    'J':   'र्',
    'y':   'ल',
    'Y':   'ल्',
    'o':   'व',
    'O':   'व्',
    'l':   'स',
    'L':   'स्',
    'g':   'ह',
    'G':   'ह्',
    '{':   'क्ष',
    '=':   'त्र',
    'µ':   'ध',

    // ── 1-char sequences: vowel signs (matras) ──────────────
    // NOTE: 'f' = ि is handled separately (pre-positioning)
    'k':   'ा',
    'h':   'ी',
    'q':   'ु',
    'w':   'ू',
    's':   'ो',
    'S':   'ौ',
    '`':   'ॉ',
    'A':   'ॅ',

    // ── 1-char sequences: modifiers ─────────────────────────
    'a':   'ं',
    '¡':   'ँ',
    '%':   'ँ',
    'Z':   'र्',
    '~':   '्',
    '·':   'ः',
    '\\':  '्',

    // ── 1-char sequences: punctuation ───────────────────────
    '|':   '।'
  };

  // Build sorted keys array (longest first)
  var KEYS = Object.keys(MAP).sort(function(a, b) {
    return b.length - a.length;
  });

  // ══════════════════════════════════════════════════════════
  // CONVERSION ENGINE
  // ══════════════════════════════════════════════════════════

  function krutiToMangal(input) {
    if (!input || !input.trim()) return '';

    var result = '';
    var i = 0;
    var text = input;

    while (i < text.length) {

      // ── SPECIAL CASE: 'f' = ि (i-matra) ───────────────────
      // In Kruti Dev: 'f' comes BEFORE consonant
      // In Unicode:   'ि' comes AFTER consonant
      // Example: "fn" in KD = "दि" in Unicode
      //          f + n  →  द + ि

      if (text[i] === 'f') {
        i++; // consume 'f'

        if (i >= text.length) {
          // 'f' at end of string
          result += 'ि';
          break;
        }

        // Try to match next char(s) as a consonant
        var fMatched = false;
        for (var ki = 0; ki < KEYS.length; ki++) {
          var key = KEYS[ki];
          if (text.substr(i, key.length) === key) {
            result += MAP[key] + 'ि';
            i += key.length;
            fMatched = true;
            break;
          }
        }

        if (!fMatched) {
          // Unknown char after 'f' or already Devanagari
          result += text[i] + 'ि';
          i++;
        }
        continue;
      }

      // ── NORMAL CASE: greedy longest match ─────────────────
      var matched = false;
      for (var kj = 0; kj < KEYS.length; kj++) {
        var key2 = KEYS[kj];
        if (text.substr(i, key2.length) === key2) {
          result += MAP[key2];
          i += key2.length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        // Pass through: space, digit, punctuation, already-Unicode
        result += text[i];
        i++;
      }
    }

    // ── POST-PROCESSING cleanup ───────────────────────────
    result = result
      .replace(/ंं/g, 'ं')   // double anusvara
      .replace(/।।/g, '॥')   // double danda
      .replace(/ाा/g, 'ा');  // duplicate aa-matra

    return result;
  }

  // ══════════════════════════════════════════════════════════
  // UI WIRING
  // ══════════════════════════════════════════════════════════

  function init() {
    var $in  = document.getElementById('kdInput');
    var $out = document.getElementById('mangalOutput');
    var $cv  = document.getElementById('btnConvert');
    var $cp  = document.getElementById('btnCopy');
    var $cl  = document.getElementById('btnClear');

    if (!$in || !$out) {
      console.warn('[KD→Mangal] Elements not found. Skipping init.');
      return;
    }

    console.log('[KD→Mangal] ✓ Converter ready');

    // ── Convert button ─────────────────────────────────────
    if ($cv) {
      $cv.addEventListener('click', function() {
        var val = $in.value;
        if (!val.trim()) {
          toast('⚠️ Pehle Kruti Dev text paste karo!');
          return;
        }
        $out.value = krutiToMangal(val);
        toast('✅ Convert ho gaya!');
      });
    }

    // ── Auto-convert on input (debounced 300ms) ────────────
    var timer;
    $in.addEventListener('input', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        $out.value = $in.value.trim() ? krutiToMangal($in.value) : '';
      }, 300);
    });

    // ── Copy button ────────────────────────────────────────
    if ($cp) {
      $cp.addEventListener('click', function() {
        if (!$out.value.trim()) {
          toast('⚠️ Pehle convert karo!');
          return;
        }
        copyText($out.value);
      });
    }

    // ── Clear button ───────────────────────────────────────
    if ($cl) {
      $cl.addEventListener('click', function() {
        $in.value  = '';
        $out.value = '';
        $in.focus();
        toast('🗑️ Clear ho gaya!');
      });
    }

    // ── Auto-convert on page load if textarea has text ─────
    if ($in.value && $in.value.trim()) {
      $out.value = krutiToMangal($in.value);
    }
  }

  // ══════════════════════════════════════════════════════════
  // HELPER FUNCTIONS
  // ══════════════════════════════════════════════════════════

  function toast(msg) {
    var t = document.getElementById('hfs-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'hfs-toast';
      t.style.cssText = [
        'position:fixed',
        'bottom:30px',
        'left:50%',
        'transform:translateX(-50%)',
        'background:#222',
        'color:#fff',
        'padding:12px 28px',
        'border-radius:8px',
        'font-size:15px',
        'z-index:99999',
        'box-shadow:0 4px 20px rgba(0,0,0,.4)',
        'transition:opacity .3s',
        'pointer-events:none',
        'white-space:nowrap'
      ].join(';');
      document.body.appendChild(t);
    }
    t.textContent   = msg;
    t.style.opacity = '1';
    clearTimeout(t._tmr);
    t._tmr = setTimeout(function() {
      t.style.opacity = '0';
    }, 2500);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(function() { toast('📋 Copy ho gaya!'); })
        .catch(function() { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:-9999px';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, 99999);
    try {
      document.execCommand('copy');
      toast('📋 Copy ho gaya!');
    } catch (e) {
      toast('❌ Copy nahi hua');
    }
    document.body.removeChild(ta);
  }

  // ══════════════════════════════════════════════════════════
  // AUTO-INIT
  // ══════════════════════════════════════════════════════════

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();