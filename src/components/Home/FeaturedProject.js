import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from '../LocalizedLink';
import Reveal from '../common/Reveal';
import { responsiveImage } from '../../utils/responsiveImage';
import './FeaturedProject.css';

// The project shown first on the home page. "Latest work" skips it to avoid repeating it.
export const FEATURED_PROJECT_ID = 'discentik';

const FEATURED = {
  image: '/images/discentik/practice-canvas.jpg',
  liveUrl: 'https://discentik.com/',
  caseStudy: '/projects/discentik'
};

export default function FeaturedProject({ id }) {
  const t = useTranslations();

  return (
    <section id={id} className="services-featured">
      <Reveal as="div" className="services-featured-card">
        <a href={FEATURED.liveUrl} target="_blank" rel="noopener noreferrer" className="services-featured-image">
          <img
            {...responsiveImage(FEATURED.image, '(max-width: 900px) 100vw, 560px')}
            alt="Discentik course player with AI chat and a document canvas"
            width="1280"
            height="720"
            loading="lazy"
          />
        </a>
        <div className="services-featured-body">
          <span className="services-featured-eyebrow">{t('home.featured.eyebrow')}</span>
          <h2>{t('home.featured.title')}</h2>
          <p>{t('home.featured.body')}</p>
          <ul>
            {t.raw('home.featured.points').map((point) => (
              <li key={point}>
                <CheckCircle2 size={20} strokeWidth={2} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="services-featured-links">
            <a href={FEATURED.liveUrl} target="_blank" rel="noopener noreferrer">
              {t('home.featured.visit')} <ArrowUpRight size={18} />
            </a>
            <Link to={FEATURED.caseStudy}>
              {t('home.featured.read')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
