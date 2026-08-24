import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { offersFor, waLink } from '../data';
import { useLang } from '../i18n/LanguageContext';
import type { Experience, PackageOffer } from '../types';

interface ExperiencePanelProps {
  experience: Experience | null;
  onClose: () => void;
  onBookOffer: (offer: PackageOffer) => void;
}

export const ExperiencePanel: React.FC<ExperiencePanelProps> = ({
  experience,
  onClose,
  onBookOffer,
}) => {
  const { t, L, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (!experience) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [experience, onClose]);

  if (!experience) return null;

  const offers = offersFor(experience.id);

  return (
    <div className="fixed inset-0 z-[70] flex" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label={t('nav.close')}
        onClick={onClose}
        className="absolute inset-0 bg-background/85 backdrop-blur-sm"
      />

      <div className="relative ms-auto flex h-full w-full max-w-3xl flex-col border-s border-line bg-background shadow-2xl">
        {/* Sticky bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-ember">
              0{experience.index}
            </span>
            <span className="eyebrow text-muted">{L(experience.kind)}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('nav.close')}
            className="border border-line p-2 text-foreground/70 transition-colors hover:border-sand hover:text-sand"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Feature image */}
          <div className="relative h-64 w-full overflow-hidden sm:h-80">
            <img
              src={experience.featureImage}
              alt={L(experience.name)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <h2 className="absolute bottom-5 start-5 font-serif text-[clamp(2.5rem,9vw,5rem)] leading-none text-foreground sm:start-8">
              {L(experience.name)}
            </h2>
          </div>

          <div className="px-5 py-8 sm:px-8">
            <p className="text-balance font-serif text-2xl leading-snug text-sand sm:text-3xl">
              {L(experience.tagline)}
            </p>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-foreground/65 sm:text-base">
              {L(experience.description)}
            </p>

            {/* Meta table */}
            <dl className="mt-8 flex flex-col border-t border-line">
              {experience.meta.map((m, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                >
                  <dt className="eyebrow text-muted">{L(m.label)}</dt>
                  <dd className="text-end text-sm text-foreground/80">{L(m.value)}</dd>
                </div>
              ))}
            </dl>

            {/* Offers for this experience */}
            <p className="eyebrow mt-10 mb-4 text-sand-deep">{t('offers.eyebrow')}</p>
            <div className="flex flex-col gap-px bg-line">
              {offers.map((offer) => (
                <div key={offer.id} className="flex flex-col gap-4 bg-background py-5 sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif text-xl text-foreground">{L(offer.name)}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground/55">
                      {offer.includes.map((inc) => L(inc)).join(' · ')}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-serif text-3xl leading-none text-sand">{offer.price}</span>
                    <button
                      type="button"
                      onClick={() => onBookOffer(offer)}
                      className="group flex items-center gap-2 bg-foreground px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-background transition-colors hover:bg-sand"
                    >
                      {t('offers.reserve')}
                      <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </button>
                    <a
                      href={waLink(offer.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('offers.whatsapp')} — ${L(offer.name)}`}
                      className="flex items-center justify-center border border-line p-3 text-foreground/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-muted">
              {t('book.pickupNote')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
