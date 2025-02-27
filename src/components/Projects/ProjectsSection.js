import React from 'react';
import ProjectCards from './ProjectsSection/ProjectCards';
import './ProjectsSection.css';

function ProjectsSection() {
    return (
        <div>
            <div className='project-container'>
                <div className='project-cards-container'>
                    <h1 id='title'>
                        My Projects
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