import React from 'react';
import "./ProjectCards.css";
import ProjectCard from './ProjectCard';
import Link from '../../LocalizedLink';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../../data/projects';
import Reveal from '../../common/Reveal';

function ProjectCards() {
    const { t } = useTranslation();
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
                        link={project.isExternal ? project.link : undefined}
                    />
                );

                return (
                    <Reveal key={project.id} delay={(i % 2) * 90}>
                        {project.isExternal ? card : <Link to={project.link}>{card}</Link>}
                    </Reveal>
                );
            })}
        </div>
    );
}

export default ProjectCards;
