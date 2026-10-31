import React from 'react';
import { useTranslations } from 'next-intl';
import ProjectCards from './ProjectsSection/ProjectCards';
import LayeredWaves from '../common/LayeredWaves';
import './ProjectsSection.css';

// Compact hero, then the project grid full width (no floating card), so the
// projects start within the first screen.
function ProjectsSection() {
    const t = useTranslations();
    return (
        <main className='projects-page'>
            <section className='projects-hero'>
                <h1 className='projects-hero-title'>{t('projects.heading')}</h1>
                <p className='projects-hero-subtitle'>{t('projects.subheading')}</p>
            </section>
            <section className='projects-list'>
                <LayeredWaves colors={['#2b2725', '#221f1e', '#1a1717']} height={64} />
                <div className='projects-list-inner'>
                    <ProjectCards/>
                </div>
            </section>
        </main>
    )
}

export default ProjectsSection;
