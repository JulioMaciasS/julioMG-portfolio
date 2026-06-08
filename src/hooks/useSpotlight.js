import { useEffect, useRef } from 'react';

/**
 * Tracks the cursor over the returned ref element and writes its position into
 * the `--mx` / `--my` CSS custom properties, which the `.spotlight-bg` styles
 * use to light the background. Throttled with requestAnimationFrame and a no-op
 * when the pointer is coarse (touch) or reduced-motion is requested.
 */
export default function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduced) return undefined;

    let frame = null;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        node.style.setProperty('--mx', `${x}%`);
        node.style.setProperty('--my', `${y}%`);
        frame = null;
      });
    };

    node.addEventListener('mousemove', onMove);
    return () => {
      node.removeEventListener('mousemove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
