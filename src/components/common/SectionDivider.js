import React from 'react';
import './SectionDivider.css';

/**
 * Decorative shape divider placed as the first child of a (position:relative)
 * section. It fills the top strip with the PREVIOUS section's colour, its bottom
 * edge cut into a shape, so the previous section appears to flow into this one.
 *
 *  variant: 'wave' | 'diagonal' | 'curve'
 *  color:   fill = the previous section's background colour
 *  accent:  draw an accent line along the edge (diagonal only)
 */
const SHAPES = {
  wave: 'M0,0 H1440 V30 C1260,66 1140,6 960,30 C780,54 660,4 440,28 C300,44 140,18 0,34 Z',
  curve: 'M0,0 H1440 V16 C1080,78 360,78 0,16 Z',
  diagonal: 'M0,0 H1440 V6 L0,54 Z'
};

export default function SectionDivider({ variant = 'wave', color = '#1a1717', accent = false, height = 56, shadow = false }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        style={{ height, filter: shadow ? 'drop-shadow(0 5px 6px rgba(0, 0, 0, 0.09))' : undefined }}
      >
        <path d={SHAPES[variant]} fill={color} />
        {accent && variant === 'diagonal' && (
          <line x1="0" y1="54" x2="1440" y2="6" stroke="#f4b942" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        )}
      </svg>
    </div>
  );
}
