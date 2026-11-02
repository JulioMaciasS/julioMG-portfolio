import React from 'react';
import './Marquee.css';

// What client projects and Discentik run on, then the Java stack from Citi.
const ITEMS = [
  'Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe',
  'Cloudflare', 'AWS', 'Java', 'Spring Boot'
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

  // Four identical groups keep the -50% loop seamless even on wide monitors:
  // the first half (two groups) always overflows the viewport, so there is no
  // gap before the track resets.
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
