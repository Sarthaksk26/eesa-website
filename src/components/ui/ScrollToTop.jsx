import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

/** Scrolls to top on route change */
export const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

/** Floating scroll-to-top button */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white shadow-lg shadow-blue-500/25
        flex items-center justify-center
        hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40
        transition-all duration-300
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
      `}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
