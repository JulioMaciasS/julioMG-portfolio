import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ProjectsSection from '../components/Projects/ProjectsSection';

function Projects () {
    const { t } = useTranslation();
    return(
        <>
<Helmet>
    <title>{t('projects.meta.title')}</title>
    <meta name="description" content={t('projects.meta.description')} />
    <link rel="canonical" href="https://portfolio.juliodev.co.uk/projects" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://portfolio.juliodev.co.uk/projects" />
    <meta property="og:title" content="Projects | JulioDev Portfolio" />
    <meta property="og:description" content="Browse Julio Macias Gonzalez's software engineering projects including CineShare, EugeniaBravo, and more." />
    <meta property="og:image" content="https://portfolio.juliodev.co.uk/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
</Helmet>
<ProjectsSection/>
        </>
    );
}

export default Projects;