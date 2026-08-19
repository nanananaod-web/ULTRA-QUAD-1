import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden sm:block mr-3 px-4 py-2 bg-white text-[#111111] text-[10px] uppercase tracking-[0.2em] font-bold border border-neutral-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp Concierge
      </div>
      <a
        id="floating-whatsapp-btn"
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#111111] hover:bg-neutral-800 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 border border-neutral-700"
        aria-label="Contacter sur WhatsApp"
        title="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[#00bf63]" />
      </a>
    </div>
  );
};
