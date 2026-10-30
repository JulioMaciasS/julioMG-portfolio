import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { Button } from '../Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { SERVICES, servicePath } from '../../data/services';
import { SERVICE_ICONS } from './serviceIcons';
import SupportStrip from './SupportStrip';
import TestimonialCard from '../common/TestimonialCard';
import './ServicesSection.css';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';
import LayeredWaves from '../common/LayeredWaves';

const PROCESS = ['step1', 'step2', 'step3', 'step4'];

function ServicesSection() {
  const t = useTranslations();
  const categories = t.raw('services.categories');
  const copyFor = (key) => categories.find((category) => category.key === key);

  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <span className="services-eyebrow">{t('services.hero.eyebrow')}</span>
          <h1 className="services-title">{t('services.hero.title')}</h1>
          <p className="services-subtitle">{t('services.hero.subtitle')}</p>
          <div className="services-hero-cta">
            <Link to="/contact-me#book-a-call">
              <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
                {t('services.hero.bookCall')}
              </Button>
            </Link>
            <Link to="/projects">
              <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonShape="btn--round">
                {t('services.hero.seeWork')}
              </Button>
            </Link>
          </div>
          <p className="services-techline">{t('services.hero.techLine')}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="services-grid-section">
        <LayeredWaves colors={['#2b2725', '#221f1e', '#1a1717']} height={104} />
        <div className="services-section-head">
          <h2>{t('services.grid.heading')}</h2>
          <p>{t('services.grid.subtitle')}</p>
        </div>
        {/* One card per service, linking to its own page. The ids keep the old
            /services#services-<key> anchors working. */}
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const category = copyFor(service.key);
            const Icon = SERVICE_ICONS[service.key];
            return (
              <Reveal key={service.key} delay={index * 60} className="service-card-wrapper">
                <div id={`services-${service.key}`} className="services-card-anchor" />
                <div className="service-card-shadow" />
                <Link to={servicePath(service)} className="service-card">
                  <div className="service-card-icon">
                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.pitch}</p>
                  <ul className="service-card-examples">
                    {category.offers.map((offer) => (
                      <li key={offer.title}>
                        <CheckCircle2 size={16} strokeWidth={2.25} aria-hidden="true" />
                        <span>{offer.title}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="service-card-more">
                    {t('services.detail.learnMore')} <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SupportStrip />

      {/* Why work with me */}
      <section className="services-why">
        <Reveal as="div" className="services-why-card">
          <h2>{t('services.why.heading')}</h2>
          <ul>
            {['point1', 'point2', 'point3'].map((point) => (
              <li key={point}>
                <CheckCircle2 size={22} strokeWidth={2} />
                <span>
                  <strong>{t(`services.why.${point}Lead`)}</strong>{' '}
                  {t(`services.why.${point}Text`)}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/projects/loslagoshotel" className="services-why-link">
            {t('services.why.caseStudyLink')} <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>

      {/* Process */}
      <section className="services-process">
        <SectionDivider variant="diagonal" color="#ffffff" accent />
        <div className="services-section-head">
          <h2>{t('services.process.heading')}</h2>
          <p>{t('services.process.subtitle')}</p>
        </div>
        <div className="services-process-grid">
          {PROCESS.map((step, index) => (
            <React.Fragment key={step}>
              <Reveal delay={index * 70} className="services-process-step">
                <span className="services-process-number">{`0${index + 1}`}</span>
                <h3>{t(`services.process.${step}Title`)}</h3>
                <p>{t(`services.process.${step}Text`)}</p>
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
