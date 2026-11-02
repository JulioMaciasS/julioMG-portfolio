import React from 'react';
import { C, check, star, sparkle } from './illustrationKit';

// Small building blocks shared by the scenes below.
const Browser = ({ x, y, w, h }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" fill={C.card} stroke={C.line} strokeWidth="2" />
    <path d={`M${x} ${y + 10}a10 10 0 0 1 10-10h${w - 20}a10 10 0 0 1 10 10v6H${x}z`} fill="#f3f1ec" />
    {[0, 1, 2].map((i) => <circle key={i} cx={x + 12 + i * 10} cy={y + 9} r="3" fill={C.bar} />)}
  </g>
);
const Tick = ({ x, y, s = 1, color = C.amberDark }) => (
  <path d={check(x, y, s)} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
);
const Lines = ({ x, y, widths, gap = 12, fill = C.bar }) =>
  widths.map((w, i) => <rect key={i} x={x} y={y + i * gap} width={w} height="6" rx="3" fill={fill} />);
const Avatar = ({ cx, cy, r = 12, fill = C.amberSoft }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill={fill} />
    <circle cx={cx} cy={cy - r * 0.25} r={r * 0.38} fill={C.card} />
    <path d={`M${cx - r * 0.6} ${cy + r * 0.62}a${r * 0.6} ${r * 0.5} 0 0 1 ${r * 1.2} 0z`} fill={C.card} />
  </g>
);
const Calendar = ({ x, y, cols = 5, rows = 3, size = 16, pick = [] }) => (
  <g>
    <rect x={x} y={y} width={cols * (size + 4) + 12} height={rows * (size + 4) + 30} rx="10" fill={C.card} stroke={C.line} strokeWidth="2" />
    <rect x={x} y={y} width={cols * (size + 4) + 12} height="18" rx="9" fill={C.amber} />
    <rect x={x} y={y + 9} width={cols * (size + 4) + 12} height="9" fill={C.amber} />
    {Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (__, c) => {
      const on = pick.some(([pr, pc]) => pr === r && pc === c);
      return <rect key={`${r}-${c}`} x={x + 8 + c * (size + 4)} y={y + 24 + r * (size + 4)} width={size} height={size} rx="4" fill={on ? C.ink : C.canvas} />;
    }))}
  </g>
);

// ---- Websites ----

// A business site on desktop and phone, in several languages, editable.
function Site() {
  return (
    <>
      <Browser x={24} y={28} w={200} h={140} />
      <rect x="36" y="54" width="176" height="56" rx="8" fill={C.ink} />
      <rect x="48" y="68" width="80" height="8" rx="4" fill="#fff" />
      <rect x="48" y="86" width="40" height="12" rx="6" fill={C.amber} />
      {[36, 96, 156].map((x) => <rect key={x} x={x} y="118" width="56" height="38" rx="6" fill={C.canvas} />)}
      <rect x="206" y="62" width="70" height="122" rx="14" fill={C.ink} />
      <rect x="212" y="70" width="58" height="106" rx="9" fill={C.card} />
      <rect x="218" y="78" width="46" height="26" rx="5" fill={C.ink2} />
      <Lines x={218} y={112} widths={[46, 34, 40]} gap={11} />
      <rect x="218" y="150" width="46" height="12" rx="6" fill={C.amber} />
      <g transform="translate(272 42)">
        <circle r="20" fill={C.amberSoft} />
        <circle r="13" fill="none" stroke={C.amberDark} strokeWidth="2.5" />
        <ellipse rx="5.5" ry="13" fill="none" stroke={C.amberDark} strokeWidth="2.5" />
        <path d="M-13 0h26" stroke={C.amberDark} strokeWidth="2.5" />
      </g>
      <g transform="translate(160 66) rotate(-35)">
        <rect x="-4" y="-26" width="8" height="40" rx="2" fill={C.amber} />
        <path d="M-4 14l4 9 4-9z" fill={C.ink} />
      </g>
    </>
  );
}

