import React from 'react';
import { useTranslations } from 'next-intl';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';
import TestimonialCard from '../common/TestimonialCard';
import { TESTIMONIALS } from '../../data/testimonials';

/** Client testimonials on the home page; hidden while there are none. */
export default function Testimonials() {
  const t = useTranslations();
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="relative overflow-hidden w-full bg-white px-4 pt-24 pb-24">
      <SectionDivider variant="curve" color="#f5f5f5" />
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1717] mb-3">
          {t('services.testimonials.heading')}
        </h2>
        <p className="text-gray-500 text-lg">{t('services.testimonials.subtitle')}</p>
      </Reveal>
      <div className="max-w-3xl mx-auto grid gap-6">
        {TESTIMONIALS.map((item, index) => (
          <Reveal key={item.name} delay={index * 70}>
            <TestimonialCard testimonial={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
