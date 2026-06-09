import React from 'react';
import Link from '../LocalizedLink';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import {
  Layers,
  Building2,
  Server,
  GitBranch,
  MoveRight,
  Search,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './ServicesSection.css';
import Reveal from '../common/Reveal';

const LOGO_BASE = '/images/logos/';

const SPECIALTY = [
  { name: 'Supabase', icon: `${LOGO_BASE}supabase.svg` },
  { name: 'Next.js', icon: `${LOGO_BASE}nextjs.svg` },
  { name: 'React', icon: `${LOGO_BASE}react.png` }
];

const SERVICES = [
  { key: 'product', icon: Layers, tags: ['Next.js', 'React', 'Supabase', 'TypeScript'] },
  { key: 'enterprise', icon: Building2, tags: ['Angular', 'React', 'JavaScript', 'TypeScript'] },
  { key: 'backend', icon: Server, tags: ['Java', 'Spring Boot', 'Node', 'Postgres'] },
  { key: 'cicd', icon: GitBranch, tags: ['GitHub Actions', 'Docker', 'CI/CD'] },
  { key: 'migrations', icon: MoveRight, tags: ['Next.js', 'Supabase', 'SEO', 'Migrations'] },
  { key: 'consulting', icon: Search, tags: ['Architecture', 'SEO', 'Performance', 'Review'] }
];

const PROCESS = ['step1', 'step2', 'step3', 'step4'];

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <span className="services-eyebrow">{t('services.hero.eyebrow')}</span>
          <h1 className="services-title">{t('services.hero.title')}</h1>
          <p className="services-subtitle">
            {t('services.hero.subtitlePrefix')}
            <strong>{t('services.hero.subtitleHighlight')}</strong>
            {t('services.hero.subtitleSuffix')}
          </p>
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
        </div>
      </section>

      {/* Specialty band */}
      <section className="services-specialty">
        <p className="services-specialty-label">{t('services.specialty.label')}</p>
        <div className="services-specialty-logos">
          {SPECIALTY.map((tech) => (
            <div key={tech.name} className="services-specialty-item">
              <img src={tech.icon} alt={`${tech.name} logo`} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="services-grid-section">
        <div className="services-section-head">
          <h2>{t('services.grid.heading')}</h2>
          <p>{t('services.grid.subtitle')}</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal as="article" key={service.key} delay={index * 70} className="service-card-wrapper">
                <div className="service-card-shadow" />
                <div className="service-card">
                  <div className="service-card-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3>{t(`services.items.${service.key}.title`)}</h3>
                  <p>{t(`services.items.${service.key}.description`)}</p>
                  <div className="service-card-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
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
          <Link to="/projects/eugeniabravo-rebuild" className="services-why-link">
            {t('services.why.caseStudyLink')} <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-section-head">
          <h2>{t('services.process.heading')}</h2>
          <p>{t('services.process.subtitle')}</p>
        </div>
        <div className="services-process-grid">
          {PROCESS.map((step, index) => (
            <Reveal key={step} delay={index * 70} className="services-process-step">
              <span className="services-process-number">{`0${index + 1}`}</span>
              <h3>{t(`services.process.${step}Title`)}</h3>
              <p>{t(`services.process.${step}Text`)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="services-cta">
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
