import { useEffect, useState } from 'react';

export default function ShareModal({ isOpen, onClose }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (isOpen) {
      setUrl(window.location.href);
      setTitle(encodeURIComponent(document.title));
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
    } else {
      const inp = document.getElementById('share-url-input');
      if (inp) {
        inp.select();
        document.execCommand('copy');
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const encUrl = encodeURIComponent(url);

  return (
    <div id="shareModal" role="dialog" aria-modal="true" aria-label="Share this site" className="show" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" type="button" onClick={onClose}>
          &times;
        </button>
        <h3>Share this site</h3>
        <div className="share-icons">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encUrl}`} target="_blank" rel="noopener" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encUrl}&text=${title}`} target="_blank" rel="noopener" aria-label="X / Twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href={`https://api.whatsapp.com/send?text=${title}%20${encUrl}`} target="_blank" rel="noopener" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={`https://t.me/share/url?url=${encUrl}&text=${title}`} target="_blank" rel="noopener" aria-label="Telegram">
            <i className="fab fa-telegram"></i>
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encUrl}`} target="_blank" rel="noopener" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={`https://www.reddit.com/submit?url=${encUrl}&title=${title}`} target="_blank" rel="noopener" aria-label="Reddit">
            <i className="fab fa-reddit-alien"></i>
          </a>
          <a href={`https://pinterest.com/pin/create/button/?url=${encUrl}&description=${title}`} target="_blank" rel="noopener" aria-label="Pinterest">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href={`mailto:?subject=${title}&body=${encUrl}`} target="_blank" rel="noopener" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="share-url-row">
          <input id="share-url-input" type="text" readOnly value={url} />
          <button id="share-copy-btn" type="button" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
