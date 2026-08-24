import React from 'react';
import { GALLERY_IMAGES } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

/** Editorial mosaic — a few tiles are deliberately larger to break the grid rhythm. */
const SPANS = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
  'sm:col-span-2',
  '',
  '',
];

export const GallerySection: React.FC = () => {
  const { t, L } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="gallery"
      ref={ref}
      className="reveal border-t border-border bg-background py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('gallery.eyebrow')}
            </span>
            <h2 className="max-w-2xl text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {t('gallery.title')}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t('story.stat1v')} · {t('story.stat2v')} · {t('story.stat3v')}
          </p>
        </header>

        <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 md:gap-4">
          {GALLERY_IMAGES.map((item, i) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden bg-muted ${SPANS[i] ?? ''}`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={L(item.caption)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[11px] uppercase tracking-[0.16em] text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {L(item.caption)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
