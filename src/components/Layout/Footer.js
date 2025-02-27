import React from 'react';
import './Footer.css';
import SkillsCard from '../SkillsCard';

export default function Footer() {
  var GithubIconLink = '/images/logos/github.png';

  return (
    <div className='footer-container'>
      <div className='w-full flex flex-col lg:flex-row justify-between xl:justify-center items-center gap-8'>
        <div className='footer-column lg:w-auto'>
          <div className='flex flex-row gap-20 p-8'>
            <div>
              <h1 className='text-xl mb-2'>Contact me:</h1>
              <h2 className='mb-2'>julomaciasgonzalez@juliodev.co.uk</h2>
              <a href="https://www.linkedin.com/in/julio-macias-gonzalez-199266282/" 
                 target='_blank' 
                 rel="noopener noreferrer" 
                 className='icon'>
                <div className='flex flex-row gap-1'>
                  <h2>LinkedIn</h2>
                  <i className="bi bi-linkedin"></i>
                </div>
              </a>
            </div>
            <div>
              <h1 className='text-xl mb-2'>Other links:</h1>
              <a href="https://github.com/JulioMaciasS" 
                 target='_blank' 
                 rel="noopener noreferrer" 
                 className='icon'>
                <img src={GithubIconLink} alt="Github Icon" className="icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className='lg:mr-8 xl:mr-0'>
          <SkillsCard />
        </div>
      </div>
      
      <p className='website-rights'>© 2024 JulioDev. All rights reserved.</p>
    </div>
  );
}