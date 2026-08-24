import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const KEYS = ['ticker.four', 'ticker.pickup', 'ticker.local', 'ticker.whatsapp'];

export const Ticker: React.FC = () => {
  const { t } = useLang();

  const items = KEYS.map((k) => t(k));
  const run = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-line bg-surface py-3.5">
      <div className="marquee-track items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {run.map((label, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="eyebrow whitespace-nowrap px-6 text-foreground/55">{label}</span>
                <span className="h-1 w-1 shrink-0 rounded-full bg-ember" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
