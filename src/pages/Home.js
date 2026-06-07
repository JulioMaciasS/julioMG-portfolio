import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/Seo/SeoHead';
import HeroSection from '../components/Home/HeroSection';
import CardsSection from '../components/Home/CardsSection';
import AboutMe from '../components/Home/AboutMe';


function Home() {
    const { t } = useTranslation();
    return (
        <>
            <SeoHead
                path="/"
                title={t('home.meta.title')}
                description={t('home.meta.description')}
                image="https://portfolio.juliodev.co.uk/og-image.png"
            />
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