import React from 'react';
import './Marquee.css';

const ITEMS = [
  'React', 'Next.js', 'TypeScript', 'Supabase', 'AWS', 'Java',
  'Spring Boot', 'Angular', 'Docker', 'CI/CD', 'PostgreSQL', 'Node.js'
];

/** Infinite horizontal ticker of the tech stack — the moving transition between
 *  the hero and the first content section. Pure CSS, pauses on hover, and stops
 *  for reduced-motion users. */
export default function Marquee() {
  const row = (
    <div className="marquee-row" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <React.Fragment key={i}>
          <span className="marquee-item">{item}</span>
          <span className="marquee-dot">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
