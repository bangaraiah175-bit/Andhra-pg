import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/pgData';

export const VirtualTourGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Budget Stay', 'Premium Stay'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-stone-900 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#722F37] bg-[#722F37]/10 border border-[#722F37]/20 px-3.5 py-1 rounded-full inline-block">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 font-heading tracking-tight">
            PG Photo Gallery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Take a real photographic tour of our clean bedrooms, new wooden wardrobes, comfortable beds, and verified PG facilities.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#722F37] text-white shadow-md shadow-[#722F37]/20 scale-105'
                    : 'bg-stone-50 text-stone-600 hover:text-stone-950 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative h-64 rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 group cursor-pointer shadow-xs hover:border-[#722F37]/50 hover:shadow-xl hover:shadow-[#722F37]/5 transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay with details on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F8D2D7]">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-1 font-heading">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-stone-300 mt-2 font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-[#F8D2D7]" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-stone-50 flex items-center justify-between border-b border-stone-200">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#722F37]">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-base font-black text-stone-900 font-heading">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-stone-950 flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer */}
            <div className="p-3.5 bg-stone-50 text-center text-xs text-stone-600 border-t border-stone-200 font-medium">
              Image {lightboxIndex + 1} of {filteredItems.length} • Andhra Prince PG Verified Property
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
