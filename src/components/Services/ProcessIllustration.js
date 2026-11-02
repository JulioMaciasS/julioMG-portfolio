import React from 'react';

// Same palette as the service illustrations.
const C = {
  canvas: '#f6f3ec', card: '#ffffff', line: '#e6e2da', ink: '#1a1717',
  ink2: '#2a2624', amber: '#f4b942', amberSoft: '#fbe3b0', amberDark: '#c9902a',
  bar: '#d9d4ca', bar2: '#c9c3b8', muted: '#9a948a',
};

const check = (x, y, s = 1) => `M${x - 7 * s},${y} l${5 * s},${5 * s} l${10 * s},${-11 * s}`;

// Head-and-shoulders silhouette centred on (cx, cy).
const Person = ({ cx, cy, body, head }) => (
  <g>
    <circle cx={cx} cy={cy - 14} r="13" fill={head} />
    <path d={`M${cx - 26} ${cy + 26}a26 22 0 0 1 52 0z`} fill={body} />
  </g>
);

// 01 — A video call between two people, with a short slot on the calendar.
function Call() {
  return (
    <>
      <rect x="28" y="30" width="200" height="140" rx="14" fill={C.ink} />
      <rect x="38" y="40" width="88" height="96" rx="9" fill={C.ink2} />
      <rect x="130" y="40" width="88" height="96" rx="9" fill={C.ink2} />
      <Person cx={82} cy={96} head={C.amberSoft} body={C.amber} />
      <Person cx={174} cy={96} head={C.bar} body={C.muted} />
      {[104, 128, 152].map((cx, i) => (
        <circle key={cx} cx={cx} cy="153" r="8" fill={i === 2 ? '#d9534f' : '#3a3431'} />
      ))}
      <rect x="216" y="70" width="80" height="96" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="216" y="70" width="80" height="22" rx="11" fill={C.amber} />
      <rect x="216" y="81" width="80" height="11" fill={C.amber} />
      {[0, 1, 2].map((row) => [0, 1, 2].map((col) => (
        <rect key={`${row}-${col}`} x={226 + col * 22} y={102 + row * 20} width="16" height="14" rx="4"
          fill={row === 1 && col === 1 ? C.ink : C.canvas} />
      )))}
    </>
  );
}

// 02 — A one-page proposal with a ticked scope list and a fixed price tag.
function Proposal() {
  return (
    <>
      <rect x="70" y="20" width="150" height="168" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="88" y="40" width="80" height="10" rx="5" fill={C.ink} />
      <rect x="88" y="58" width="110" height="6" rx="3" fill={C.bar} />
      {[84, 108, 132].map((y) => (
        <g key={y}>
          <rect x="88" y={y - 8} width="16" height="16" rx="5" fill={C.amberSoft} />
          <path d={check(96, y, 0.55)} fill="none" stroke={C.amberDark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="112" y={y - 3} width={y === 108 ? 64 : 84} height="6" rx="3" fill={C.bar2} />
        </g>
      ))}
      <path d="M88 168c10-12 18 6 28-4s14-8 22 2" fill="none" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
      <g transform="rotate(-12 238 120)">
        <path d="M206 96h56a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8h-56l-20-28z" fill={C.amber} />
        <circle cx="200" cy="124" r="5" fill={C.card} />
        <rect x="218" y="114" width="40" height="8" rx="4" fill={C.ink} />
        <rect x="218" y="128" width="26" height="6" rx="3" fill={C.amberDark} />
      </g>
    </>
  );
}

// 03 — The site taking shape in a browser, a progress bar and a check-in message.
function Build() {
  return (
    <>
      <rect x="24" y="24" width="210" height="152" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <path d="M24 36a12 12 0 0 1 12-12h186a12 12 0 0 1 12 12v8H24z" fill="#f3f1ec" />
      {[38, 50, 62].map((cx) => <circle key={cx} cx={cx} cy="34" r="3.5" fill={C.bar} />)}
      <rect x="38" y="54" width="182" height="50" rx="8" fill={C.ink} />
      <rect x="50" y="68" width="80" height="8" rx="4" fill="#fff" />
      <rect x="50" y="84" width="44" height="10" rx="5" fill={C.amber} />
      <rect x="38" y="112" width="56" height="44" rx="8" fill={C.canvas} />
      <rect x="101" y="112" width="56" height="44" rx="8" fill={C.canvas} />
      <rect x="164" y="112" width="56" height="44" rx="8" fill="none" stroke={C.bar} strokeWidth="2" strokeDasharray="5 5" />
      <rect x="38" y="164" width="182" height="6" rx="3" fill={C.line} />
      <rect x="38" y="164" width="124" height="6" rx="3" fill={C.amber} />
      <path d="M232 60h56a10 10 0 0 1 10 10v30a10 10 0 0 1-10 10h-36l-14 12v-12h-6a10 10 0 0 1-10-10V70a10 10 0 0 1 10-10z" fill={C.ink} />
      <rect x="236" y="74" width="48" height="6" rx="3" fill="#fff" />
      <rect x="236" y="88" width="32" height="6" rx="3" fill={C.muted} />
      <path d="M246 128h44a10 10 0 0 1 10 10v20a10 10 0 0 1-10 10h-4v10l-12-10h-28a10 10 0 0 1-10-10v-20a10 10 0 0 1 10-10z" fill={C.amberSoft} />
      <path d={check(268, 149, 0.7)} fill="none" stroke={C.amberDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

// 04 — A short guide with a training video, and a lifebuoy for ongoing support.
function Handover() {
  return (
    <>
      <path d="M40 40h86a14 14 0 0 1 14 14v124a10 10 0 0 0-10-10H40z" fill={C.card} stroke={C.line} strokeWidth="2" />
      <path d="M240 40h-86a14 14 0 0 0-14 14v124a10 10 0 0 1 10-10h90z" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="54" y="58" width="70" height="44" rx="6" fill={C.ink} />
      <path d="M83 70l14 10-14 10z" fill={C.amber} />
      {[114, 128, 142].map((y, i) => <rect key={y} x="54" y={y} width={i === 2 ? 44 : 66} height="6" rx="3" fill={C.bar} />)}
      {[62, 80, 98, 116].map((y, i) => (
        <g key={y}>
          <circle cx="164" cy={y} r="5" fill={i < 3 ? C.amber : C.bar} />
          <rect x="176" y={y - 3} width={i === 1 ? 36 : 50} height="6" rx="3" fill={C.bar2} />
        </g>
      ))}
      <g transform="translate(250 136)">
        <circle r="38" fill={C.amber} />
        <circle r="18" fill={C.canvas} />
        {[45, 135, 225, 315].map((a) => (
          <path key={a} d="M-9 -38h18v20h-18z" transform={`rotate(${a})`} fill={C.card} />
        ))}
        <circle r="18" fill="none" stroke={C.amberDark} strokeWidth="2" />
      </g>
    </>
  );
}

const SCENES = { call: Call, proposal: Proposal, build: Build, handover: Handover };

/** Text-free picture of one step of the working process. */
function ProcessIllustration({ type }) {
  const Scene = SCENES[type];
  if (!Scene) return null;
  return (
    <svg className="process-illustration" viewBox="0 0 320 200" aria-hidden="true">
      <rect width="320" height="200" fill={C.canvas} />
      <Scene />
    </svg>
  );
}

export default ProcessIllustration;
