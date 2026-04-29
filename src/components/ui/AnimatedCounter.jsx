import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
        {icon && (
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
          {count}{suffix}
        </div>
        <p className="text-secondary text-sm uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
};

export default AnimatedCounter;
