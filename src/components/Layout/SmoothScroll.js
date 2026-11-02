'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import 'lenis/dist/lenis.css';

// Desktop with a mouse or trackpad only: phones, touch screens and visitors
// who ask for reduced motion keep native scrolling. The width matches the
// navbar breakpoint, below which the mobile menu locks the page scroll.
const QUERY = '(min-width: 961px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

// Long legal text reads better with the browser's own scrolling.
const NATIVE_ONLY = /\/(privacy-policy|cookie-policy)\/?$/;

/**
 * Smooth, slightly weighted wheel scrolling (Lenis) for the marketing pages.
 * No snapping: the pages have sections of very different heights.
 */
function SmoothScroll() {
  const pathname = usePathname();
  const [matches, setMatches] = useState(false);
  const enabled = matches && !NATIVE_ONLY.test(pathname);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  // A fresh instance per page: a client-side navigation resets the scroll
  // position under Lenis, which otherwise keeps gliding toward the old page's
  // target and swallows the wheel.
  useEffect(() => {
    if (!enabled) return undefined;
    let lenis;
    let cancelled = false;

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        // Clicking a link mid-glide shouldn't carry the glide into the next page.
        stopInertiaOnNavigate: true,
        lerp: 0.09,
      });
    });

    return () => {
      cancelled = true;
      lenis?.destroy();
    };
  }, [enabled, pathname]);

  return null;
}

export default SmoothScroll;
