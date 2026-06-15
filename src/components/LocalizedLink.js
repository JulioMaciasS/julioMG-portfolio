'use client';

import React from 'react';
import { Link } from '../i18n/navigation';

/**
 * Drop-in replacement for the old react-router LocalizedLink. Keeps the `to`
 * prop API used across the app, but delegates to next-intl's <Link>, which
 * auto-prefixes the active locale (English stays unprefixed).
 */
function LocalizedLink({ to, children, ...rest }) {
  return (
    <Link href={to} {...rest}>
      {children}
    </Link>
  );
}

export default LocalizedLink;
