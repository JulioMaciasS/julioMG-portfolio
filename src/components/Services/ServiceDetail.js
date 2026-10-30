import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '../Button';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, servicePath } from '../../data/services';
import { PROJECTS, formatProjectDate } from '../../data/projects';
import { SERVICE_ICONS } from './serviceIcons';
import SupportStrip from './SupportStrip';
import ProjectCard from '../common/ProjectCard';
import Reveal from '../common/Reveal';
import LayeredWaves from '../common/LayeredWaves';
import './ServicesSection.css';
import '../Projects/ProjectsSection/ProjectCards.css';

// A single service page: what's included, related case studies and a short
// FAQ, built from the same services.categories copy as the overview.
function ServiceDetail({ service }) {
  const t = useTranslations();
  const locale = useLocale();
  const categories = t.raw('services.categories');
  const category = categories.find((c) => c.key === service.key);
  const Icon = SERVICE_ICONS[service.key];
  const projects = service.projects.map((id) => PROJECTS.find((p) => p.id === id));
  const others = SERVICES.filter((s) => s.key !== service.key);

  return (
    <main className="services-page">
      <section className="services-hero service-detail-hero">
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services">{t('services.detail.breadcrumb')}</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{category.title}</span>
          </nav>
          <div className="service-detail-icon">
            <Icon size={28} strokeWidth={1.75} aria-hidden="true" />
          </div>
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
      </section>

      <section className="services-grid-section">
        <LayeredWaves colors={['#2b2725', '#221f1e', '#1a1717']} height={104} />
        <div className="services-section-head">
          <h2>{t('services.detail.included')}</h2>
          <p>{category.pitch}</p>
        </div>
        <div className="services-offers service-detail-offers">
          {category.offers.map((offer, index) => (
            <Reveal as="article" key={offer.title} delay={index * 60} className="services-offer">
              <h3>{offer.title}</h3>
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

      <section className="service-detail-proof">
        <div className="services-section-head">
          <h2>{t('services.detail.proof')}</h2>
        </div>
        <div className="proj-cards-grid service-detail-projects">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90} className="h-full flex">
              <ProjectCard
                imageURL={project.imageSrc}
                title={t(`projects.items.${project.id}.title`)}
                description={t(`projects.items.${project.id}.description`)}
                technologies={project.technologies}
                padding={project.padding}
                isNew={project.isNew}
                tag={t('projects.new')}
                isLive={Boolean(project.liveUrl)}
                liveLabel={t('projects.live')}
                date={project.ongoing ? t('projects.ongoing') : formatProjectDate(project.date, locale)}
                hrefLink={project.link}
                isExternal={project.isExternal}
              />
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
        <nav className="services-jump" aria-label={t('services.detail.others')}>
          {others.map((other) => {
            const OtherIcon = SERVICE_ICONS[other.key];
            return (
              <Link key={other.key} to={servicePath(other)}>
                <OtherIcon size={16} strokeWidth={2} aria-hidden="true" />
                {categories.find((c) => c.key === other.key).title}
              </Link>
            );
          })}
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
