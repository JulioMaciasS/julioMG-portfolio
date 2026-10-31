import React from 'react';
import Link from '../LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { servicePath } from '../../data/services';
import ServiceIllustration from './ServiceIllustration';
import Reveal from '../common/Reveal';

/**
 * Linked card for one service on /services: a screenshot, the title, the
 * pitch and a "see what's included" link. `anchor` keeps the old
 * /services#services-<key> links working.
 */
function ServiceCard({ service, category, learnMore, delay = 0, anchor = false }) {
  const thumb = service.visuals[0];
  return (
    <Reveal delay={delay} className="h-full">
      <Link to={servicePath(service)} className="service-card">
        {anchor && <span id={`services-${service.key}`} className="services-card-anchor" />}
        <div className="service-card-thumb">
          {thumb.illustration ? (
            <ServiceIllustration type={thumb.illustration} />
          ) : (
            <img src={thumb.src} alt="" loading="lazy" decoding="async" />
          )}
        </div>
        <h3>{category.title}</h3>
        <p>{category.pitch}</p>
        <span className="service-card-more">
          {learnMore} <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}

export default ServiceCard;
