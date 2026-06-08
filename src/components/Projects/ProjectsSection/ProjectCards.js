import React from 'react';
import "./ProjectCards.css";
import ProjectCard from './ProjectCard';
import Link from '../../LocalizedLink';
import { useTranslation } from 'react-i18next';
import { PROJECTS, formatProjectDate } from '../../../data/projects';
import Reveal from '../../common/Reveal';

function ProjectCards() {
    const { t, i18n } = useTranslation();
    return (
        <div className='flex flex-col gap-10 proj-cards-container'>
            {PROJECTS.map((project, i) => {
                const card = (
                    <ProjectCard
                        imageSrc={project.imageSrc}
                        title={t(`projects.items.${project.id}.title`)}
                        description={t(`projects.items.${project.id}.description`)}
                        technologies={project.technologies}
                        padding={project.padding}
                        new={project.isNew}
                        date={formatProjectDate(project.date, i18n.language)}
                    />
                );

                return (
                    <Reveal key={project.id} delay={(i % 2) * 90}>
                        {project.isExternal ? (
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='proj-custom-link'>{card}</a>
                        ) : (
                            <Link to={project.link} className='proj-custom-link'>{card}</Link>
                        )}
                    </Reveal>
                );
            })}
        </div>
    );
}

export default ProjectCards;
