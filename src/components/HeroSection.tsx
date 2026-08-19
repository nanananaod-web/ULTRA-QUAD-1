import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { HERO_SLIDES, SOCIAL_LINKS } from '../data';

export const HeroSection: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[680px] max-h-[1080px] bg-[#111111] overflow-hidden flex items-end">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.label}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle artistic monochromatic tint & contrast gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Editorial Slide Selector Indicators */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`text-[10px] uppercase tracking-[0.25em] font-bold py-1 px-2 transition-all ${
              idx === currentSlideIndex
                ? 'text-white border-b-2 border-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>

      {/* Left/Right Navigation Arrows */}
      <div className="hidden sm:flex absolute inset-y-0 left-6 items-center z-20">
        <button
          onClick={prevSlide}
          className="p-3 bg-black/40 hover:bg-black text-white border border-white/20 transition-all hover:scale-105"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden sm:flex absolute inset-y-0 right-6 items-center z-20">
        <button
          onClick={nextSlide}
          className="p-3 bg-black/40 hover:bg-black text-white border border-white/20 transition-all hover:scale-105"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Editorial Composition */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12 sm:pb-20 text-center flex flex-col items-center">
        {/* Artistic Established Subtitle Line */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-white/60"></div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-300 font-medium">
            Marrakech • Desert &amp; Palm Groves
          </span>
          <div className="w-10 h-[1px] bg-white/60"></div>
        </div>

        {/* Main "Discover ..." Headline Button in Artistic Flair Style */}
        <motion.div
          key={`btn-${currentSlide.id}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mb-6"
        >
          <button
            id="hero-discover-btn"
            onClick={() => scrollToSection(currentSlide.targetSection)}
            className="w-full py-5 sm:py-6 px-8 border border-white bg-black/40 hover:bg-white hover:text-black text-white font-serif italic text-3xl sm:text-5xl lg:text-6xl tracking-tight shadow-2xl transition-all duration-300 backdrop-blur-sm"
          >
            <span>{currentSlide.buttonText}</span>
          </button>
        </motion.div>

        {/* Action Row: Next Arrow (➔) and WhatsApp Button */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Next Slide Arrow Button */}
          <button
            id="hero-next-arrow-btn"
            onClick={nextSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 border border-white bg-black/40 hover:bg-white hover:text-black text-white flex items-center justify-center text-xl font-bold transition-all hover:scale-105"
            title="Next Activity"
            aria-label="Next Activity"
          >
            ➔
          </button>

          {/* WhatsApp Action Pill */}
          <a
            id="hero-whatsapp-action"
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 sm:py-4 px-8 bg-[#00bf63] hover:bg-[#00a857] text-white text-[11px] uppercase tracking-[0.2em] font-bold shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
