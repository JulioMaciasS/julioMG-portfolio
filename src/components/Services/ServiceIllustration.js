import React from 'react';

// Shared palette: cream canvas, white cards, charcoal and the site's amber.
const C = {
  canvas: '#f6f3ec', card: '#ffffff', line: '#e6e2da', ink: '#1a1717',
  ink2: '#2a2624', amber: '#f4b942', amberSoft: '#fbe3b0', amberDark: '#c9902a',
  bar: '#d9d4ca', bar2: '#c9c3b8', muted: '#9a948a',
};

// Five-point star centred on (cx, cy), for the rating row.
const star = (cx, cy, r) =>
  Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');

const sparkle = 'M0,-13 C2,-3 3,-2 13,0 C3,2 2,3 0,13 C-2,3 -3,2 -13,0 C-3,-2 -2,-3 0,-13Z';
const check = (x, y, s = 1) => `M${x - 7 * s},${y} l${5 * s},${5 * s} l${10 * s},${-11 * s}`;

// A website in a browser window, and the same site on a phone with a booking step.
function Websites() {
  return (
    <>
      <rect x="40" y="40" width="420" height="300" rx="16" fill={C.card} stroke={C.line} strokeWidth="2" />
      <path d="M40 56a16 16 0 0 1 16-16h388a16 16 0 0 1 16 16v12H40z" fill="#f3f1ec" />
      {[58, 72, 86].map((cx) => <circle key={cx} cx={cx} cy="54" r="4.5" fill={C.bar} />)}
      <rect x="60" y="84" width="380" height="124" rx="12" fill={C.ink} />
      <rect x="84" y="112" width="190" height="13" rx="6.5" fill="#fff" />
      <rect x="84" y="134" width="150" height="8" rx="4" fill={C.muted} />
      <rect x="84" y="164" width="86" height="24" rx="12" fill={C.amber} />
      <circle cx="380" cy="146" r="34" fill={C.ink2} />
      <path d="M362 158l12-14 10 10 6-6 12 10z" fill={C.amber} />
      {[60, 188, 316].map((x) => (
        <g key={x}>
          <rect x={x} y="224" width="124" height="96" rx="12" fill={C.canvas} />
          <circle cx={x + 22} cy="250" r="10" fill={C.amberSoft} />
          <rect x={x + 14} y="272" width="84" height="8" rx="4" fill={C.bar2} />
          <rect x={x + 14} y="288" width="60" height="7" rx="3.5" fill={C.bar} />
        </g>
      ))}
      <rect x="470" y="96" width="136" height="266" rx="24" fill={C.ink} />
      <rect x="480" y="110" width="116" height="238" rx="16" fill={C.card} />
      <rect x="490" y="122" width="96" height="48" rx="8" fill={C.ink2} />
      <rect x="498" y="136" width="56" height="7" rx="3.5" fill="#fff" />
      <rect x="498" y="150" width="40" height="5" rx="2.5" fill={C.muted} />
      {[0, 1, 2, 3].map((col) =>
        [0, 1, 2].map((row) => (
          <rect key={`${col}-${row}`} x={492 + col * 24} y={184 + row * 24} width="18" height="18" rx="4"
            fill={col === 1 && row === 1 ? C.amber : C.canvas} />
        ))
      )}
      <rect x="490" y="262" width="96" height="24" rx="12" fill={C.amber} />
      <circle cx="538" cy="314" r="14" fill={C.ink} />
      <path d={check(538, 314, 0.8)} fill="none" stroke={C.amber} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

// A booking calendar with a stay selected, a room card, and a sync to the PMS.
function Hotels() {
  const cells = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 7; col += 1) {
      const inStay = row === 2 && col >= 2 && col <= 5;
      const edge = row === 2 && (col === 2 || col === 5);
      cells.push(
        <g key={`${row}-${col}`}>
          <rect x={58 + col * 42} y={104 + row * 46} width="36" height="38" rx="8"
            fill={edge ? C.amber : inStay ? C.amberSoft : C.canvas} />
          <rect x={64 + col * 42} y={130 + row * 46} width="22" height="5" rx="2.5"
            fill={edge ? C.ink : C.bar} />
        </g>
      );
    }
  }
  return (
    <>
      <rect x="40" y="40" width="330" height="320" rx="16" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="58" y="62" width="120" height="12" rx="6" fill={C.ink} />
      <circle cx="326" cy="68" r="10" fill={C.canvas} />
      <circle cx="350" cy="68" r="10" fill={C.canvas} />
      {cells}
      <rect x="390" y="40" width="220" height="186" rx="16" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="406" y="56" width="188" height="80" rx="10" fill="#efe6d4" />
      <rect x="440" y="78" width="120" height="22" rx="6" fill={C.amberDark} />
      <rect x="432" y="96" width="136" height="26" rx="6" fill="#fff" />
      <rect x="446" y="88" width="40" height="14" rx="5" fill="#fff" stroke={C.line} />
      <rect x="514" y="88" width="40" height="14" rx="5" fill="#fff" stroke={C.line} />
      <rect x="406" y="152" width="120" height="11" rx="5.5" fill={C.ink} />
      <rect x="406" y="172" width="80" height="8" rx="4" fill={C.bar} />
      <rect x="512" y="186" width="82" height="26" rx="13" fill={C.amber} />
      <rect x="390" y="244" width="220" height="116" rx="16" fill={C.ink} />
      <path d="M432 318h46a18 18 0 0 0 0-36 26 26 0 0 0-50 6 15 15 0 0 0 4 30z" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <path d="M520 284a26 26 0 0 1 40 10" fill="none" stroke={C.amber} strokeWidth="4" strokeLinecap="round" />
      <path d="M558 284l4 12-12-2" fill="none" stroke={C.amber} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M570 324a26 26 0 0 1-40-10" fill="none" stroke={C.amber} strokeWidth="4" strokeLinecap="round" />
      <path d="M532 324l-4-12 12 2" fill="none" stroke={C.amber} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

// A search results page with your business on top, and an AI assistant's
// answer recommending it.
function Search() {
  return (
    <>
      <rect x="40" y="34" width="400" height="46" rx="23" fill={C.card} stroke={C.line} strokeWidth="2" />
      <circle cx="68" cy="55" r="8" fill="none" stroke={C.muted} strokeWidth="3" />
      <line x1="74" y1="61" x2="81" y2="68" stroke={C.muted} strokeWidth="3" strokeLinecap="round" />
      <rect x="94" y="52" width="190" height="10" rx="5" fill={C.bar} />
      <rect x="40" y="98" width="400" height="96" rx="16" fill={C.card} stroke={C.amber} strokeWidth="3" />
      <circle cx="66" cy="124" r="11" fill={C.ink} />
      <rect x="86" y="119" width="120" height="9" rx="4.5" fill={C.bar2} />
      <rect x="56" y="144" width="250" height="13" rx="6.5" fill={C.ink} />
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon key={i} points={star(62 + i * 17, 176, 7)} fill={C.amber} />
      ))}
      <rect x="152" y="172" width="150" height="8" rx="4" fill={C.bar} />
      <path d="M408 112c-7 0-12 5-12 12 0 9 12 20 12 20s12-11 12-20c0-7-5-12-12-12z" fill={C.amber} />
      <circle cx="408" cy="124" r="4.5" fill="#fff" />
      {[212, 298].map((y) => (
        <g key={y}>
          <rect x="40" y={y} width="400" height="72" rx="16" fill={C.card} stroke="#ece8e0" strokeWidth="2" />
          <circle cx="66" cy={y + 24} r="10" fill={C.line} />
          <rect x="86" y={y + 20} width="100" height="8" rx="4" fill={C.line} />
          <rect x="56" y={y + 42} width="220" height="11" rx="5.5" fill={C.bar2} />
        </g>
      ))}
      <rect x="388" y="160" width="220" height="176" rx="20" fill="rgba(26,23,23,0.14)" />
      <rect x="380" y="150" width="220" height="176" rx="20" fill={C.ink} />
      <path d={sparkle} transform="translate(410 182)" fill={C.amber} />
      <rect x="432" y="176" width="92" height="11" rx="5.5" fill={C.amber} />
      <rect x="402" y="208" width="176" height="8" rx="4" fill="#fff" opacity="0.85" />
      <rect x="402" y="226" width="150" height="8" rx="4" fill="#fff" opacity="0.55" />
      <rect x="402" y="252" width="176" height="52" rx="12" fill={C.ink2} stroke={C.amber} strokeWidth="2" />
      <circle cx="424" cy="278" r="10" fill={C.amber} />
      <rect x="442" y="270" width="96" height="9" rx="4.5" fill="#fff" />
      <rect x="442" y="285" width="64" height="7" rx="3.5" fill={C.muted} />
    </>
  );
}

