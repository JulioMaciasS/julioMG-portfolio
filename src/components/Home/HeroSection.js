'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import Link from '../LocalizedLink';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
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

/**
 * Pixel-art ghost companion. It is FIXED to the viewport. Behaviours:
 *  - It wanders the bottom band ONLY while the hero is in view, so it never
 *    distracts readers in the content below.
 *  - Once the reader scrolls into the content, it glides up to rest above the
 *    floating "Contact me" button (no jump) and stays there until they scroll
 *    back to the hero.
 *  - Click it and it glides progressively over to the button and jumps a few
 *    times, then returns to wandering (in the hero) or resting (in the content).
 *
 * Everything is computed in viewport coordinates (the contact button is fixed
 * too), so it stays correct no matter how the page is scrolled or resized.
 */
function HeroMascot() {
  const ref = useRef(null);
  const pupilsRef = useRef(null);
  const st = useRef({
    x: 0, y: 110, face: 1, clicking: false, parked: false, cancelled: false, reduce: false,
    wander: null, timers: [], step: null, glideToButton: null, heroRatio: null, w: 48, h: 38,
    eyeX: 0, eyeY: 0, eyeRaf: null,
  });
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const s = st.current;
    s.cancelled = false;
    s.w = el.offsetWidth || 48;
    s.h = el.offsetHeight || 38;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const rand = (a, b) => a + Math.random() * (b - a);

    const region = () => {
      const vw = window.innerWidth;
      return { minX: 16, maxX: Math.max(16, vw - s.w - 16), minY: 84, maxY: 168 };
    };
    const place = (transition) => {
      el.style.transition = transition;
      // No scaleX flip — the body stays put and the eyes convey direction instead.
      el.style.transform = `translate(${s.x}px, ${-s.y}px)`;
    };
    const buttonTarget = () => {
      const btn = document.querySelector('.floating-contact');
      if (!btn) return null;
      const br = btn.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      return {
        tx: clamp(br.left + br.width / 2 - s.w / 2, 16, Math.max(16, vw - s.w - 16)),
        ty: clamp(vh - br.top + 10, 40, vh - s.h),
      };
    };
    const glideToButton = (maxDur, instant) => {
      const t = buttonTarget();
      if (!t) return 0;
      const dist = Math.hypot(t.tx - s.x, t.ty - s.y);
      const dur = instant || dist < 8 ? 0 : clamp(dist / 200, 0.6, maxDur);
      s.face = t.tx < s.x ? -1 : 1;
      s.x = t.tx;
      s.y = t.ty;
      place(dur === 0 ? 'none' : `transform ${dur}s cubic-bezier(0.34, 0, 0.2, 1)`);
      return dur * 1000;
    };
    s.glideToButton = glideToButton;
    s.reduce = reduce;

    // How much of the hero is still in view (its bottom edge / viewport height).
    const heroRatio = () => {
      const hero = document.querySelector('.hero-container');
      if (!hero) return window.scrollY <= 1 ? 1 : 0;
      return hero.getBoundingClientRect().bottom / window.innerHeight;
    };
    s.heroRatio = heroRatio;

    // On mobile/tablet the bottom strip is occupied by the hero CTAs + contact
    // button, so the ghost rests above the button instead of wandering.
    const isMobile = () => window.innerWidth < 1024;
    const canWander = () => !reduce && !isMobile();
    s.canWander = canWander;

    const r0 = region();
    s.x = clamp(s.x || r0.minX + (r0.maxX - r0.minX) * 0.18, r0.minX, r0.maxX);
    s.y = clamp(s.y || 110, r0.minY, r0.maxY);
    place('none');

    const step = () => {
      if (s.cancelled || s.clicking || s.parked) return;
      const r = region();
      const tx = rand(r.minX, r.maxX);
      const ty = rand(r.minY, r.maxY);
      const dist = Math.hypot(tx - s.x, ty - s.y);
      const dur = clamp(dist / 95, 2.6, 7); // roughly constant speed
      s.face = tx < s.x ? -1 : 1;
      s.x = tx;
      s.y = ty;
      place(`transform ${dur}s ease-in-out`);
      s.wander = setTimeout(step, dur * 1000 + rand(350, 1200));
    };
    s.step = step;

    if (!canWander() || heroRatio() <= 0.5) {
      s.parked = true;
      glideToButton(0, true); // rest above the button (mobile / reduced motion / past the hero)
    } else {
      s.wander = setTimeout(step, 500);
    }

    // Wander only while the hero is in view. Once the reader scrolls into the
    // content, the ghost rests above the contact button (no jump, no wandering)
    // so it never distracts. Hysteresis avoids flapping at the boundary.
    const onScroll = () => {
      if (s.cancelled || s.clicking || !canWander()) return;
      const ratio = heroRatio();
      if (s.parked) {
        if (ratio > 0.65) {
          s.parked = false;
          step(); // scrolled back into the hero → resume wandering
        }
      } else if (ratio < 0.45) {
        s.parked = true;
        clearTimeout(s.wander);
        glideToButton(0.9); // left the hero → rest above the button
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      s.w = el.offsetWidth || s.w;
      s.h = el.offsetHeight || s.h;
      if (!canWander()) {
        // mobile / reduced motion → rest above the button
        s.parked = true;
        clearTimeout(s.wander);
        glideToButton(0, true);
      } else if (s.clicking) {
        glideToButton(0, true);
      } else if (heroRatio() > 0.5) {
        if (s.parked) {
          s.parked = false;
          step();
        } else {
          const r = region();
          s.x = clamp(s.x, r.minX, r.maxX);
          s.y = clamp(s.y, r.minY, r.maxY);
        }
      } else {
        s.parked = true;
        clearTimeout(s.wander);
        glideToButton(0, true);
      }
    };
    window.addEventListener('resize', onResize);

    // --- Eyes track the cursor (fine pointers only; respects reduced motion) ---
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;
    const onMouseMove = (e) => { lastMouseX = e.clientX; lastMouseY = e.clientY; };
    const EYE_MAX = 0.5; // max pupil shift in SVG units — keeps the pupil inside the eye
    const tickEyes = () => {
      if (s.cancelled) return;
      const pupils = pupilsRef.current;
      if (pupils) {
        const cx = s.x + s.w / 2;                        // ghost centre, screen px
        const cy = window.innerHeight - s.y - s.h / 2;
        // While gliding to + jumping over the contact button, look at the
        // button; otherwise follow the cursor.
        let aimX = lastMouseX;
        let aimY = lastMouseY;
        if (s.clicking) {
          const btn = document.querySelector('.floating-contact');
          if (btn) {
            const b = btn.getBoundingClientRect();
            aimX = b.left + b.width / 2;
            aimY = b.top + b.height / 2;
          }
        }
        const dx = aimX - cx;
        const dy = aimY - cy;
        const len = Math.hypot(dx, dy) || 1;
        const tx = (dx / len) * EYE_MAX;
        const ty = (dy / len) * EYE_MAX;
        s.eyeX += (tx - s.eyeX) * 0.2;                   // ease toward the target
        s.eyeY += (ty - s.eyeY) * 0.2;
        pupils.setAttribute('transform', `translate(${s.eyeX.toFixed(3)} ${s.eyeY.toFixed(3)})`);
      }
      s.eyeRaf = requestAnimationFrame(tickEyes);
    };
    if (finePointer && !reduce) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      s.eyeRaf = requestAnimationFrame(tickEyes);
    }

    return () => {
      s.cancelled = true;
      clearTimeout(s.wander);
      s.timers.forEach(clearTimeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (s.eyeRaf) cancelAnimationFrame(s.eyeRaf);
    };
  }, []);

  const handleClick = () => {
    const el = ref.current;
    const s = st.current;
    if (!el || s.clicking || !s.glideToButton) return;
    s.clicking = true;
    clearTimeout(s.wander);

    const arrive = s.glideToButton(2.4) + 40; // progressive glide (0 if already parked)
    s.timers.push(setTimeout(() => setJumping(true), arrive));
    s.timers.push(setTimeout(() => setJumping(false), arrive + 1400));
    s.timers.push(setTimeout(() => {
      s.clicking = false;
      // Resume wandering only on desktop and back in the hero; else rest at the button.
      if (!s.cancelled && s.canWander && s.canWander() && s.heroRatio && s.heroRatio() > 0.5) {
        s.parked = false;
        if (s.step) s.step();
      } else {
        s.parked = true;
      }
    }, arrive + 1550));
  };

  return createPortal(
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      className={`hero-mascot ${jumping ? 'is-jumping' : ''}`}
      style={{ transform: 'translate(48px, -110px)' }}
      aria-label="Poke the mascot"
    >
      <span className="hero-mascot-bob">
        <svg
          className="hero-mascot-sprite"
          viewBox="0 0 10 8"
          shapeRendering="crispEdges"
          width="48"
          height="38"
        >
          <g fill="#f4b942">
            <rect x="3" y="0" width="4" height="1" />
            <rect x="2" y="1" width="6" height="1" />
            <rect x="1" y="2" width="8" height="5" />
            <rect x="1" y="7" width="2" height="1" />
            <rect x="4" y="7" width="2" height="1" />
            <rect x="7" y="7" width="2" height="1" />
          </g>
          <g fill="#ffffff">
            <rect x="2" y="3" width="2" height="2" />
            <rect x="5" y="3" width="2" height="2" />
          </g>
          <g fill="#1a1717" ref={pupilsRef}>
            <rect x="2.5" y="3.5" width="1" height="1" />
            <rect x="5.5" y="3.5" width="1" height="1" />
          </g>
        </svg>
      </span>
    </button>,
    document.body
  );
}

export default function HeroSection() {
  const t = useTranslations();
  const spotlightRef = useSpotlight();
  // The mascot portals into document.body, so it must only render on the client.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="hero-content relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-6xl">
        {/* Text */}
        <div className="lg:w-[55%] text-center lg:text-left text-white">
          <div className="hero-intro justify-center lg:justify-start animate-fade-in">
            <div className="hero-avatar-wrap">
              <img
                src="/images/profile-pic.jpeg"
                alt="Julio Macias"
                className="hero-avatar"
              />
              <span className="hero-badge hero-badge--overlay">
                <span className="hero-badge-dot" />
                {t('home.hero.badge')}
              </span>
            </div>
          </div>
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

      {mounted && <HeroMascot />}

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
