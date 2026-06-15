import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';

/** Small "Projects / <current>" breadcrumb shown at the top of each post. */
export default function PostBreadcrumb({ current }) {
  const t = useTranslations();
  return (
    <nav className="post-breadcrumb" aria-label="Breadcrumb">
      <Link to="/projects" className="post-breadcrumb-link">{t('nav.projects')}</Link>
      <ChevronRight size={14} className="post-breadcrumb-sep" aria-hidden="true" />
      <span className="post-breadcrumb-current">{current}</span>
    </nav>
  );
}
