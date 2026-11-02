import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { SERVICES } from '../../data/services';
import ServiceCard from './ServiceCard';
import WhyVisual from './WhyVisual';
import ProcessIllustration from './ProcessIllustration';
import TestimonialCard from '../common/TestimonialCard';
import './ServicesSection.css';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';
import LayeredWaves from '../common/LayeredWaves';

const WHY = [
  { key: 'point1', visual: 'collage' },
  { key: 'point2', visual: 'citi' },
  { key: 'point3', visual: 'together' },
];

const PROCESS = [
  { key: 'step1', art: 'call' },
  { key: 'step2', art: 'proposal' },
  { key: 'step3', art: 'build' },
  { key: 'step4', art: 'handover' },
];

function ServicesSection() {
  const t = useTranslations();
  const categories = t.raw('services.categories');
  const copyFor = (key) => categories.find((category) => category.key === key);

  return (
    <main className="services-page">
      {/* Compact hero: the page is about the services, so the cards start
          right below it, within the first screen. */}
      <section className="services-hero services-hero--compact">
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <h1 className="services-title">{t('services.hero.title')}</h1>
          <p className="services-subtitle">{t('services.hero.subtitle')}</p>
        </div>
      </section>

      <section className="services-grid-section services-grid-section--overview">
        <LayeredWaves colors={['#2b2725', '#221f1e', '#1a1717']} height={64} />
        <div className="services-grid services-grid--five">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.key}
              service={service}
              category={copyFor(service.key)}
              learnMore={t('services.detail.learnMore')}
              delay={index * 60}
              anchor
            />
          ))}
        </div>
      </section>

      {/* Why work with me: each card leads with a picture (client work, a photo
          at Citi, a photo of me working with someone) so the section feels personal, not textual. */}
      <section className="services-why">
        <div className="services-section-head">
          <h2>{t('services.why.heading')}</h2>
        </div>
        <div className="services-why-grid">
          {WHY.map(({ key, visual }, index) => (
            <Reveal key={key} delay={index * 70} className="services-why-item">
              <WhyVisual type={visual} alt={visual === 'collage' ? '' : t(`services.why.${key}Alt`)} />
              <div className="services-why-body">
                <h3>{t(`services.why.${key}Lead`)}</h3>
                <p>{t(`services.why.${key}Text`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="services-why-more">
          <Link to="/projects/loslagoshotel" className="services-why-link">
            {t('services.why.caseStudyLink')} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <SectionDivider variant="diagonal" color="#ffffff" accent />
        <div className="services-section-head">
          <h2>{t('services.process.heading')}</h2>
          <p>{t('services.process.subtitle')}</p>
        </div>
        <div className="services-process-grid">
          {PROCESS.map(({ key: step, art }, index) => (
            <React.Fragment key={step}>
              <Reveal delay={index * 70} className="services-process-step">
                <div className="services-process-art">
                  <ProcessIllustration type={art} />
                  <span className="services-process-number">{`0${index + 1}`}</span>
                </div>
                <div className="services-process-body">
                  <h3>{t(`services.process.${step}Title`)}</h3>
                  <p>{t(`services.process.${step}Text`)}</p>
                </div>
              </Reveal>
              {index < PROCESS.length - 1 && (
                <div className="services-process-arrow" aria-hidden="true">
                  <ArrowRight size={26} strokeWidth={2} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Testimonials: hidden until real, approved quotes are added to data/testimonials.js */}
      {TESTIMONIALS.length > 0 && (
        <section className="services-testimonials">
          <SectionDivider variant="curve" color="#f5f5f5" />
          <div className="services-section-head">
            <h2>{t('services.testimonials.heading')}</h2>
            <p>{t('services.testimonials.subtitle')}</p>
          </div>
          <div className="services-testimonials-list">
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} delay={index * 70}>
                <TestimonialCard testimonial={item} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ: same content as the FAQPage structured data on this page */}
      <section className="services-faq" id="faq">
        <div className="services-section-head">
          <h2>{t('services.faq.heading')}</h2>
        </div>
        <div className="services-faq-list">
          {t.raw('services.faq.items').map((item) => (
            <details key={item.q} className="services-faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="services-cta">
        <LayeredWaves colors={['#ebebeb', '#f5f5f5', '#ffffff']} height={92} speed="slow" />
        <Reveal className="relative z-10">
          <h2>{t('services.cta.heading')}</h2>
          <p>{t('services.cta.text')}</p>
          <Link to="/contact-me">
            <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
              {t('services.cta.button')}
            </Button>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default ServicesSection;
