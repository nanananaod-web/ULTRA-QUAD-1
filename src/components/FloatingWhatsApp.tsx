import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';
import { useLang } from '../i18n/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLang();

  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('offers.whatsapp')}
      className="group fixed bottom-5 z-40 flex items-center gap-3 border border-line-strong bg-background/85 px-4 py-3 backdrop-blur-md transition-colors duration-300 hover:border-ember hover:bg-ember end-5"
    >
      <MessageCircle className="h-5 w-5 text-ember transition-colors duration-300 group-hover:text-foreground" />
      <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-foreground sm:inline">
        {t('nav.bookNow')}
      </span>
    </a>
  );
};
