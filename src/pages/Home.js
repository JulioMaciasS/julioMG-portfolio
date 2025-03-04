import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import CardsSection from '../components/Home/CardsSection';
import AboutMe from '../components/Home/AboutMe';


function Home() {
    return (
        <>
            <HeroSection />
            <div className='min-h-fit flex flex-col items-center justify-center hero-section'>
                <div className='flex flex-col items-center justify-center w-full min-h-[60vh] bg-[whitesmoke] rounded-bl-3xl rounded-br-3xl'>
                  <AboutMe />
                </div>
                <div className='flex flex-col items-center justify-center w-full  min-h-[60vh] bg-[white]  pb-20'>
                <CardsSection />
                </div>
            </div>
        </>
    );
}

export default Home;