import { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackText = '📷',
  width,
  height
}) => {
  const [status, setStatus] = useState('loading');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {status === 'loading' && (
        <div className="absolute inset-0 skeleton flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </div>
      )}
      
      {status === 'error' ? (
        <div className="absolute inset-0 bg-secondary flex items-center justify-center text-4xl">
          {fallbackText}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`
            w-full h-full object-cover
            transition-all duration-700
            ${status === 'loaded' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