// A date picked on the site's own calendar, then paid by card.
function Booking() {
  return (
    <>
      <Browser x={24} y={24} w={180} h={156} />
      <Calendar x={38} y={50} cols={6} rows={4} size={18} pick={[[1, 2], [1, 3], [1, 4]]} />
      <g transform="rotate(-8 246 120)">
        <rect x="186" y="84" width="112" height="72" rx="10" fill={C.ink} />
        <rect x="200" y="100" width="20" height="15" rx="3" fill={C.amber} />
        <Lines x={200} y={126} widths={[70]} fill={C.muted} />
        <Lines x={200} y={138} widths={[36]} fill={C.ink2} />
        <circle cx="276" cy="140" r="8" fill={C.amber} />
        <circle cx="266" cy="140" r="8" fill={C.amberDark} opacity="0.85" />
      </g>
      <circle cx="268" cy="54" r="18" fill={C.amber} />
      <Tick x={268} y={54} s={0.9} color={C.ink} />
    </>
  );
}

// An old, cluttered site moved to a clean new one, rankings still climbing.
function Migration() {
  return (
    <>
      <g transform="rotate(-6 80 104)">
        <Browser x={22} y={48} w={116} h={104} />
        <rect x="32" y="72" width="96" height="20" fill={C.bar2} />
        {[0, 1, 2, 3].map((i) => <rect key={i} x={32 + (i % 2) * 50} y={98 + Math.floor(i / 2) * 22} width="46" height="16" fill={C.bar} />)}
      </g>
      <path d="M150 104h28" stroke={C.amberDark} strokeWidth="4" strokeLinecap="round" />
      <path d="M172 94l12 10-12 10" fill="none" stroke={C.amberDark} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <Browser x={192} y={40} w={110} h={124} />
      <rect x="202" y="64" width="90" height="36" rx="7" fill={C.ink} />
      <rect x="210" y="76" width="44" height="6" rx="3" fill="#fff" />
      <rect x="210" y="86" width="24" height="7" rx="3.5" fill={C.amber} />
      <path d="M206 150l20-14 16 8 22-22 18-10" fill="none" stroke={C.amber} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="282" cy="112" r="5" fill={C.amberDark} />
    </>
  );
}

// A consent banner on the page, analytics behind a privacy shield.
function Privacy() {
  return (
    <>
      <Browser x={24} y={24} w={196} h={156} />
      {[[40, 50, 30], [76, 50, 52], [112, 50, 40], [148, 50, 62]].map(([x, , h]) => (
        <rect key={x} x={x} y={122 - h} width="24" height={h} rx="4" fill={C.bar} />
      ))}
      <rect x="34" y="128" width="176" height="42" rx="9" fill={C.ink} />
      <Lines x={44} y={138} widths={[78]} fill="#fff" />
      <Lines x={44} y={150} widths={[56]} fill={C.muted} />
      <rect x="136" y="140" width="32" height="18" rx="9" fill="none" stroke={C.muted} strokeWidth="2" />
      <rect x="172" y="140" width="30" height="18" rx="9" fill={C.amber} />
      <path d="M262 36l40 14v34c0 30-22 48-40 56-18-8-40-26-40-56V50z" fill={C.amber} />
      <Tick x={262} y={90} s={1.4} color={C.ink} />
      <rect x="236" y="156" width="52" height="24" rx="6" fill={C.card} stroke={C.line} strokeWidth="2" />
      <circle cx="248" cy="168" r="4" fill={C.muted} />
      <rect x="258" y="165" width="22" height="6" rx="3" fill={C.bar} />
    </>
  );
}

// ---- Hotels on Cloudbeds ----

