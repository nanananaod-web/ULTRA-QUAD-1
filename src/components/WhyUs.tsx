import React from 'react';
import { MapPin, Compass, Car, Layers, Coffee, MessageCircle } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

const ITEMS = [
  { n: 1, icon: MapPin },
  { n: 2, icon: Compass },
  { n: 3, icon: Car },
  { n: 4, icon: Layers },
  { n: 5, icon: Coffee },
  { n: 6, icon: MessageCircle },
];

export const WhyUs: React.FC = () => {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="w-full border-t border-line bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="reveal mb-12 flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-sand-deep">{t('why.eyebrow')}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.015em] text-foreground">
              {t('why.title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.n}
                style={{ transitionDelay: `${i * 70}ms` }}
                className="reveal group flex flex-col bg-surface p-7 transition-colors duration-500 hover:bg-surface-2 sm:p-9"
              >
                <div className="mb-6 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-sand-deep transition-colors duration-300 group-hover:text-ember" />
                  <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted">
                    0{item.n}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-tight text-foreground">
                  {t(`why.${item.n}.t`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                  {t(`why.${item.n}.d`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
