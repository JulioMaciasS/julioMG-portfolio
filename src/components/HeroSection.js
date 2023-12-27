import React, { useEffect, useRef } from 'react';

import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CardsSection from './CardsSection';
import { Link } from 'react-router-dom';



export default function HeroSection() {
  // Use useRef to create a reference to the video element


  /*
   useEffect(() => {
     // Access the video element using the useRef reference
     const vid = document.getElementById('backgroundVideo')
  
     if (vid) {
       // Set the playback rate to control the speed (1 is normal speed)
       vid.playbackRate = 0.75; // Adjust the value as needed
     }
   }, []); // Empty dependency array ensures this effect runs once after the initial render
  */
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' id='backgroundVideo' autoPlay loop muted>
      </video> */}
      <div className='text-box'>
        <h1>I'm Julio. Welcome to my portfolio!</h1>
        <h2>I'm an aspiring software engineer that chases problems and pursues solutions</h2>
      </div>
      {/* <p className='italic-note'>
        Please hire me, this website is amazing! <span className='note'>ฅ^._.^ฅ</span>
      </p> */}
      {/* <img src='/images/profile-pic.png' alt='profile' class="profile-picture" /> */}
      <div>
                  {/*Card containing About me hyperlink*/}
        <div className='bottom-cards-container'>
          <Link to='/about-me' className='custom-link'>
            <div className='web-info-text-container' id='aboutmelnk'>
              <h1>
                About me
              </h1>
            </div>
          </Link>
          {/*Card containing Projects hyperlink*/}
          <Link to='/projects' className='custom-link'>
            <div className='web-info-text-container' id='projects'>
              <h1>
                Projects
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>







  );

}
