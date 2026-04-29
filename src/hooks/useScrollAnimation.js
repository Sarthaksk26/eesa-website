import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for triggering animations when elements scroll into view.
 * Uses IntersectionObserver API for performant scroll detection.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin, default '0px 0px -50px 0px'
 * @param {boolean} options.triggerOnce - Only trigger once, default true
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useScrollAnimation;
