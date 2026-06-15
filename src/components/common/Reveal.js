'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveals its children with a fade-up the first time they scroll into view.
 * Pure IntersectionObserver — no animation library, respects reduced-motion
 * (the CSS in index.css shows content immediately in that case).
 *
 * Props:
 *  - as: element/tag to render (default 'div')
 *  - delay: ms before the transition kicks in (for staggering)
 *  - className: extra classes merged with the reveal classes
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
