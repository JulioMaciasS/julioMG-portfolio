import React from 'react';
import Link from '../LocalizedLink';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';

/** Dark call-to-action band steering visitors toward the services page. */
export default function ServicesCta() {
  const { t } = useTranslation();

  return (
    <section className="bloom-bg w-full py-24 px-6 relative overflow-hidden">
      <SectionDivider variant="diagonal" color="#f5f5f5" accent />
      <Reveal className="max-w-3xl mx-auto text-center text-white relative z-10">
        <p className="uppercase tracking-[0.2em] text-xs font-medium text-accent mb-4">
          {t('home.servicesCta.eyebrow')}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          {t('home.servicesCta.heading')}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {t('home.servicesCta.text')}
        </p>
        <Link to="/services">
          <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
            {t('home.servicesCta.button')} <ArrowRight className="inline ml-1" size={18} />
          </Button>
        </Link>
      </Reveal>
    </section>
  );
}
