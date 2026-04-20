import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/Home/HeroSection';
import CardsSection from '../components/Home/CardsSection';
import AboutMe from '../components/Home/AboutMe';


function Home() {
    return (
        <>
            <Helmet>
                <title>JulioDev | Software Engineer Portfolio</title>
                <meta name="description" content="Julio Macias Gonzalez's portfolio showcasing software engineering projects including web development, cloud architecture, and mobile applications." />
                <link rel="canonical" href="https://portfolio.juliodev.co.uk/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio.juliodev.co.uk/" />
                <meta property="og:title" content="JulioDev | Software Engineer Portfolio" />
                <meta property="og:description" content="Julio Macias Gonzalez's portfolio showcasing software engineering projects including web development, cloud architecture, and mobile applications." />
                <meta property="og:image" content="https://portfolio.juliodev.co.uk/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <HeroSection />
            <div className='min-h-fit flex flex-col items-center justify-center hero-section'>
                <div className='flex flex-col items-center justify-center w-full min-h-[60vh] bg-[whitesmoke] ounded-bl-3xl rounded-br-3xl md:rounded-bl-[50px] md:rounded-br-[50px]'>
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