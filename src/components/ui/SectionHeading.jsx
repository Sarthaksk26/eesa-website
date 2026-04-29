import useScrollAnimation from '../../hooks/useScrollAnimation';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  const { ref, isVisible } = useScrollAnimation();

  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';
  const marginClass = align === 'center' ? 'mx-auto' : align === 'left' ? 'mr-auto' : 'ml-auto';

  return (
    <div
      ref={ref}
      className={`mb-16 ${alignClass} ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
        {title}
      </h2>
      <div 
        className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 current-line ${marginClass} ${
          isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
        }`} 
      />
      {subtitle && (
        <p className="mt-6 text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
