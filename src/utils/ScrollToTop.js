import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Triggers whenever the pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
