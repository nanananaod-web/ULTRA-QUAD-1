import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Menu, X, Check } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/dictionary';
import type { ExperienceId, Lang } from '../types';

interface SiteNavProps {
  onOpenBooking: () => void;
  onSelectExperience: (id: ExperienceId) => void;
}

const NAV_ITEMS = [
  { key: 'nav.home', target: 'top' },
  { key: 'nav.experiences', target: 'experiences' },
  { key: 'nav.about', target: 'story' },
  { key: 'nav.contact', target: 'contact' },
];

export const SiteNav: React.FC<SiteNavProps> = ({ onOpenBooking, onSelectExperience }) => {
  const { t, L, lang, setLang, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const langRef = useRef<HTMLDivElement>(null);

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setLangOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    setMegaOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pickExperience = (id: ExperienceId) => {
    setMegaOpen(false);
    setDrawerOpen(false);
    onSelectExperience(id);
  };

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };

  const chooseLang = (code: Lang) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || megaOpen
            ? 'bg-background/90 backdrop-blur-xl border-b border-line'
            : 'bg-gradient-to-b from-background/70 to-transparent border-b border-transparent'
        }`}
        onMouseLeave={scheduleCloseMega}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center gap-6 px-5 transition-all duration-500 sm:px-8 ${
            scrolled || megaOpen ? 'h-16' : 'h-20 sm:h-24'
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('top');
            }}
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src="/images/logo.png"
              alt="Ultra Quad Marrakech"
              className={`w-auto transition-all duration-500 ${scrolled || megaOpen ? 'h-9' : 'h-11 sm:h-14'}`}
            />
            <span className="hidden flex-col leading-none lg:flex">
              <span className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-foreground">
                Ultra Quad
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-muted">
                Marrakech
              </span>
            </span>
          </a>

          {/* Center nav */}
          <nav className="mx-auto hidden items-center gap-1 lg:flex">
            <button
              type="button"
              onClick={() => scrollTo('top')}
              className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
            >
              {t('nav.home')}
            </button>

            {/* Offers — mega menu trigger */}
            <button
              type="button"
              onMouseEnter={openMega}
              onFocus={openMega}
              onClick={() => (megaOpen ? setMegaOpen(false) : openMega())}
              aria-expanded={megaOpen}
              aria-controls="offers-mega"
              className={`flex items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                megaOpen ? 'text-sand' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {t('nav.offers')}
              <span
                className={`h-1 w-1 rounded-full bg-ember transition-opacity ${megaOpen ? 'opacity-100' : 'opacity-0'}`}
              />
            </button>

            {NAV_ITEMS.slice(1).map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollTo(item.target)}
                className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="ms-auto flex items-center gap-2 sm:gap-3 lg:ms-0">
            {/* Language */}
            <div ref={langRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-label={t('nav.language')}
                className="flex items-center gap-1.5 border border-line px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-line-strong hover:text-foreground"
              >
                {LANGUAGES.map((l) => (
                  <span key={l.code} className={l.code === lang ? 'text-sand' : 'text-muted'}>
                    {l.short}
                  </span>
                ))}
              </button>

              {langOpen && (
                <div className="absolute end-0 top-full z-50 mt-2 w-44 border border-line bg-surface py-1 shadow-2xl">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => chooseLang(l.code)}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-start text-xs transition-colors hover:bg-surface-2 ${
                        l.code === lang ? 'text-sand' : 'text-foreground/75'
                      }`}
                    >
                      <span>{l.label}</span>
                      {l.code === lang ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <span className="text-[10px] font-bold tracking-widest text-muted">{l.short}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="group hidden items-center gap-2 bg-ember px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c2461f] sm:flex"
            >
              {t('nav.bookNow')}
              <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={t('nav.menu')}
              className="border border-line p-2.5 text-foreground transition-colors hover:border-line-strong lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ---------- OFFERS MEGA MENU ---------- */}
        <div
          id="offers-mega"
          onMouseEnter={openMega}
          className={`absolute inset-x-0 top-full hidden overflow-hidden border-b border-line bg-background/97 backdrop-blur-xl transition-all duration-500 lg:block ${
            megaOpen ? 'max-h-[560px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-[1600px] px-8 py-10">
            <div className="mb-6 flex items-baseline justify-between border-b border-line pb-4">
              <span className="eyebrow text-muted">{t('nav.chooseExperience')}</span>
              <button
                type="button"
                onClick={() => scrollTo('offers')}
                className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sand"
              >
                {t('nav.allOffers')}
                <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-5">
              {EXPERIENCES.map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => pickExperience(exp.id)}
                  className="group relative flex h-64 flex-col justify-end overflow-hidden border border-line text-start transition-colors hover:border-sand-deep"
                >
                  <img
                    src={exp.cardImage}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                  <div className="relative p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="eyebrow text-ember">0{exp.index}</span>
                      <span className="eyebrow text-muted">{L(exp.kind)}</span>
                    </div>
                    <h3 className="font-serif text-2xl leading-none text-foreground">{L(exp.name)}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground/60">
                      {L(exp.tagline)}
                    </p>
                    <span className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sand">
                      {exp.fromPrice}
                      <Arrow className="h-3 w-3 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ---------- MOBILE DRAWER ---------- */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 end-0 flex w-full max-w-sm flex-col border-s border-line bg-surface">
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <img src="/images/logo.png" alt="Ultra Quad Marrakech" className="h-9 w-auto" />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={t('nav.close')}
                className="border border-line p-2 text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => scrollTo(item.target)}
                    className="border-b border-line py-4 text-start font-serif text-3xl text-foreground"
                  >
                    {t(item.key)}
                  </button>
                ))}
              </nav>

              <p className="eyebrow mt-8 mb-4 text-muted">{t('nav.chooseExperience')}</p>
              <div className="flex flex-col gap-3">
                {EXPERIENCES.map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => pickExperience(exp.id)}
                    className="group relative flex h-24 items-center gap-4 overflow-hidden border border-line px-4 text-start"
                  >
                    <img
                      src={exp.cardImage}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/40 rtl:bg-gradient-to-l" />
                    <div className="relative">
                      <span className="eyebrow text-ember">0{exp.index}</span>
                      <h3 className="font-serif text-xl leading-tight text-foreground">{L(exp.name)}</h3>
                    </div>
                    <span className="relative ms-auto text-[10px] font-bold uppercase tracking-[0.18em] text-sand">
                      {exp.fromPrice}
                    </span>
                  </button>
                ))}
              </div>

              <p className="eyebrow mt-8 mb-3 text-muted">{t('nav.language')}</p>
              <div className="flex gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => chooseLang(l.code)}
                    className={`flex-1 border px-3 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                      l.code === lang
                        ? 'border-sand bg-sand text-background'
                        : 'border-line text-foreground/70'
                    }`}
                  >
                    {l.short}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-line p-6">
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenBooking();
                }}
                className="flex w-full items-center justify-center gap-2 bg-ember px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
              >
                {t('nav.bookNow')}
                <Arrow className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
