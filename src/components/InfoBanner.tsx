import React from 'react';
import { PHONE_CALL_URL, PHONE_NUMBER_ALT } from '../data';

export const InfoBanner: React.FC = () => {
  return (
    <section id="info-banner" className="w-full bg-[#FFFFFF] border-b border-neutral-200">
      {/* 3 Pillars Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
          {/* Column 1: Location */}
          <div className="flex flex-col items-center justify-center text-center px-6 md:border-r border-neutral-200">
            <span className="text-xl text-neutral-400 mb-2 font-serif italic">01.</span>
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#111111] mb-1">
              LOCATION
            </h3>
            <p className="text-sm font-serif italic text-neutral-600">
              Marrakech, Morocco
            </p>
          </div>

          {/* Column 2: Experiences */}
          <div className="flex flex-col items-center justify-center text-center px-6 md:border-r border-neutral-200">
            <span className="text-xl text-neutral-400 mb-2 font-serif italic">02.</span>
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#111111] mb-1">
              EXPERIENCES
            </h3>
            <p className="text-sm font-serif italic text-neutral-600">
              Local &amp; Organized
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center justify-center text-center px-6">
            <a
              href={PHONE_CALL_URL}
              className="group flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <span className="text-xl text-neutral-400 mb-2 font-serif italic group-hover:translate-x-0.5 transition-transform">
                03. ↗
              </span>
              <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#111111] mb-1">
                CONTACT US
              </h3>
              <p className="text-sm font-semibold text-neutral-900 border-b border-black pb-0.5">
                {PHONE_NUMBER_ALT}
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Editorial fine divider bar */}
      <div className="w-full h-[1px] bg-neutral-200" />
    </section>
  );
};
