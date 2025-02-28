import React from 'react';
import './Footer.css';
import SkillsCard from '../SkillsCard';

export default function Footer() {
  var GithubIconLink = '/images/logos/github.png';

  return (
    <div className='footer-container'>
      <div className='w-full flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-8'>
        <div className='footer-column lg:w-auto'>
          <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 p-4 sm:p-8'>
            <div>
              <h1 className='text-xl mb-2'>Contact me:</h1>
              <h2 className='mb-2 text-sm sm:text-base break-all sm:break-normal'>julomaciasgonzalez@juliodev.co.uk</h2>
              <a href="https://www.linkedin.com/in/julio-macias-gonzalez-199266282/" 
                 target='_blank' 
                 rel="noopener noreferrer" 
                 className='icon-link'>
                <div className='flex flex-row items-center gap-2'>
                  <h2>LinkedIn</h2>
                  <i className="bi bi-linkedin text-xl"></i>
                </div>
              </a>
            </div>
            <div>
              <h1 className='text-xl mb-2'>Other links:</h1>
              <a href="https://github.com/JulioMaciasS" 
                 target='_blank' 
                 rel="noopener noreferrer" 
                 className='icon-link'>
                <div className='flex flex-row items-center gap-2'>
                  <h2>GitHub</h2>
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
      
      <p className='website-rights'>© 2024 JulioDev. All rights reserved.</p>
    </div>
  );
}