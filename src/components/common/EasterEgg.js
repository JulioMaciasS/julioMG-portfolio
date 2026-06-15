'use client';

import React, { useEffect, useState } from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { PartyPopper, X } from 'lucide-react';
import './EasterEgg.css';

const SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a',
];

/**
 * Konami-code easter egg: ↑ ↑ ↓ ↓ ← → ← → B A pops a celebratory toast and a
 * short burst of confetti. Harmless, dependency-free, and self-cleaning.
 */
export default function EasterEgg() {
  const t = useTranslations();
  const [active, setActive] = useState(false);

  useEffect(() => {
    let pos = 0;
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQUENCE[pos]) {
        pos += 1;
        if (pos === SEQUENCE.length) {
          pos = 0;
          setActive(true);
        }
      } else {
        pos = key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const timer = setTimeout(() => setActive(false), 9000);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active) return null;

  const confetti = Array.from({ length: 36 });

  return (
    <>
      <div className="egg-confetti" aria-hidden="true">
        {confetti.map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i / confetti.length) * 100}%`,
              animationDelay: `${(i % 9) * 0.12}s`,
              background: ['#f4b942', '#4ade80', '#60a5fa', '#f472b6', '#fff'][i % 5],
            }}
          />
        ))}
      </div>
      <div className="egg-toast" role="status">
        <PartyPopper className="text-accent shrink-0" size={22} />
        <div className="flex-1">
          <p className="font-semibold">{t('easterEgg.title')}</p>
          <p className="text-sm text-gray-300">{t('easterEgg.text')}</p>
          <Link to="/services" className="egg-link" onClick={() => setActive(false)}>
            {t('easterEgg.cta')} →
          </Link>
        </div>
        <button onClick={() => setActive(false)} aria-label="Close" className="text-gray-400 hover:text-white">
          <X size={18} />
        </button>
      </div>
    </>
  );
}
