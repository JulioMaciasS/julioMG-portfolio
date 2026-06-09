import React from 'react';
import './LayeredWaves.css';

/**
 * Animated, layered wave divider. Three stacked SVG wave layers drift
 * horizontally at different speeds for a parallax "water" depth effect.
 *
 * Drop it in as the first child of a position:relative section. Each layer's
 * top edge is solid, so the FIRST colour (front) seamlessly continues the
 * previous section, while the lighter back layers peek through the troughs.
 *
 *  colors: [back, mid, front] — shades of the previous section's colour
 *  height: divider height in px
 */
const WAVE_PATH =
  'M0,0 H2880 V40 C2640,0 2400,0 2160,40 C1920,80 1680,80 1440,40 ' +
  'C1200,0 960,0 720,40 C480,80 240,80 0,40 Z';

export default function LayeredWaves({ colors, height = 92, speed = 'normal' }) {
  const speedClass = speed === 'slow' ? 'lw--slow' : speed === 'static' ? 'lw--static' : '';
  return (
    <div className={`lw ${speedClass}`.trim()} aria-hidden="true" style={{ height }}>
      {colors.map((color, i) => (
        <svg
          key={i}
          className={`lw-layer lw-${i + 1}`}
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
        >
          <path d={WAVE_PATH} fill={color} />
        </svg>
      ))}
    </div>
  );
}
