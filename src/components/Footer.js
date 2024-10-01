import React from 'react';
import './Footer.css';
import SkillsCard from './SkillsCard';

function Footer() {

  var InstagramIconLink = './images/logos/instagram.png';
  var LinkedInIconLink = './images/logos/Linkedin.png';
  var GithubIconLink = './images/logos/github.png';


  return (
    <div className='footer-container'>

      <div className='footer-column'>


        <div className='flex flex-row gap-20 p-8'>
          <div >

            <h1 className='text-xl mb-2'>Contact me:</h1>

            <h2 className='mb-2'>juliomaciasdev@gmail.com</h2>
            <a href="https://www.linkedin.com/in/julio-macias-gonzalez-199266282/" target='_blank' rel="noopener noreferrer" className='icon'>
              <div className='flex flex-row gap-1'>
                <h2>LinkedIn</h2><i class="bi bi-linkedin"></i>
              </div>
            </a>

        </div>
        <div>
        <h1 className='text-xl mb-2'>Other links:</h1>
        <a href="https://github.com/JulioMaciasS" target='_blank' rel="noopener noreferrer" className='icon'>
              <img src={GithubIconLink} alt="Github Icon" className="icon" />
            </a>
        </div>
        </div>
        <div className='footer-column'>
        </div>
        <SkillsCard />


      </div>
      <p className='website-rights'>© 2024 JulioTech. All rights reserved.</p>

    </div>
  );
}

export default Footer;
