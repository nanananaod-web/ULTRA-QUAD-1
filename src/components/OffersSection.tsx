import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { ALL_OFFERS, EXPERIENCES, waLink } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import type { ExperienceId, PackageOffer } from '../types';

interface OffersSectionProps {
  onBookOffer: (offer: PackageOffer) => void;
  filter: ExperienceId | 'all';
  onFilterChange: (filter: ExperienceId | 'all') => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({
  onBookOffer,
  filter,
  onFilterChange,
}) => {
  const { t, L, isRTL } = useLang();
  const ref = useReveal<HTMLElement>();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [hovered, setHovered] = useState<string | null>(null);

  const visible = filter === 'all' ? ALL_OFFERS : ALL_OFFERS.filter((o) => o.category === filter);

  const tabs: { id: ExperienceId | 'all'; label: string }[] = [
    { id: 'all', label: t('offers.all') },
    ...EXPERIENCES.map((e) => ({ id: e.id as ExperienceId | 'all', label: L(e.name) })),
  ];

  return (
    <section
      id="offers"
      ref={ref}
      className="w-full border-t border-line bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-sand-deep">{t('offers.eyebrow')}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.015em] text-foreground">
              {t('offers.title')}
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-foreground/60">
            {t('offers.intro')}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal no-scrollbar mb-px flex gap-px overflow-x-auto border-t border-line bg-line">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onFilterChange(tab.id)}
              className={`shrink-0 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors sm:px-7 ${
                filter === tab.id
                  ? 'bg-sand text-background'
                  : 'bg-background text-foreground/60 hover:bg-surface hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Offer rows — editorial ledger */}
        <div className="flex flex-col bg-line">
          {visible.map((offer, i) => {
            const exp = EXPERIENCES.find((e) => e.id === offer.category);
            const isHot = hovered === offer.id;
            return (
              <article
                key={offer.id}
                onMouseEnter={() => setHovered(offer.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }}
                className="reveal group relative mb-px flex flex-col gap-6 bg-background p-6 transition-colors duration-500 hover:bg-surface lg:flex-row lg:items-center lg:gap-10 lg:p-8"
              >
                {/* thumbnail */}
                <div className="relative h-56 w-full shrink-0 overflow-hidden border border-line sm:h-64 lg:h-36 lg:w-56">
                  <img
                    src={offer.image}
                    alt={L(offer.name)}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHot ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <span className="absolute top-3 start-3 bg-background/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-sand backdrop-blur-sm">
                    {exp ? L(exp.name) : ''}
                  </span>
                </div>

                {/* text */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                      {L(offer.name)}
                    </h3>
                  </div>

                  {/* includes */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="eyebrow text-muted">{t('offers.includes')}</span>
                    {offer.includes.map((inc, k) => (
                      <span key={k} className="flex items-center gap-3">
                        <span className="text-xs text-foreground/70 sm:text-[13px]">{L(inc)}</span>
                        {k < offer.includes.length - 1 && (
                          <span className="h-1 w-1 rounded-full bg-line-strong" />
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted">
                    {t('book.pickupNote')}
                  </p>
                </div>

                {/* price + actions */}
                <div className="flex shrink-0 flex-col gap-4 border-t border-line pt-5 lg:w-64 lg:items-end lg:border-0 lg:pt-0">
                  <div className="flex items-baseline gap-2 lg:flex-col lg:items-end lg:gap-0">
                    <span className="font-serif text-5xl leading-none text-sand">{offer.price}</span>
                    <span className="eyebrow text-muted lg:mt-2">{t('offers.perPerson')}</span>
                  </div>

                  <div className="flex w-full items-stretch gap-2 lg:w-auto">
                    <button
                      type="button"
                      onClick={() => onBookOffer(offer)}
                      className="group/btn flex flex-1 items-center justify-center gap-2 bg-foreground px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-sand lg:flex-none"
                    >
                      {t('offers.reserve')}
                      <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                    </button>
                    <a
                      href={waLink(offer.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('offers.whatsapp')} — ${L(offer.name)}`}
                      className="flex items-center justify-center border border-line px-4 text-foreground/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
