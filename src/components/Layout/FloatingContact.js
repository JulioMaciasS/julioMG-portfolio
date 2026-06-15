'use client';

import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { usePathname } from '../../i18n/navigation';
import './FloatingContact.css';

/**
 * Persistent "Say Hello" call-to-action that floats in the bottom-right corner
 * on every page (moved out of the navbar). Links to the contact page.
 * Hidden on the contact page itself, where it would be redundant.
 */
export default function FloatingContact() {
  const t = useTranslations();
  // next-intl's usePathname returns the locale-agnostic path (no /es prefix).
  const pathname = usePathname();

  if (pathname === '/contact-me') {
    return null;
  }

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
