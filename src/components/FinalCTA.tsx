import React from 'react';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS, waLink } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const { t, dir } = useLang();
  const ref = useReveal<HTMLElement>();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden border-t border-line"
    >
      <img
        src="/images/hero-balloon.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="photo-veil absolute inset-0" />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-start gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:flex-row lg:items-end lg:justify-between">
        <div className="reveal max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="eyebrow text-sand-deep">{t('hero.place')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em] text-foreground">
            {t('cta.title')}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/60">
            {t('cta.sub')}
          </p>
        </div>

        <div className="reveal flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={{ transitionDelay: '120ms' }}>
          <button
            type="button"
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-3 bg-ember px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            {t('cta.primary')}
            <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </button>
          <a
            href={waLink(t('cta.secondary'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-line-strong px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            <MessageCircle className="h-4 w-4" />
            {t('cta.secondary')}
          </a>
        </div>
      </div>
      <a href={SOCIAL_LINKS.phone} className="sr-only">
        {t('footer.phone')}
      </a>
    </section>
  );
};