// A room on the hotel's own engine with a clear price breakdown and two currencies.
function DirectBooking() {
  return (
    <>
      <rect x="24" y="26" width="140" height="150" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="36" y="38" width="116" height="62" rx="8" fill={C.ink2} />
      <rect x="54" y="66" width="80" height="18" rx="4" fill={C.amberSoft} />
      <rect x="54" y="58" width="24" height="12" rx="4" fill={C.card} />
      <rect x="50" y="84" width="88" height="6" rx="2" fill={C.amber} />
      <Lines x={36} y={112} widths={[84, 60]} />
      <rect x="36" y="142" width="116" height="22" rx="11" fill={C.amber} />
      <rect x="180" y="40" width="112" height="128" rx="10" fill={C.card} stroke={C.line} strokeWidth="2" />
      {[60, 80, 100].map((y, i) => (
        <g key={y}>
          <rect x="192" y={y} width={[44, 56, 36][i]} height="6" rx="3" fill={C.bar} />
          <rect x="258" y={y} width="22" height="6" rx="3" fill={C.bar2} />
        </g>
      ))}
      <path d="M192 120h88" stroke={C.line} strokeWidth="2" />
      <rect x="192" y="132" width="40" height="9" rx="4.5" fill={C.ink} />
      <rect x="250" y="132" width="30" height="9" rx="4.5" fill={C.amberDark} />
      <circle cx="268" cy="34" r="16" fill={C.amber} stroke={C.card} strokeWidth="3" />
      <circle cx="290" cy="46" r="16" fill={C.amberSoft} stroke={C.card} strokeWidth="3" />
      <circle cx="268" cy="34" r="7" fill="none" stroke={C.amberDark} strokeWidth="2.5" />
      <rect x="284" y="40" width="12" height="12" rx="2" fill="none" stroke={C.amberDark} strokeWidth="2.5" />
    </>
  );
}

// A price calendar with a season of rates, a CSV import and an approval step.
function Rates() {
  const heights = [28, 34, 30, 44, 52, 50, 36, 30, 32, 46, 58, 54, 40, 34];
  return (
    <>
      <rect x="24" y="24" width="200" height="152" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="36" y="36" width="70" height="9" rx="4.5" fill={C.ink} />
      {heights.map((h, i) => (
        <rect key={i} x={38 + (i % 7) * 26} y={(i < 7 ? 108 : 164) - h} width="18" height={h} rx="4"
          fill={i >= 9 && i <= 11 ? C.amber : C.bar} />
      ))}
      <rect x="238" y="30" width="58" height="72" rx="8" fill={C.card} stroke={C.line} strokeWidth="2" />
      {[0, 1, 2, 3].map((r) => [0, 1].map((c) => (
        <rect key={`${r}-${c}`} x={246 + c * 22} y={42 + r * 13} width="18" height="8" rx="2" fill={r === 0 ? C.bar2 : C.canvas} />
      )))}
      <rect x="236" y="120" width="62" height="34" rx="17" fill={C.ink} />
      <circle cx="281" cy="137" r="12" fill={C.amber} />
      <Tick x={281} y={137} s={0.6} color={C.ink} />
      <Avatar cx={252} cy={176} r={11} />
    </>
  );
}

