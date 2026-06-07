import React from 'react';
import "./CardsSection.css";
import LinkCard from './LinkCard';
import Link from '../LocalizedLink';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../data/projects';

export default function CardsSection() {
  const { t } = useTranslation();
  const maxDescriptionLength = 55;
  const latestProjects = PROJECTS.slice(0, 4);

  const truncateText = (text, maxLength = maxDescriptionLength) => {
    if (!text) {
      return '';
    }
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength - 3).trimEnd()}...`;
  };

  return (
    <div className='container-background px-4 min-w-full min-h-[60vh] flex flex-col items-center justify-center hero-section'>
      <h2>{t('home.cards.heading')}</h2>
      <div className='cards-container'>
        {latestProjects.map((project) => (
          <LinkCard
            key={project.id}
            imageURL={project.imageSrc}
            title={t(`projects.items.${project.id}.title`)}
            description={truncateText(t(`projects.items.${project.id}.description`))}
            hrefLink={project.link}
            padding={project.padding}
          />
        ))}
      </div>
      <Link to="/projects" className="mt-8 mb-8">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--xlarge"
          buttonShape="btn--round"
          className="hover:border-black border-2 transition-colors duration-300"
        >
          {t('home.cards.more')} <ArrowRight />
        </Button>
      </Link>
    </div>
  )
}
