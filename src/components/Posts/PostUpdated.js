'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { formatPostDate } from '../../data/projects';

/** "Last updated <date>" line shown under each post's title. */
export default function PostUpdated({ date }) {
  const t = useTranslations();
  const locale = useLocale();
  const formatted = formatPostDate(date, locale);
  if (!formatted) return null;
  return (
    <p className="text-sm text-gray-500 -mt-2 mb-6">
      {t('posts.common.lastUpdated')} <time dateTime={date}>{formatted}</time>
    </p>
  );
}
