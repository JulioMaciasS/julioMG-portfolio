'use client';

import React, { useEffect } from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { usePathname } from '../../i18n/navigation';
import './FloatingContact.css';

/**
 * Persistent "Say Hello" call-to-action that floats in the bottom-right corner
 * on every page (moved out of the navbar). Links to the contact page.
 * Hidden on the contact page itself, where it would be redundant.
 */

// Phones and tablets, where the home hero already shows its own buttons and
// the button (with the robot resting on it) would cover the client collage.
const COMPACT = '(max-width: 1023px)';

/**
 * Adds `hero-in-view` to <html> while most of the home hero is on screen on
 * a phone or tablet, so the CSS can hide the button and the robot there.
 */
function useHideOverHero(pathname) {
  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector('.hero-container');
    if (!hero) {
      root.classList.remove('hero-in-view');
      return undefined;
    }
    const media = window.matchMedia(COMPACT);
    const update = () => {
      const covering = media.matches && hero.getBoundingClientRect().bottom > window.innerHeight * 0.35;
      root.classList.toggle('hero-in-view', covering);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    media.addEventListener('change', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      media.removeEventListener('change', update);
      root.classList.remove('hero-in-view');
    };
  }, [pathname]);
}
export default function FloatingContact() {
  const t = useTranslations();
  // next-intl's usePathname returns the locale-agnostic path (no /es prefix).
  const pathname = usePathname();
  useHideOverHero(pathname);

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
    </Link>
  );
}
