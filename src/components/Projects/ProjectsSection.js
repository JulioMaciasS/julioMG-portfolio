import React from 'react';
import { useTranslations } from 'next-intl';
import ProjectCards from './ProjectsSection/ProjectCards';
import './ProjectsSection.css';

function ProjectsSection() {
    const t = useTranslations();
    return (
        <div>
            <div className='project-container'>
                <div className='project-cards-container'>
                    <h1 id='title'>
                        {t('projects.heading')}
                    </h1>
                    <p className='text-center text-gray-500 max-w-xl mx-auto text-lg'>
                        {t('projects.subheading')}
                    </p>
                    <div className='mt-12 w-full'>
                    <ProjectCards/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;