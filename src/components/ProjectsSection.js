import React from 'react';
import Navbar from './Navbar';
import ProjectCards from './ProjectCards';
import './ProjectsSection.css';

function ProjectsSection() {
    return (
        <div>
            <div className='project-container'>
                <div className='project-cards-container'>
                    <h1 id='title'>
                        My Projects
                    </h1>
                    <ProjectCards/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;