// Payments, accounting and point of sale wired to the hotel system, keys kept on the server.
function Api() {
  return (
    <>
      {[[64, 46], [64, 154], [256, 46]].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y}L160 100`} stroke={C.bar2} strokeWidth="3" strokeDasharray="6 6" />
      ))}
      <path d="M160 100L256 154" stroke={C.amber} strokeWidth="3" />
      <rect x="120" y="66" width="80" height="68" rx="16" fill={C.ink} />
      <rect x="134" y="80" width="52" height="10" rx="5" fill={C.amber} />
      <Lines x={134} y={98} widths={[40, 28]} fill={C.muted} />
      <rect x="34" y="26" width="60" height="40" rx="8" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="44" y="36" width="14" height="10" rx="2" fill={C.amber} />
      <Lines x={44} y={52} widths={[38]} />
      <rect x="34" y="134" width="60" height="42" rx="8" fill={C.card} stroke={C.line} strokeWidth="2" />
      <Lines x={44} y={144} widths={[40, 30, 36]} gap={9} fill={C.bar2} />
      <rect x="226" y="24" width="60" height="44" rx="8" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="236" y="32" width="40" height="14" rx="3" fill={C.ink2} />
      {[0, 1, 2].map((i) => <rect key={i} x={236 + i * 14} y="52" width="10" height="8" rx="2" fill={C.bar} />)}
      <g transform="translate(256 154)">
        <rect x="-26" y="-20" width="52" height="44" rx="8" fill={C.card} stroke={C.line} strokeWidth="2" />
        <path d="M-9 -2v-8a9 9 0 0 1 18 0v8" fill="none" stroke={C.amberDark} strokeWidth="3.5" />
        <rect x="-13" y="-3" width="26" height="20" rx="4" fill={C.amber} />
      </g>
    </>
  );
}

// ---- SEO and AI visibility ----

// Your page first in the results, with a fast speed score.
function Seo() {
  return (
    <>
      <rect x="24" y="24" width="190" height="152" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="36" y="36" width="140" height="18" rx="9" fill={C.canvas} />
      <rect x="34" y="64" width="170" height="42" rx="8" fill={C.amberSoft} />
      <rect x="44" y="72" width="90" height="8" rx="4" fill={C.ink} />
      <Lines x={44} y={86} widths={[140]} fill={C.amberDark} />
      {[116, 146].map((y) => (
        <g key={y}>
          <rect x="44" y={y} width="80" height="7" rx="3.5" fill={C.bar2} />
          <rect x="44" y={y + 12} width="130" height="6" rx="3" fill={C.bar} />
        </g>
      ))}
      <g transform="translate(184 46)">
        <circle r="13" fill="none" stroke={C.ink} strokeWidth="4" />
        <path d="M9 9l11 11" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
      </g>
      <g transform="translate(260 128)">
        <path d="M-42 0a42 42 0 0 1 84 0" fill="none" stroke={C.line} strokeWidth="10" strokeLinecap="round" />
        <path d="M-42 0a42 42 0 0 1 72 -30" fill="none" stroke={C.amber} strokeWidth="10" strokeLinecap="round" />
        <path d="M0 0L26 -22" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <circle r="6" fill={C.ink} />
      </g>
      <rect x="226" y="148" width="68" height="22" rx="11" fill={C.ink} />
      <rect x="238" y="156" width="44" height="6" rx="3" fill={C.amber} />
    </>
  );
}

// An AI assistant answering with your business: card, rating and location.
function Geo() {
  return (
    <>
      <path d="M28 30h170a12 12 0 0 1 12 12v24a12 12 0 0 1-12 12H60l-16 12V78h-4a12 12 0 0 1-12-12V42a12 12 0 0 1 12-12z" fill={C.canvas} stroke={C.line} strokeWidth="2" />
      <Lines x={44} y={44} widths={[130, 96]} />
      <path d={sparkle} transform="translate(226 38) scale(1.1)" fill={C.amber} />
      <rect x="60" y="94" width="230" height="84" rx="14" fill={C.ink} />
      <rect x="74" y="108" width="54" height="56" rx="10" fill={C.ink2} />
      <path d="M101 120a12 12 0 0 1 12 12c0 10-12 20-12 20s-12-10-12-20a12 12 0 0 1 12-12z" fill={C.amber} />
      <circle cx="101" cy="132" r="4.5" fill={C.ink2} />
      <rect x="140" y="110" width="90" height="9" rx="4.5" fill="#fff" />
      {[0, 1, 2, 3, 4].map((i) => <polygon key={i} points={star(146 + i * 14, 134, 6)} fill={C.amber} />)}
      <Lines x={140} y={148} widths={[120, 80]} gap={11} fill={C.muted} />
    </>
  );
}

// ---- AI and automation ----

// A chat answered from your own information, a draft to approve, a hand-off to a person.
function Assistant() {
  return (
    <>
      <rect x="24" y="22" width="170" height="156" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="92" y="36" width="88" height="24" rx="12" fill={C.canvas} />
      <circle cx="44" cy="84" r="12" fill={C.ink} />
      <path d={sparkle} transform="translate(44 84) scale(0.55)" fill={C.amber} />
      <rect x="62" y="70" width="112" height="40" rx="12" fill={C.ink} />
      <Lines x={74} y={82} widths={[86, 60]} gap={11} fill="#fff" />
      <rect x="92" y="122" width="88" height="24" rx="12" fill={C.canvas} />
      <Avatar cx={44} cy={160} r={12} />
      <rect x="62" y="152" width="70" height="16" rx="8" fill={C.amberSoft} />
      <rect x="206" y="44" width="92" height="116" rx="10" fill={C.card} stroke={C.line} strokeWidth="2" />
      <Lines x={218} y={58} widths={[60, 68, 52, 64, 44]} gap={12} />
      <rect x="218" y="124" width="68" height="22" rx="11" fill={C.amber} />
      <Tick x={252} y={135} s={0.6} color={C.ink} />
    </>
  );
}

// A free guide traded for an email, then welcome emails and a growing list.
function Leads() {
  return (
    <>
      <rect x="26" y="40" width="74" height="96" rx="8" fill={C.amber} />
      <rect x="26" y="40" width="12" height="96" rx="4" fill={C.amberDark} />
      <Lines x={48} y={58} widths={[40, 30]} gap={12} fill={C.ink} />
      <rect x="48" y="96" width="38" height="28" rx="5" fill={C.amberSoft} />
      <path d="M108 88h22" stroke={C.bar2} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 7" />
      <g transform="translate(166 88)">
        <rect x="-32" y="-24" width="64" height="48" rx="8" fill={C.ink} />
        <path d="M-32 -18l32 22 32-22" fill="none" stroke={C.amber} strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="30" cy="-24" r="11" fill={C.amber} />
        <rect x="27.5" y="-30" width="5" height="12" rx="1" fill={C.ink} />
      </g>
      <path d="M204 88h18" stroke={C.bar2} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 7" />
      <rect x="228" y="30" width="72" height="140" rx="10" fill={C.card} stroke={C.line} strokeWidth="2" />
      {[48, 74, 100, 126].map((y, i) => (
        <g key={y}>
          <Avatar cx={244} cy={y + 6} r={9} fill={i === 3 ? C.amber : C.bar} />
          <rect x="258" y={y + 3} width="32" height="6" rx="3" fill={i === 3 ? C.amberDark : C.bar} />
        </g>
      ))}
      <rect x="238" y="150" width="52" height="10" rx="5" fill={C.canvas} />
    </>
  );
}

// Booking system, payments and email kept in sync, with an alert when something changes.
function Connect() {
  const tile = (x, y, children) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-34" y="-30" width="68" height="60" rx="14" fill={C.card} stroke={C.line} strokeWidth="2" />
      {children}
    </g>
  );
  return (
    <>
      <circle cx="160" cy="100" r="58" fill="none" stroke={C.amber} strokeWidth="3" strokeDasharray="8 8" />
      <path d="M214 74l6 10-11 2" fill="none" stroke={C.amberDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M106 126l-6-10 11-2" fill="none" stroke={C.amberDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {tile(160, 42, <>
        <rect x="-20" y="-16" width="40" height="32" rx="5" fill={C.canvas} />
        <rect x="-20" y="-16" width="40" height="9" rx="4" fill={C.amber} />
        <rect x="-6" y="-1" width="12" height="10" rx="2" fill={C.ink} />
      </>)}
      {tile(92, 148, <>
        <rect x="-20" y="-13" width="40" height="26" rx="5" fill={C.ink} />
        <rect x="-14" y="-7" width="10" height="8" rx="2" fill={C.amber} />
      </>)}
      {tile(228, 148, <>
        <rect x="-20" y="-13" width="40" height="26" rx="4" fill={C.canvas} stroke={C.bar2} strokeWidth="2" />
        <path d="M-20 -10l20 13 20-13" fill="none" stroke={C.ink} strokeWidth="2.5" />
      </>)}
      <g transform="translate(270 40)">
        <circle r="18" fill={C.ink} />
        <path d="M-8 5v-6a8 8 0 0 1 16 0v6l3 3h-22z" fill={C.amber} />
        <circle cy="11" r="3" fill={C.amber} />
      </g>
    </>
  );
}

// ---- Custom software ----

// The numbers you check every day, plus separate logins for each person.
function Dashboard() {
  return (
    <>
      <rect x="20" y="20" width="220" height="160" rx="12" fill={C.card} stroke={C.line} strokeWidth="2" />
      <rect x="20" y="20" width="44" height="160" rx="12" fill={C.ink} />
      <rect x="52" y="20" width="12" height="160" fill={C.ink} />
      {[42, 62, 82, 102].map((y, i) => <rect key={y} x="32" y={y} width="20" height="8" rx="4" fill={i === 0 ? C.amber : C.ink2} />)}
      {[76, 130, 184].map((x, i) => (
        <g key={x}>
          <rect x={x} y="34" width="46" height="36" rx="7" fill={i === 0 ? C.amberSoft : C.canvas} />
          <rect x={x + 8} y="44" width="22" height="9" rx="4.5" fill={C.ink} />
          <rect x={x + 8} y="58" width="30" height="5" rx="2.5" fill={C.bar} />
        </g>
      ))}
      <path d="M78 140l26-18 22 10 26-26 26 8 38-24" fill="none" stroke={C.amber} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 160h150" stroke={C.line} strokeWidth="2" />
      <rect x="250" y="50" width="54" height="108" rx="10" fill={C.card} stroke={C.line} strokeWidth="2" />
      {[72, 102, 132].map((y, i) => (
        <g key={y}>
          <Avatar cx={266} cy={y} r={9} fill={i === 0 ? C.amber : C.bar} />
          <g transform={`translate(288 ${y})`}>
            <rect x="-6" y="-2" width="12" height="9" rx="2" fill={i === 2 ? C.bar2 : C.ink} />
            <path d="M-4 -2v-3a4 4 0 0 1 8 0v3" fill="none" stroke={i === 2 ? C.bar2 : C.ink} strokeWidth="2" />
          </g>
        </g>
      ))}
    </>
  );
}

// An app with organisations and roles, card payments and AI built in.
function WebApp() {
  return (
    <>
      <Browser x={22} y={22} w={206} h={158} />
      <rect x="22" y="38" width="58" height="142" fill={C.canvas} />
      {[54, 80, 106].map((y, i) => (
        <g key={y}>
          <rect x="32" y={y} width="18" height="18" rx="5" fill={[C.amber, C.ink2, C.bar2][i]} />
          <rect x="54" y={y + 6} width="18" height="6" rx="3" fill={C.bar} />
        </g>
      ))}
      <rect x="92" y="50" width="124" height="54" rx="8" fill={C.ink} />
      <path d={sparkle} transform="translate(112 77) scale(0.7)" fill={C.amber} />
      <Lines x={128} y={66} widths={[74, 56, 66]} gap={10} fill="#fff" />
      <Avatar cx={104} cy={128} r={11} fill={C.amberSoft} />
      <Avatar cx={124} cy={128} r={11} fill={C.bar} />
      <Avatar cx={144} cy={128} r={11} fill={C.bar2} />
      <Lines x={92} y={152} widths={[110]} />
      <g transform="rotate(8 262 130)">
        <rect x="212" y="94" width="96" height="62" rx="10" fill={C.amber} />
        <rect x="224" y="108" width="18" height="13" rx="3" fill={C.amberSoft} />
        <Lines x={224} y={130} widths={[60]} fill={C.amberDark} />
        <Lines x={224} y={142} widths={[30]} fill={C.ink} />
      </g>
    </>
  );
}

const SCENES = {
  site: Site, booking: Booking, migration: Migration, privacy: Privacy,
  directBooking: DirectBooking, rates: Rates, api: Api,
  seo: Seo, geo: Geo,
  assistant: Assistant, leads: Leads, connect: Connect,
  dashboard: Dashboard, webapp: WebApp,
};

/** Text-free picture of one offer on a service page. */
function OfferIllustration({ type }) {
  const Scene = SCENES[type];
  if (!Scene) return null;
  return (
    <svg className="offer-illustration" viewBox="0 0 320 200" aria-hidden="true">
      <rect width="320" height="200" fill={C.canvas} />
      <Scene />
    </svg>
  );
}

export default OfferIllustration;
