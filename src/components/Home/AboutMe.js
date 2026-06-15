import React from 'react'
import { useTranslations } from 'next-intl'
import { GraduationCap, Briefcase, Code2 } from 'lucide-react'
import Reveal from '../common/Reveal'
import './AboutMe.css'

const HIGHLIGHTS = [
  { key: 'degree', Icon: GraduationCap },
  { key: 'experience', Icon: Briefcase },
  { key: 'focus', Icon: Code2 },
];

function AboutMe() {
  const t = useTranslations();

  return (
    <Reveal as="section" className="about-section w-full">
      <div className="about-grid">
        {/* Photo with the signature offset-charcoal frame */}
        <div className="about-photo-col">
          <div className="about-photo">
            <div className="about-photo-shadow" aria-hidden="true" />
            <img
              src="/images/hero/profile-pic.jpg"
              alt="Julio Macias"
              className="about-photo-img"
            />
          </div>
        </div>

        {/* Story + credentials */}
        <div className="about-content-col">
          <span className="about-eyebrow">{t('home.about.eyebrow')}</span>
          <h2 className="about-heading">{t('home.about.title')}</h2>

          <p className="about-body">{t('home.about.body1')}</p>
          <p className="about-body">{t('home.about.body2')}</p>

          <ul className="about-highlights">
            {HIGHLIGHTS.map(({ key, Icon }) => (
              <li key={key} className="about-highlight">
                <span className="about-highlight-icon">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <span>{t(`home.about.highlights.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default AboutMe
