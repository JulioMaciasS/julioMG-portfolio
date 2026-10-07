import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '../Button';
import {
  Globe,
  Search,
  Bot,
  Wrench,
  LifeBuoy,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import './ServicesSection.css';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';
import LayeredWaves from '../common/LayeredWaves';

// Service categories, in display order. Copy lives under services.categories.
const CATEGORY_ICONS = {
  websites: Globe,
  visibility: Search,
  automation: Bot,
  software: Wrench,
  support: LifeBuoy
};

const FEATURED = {
  image: '/images/discentik/practice-canvas.jpg',
  liveUrl: 'https://discentik.com/',
  caseStudy: '/projects/discentik'
};

const PROCESS = ['step1', 'step2', 'step3', 'step4'];

function ServicesSection() {
  const t = useTranslations();
  const locale = useLocale();
  const categories = t.raw('services.categories');
  const pick = (value) => (typeof value === 'string' ? value : value?.[locale] || Object.values(value || {})[0]);

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
            <Link to="/contact-me">
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

      {/* Featured client project */}
      <section className="services-featured">
        <LayeredWaves colors={['#2b2725', '#221f1e', '#1a1717']} height={104} />
        <Reveal as="div" className="services-featured-card">
          <a href={FEATURED.liveUrl} target="_blank" rel="noopener noreferrer" className="services-featured-image">
            <img src={FEATURED.image} alt="Discentik course player with AI chat and a document canvas" loading="lazy" />
          </a>
          <div className="services-featured-body">
            <span className="services-featured-eyebrow">{t('services.featured.eyebrow')}</span>
            <h2>{t('services.featured.title')}</h2>
            <p>{t('services.featured.body')}</p>
            <ul>
              {t.raw('services.featured.points').map((point) => (
                <li key={point}>
                  <CheckCircle2 size={20} strokeWidth={2} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="services-featured-links">
              <a href={FEATURED.liveUrl} target="_blank" rel="noopener noreferrer">
                {t('services.featured.visit')} <ArrowUpRight size={18} />
              </a>
              <Link to={FEATURED.caseStudy}>
                {t('services.featured.read')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="services-grid-section">
        <div className="services-section-head">
          <h2>{t('services.grid.heading')}</h2>
          <p>{t('services.grid.subtitle')}</p>
        </div>
        <nav className="services-jump" aria-label={t('services.grid.heading')}>
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.key];
            return (
              <a key={category.key} href={`#services-${category.key}`}>
                <Icon size={16} strokeWidth={2} aria-hidden="true" />
                {category.title}
              </a>
            );
          })}
        </nav>

        <div className="services-categories">
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.key];
            return (
              <section key={category.key} id={`services-${category.key}`} className="services-category">
                <div className="services-category-head">
                  <div className="services-category-icon">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.pitch}</p>
                  </div>
                </div>
                <div className="services-offers">
                  {category.offers.map((offer, index) => (
                    <Reveal as="article" key={offer.title} delay={index * 60} className="services-offer">
                      <h4>{offer.title}</h4>
                      <p>{offer.description}</p>
                      <ul>
                        {offer.points.map((point) => (
                          <li key={point}>
                            <CheckCircle2 size={16} strokeWidth={2.25} aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

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

      {/* Testimonials: hidden until real, approved quotes are added to data/testimonials.js */}
      {TESTIMONIALS.length > 0 && (
        <section className="services-testimonials">
          <div className="services-section-head">
            <h2>{t('services.testimonials.heading')}</h2>
          </div>
          <div className="services-testimonials-grid">
            {TESTIMONIALS.map((item, index) => (
              <Reveal as="figure" key={item.name} delay={index * 70} className="services-testimonial">
                <Quote size={26} strokeWidth={1.75} aria-hidden="true" />
                <blockquote>{pick(item.quote)}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  {item.role && <span>{pick(item.role)}</span>}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </section>
      )}

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
        <LayeredWaves colors={['#e2e2e2', '#ececec', '#f5f5f5']} height={92} speed="slow" />
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
