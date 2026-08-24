import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import {
  EXPERIENCES,
  SOCIAL_LINKS,
  PHONE_NUMBER,
  PHONE_NUMBER_ALT,
  PHONE_CALL_URL,
  EMAIL_ADDRESS,
  LOCATION_TEXT,
} from '../data';
import { useLang } from '../i18n/LanguageContext';
import type { ExperienceId } from '../types';

interface SiteFooterProps {
  onSelectExperience: (id: ExperienceId) => void;
}

const SOCIALS = [
  { key: 'instagram', href: SOCIAL_LINKS.instagram, icon: Instagram, label: 'Instagram' },
  { key: 'facebook', href: SOCIAL_LINKS.facebook, icon: Facebook, label: 'Facebook' },
  { key: 'whatsapp', href: SOCIAL_LINKS.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
];

export const SiteFooter: React.FC<SiteFooterProps> = ({ onSelectExperience }) => {
  const { t, lang } = useLang();

  return (
    <footer className="w-full border-t border-line bg-surface">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        {/* Wordmark band */}
        <div className="flex flex-col gap-6 border-b border-line py-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.02em] text-foreground">
              Ultra Quad
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/55">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="flex gap-2">
            {SOCIALS.map(({ key, href, icon: Icon, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border border-line text-foreground/70 transition-colors duration-300 hover:border-ember hover:bg-ember hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 items-center justify-center border border-line px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-300 hover:border-ember hover:bg-ember hover:text-foreground"
            >
              TikTok
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="eyebrow mb-6 text-sand-deep">{t('footer.experiences')}</h3>
            <ul className="flex flex-col gap-3">
              {EXPERIENCES.map((exp) => (
                <li key={exp.id}>
                  <button
                    type="button"
                    onClick={() => onSelectExperience(exp.id)}
                    className="group flex items-baseline gap-3 text-start text-lg text-foreground/70 transition-colors duration-300 hover:text-foreground"
                  >
                    <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted">
                      0{exp.index}
                    </span>
                    <span className="font-serif">{exp.name[lang]}</span>
                    <span className="text-[11px] text-muted">{exp.fromPrice}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6 text-sand-deep">{t('footer.contact')}</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span className="flex flex-col gap-1">
                  <a
                    href={PHONE_CALL_URL}
                    dir="ltr"
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <span dir="ltr" className="text-foreground/45">
                    {PHONE_NUMBER_ALT}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="break-all text-foreground/80 transition-colors hover:text-foreground"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span className="text-foreground/80">{LOCATION_TEXT}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6 text-sand-deep">{t('nav.bookNow')}</h3>
            <p className="mb-6 text-sm leading-relaxed text-foreground/55">
              {t('book.pickupNote')}
            </p>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:bg-ember hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {t('offers.whatsapp')}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-7 text-[11px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Ultra Quad Marrakech</span>
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
};
