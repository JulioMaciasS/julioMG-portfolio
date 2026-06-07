import React from 'react'
import { useTranslation } from 'react-i18next'

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className=" py-12 flex justify-center">
      <div className="relative max-w-3xl w-full inline-block mx-4">
        {/* White filled shape offset for 3D effect */}
        <div className="absolute -bottom-3 -left-3 w-full h-full bg-[#313131] rounded-3xl" />
        <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg border-2 border-[#313131]">

          <h3 className="text-[#313131] text-3xl font-bold mb-4">
            {t('home.about.title')}
          </h3>

          <p className="text-[#313131] text-lg leading-relaxed mb-6">
            {t('home.about.body1')}<br />
            {t('home.about.body2')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">{t('home.about.tags.problemSolver')}</span>
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">{t('home.about.tags.teamPlayer')}</span>
            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">{t('home.about.tags.fullStack')}</span>
            <span className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">{t('home.about.tags.learner')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe