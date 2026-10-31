import React from 'react';
import Link from '../LocalizedLink';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicePath } from '../../data/services';
import { SERVICE_ICONS } from './serviceIcons';
import ServiceIllustration from './ServiceIllustration';
import Reveal from '../common/Reveal';

/**
 * Linked card for one service: thumbnail, icon badge, title, pitch and the
 * names of its offers. Used on /services and under "Other services".
 * `anchor` keeps the old /services#services-<key> links working.
 */
function ServiceCard({ service, category, learnMore, delay = 0, anchor = false }) {
  const Icon = SERVICE_ICONS[service.key];
  const thumb = service.visuals[0];
  return (
    <Reveal delay={delay} className="service-card-wrapper">
      {anchor && <div id={`services-${service.key}`} className="services-card-anchor" />}
      <div className="service-card-shadow" />
      <Link to={servicePath(service)} className="service-card">
        <div className="service-card-thumb">
          {thumb.illustration ? (
            <ServiceIllustration type={thumb.illustration} />
          ) : (
            <img src={thumb.src} alt="" loading="lazy" decoding="async" />
          )}
          <div className="service-card-icon">
            <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
          </div>
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
          {learnMore} <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}

export default ServiceCard;
