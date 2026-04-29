import useScrollAnimation from '../../hooks/useScrollAnimation';

const Card = ({ children, className = '', delay = 0, hover = true }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`
        glass rounded-xl p-6 
        ${hover ? 'hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10' : ''}
        transition-all duration-500
        ${isVisible ? 'scroll-visible' : 'scroll-hidden'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Card;
