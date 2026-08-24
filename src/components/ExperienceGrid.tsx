import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import type { ExperienceId } from '../types';

interface ExperienceGridProps {
  onSelectExperience: (id: ExperienceId) => void;
}

export const ExperienceGrid: React.FC<ExperienceGridProps> = ({ onSelectExperience }) => {
  const { t, L, isRTL } = useLang();
  const ref = useReveal<HTMLElement>();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="experiences"
      ref={ref}
      className="relative w-full border-t border-line bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-12 flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-sand-deep">{t('exp.eyebrow')}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.015em] text-foreground">
              {t('exp.title')}
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-foreground/60 sm:text-base">
            {t('exp.intro')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map((exp, i) => (
            <button
              key={exp.id}
              type="button"
              onClick={() => onSelectExperience(exp.id)}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group relative flex h-[440px] flex-col justify-end overflow-hidden bg-background text-start sm:h-[520px]"
            >
              <img
                src={exp.cardImage}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10 transition-opacity duration-500 group-hover:from-background group-hover:via-background/45" />

              {/* index, top */}
              <span className="absolute top-6 start-6 font-serif text-5xl leading-none text-foreground/25 transition-colors duration-500 group-hover:text-ember">
                0{exp.index}
              </span>

              {/* content */}
              <div className="relative p-6">
                <span className="eyebrow block text-sand-deep">{L(exp.kind)}</span>
                <h3 className="mt-2 font-serif text-4xl leading-none tracking-tight text-foreground sm:text-5xl">
                  {L(exp.name)}
                </h3>

                {/* revealed on hover / always on mobile */}
                <div className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
                  <p className="overflow-hidden pt-3 text-sm leading-relaxed text-foreground/65">
                    {L(exp.tagline)}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sand">
                    {t('hero.from')} {exp.fromPrice}
                  </span>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 transition-colors group-hover:text-foreground">
                    {t('exp.explore')}
                    <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
