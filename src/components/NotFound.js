'use client';

import React from 'react';
import Link from './LocalizedLink';
import { useTranslations } from 'next-intl';
import { Button } from './Button';

function NotFound() {
  const t = useTranslations();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 max-w-xl mb-8">
        {t('notFound.message')}
      </p>
      <Link to="/">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          buttonShape="btn--round"
          className="!bg-[#1a1717] hover:!bg-black !text-white !border-[#1a1717] transition-colors"
        >
          {t('notFound.back')}
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
