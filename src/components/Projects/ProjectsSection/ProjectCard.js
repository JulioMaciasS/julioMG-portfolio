import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

const ProjectCard = ({
    imageSrc,
    title,
    description,
    technologies,
    new: newProject = false,
    padding = false,
    date,
  }) => {
    const { t } = useTranslation();
    return (
      <div className='proj-card-container'>
        <img
          className={`proj-card-image ${padding ? 'p-4 bg-gray-50 object-contain' : ''}`}
          src={imageSrc}
          alt={title}
        />
        <div className='proj-text-container'>
          {date && <span className='proj-card-date'>{date}</span>}
          <h1>{title} {newProject && <span className='text-yellow-500 text-base align-middle'>{t('projects.new')}</span>}</h1>
          <p>{description}</p>
          {technologies && (
            <div className="proj-skill-container">
              {technologies.map((tech, index) => (
                <div className="proj-skill-item" key={index}>
                  <img src={tech.icon} alt={`${tech.name} icon`} className="skill-icon" />
                  <p className="skill-text">{tech.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default ProjectCard;
