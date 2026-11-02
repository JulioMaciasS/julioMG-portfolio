import React from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import ServiceCard from '../Services/ServiceCard';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';
import '../Services/ServicesSection.css';
import './HomeServices.css';

/**
 * The five services as linked cards, so visitors who never open the Services
 * menu still see what's on offer. A dark band between the white featured
 * project and the light "Latest work" section.
 */
export default function HomeServices() {
  const t = useTranslations();
  const categories = t.raw('services.categories');

  return (
    <section className="home-services">
      <SectionDivider variant="diagonal" color="#ffffff" accent />
      <Reveal className="home-services-head">
        <h2>{t('home.services.heading')}</h2>
        <p>{t('home.services.subtitle')}</p>
      </Reveal>
      <div className="services-grid services-grid--five">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.key}
            service={service}
            category={categories.find((category) => category.key === service.key)}
            learnMore={t('services.detail.learnMore')}
            delay={index * 60}
          />
        ))}
      </div>
      <div className="home-services-more">
        <Link to="/services" className="home-services-link">
          {t('home.services.all')} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
