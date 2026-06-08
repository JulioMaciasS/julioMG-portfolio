import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { capturePageview } from '../../utils/analytics';

/**
 * Captures a PostHog pageview on client-side route changes. The first pageview
 * is captured by posthog.init, so we skip the initial mount to avoid double
 * counting. No-ops until analytics is loaded (i.e. after consent).
 */
function PageviewTracker() {
  const location = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    capturePageview();
  }, [location.pathname]);

  return null;
}

export default PageviewTracker;
