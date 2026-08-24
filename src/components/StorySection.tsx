import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

export const StorySection: React.FC = () => {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  const stats = [
    { label: t('story.stat1'), value: t('story.stat1v') },
    { label: t('story.stat2'), value: t('story.stat2v') },
    { label: t('story.stat3'), value: t('story.stat3v') },
  ];

  return (
    <section
      id="story"
      ref={ref}
      className="relative w-full border-t border-line bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: image stack */}
          <div className="reveal relative lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-line">
              <img
                src="/images/gallery-3.png"
                alt="Quad riders crossing the Marrakech palm groves"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {/* overlapping second frame */}
            <div className="absolute -bottom-10 end-0 hidden w-[45%] overflow-hidden border border-line-strong sm:block">
              <img
                src="/images/feature-camel.jpg"
                alt="Camels resting at golden hour in the Palmeraie"
                loading="lazy"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="reveal mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-sand-deep">{t('story.eyebrow')}</span>
            </div>

            <h2 className="reveal font-serif text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.015em] text-foreground">
              {t('story.title')}
            </h2>

            <p className="reveal mt-7 text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
              {t('story.p1')}
            </p>
            <p className="reveal mt-4 text-pretty text-sm leading-relaxed text-foreground/55 sm:text-base">
              {t('story.p2')}
            </p>

            {/* Facts list */}
            <dl className="reveal mt-10 flex flex-col border-t border-line">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <dt className="eyebrow text-muted">{s.label}</dt>
                  <dd className="font-serif text-xl text-sand sm:text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
