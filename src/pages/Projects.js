import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectsSection from '../components/Projects/ProjectsSection';

function Projects () { 
    return(
        <>
<Helmet>
    <title>Projects | JulioDev Portfolio</title>
    <meta name="description" content="Browse Julio Macias Gonzalez's software engineering projects including CineShare, EugeniaBravo, and more." />
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