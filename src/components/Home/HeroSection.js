import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import Link from '../LocalizedLink';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useSpotlight from '../../hooks/useSpotlight';

/** Stylised code window — the hero's visual focal point on desktop. */
function CodeWindow() {
  return (
    <div className="hero-code" aria-hidden="true">
      <div className="hero-code-glow" />
      <div className="hero-code-window">
        <div className="hero-code-bar">
          <span className="hero-code-dot is-red" />
          <span className="hero-code-dot is-yellow" />
          <span className="hero-code-dot is-green" />
          <span className="hero-code-file">julio.js</span>
        </div>
        <pre className="hero-code-body"><code>
<span className="c-kw">const</span> <span className="c-var">julio</span> = {'{'}
{'\n'}  role: <span className="c-str">'Full-stack developer'</span>,
{'\n'}  stack: [<span className="c-str">'React'</span>, <span className="c-str">'Next.js'</span>, <span className="c-str">'Supabase'</span>],
{'\n'}  focus: [<span className="c-str">'web'</span>, <span className="c-str">'cloud'</span>, <span className="c-str">'AI'</span>],
{'\n'}  openToWork: <span className="c-bool">true</span>,
{'\n'}{'}'};<span className="hero-code-cursor" />
        </code></pre>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useTranslation();
  const spotlightRef = useSpotlight();

  const scrollDown = () => {
    const next = document.getElementById('after-hero');
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' });
    else window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <section
      ref={spotlightRef}
      className="spotlight-bg hero-container relative flex flex-col items-center justify-center h-[calc(100vh-80px)] overflow-hidden px-6"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-6xl">
        {/* Text */}
        <div className="lg:w-[55%] text-center lg:text-left text-white">
          <span className="hero-badge animate-fade-in">
            <span className="hero-badge-dot" />
            {t('home.hero.badge')}
          </span>
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mt-5 mb-4 animate-fade-up">
            {t('home.hero.title')}
          </h1>
          <p className="hero-subtitle text-lg lg:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
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

        {/* Code window */}
        <div className="hidden lg:flex lg:w-[45%] justify-center">
          <CodeWindow />
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
