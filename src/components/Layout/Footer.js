'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import './Footer.css';
import SkillsCard from '../SkillsCard';
import LocalizedLink from '../LocalizedLink';
import { openConsentSettings } from '../../utils/consent';

export default function Footer() {
  const t = useTranslations();
  const tLegal = useTranslations('legal');
  var GithubIconLink = '/images/logos/github.png';

  return (
    <div className='footer-container'>
      <div className='w-full flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-8'>
        <div className='footer-column lg:w-auto'>
          <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 p-4 sm:p-8'>
            <div>
              <p className='font-display text-xl mb-2'>{t('footer.contactMe')}</p>
              <p className='font-display mb-2 text-sm sm:text-base break-all sm:break-normal'>julio@juliomacias.dev</p>
              <a href="https://www.linkedin.com/in/julio-macias-gonzalez"
                 target='_blank'
                 rel="noopener noreferrer"
                 className='icon-link'>
                <div className='flex flex-row items-center gap-2'>
                  <span className='font-display'>LinkedIn</span>
                  <i className="bi bi-linkedin text-xl"></i>
                </div>
              </a>
            </div>
            <div>
              <p className='font-display text-xl mb-2'>{t('footer.otherLinks')}</p>
              <a href="https://github.com/JulioMaciasS"
                 target='_blank'
                 rel="noopener noreferrer"
                 className='icon-link'>
                <div className='flex flex-row items-center gap-2'>
                  <span className='font-display'>GitHub</span>
                  <img src={GithubIconLink} alt="Github Icon" className="icon" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-auto lg:mr-8 xl:mr-0 px-4'>
          <SkillsCard />
        </div>
      </div>

      <div className='footer-legal'>
        <LocalizedLink to='/privacy-policy' className='footer-legal-link'>
          {tLegal('links.privacyPolicy')}
        </LocalizedLink>
        <LocalizedLink to='/cookie-policy' className='footer-legal-link'>
          {tLegal('links.cookiePolicy')}
        </LocalizedLink>
        <button type='button' className='footer-legal-link footer-legal-button' onClick={openConsentSettings}>
          {tLegal('links.cookieSettings')}
        </button>
      </div>

      <p className='website-rights'>{t('footer.rights', { year: new Date().getFullYear() })}</p>
    </div>
  );
}
