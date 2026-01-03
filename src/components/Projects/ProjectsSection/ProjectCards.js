import React from 'react';
import "./ProjectCards.css";
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../../data/projects';

function ProjectCards() {
    return (
        <div className='flex flex-col gap-10 proj-cards-container'>
            {PROJECTS.map((project) => {
                const card = (
                    <ProjectCard
                        imageSrc={project.imageSrc}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        padding={project.padding}
                        new={project.isNew}
                        link={project.isExternal ? project.link : undefined}
                    />
                );

                if (project.isExternal) {
                    return (
                        <React.Fragment key={project.id}>
                            {card}
                        </React.Fragment>
                    );
                }

                return (
                    <Link key={project.id} to={project.link}>
                        {card}
                    </Link>
                );
            })}
        </div>
    );
}

export default ProjectCards;
