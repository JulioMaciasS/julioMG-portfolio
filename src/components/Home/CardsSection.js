import React from 'react';
import "./CardsSection.css";
import ProjectCard from '../common/ProjectCard';
import Link from '../LocalizedLink';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { PROJECTS, formatProjectDate } from '../../data/projects';
import Reveal from '../common/Reveal';
import SectionDivider from '../common/SectionDivider';

export default function CardsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const latestProjects = PROJECTS.slice(0, 4);

  return (
    <section className="cards-section w-full bg-white px-4 py-24 relative overflow-hidden">
      <SectionDivider variant="curve" color="#f5f5f5" shadow />
      <Reveal className="text-center max-w-2xl mx-auto mb-12 relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1717] mb-3">
          {t('home.cards.heading')}
        </h2>
        <p className="text-gray-500 text-lg">{t('home.cards.subheading')}</p>
      </Reveal>

      <div className="cards-grid">
        {latestProjects.map((project, i) => (
          <Reveal key={project.id} delay={i * 90} className="h-full flex">
            <ProjectCard
              imageURL={project.imageSrc}
              title={t(`projects.items.${project.id}.title`)}
              description={t(`projects.items.${project.id}.description`)}
              technologies={project.technologies}
              hrefLink={project.link}
              padding={project.padding}
              isExternal={project.isExternal}
              isNew={project.isNew}
              tag={t('projects.new')}
              date={formatProjectDate(project.date, locale)}
            />
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            buttonShape="btn--round"
            className="!bg-[#1a1717] hover:!bg-black !text-white !border-[#1a1717] transition-colors"
          >
            {t('home.cards.more')} <ArrowRight className="inline ml-1" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
