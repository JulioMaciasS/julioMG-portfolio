'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../../i18n/config';
import { usePathname, useRouter } from '../../i18n/navigation';
import './LanguageSwitcher.css';

function LanguageSwitcher({ onSelect }) {
  const t = useTranslations();
  const current = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
    // next-intl keeps the same logical path and swaps the locale prefix.
    router.replace(pathname, { locale: code });
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
