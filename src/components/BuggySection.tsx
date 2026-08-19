import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUGGY_OFFERS, BUGGY_DETAIL, SOCIAL_LINKS } from '../data';
import { PackageOffer } from '../types';

interface BuggySectionProps {
  onBookOffer: (offer: PackageOffer) => void;
}

export const BuggySection: React.FC<BuggySectionProps> = ({ onBookOffer }) => {
  return (
    <section id="buggy-section" className="w-full bg-[#FFFFFF] py-20 sm:py-28 text-[#111111] overflow-hidden border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
              Editorial 02
            </span>
            <div className="w-8 h-[1px] bg-neutral-300"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-500">
              High Power 800cc
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic tracking-tight text-[#111111]">
            buggy marrakech
          </h2>
          <div className="w-16 h-[2px] bg-black mt-4" />
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20 sm:mb-28">
          {BUGGY_OFFERS.map((offer, idx) => (
            <div
              key={offer.id}
              className="bg-[#F7F7F7] border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-black group"
            >
              {/* Card Header Tag */}
              <div className="flex justify-between items-center mb-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
                <span>Frame 0{idx + 1}</span>
                <span>800cc Performance</span>
              </div>

              {/* Card Image */}
              <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden mb-6 bg-neutral-200 relative border border-neutral-200">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Title */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-[#111111] text-lg sm:text-xl lg:text-2xl font-serif italic text-left uppercase tracking-wide leading-snug mb-6 min-h-[3.5rem] flex items-center">
                  {offer.title}
                </h3>

                {/* Price Badge & Direct Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                  <div className="bg-[#111111] text-white px-6 py-2 text-[11px] uppercase tracking-[0.2em] font-bold">
                    price : {offer.price}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onBookOffer(offer)}
                      className="flex-1 sm:flex-none px-6 py-2.5 border border-neutral-300 hover:border-black text-[#111111] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
                    >
                      Réserver
                    </button>
                    <a
                      href={`https://wa.me/212687502126?text=${encodeURIComponent(offer.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#00bf63] hover:bg-[#00a857] text-white transition-transform hover:scale-105"
                      title="WhatsApp instant booking"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Visual with "buggy" typography */}
        <div className="bg-[#F7F7F7] border border-neutral-200 p-6 sm:p-10 lg:p-12">
          <div className="relative overflow-hidden h-80 sm:h-[450px] lg:h-[500px] bg-neutral-900 border border-neutral-200">
            <img
              src={BUGGY_DETAIL.featureImage}
              alt="Buggy Marrakech"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-8 sm:p-14">
              <h3 className="text-5xl sm:text-7xl lg:text-9xl font-serif italic text-white lowercase tracking-tighter">
                {BUGGY_DETAIL.badgeOverlayText}
              </h3>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block px-8 py-3.5 bg-white text-[#111111] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-100 transition-colors"
              >
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
