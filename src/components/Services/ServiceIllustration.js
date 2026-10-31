import React from 'react';

// Five-point star centred on (cx, cy), for the rating row.
const star = (cx, cy, r) =>
  Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');

const sparkle = 'M0,-13 C2,-3 3,-2 13,0 C3,2 2,3 0,13 C-2,3 -3,2 -13,0 C-3,-2 -2,-3 0,-13Z';

/**
 * A drawn stand-in for a screenshot where no real one shows the service well.
 * 'search': a search results page with your business on top, and an AI
 * assistant's answer recommending it. Text-free, so it works in every locale.
 */
function ServiceIllustration({ type }) {
  if (type !== 'search') return null;
  return (
    <svg
      className="service-illustration"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="640" height="400" fill="#f6f3ec" />

      {/* Search bar */}
      <rect x="40" y="34" width="400" height="46" rx="23" fill="#fff" stroke="#e6e2da" strokeWidth="2" />
      <circle cx="68" cy="55" r="8" fill="none" stroke="#9a948a" strokeWidth="3" />
      <line x1="74" y1="61" x2="81" y2="68" stroke="#9a948a" strokeWidth="3" strokeLinecap="round" />
      <rect x="94" y="52" width="190" height="10" rx="5" fill="#d9d4ca" />

      {/* Top result: your business */}
      <rect x="40" y="98" width="400" height="96" rx="16" fill="#fff" stroke="#f4b942" strokeWidth="3" />
      <circle cx="66" cy="124" r="11" fill="#1a1717" />
      <rect x="86" y="119" width="120" height="9" rx="4.5" fill="#c9c3b8" />
      <rect x="56" y="144" width="250" height="13" rx="6.5" fill="#1a1717" />
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon key={i} points={star(62 + i * 17, 176, 7)} fill="#f4b942" />
      ))}
      <rect x="152" y="172" width="150" height="8" rx="4" fill="#d9d4ca" />
      <path d="M408 112c-7 0-12 5-12 12 0 9 12 20 12 20s12-11 12-20c0-7-5-12-12-12z" fill="#f4b942" />
      <circle cx="408" cy="124" r="4.5" fill="#fff" />

      {/* Other results */}
      {[212, 298].map((y) => (
        <g key={y}>
          <rect x="40" y={y} width="400" height="72" rx="16" fill="#fff" stroke="#ece8e0" strokeWidth="2" />
          <circle cx="66" cy={y + 24} r="10" fill="#e6e2da" />
          <rect x="86" y={y + 20} width="100" height="8" rx="4" fill="#e6e2da" />
          <rect x="56" y={y + 42} width="220" height="11" rx="5.5" fill="#c9c3b8" />
        </g>
      ))}

      {/* AI assistant answer recommending the business */}
      <rect x="388" y="160" width="220" height="176" rx="20" fill="rgba(26,23,23,0.14)" />
      <rect x="380" y="150" width="220" height="176" rx="20" fill="#1a1717" />
      <path d={sparkle} transform="translate(410 182)" fill="#f4b942" />
      <rect x="432" y="176" width="92" height="11" rx="5.5" fill="#f4b942" />
      <rect x="402" y="208" width="176" height="8" rx="4" fill="#ffffff" opacity="0.85" />
      <rect x="402" y="226" width="150" height="8" rx="4" fill="#ffffff" opacity="0.55" />
      <rect x="402" y="252" width="176" height="52" rx="12" fill="#2a2624" stroke="#f4b942" strokeWidth="2" />
      <circle cx="424" cy="278" r="10" fill="#f4b942" />
      <rect x="442" y="270" width="96" height="9" rx="4.5" fill="#ffffff" />
      <rect x="442" y="285" width="64" height="7" rx="3.5" fill="#9a948a" />
    </svg>
  );
}

export default ServiceIllustration;