// A message comes in, AI drafts the reply and the follow-up email, and a
// person approves before anything is sent.
function Automation() {
  const link = { fill: 'none', stroke: C.bar2, strokeWidth: 3, strokeDasharray: '6 7', strokeLinecap: 'round' };
  return (
    <>
      <path d="M170 200H214" {...link} />
      <path d="M306 200C330 200 330 150 352 150" {...link} />
      <path d="M306 200C330 200 330 262 352 262" {...link} />
      <path d="M494 150C516 150 516 206 534 206" {...link} />
      <path d="M494 262C516 262 516 206 534 206" {...link} />

      <rect x="40" y="134" width="130" height="132" rx="16" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="56" y="152" width="84" height="30" rx="12" fill={C.canvas} />
      <rect x="66" y="163" width="56" height="7" rx="3.5" fill={C.bar2} />
      <rect x="72" y="194" width="84" height="30" rx="12" fill={C.amberSoft} />
      <rect x="82" y="205" width="56" height="7" rx="3.5" fill={C.amberDark} />
      <rect x="56" y="236" width="64" height="18" rx="9" fill={C.canvas} />

      <circle cx="260" cy="200" r="46" fill={C.ink} />
      <path d={sparkle} transform="translate(260 200) scale(1.5)" fill={C.amber} />

      <rect x="352" y="104" width="142" height="92" rx="16" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="370" y="122" width="58" height="40" rx="6" fill={C.canvas} stroke={C.bar2} strokeWidth="2" />
      <path d="M370 124l29 20 29-20" fill="none" stroke={C.bar2} strokeWidth="2" />
      <rect x="440" y="126" width="38" height="7" rx="3.5" fill={C.bar2} />
      <rect x="440" y="142" width="28" height="7" rx="3.5" fill={C.bar} />
      <rect x="370" y="174" width="108" height="8" rx="4" fill={C.bar} />

      <rect x="352" y="216" width="142" height="92" rx="16" fill={C.card} stroke={C.amber} strokeWidth="3" />
      <circle cx="384" cy="250" r="14" fill={C.canvas} />
      <circle cx="384" cy="245" r="5" fill={C.bar2} />
      <path d="M375 258a9 9 0 0 1 18 0" fill={C.bar2} />
      <rect x="408" y="242" width="70" height="8" rx="4" fill={C.bar2} />
      <rect x="370" y="276" width="70" height="20" rx="10" fill={C.amber} />
      <rect x="448" y="276" width="30" height="20" rx="10" fill={C.canvas} />

      <rect x="534" y="170" width="76" height="72" rx="18" fill={C.amber} />
      <path d={check(572, 207, 1.4)} fill="none" stroke={C.ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

// An internal tool: navigation, key numbers, a chart and a list.
function Software() {
  const bars = [70, 110, 88, 140, 120, 160, 132];
  return (
    <>
      <rect x="40" y="40" width="560" height="320" rx="16" fill={C.card} stroke={C.line} strokeWidth="2" />
      <path d="M56 40h94v320H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16z" fill={C.ink} />
      <rect x="58" y="62" width="58" height="12" rx="6" fill="#fff" />
      {[100, 128, 156, 184, 212].map((y, i) => (
        <rect key={y} x="58" y={y} width={i === 1 ? 74 : 60} height="16" rx="8"
          fill={i === 1 ? C.amber : C.ink2} />
      ))}
      {[170, 312, 454].map((x, i) => (
        <g key={x}>
          <rect x={x} y="62" width="128" height="68" rx="12" fill={C.canvas} />
          <rect x={x + 14} y="76" width="50" height="7" rx="3.5" fill={C.bar2} />
          <rect x={x + 14} y="94" width={i === 0 ? 78 : 62} height="16" rx="8" fill={C.ink} />
          <rect x={x + 96} y="96" width="18" height="12" rx="6" fill={i === 0 ? C.amber : C.bar} />
        </g>
      ))}
      <rect x="170" y="148" width="270" height="192" rx="12" fill={C.canvas} />
      {bars.map((h, i) => (
        <rect key={i} x={190 + i * 34} y={318 - h} width="22" height={h} rx="6"
          fill={i === 5 ? C.amber : C.bar2} />
      ))}
      <rect x="456" y="148" width="126" height="192" rx="12" fill={C.canvas} />
      {[168, 204, 240, 276, 312].map((y, i) => (
        <g key={y}>
          <circle cx="474" cy={y + 6} r="6" fill={i === 0 ? C.amber : C.bar} />
          <rect x="488" y={y} width="76" height="8" rx="4" fill={C.bar2} />
          <rect x="488" y={y + 14} width="48" height="6" rx="3" fill={C.bar} />
        </g>
      ))}
    </>
  );
}

const SCENES = {
  websites: Websites,
  hotels: Hotels,
  search: Search,
  automation: Automation,
  software: Software,
};

/**
 * A drawn, text-free picture of what a service does, so it reads the same
 * in every locale. Used for the service cards and the page heroes; the
 * service pages then show real screenshots from client work.
 */
function ServiceIllustration({ type }) {
  const Scene = SCENES[type];
  if (!Scene) return null;
  return (
    <svg
      className="service-illustration"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="640" height="400" fill={C.canvas} />
      <Scene />
    </svg>
  );
}

export default ServiceIllustration;
