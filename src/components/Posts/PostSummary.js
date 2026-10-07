import React from 'react';
import { useTranslations } from 'next-intl';

/**
 * Two-sentence lead for a client case study, read before the deep dive: who
 * the client is and their problem, then what I built and what changed.
 * Copy lives under posts.<namespace>.summary.
 */
export default function PostSummary({ namespace }) {
  const t = useTranslations();
  return (
    <p className="!text-[1.15rem] sm:!text-[1.3rem] !leading-relaxed !text-gray-800 !mt-2 !mb-10">
      {t(`posts.${namespace}.summary`)}
    </p>
  );
}
