import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump instantly to the top on route change (no smooth animation).
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]); // Triggers whenever the pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
