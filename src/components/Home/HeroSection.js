import React, { useRef } from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import Link from '../LocalizedLink';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useSpotlight from '../../hooks/useSpotlight';

/** Profile photo that tilts in 3D toward the cursor. */
function TiltPhoto() {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg) scale(1.03)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)';
  };

  return (
    <div className="hero-photo-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="hero-photo-ring" aria-hidden="true" />
      <div ref={ref} className="hero-photo-tilt">
        <img
          src="./images/hero/profile-pic.jpg"
          alt="Julio Macias"
          className="hero-photo rounded-full object-cover w-72 h-72 xl:w-80 xl:h-80"
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useTranslation();
  const spotlightRef = useSpotlight();

  const scrollDown = () => {
    const next = document.getElementById('after-hero');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
    else window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <section
      ref={spotlightRef}
      className="spotlight-bg hero-container relative flex flex-col items-center justify-center h-[calc(100vh-80px)] overflow-hidden px-6"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-6xl">
        {/* Text */}
        <div className="lg:w-3/5 text-center lg:text-left text-white">
          <span className="hero-badge animate-fade-in">
            <span className="hero-badge-dot" />
            {t('home.hero.badge')}
          </span>
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 mb-4 animate-fade-up">
            {t('home.hero.title')}
          </h1>
          <p className="hero-subtitle text-lg lg:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/services">
              <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
                {t('home.hero.work')}
              </Button>
            </Link>
            <Link to="/projects">
              <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonShape="btn--round">
                {t('home.hero.projects')}
              </Button>
            </Link>
          </div>
          <Link to="/contact-me" className="hero-text-link">
            {t('home.hero.contact')}
          </Link>
        </div>

        {/* Photo */}
        <div className="hidden lg:flex lg:w-2/5 justify-center">
          <TiltPhoto />
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 focus:outline-none z-10"
        aria-label={t('home.hero.scrollAria')}
      >
        <ChevronDown className="w-8 h-8 text-white/80 animate-bounce" />
      </button>
    </section>
  );
}
