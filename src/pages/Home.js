import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import CardsSection from '../components/Home/CardsSection';
import AboutMe from '../components/Home/AboutMe';


function Home () { 
    return(
        <>
        
        <HeroSection/>
        <div className='container-background min-h-fit flex flex-col items-center justify-center hero-section'>       
        <AboutMe/>
        <CardsSection/>
        </div>
        </>
    );
}

export default Home;