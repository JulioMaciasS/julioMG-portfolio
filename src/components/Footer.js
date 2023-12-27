import React from 'react';
import './Footer.css';
import SkillsCard from './SkillsCard';

function Footer() {

  var InstagramIconLink = './images/logos/instagram.png';
  var LinkedInIconLink = './images/logos/linkedin.png';
  var GithubIconLink = './images/logos/github.png';


  return (
    <div className='footer-container'>

      <div className='footer-column'>

     

          <div className='footer-column'>

            <h1>Social media</h1>
            
            <div className='icons-wrapper'>

              <a href="https://www.instagram.com/julio.m.g_/" target='_blank' rel="noopener noreferrer" className='icon'>
                     <img src={InstagramIconLink} alt="Instagram Icon" className="icon" />
              </a>

              <a href="https://www.linkedin.com/in/julio-macias-gonzalez-199266282/" target='_blank' rel="noopener noreferrer" className='icon'>
              <img src={LinkedInIconLink} alt="LinkedIn Icon" className="icon" />
              </a>

              <a href="https://github.com/JulioMaciasS" target='_blank' rel="noopener noreferrer" className='icon'>
              <img src={GithubIconLink} alt="Github Icon" className="icon" />
              </a>

            </div>
          
          </div>

          <div className='footer-column'>
          </div>
        <SkillsCard />


      </div>
      <p className='website-rights'>JulioTech 2023©</p>

    </div>
  );
}

export default Footer;
