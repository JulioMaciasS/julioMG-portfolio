import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { localizedPath, stripLangPrefix } from '../../utils/siteConfig';
import './LanguageSwitcher.css';

function LanguageSwitcher({ onSelect }) {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = (i18n.language || 'en').split('-')[0];
  const activeLang =
    SUPPORTED_LANGUAGES.find((l) => l.code === current) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    const logicalPath = stripLangPrefix(location.pathname);
    i18n.changeLanguage(code);
    navigate(localizedPath(logicalPath, code));
    setOpen(false);
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.select')}
      >
        <Globe size={20} />
        <span className="lang-switcher-current">{activeLang.label}</span>
        <ChevronDown
          size={16}
          className={`lang-switcher-chevron ${open ? 'is-open' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === current}>
              <button
                type="button"
                className={`lang-switcher-option ${
                  lang.code === current ? 'is-active' : ''
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                <span>{lang.label}</span>
                {lang.code === current && <Check size={16} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
