import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full glass text-white hover:scale-110 transition-transform"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 p-3 rounded-full glass text-white hover:scale-110 transition-transform"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 p-3 rounded-full glass text-white hover:scale-110 transition-transform"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative z-10 max-w-[90vw] max-h-[85vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="text-center mt-4">
          <p className="text-white text-lg font-medium">{current.alt}</p>
          <p className="text-gray-400 text-sm mt-1">
            {currentIndex + 1} / {images.length}
            {current.category && ` · ${current.category}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
