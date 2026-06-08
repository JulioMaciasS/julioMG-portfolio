import React from 'react';
import "./CardsSection.css";
import LinkCard from './LinkCard';
import Link from '../LocalizedLink';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../data/projects';
import Reveal from '../common/Reveal';

export default function CardsSection() {
  const { t } = useTranslation();
  const maxDescriptionLength = 92;
  const latestProjects = PROJECTS.slice(0, 4);

  const truncate = (text, maxLength = maxDescriptionLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength - 3).trimEnd()}...`;
  };

  return (
    <section className="cards-section w-full bg-white px-4 py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1717] mb-3">
          {t('home.cards.heading')}
        </h2>
        <p className="text-gray-500 text-lg">{t('home.cards.subheading')}</p>
      </Reveal>

      <div className="cards-grid">
        {latestProjects.map((project, i) => (
          <Reveal key={project.id} delay={i * 90} className="h-full flex">
            <LinkCard
              imageURL={project.imageSrc}
              title={t(`projects.items.${project.id}.title`)}
              description={truncate(t(`projects.items.${project.id}.description`))}
              hrefLink={project.link}
              padding={project.padding}
              isExternal={project.isExternal}
              isNew={project.isNew}
              tag={t('projects.new')}
            />
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects">
          <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonShape="btn--round">
            {t('home.cards.more')} <ArrowRight className="inline ml-1" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
