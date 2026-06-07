import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCards from './ProjectsSection/ProjectCards';
import './ProjectsSection.css';

function ProjectsSection() {
    const { t } = useTranslation();
    return (
        <div>
            <div className='project-container'>
                <div className='project-cards-container'>
                    <h1 id='title'>
                        {t('projects.heading')}
                    </h1>
                    <div className='mt-10'>
                    <ProjectCards/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;