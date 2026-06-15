import React from 'react';
import "./ProjectCards.css";
import ProjectCard from '../../common/ProjectCard';
import { useTranslations, useLocale } from 'next-intl';
import { PROJECTS, formatProjectDate } from '../../../data/projects';
import Reveal from '../../common/Reveal';

function ProjectCards() {
    const t = useTranslations();
    const locale = useLocale();
    return (
        <div className='proj-cards-grid'>
            {PROJECTS.map((project, i) => (
                <Reveal key={project.id} delay={(i % 2) * 90} className='h-full flex'>
                    <ProjectCard
                        imageURL={project.imageSrc}
                        title={t(`projects.items.${project.id}.title`)}
                        description={t(`projects.items.${project.id}.description`)}
                        technologies={project.technologies}
                        padding={project.padding}
                        isNew={project.isNew}
                        tag={t('projects.new')}
                        date={formatProjectDate(project.date, locale)}
                        hrefLink={project.link}
                        isExternal={project.isExternal}
                    />
                </Reveal>
            ))}
        </div>
    );
}

export default ProjectCards;
