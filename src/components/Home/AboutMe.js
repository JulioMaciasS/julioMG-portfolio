import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../common/Reveal'
import './AboutMe.css'

function AboutMe() {
  const { t } = useTranslation();

  return (
    <Reveal as="section" className="px-4 flex justify-center w-full">
      <div className="about-card group relative max-w-3xl w-full">
        {/* Offset charcoal shape for the signature 3D effect */}
        <div className="about-card-shadow absolute -bottom-3 -left-3 w-full h-full bg-[#313131] rounded-3xl" />
        <div className="about-card-face relative bg-white rounded-3xl p-8 sm:p-10 text-center shadow-lg border-2 border-[#313131]">
          <h3 className="font-display text-[#1a1717] text-3xl font-bold mb-4">
            {t('home.about.title')}
          </h3>

          <p className="text-[#313131] text-lg leading-relaxed mb-6">
            {t('home.about.body1')}<br className="hidden sm:block" />
            {' '}{t('home.about.body2')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="about-tag bg-blue-50 text-blue-700">{t('home.about.tags.problemSolver')}</span>
            <span className="about-tag bg-green-50 text-green-700">{t('home.about.tags.teamPlayer')}</span>
            <span className="about-tag bg-purple-50 text-purple-700">{t('home.about.tags.fullStack')}</span>
            <span className="about-tag bg-amber-50 text-amber-700">{t('home.about.tags.learner')}</span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default AboutMe
