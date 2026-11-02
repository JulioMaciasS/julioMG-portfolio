// Shared drawing kit for the service, process and offer illustrations:
// cream canvas, white cards, charcoal and the site's amber.
export const C = {
  canvas: '#f6f3ec', card: '#ffffff', line: '#e6e2da', ink: '#1a1717',
  ink2: '#2a2624', amber: '#f4b942', amberSoft: '#fbe3b0', amberDark: '#c9902a',
  bar: '#d9d4ca', bar2: '#c9c3b8', muted: '#9a948a',
};

// Tick mark centred on (x, y); stroke it.
export const check = (x, y, s = 1) => `M${x - 7 * s},${y} l${5 * s},${5 * s} l${10 * s},${-11 * s}`;

// Five-point star centred on (cx, cy).
export const star = (cx, cy, r) =>
  Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');

// Four-point AI sparkle centred on the origin; position it with a transform.
export const sparkle = 'M0,-13 C2,-3 3,-2 13,0 C3,2 2,3 0,13 C-2,3 -3,2 -13,0 C-3,-2 -2,-3 0,-13Z';
