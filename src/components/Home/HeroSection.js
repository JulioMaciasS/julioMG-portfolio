import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollDown = () => {
    // Find the AboutMe section element
    const aboutMeSection = document.querySelector('.bg-[whitesmoke]');
    
    if (aboutMeSection) {
      // Scroll to the AboutMe section with a smooth animation
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if AboutMe section isn't found
      window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero-container p-6 relative flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-80px)] overflow-hidden px-4">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='-translate-y-28 lg:-translate-y-0 h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <div className="relative z-0 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Welcome to my portfolio!
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-200 mb-8">
              I'm an aspiring software engineer that chases problems and pursues solutions.
            </h2>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-6">
              <Link to="/projects">
                <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
                  Projects
                </Button>
              </Link>
              <Link to="/contact-me">
                <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonShape="btn--round">
                Contact me
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Container - hidden on mobile */}
          <div className="hidden z-1 max-w-fit 0 lg:flex lg:w-1/2 mt-8 lg:mt-0 relative justify-center">
            <img
              src="./images/hero/profile-pic.jpg"
              alt="Profile Pic"
              className="rounded-full object-cover w-80 h-80 shadow-2xl"
            />
          </div>
        </div>
        <button
          onClick={scrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 focus:outline-none z-10"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </button>
        </div>
      </section>
    </>
  );
}