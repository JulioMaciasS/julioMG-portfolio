import React from 'react';
import Link from '../LocalizedLink';
import { useTranslation } from 'react-i18next';
import './FloatingContact.css';

/**
 * Persistent "Say Hello" call-to-action that floats in the bottom-right corner
 * on every page (moved out of the navbar). Links to the contact page.
 */
export default function FloatingContact() {
  const { t } = useTranslation();

  return (
    <Link
      to="/contact-me"
      className="floating-contact"
      aria-label={t('nav.contactFloating')}
    >
      <span className="floating-contact-text">{t('nav.contactFloating')}</span>
      <span className="floating-contact-wave" aria-hidden="true">👋</span>
    </Link>
  );
}
