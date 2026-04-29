import { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import Lightbox from '../components/Lightbox';
import galleryData, { galleryCategories } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryData;
    return galleryData.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-primary min-h-screen py-16 px-4">
      <SEOHead title="Gallery" description="Browse photos from EESA events at GCEK." />
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Gallery" subtitle="Moments captured from our events and activities" />
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {galleryCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-secondary hover:text-primary'
              }`}>
              {cat}
            </button>
          ))}
        </div>
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-secondary text-lg">No photos in this category yet.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((img, index) => (
              <div key={img.id} className="break-inside-avoid group cursor-pointer rounded-xl overflow-hidden relative"
                onClick={() => setLightboxIndex(index)}>
                <ImageWithFallback src={img.src} alt={img.alt} className="w-full rounded-xl transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                  <div>
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                    <span className="text-xs text-gray-300">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <a href="https://drive.google.com/drive/folders/1-tWFiEPB7dslu6rTqPntfdeyBKTKToEu?usp=drive_link"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-primary font-semibold hover:scale-105 transition-all duration-300">
            📂 View More on Google Drive
          </a>
        </div>
      </div>
      {lightboxIndex !== null && (
        <Lightbox images={filteredImages} currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setLightboxIndex(prev => Math.min(filteredImages.length - 1, prev + 1))} />
      )}
    </div>
  );
};

export default Gallery;
