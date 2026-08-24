import React from 'react';
import { GALLERY_IMAGES } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

/** Editorial mosaic: two tall anchors, the rest a quiet grid. */
const SPAN: Record<number, string> = {
  0: 'sm:col-span-2 sm:row-span-2',
  5: 'lg:col-span-2',
};

export const GalleryStrip: React.FC = () => {
  const { t, lang } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="gallery"
      ref={ref}
      className="w-full border-t border-line bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="reveal mb-10 flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-sand-deep">{t('gallery.eyebrow')}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.015em] text-foreground">
              {t('gallery.title')}
            </h2>
          </div>
          <span className="text-[11px] font-semibold tabular-nums tracking-[0.2em] text-muted">
            {String(GALLERY_IMAGES.length).padStart(2, '0')}
          </span>
        </div>

        <div className="grid auto-rows-[minmax(0,180px)] grid-cols-2 gap-2 sm:auto-rows-[minmax(0,210px)] sm:grid-cols-4 sm:gap-3">
          {GALLERY_IMAGES.map((item, i) => (
            <figure
              key={item.id}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              className={`reveal group relative overflow-hidden bg-surface ${SPAN[i] ?? ''}`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.caption[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:opacity-0" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background to-transparent p-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption[lang]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
