import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ 
    link, 
    imageSrc, 
    title, 
    description, 
    technologies,
    new: newProject = false,
    padding: padding = false,
  }) => {
    return (
        <a 
          className='proj-custom-link' 
          href={link} 
          target='_blank' 
          rel="noopener noreferrer"
        >
          <div className='proj-card-container'>
            <img 
              className={`proj-card-image ${padding ? 'p-4 bg-gray-50' : ''}`}
              src={imageSrc} 
              alt={`${title} Image`} 
            />
            <div className='proj-text-container'>
              <h1>{title} {newProject && <span className='text-yellow-400 text-xl'>New!</span>} </h1>
              <p>{description}</p>
{
 technologies &&
 <><p className='mb-5 skills-title'>Main tech stack:</p><div className="proj-skill-container">
                {technologies.map((tech, index) => (
                  <div className="proj-skill-item" key={index}>
                    <img
                      src={tech.icon}
                      alt={`${tech.name} Icon`}
                      className="skill-icon" />
                    <p className="skill-text">{tech.name}</p>
                  </div>
                ))}
              </div></>}
            </div>
          </div>
        </a>
    );

};
  
  export default ProjectCard;
  