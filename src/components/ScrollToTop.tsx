// src/components/ScrollToTop.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // This effect runs every time the `pathname` changes (i.e., on every navigation)
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component renders nothing; it only provides side effects (scrolling)
  return null;
};

export default ScrollToTop;