import React from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsCard.css';

const TECHS = [
  { name: 'React', icon: '/images/logos/react.png' },
  { name: 'HTML', icon: '/images/logos/html.png' },
  { name: 'JavaScript', icon: '/images/logos/javascript.png' },
  { name: 'CSS', icon: '/images/logos/css.png' },
  { name: 'Node.js', icon: '/images/logos/node.png' }
];

function SkillsCard() {
  const { t } = useTranslation();

  return (
    <div className="tech-stack">
      <span className="tech-stack-label">{t('footer.skillsTitle')}</span>
      <ul className="tech-stack-list">
        {TECHS.map((tech) => (
          <li key={tech.name} className="tech-chip">
            <img src={tech.icon} alt="" className="tech-chip-icon" />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsCard;
