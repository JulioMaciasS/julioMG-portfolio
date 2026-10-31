import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { Button } from '../Button';
import { ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { PROJECTS } from '../../data/projects';
import { OFFER_ICONS } from './serviceIcons';
import SupportStrip from './SupportStrip';
import ServiceShot from './ServiceShot';
import ServiceRow from './ServiceRow';
import ServiceIllustration from './ServiceIllustration';
import Reveal from '../common/Reveal';
import LayeredWaves from '../common/LayeredWaves';
import './ServicesSection.css';

// A single service page: what's included, screenshots from real projects and
// a short FAQ, built from the same services.categories copy as the overview.
function ServiceDetail({ service }) {
  const t = useTranslations();
  const categories = t.raw('services.categories');
  const copyFor = (key) => categories.find((c) => c.key === key);
  const category = copyFor(service.key);
  const offerIcons = OFFER_ICONS[service.key];
  const others = SERVICES.filter((s) => s.key !== service.key);
  const shots = service.visuals.map((visual) => {
    if (visual.illustration) return visual;
    const project = PROJECTS.find((p) => p.id === visual.project);
    return {
      ...visual,
      href: project.link,
      caption: t(visual.caption),
      projectTitle: t(`projects.items.${project.id}.title`),
    };
  });
  const [heroShot, ...galleryShots] = shots;

  return (
    <main className="services-page">
      <section className="services-hero service-detail-hero">
        <div className="services-hero-overlay" />
        <div className="services-hero-content service-detail-hero-grid">
          <div className="service-detail-hero-text">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link to="/services">{t('services.detail.breadcrumb')}</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{category.title}</span>
            </nav>
            <h1 className="services-title">{category.title}</h1>
            <p className="services-subtitle">{category.page.intro}</p>
            <div className="services-hero-cta">
              <Link to="/contact-me#book-a-call">
                <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
                  {t('services.hero.bookCall')}
                </Button>
              </Link>
            </div>
          </div>
          {heroShot.illustration ? (
            <div className="service-shot service-shot--hero">
              <div className="service-shot-frame service-illustration-frame">
                <ServiceIllustration type={heroShot.illustration} />
              </div>
            </div>
          ) : (
            <ServiceShot {...heroShot} eager className="service-shot--hero" />
          )}
        </div>
      </section>

      <section className="services-grid-section">
        <LayeredWaves colors={['#2b2725', '#221f1e', '#1a1717']} height={104} />
        <div className="services-section-head">
          <h2>{t('services.detail.included')}</h2>
          <p>{category.pitch}</p>
        </div>
        <div className="service-offer-grid">
          {category.offers.map((offer, index) => {
            const OfferIcon = offerIcons[index];
            return (
              <Reveal as="article" key={offer.title} delay={index * 60} className="service-offer">
                <div className="service-offer-icon">
                  <OfferIcon size={24} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <ul className="service-offer-points">
                  {offer.points.map((point) => (
                    <li key={point}>
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="service-detail-gallery">
        <div className="services-section-head">
          <h2>{t('services.detail.gallery')}</h2>
        </div>
        <div className="service-detail-shots">
          {galleryShots.map((shot, index) => (
            <Reveal key={shot.src} delay={index * 80}>
              <ServiceShot {...shot} />
            </Reveal>
          ))}
        </div>
      </section>

      <SupportStrip />

      {/* FAQ: same content as the FAQPage structured data on this page */}
      <section className="services-faq" id="faq">
        <div className="services-section-head">
          <h2>{t('services.detail.faq')}</h2>
        </div>
        <div className="services-faq-list">
          {category.page.faq.map((item) => (
            <details key={item.q} className="services-faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="service-detail-others">
        <div className="services-section-head">
          <h2>{t('services.detail.others')}</h2>
        </div>
        <nav className="service-rows" aria-label={t('services.detail.others')}>
          {others.map((other) => (
            <ServiceRow key={other.key} service={other} category={copyFor(other.key)} />
          ))}
        </nav>
      </section>

      <section className="services-cta">
        <LayeredWaves colors={['#ebebeb', '#f5f5f5', '#ffffff']} height={92} speed="slow" />
        <Reveal className="relative z-10">
          <h2>{t('services.cta.heading')}</h2>
          <p>{t('services.cta.text')}</p>
          <Link to="/contact-me#book-a-call">
            <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
              {t('services.cta.button')}
            </Button>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default ServiceDetail;
