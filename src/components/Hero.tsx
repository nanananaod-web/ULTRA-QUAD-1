import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { useLang } from '../i18n/LanguageContext';
import type { ExperienceId } from '../types';

interface HeroProps {
  onOpenBooking: () => void;
  onSelectExperience: (id: ExperienceId) => void;
}

const SLIDE_MS = 7000;

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onSelectExperience }) => {
  const { t, L, isRTL } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const Back = isRTL ? ArrowRight : ArrowLeft;
  const active = EXPERIENCES[index];

  const go = useCallback((next: number) => {
    setIndex((next + EXPERIENCES.length) % EXPERIENCES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(timer.current);
  }, [index, paused, go]);

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* --- Stacked images, crossfading --- */}
      <div className="absolute inset-0">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={exp.heroImage}
              alt={i === index ? L(exp.name) : ''}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              className={`h-full w-full object-cover object-center ${i === index ? 'ken-burns' : 'scale-105'}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="photo-veil absolute inset-0" />
      </div>

      {/* --- Vertical rule + index rail (desktop) --- */}
      <div className="pointer-events-none absolute inset-y-0 start-8 hidden w-px bg-line lg:block" />

      <div className="absolute top-1/2 start-0 z-20 hidden -translate-y-1/2 flex-col gap-0 lg:flex">
        {EXPERIENCES.map((exp, i) => (
          <button
            key={exp.id}
            type="button"
            onClick={() => go(i)}
            className="group relative flex items-center gap-4 py-3 ps-8 pe-6 text-start"
          >
            <span
              className={`absolute start-0 h-full w-px transition-colors duration-500 ${
                i === index ? 'bg-ember' : 'bg-transparent'
              }`}
            />
            <span
              className={`text-[10px] font-bold tabular-nums tracking-[0.2em] transition-colors duration-300 ${
                i === index ? 'text-sand' : 'text-muted group-hover:text-foreground/70'
              }`}
            >
              0{exp.index}
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                i === index
                  ? 'text-foreground opacity-100'
                  : 'text-muted opacity-0 group-hover:opacity-100'
              }`}
            >
              {L(exp.name)}
            </span>
          </button>
        ))}
      </div>

      {/* --- Main composition --- */}
      <div className="relative z-10 w-full px-5 pb-8 sm:px-8 sm:pb-12 lg:ps-28 lg:pe-12">
        <div className="mx-auto max-w-[1600px]">
          {/* eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-ember" />
            <span className="eyebrow text-sand-deep">{t('hero.place')}</span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            {/* Left: the big type */}
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/55">
                {L(active.kind)}
              </p>
              <h1 className="font-serif text-[clamp(3.25rem,11vw,10.5rem)] leading-[0.84] tracking-[-0.02em] text-foreground">
                {L(active.name)}
              </h1>
              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-foreground/70 sm:text-lg">
                {L(active.tagline)}
              </p>
            </div>

            {/* Right: actions */}
            <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[380px]">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <span className="eyebrow text-muted">{t('hero.from')}</span>
                <span className="font-serif text-4xl text-sand">{active.fromPrice}</span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onSelectExperience(active.id)}
                  className="group flex flex-1 items-center justify-between gap-3 bg-foreground px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-sand"
                >
                  {t('hero.discover')}
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex flex-1 items-center justify-center border border-line-strong px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-colors hover:border-sand hover:text-sand"
                >
                  {t('hero.book')}
                </button>
              </div>

              {/* Prev / next + progress */}
              <div className="flex items-center gap-4 pt-1">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => go(index - 1)}
                    aria-label={t('hero.prev')}
                    className="border border-line p-3 text-foreground/70 transition-colors hover:border-sand hover:text-sand"
                  >
                    <Back className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(index + 1)}
                    aria-label={t('hero.next')}
                    className="-ms-px border border-line p-3 text-foreground/70 transition-colors hover:border-sand hover:text-sand"
                  >
                    <Arrow className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative h-px flex-1 bg-line">
                  <div
                    key={`${index}-${paused}`}
                    className={`absolute inset-y-0 start-0 w-full bg-sand ${paused ? '' : 'progress-fill'}`}
                    style={{ animationDuration: `${SLIDE_MS}ms`, transform: paused ? 'scaleX(0)' : undefined }}
                  />
                </div>

                <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted">
                  0{active.index} / 0{EXPERIENCES.length}
                </span>
              </div>
            </div>
          </div>

          {/* mobile dots */}
          <div className="mt-6 flex gap-2 lg:hidden">
            {EXPERIENCES.map((exp, i) => (
              <button
                key={exp.id}
                type="button"
                onClick={() => go(i)}
                aria-label={L(exp.name)}
                className={`h-0.5 flex-1 transition-colors duration-300 ${
                  i === index ? 'bg-sand' : 'bg-line'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <button
        type="button"
        onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 end-8 z-20 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/50 transition-colors hover:text-foreground lg:flex"
      >
        {t('hero.scroll')}
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </button>
    </section>
  );
};
