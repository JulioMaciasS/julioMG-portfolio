import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/Seo/SeoHead';
import ProjectsSection from '../components/Projects/ProjectsSection';

function Projects () {
    const { t } = useTranslation();
    return(
        <>
<SeoHead
    path="/projects"
    title={t('projects.meta.title')}
    description={t('projects.meta.description')}
    image="https://juliomacias.dev/og-image.png"
/>
<ProjectsSection/>
        </>
    );
}

export default Projects;