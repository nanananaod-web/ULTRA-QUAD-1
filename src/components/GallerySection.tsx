import React from 'react';
import { GALLERY_IMAGES, PALMERAIE_TEXT } from '../data';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery-section" className="w-full bg-[#FFFFFF] py-20 sm:py-28 text-[#111111] overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] font-bold border-b border-black pb-3 mb-6">
            Featured Gallery
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#111111] leading-relaxed max-w-4xl">
            {PALMERAIE_TEXT}
          </p>
        </div>

        {/* Gallery Image Grid with Frame Markers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#F7F7F7] border border-neutral-200 p-4 flex flex-col justify-between group hover:border-black transition-colors duration-300"
            >
              <div className="w-full h-72 sm:h-80 overflow-hidden bg-neutral-200 relative mb-4 border border-neutral-200">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold pt-2 border-t border-neutral-200">
                <span className="text-[#111111] font-bold">Frame 0{idx + 1}</span>
                <span className="truncate ml-2">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
