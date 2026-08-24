import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Lang, Localized } from '../types';
import { LANGUAGES, translate } from './dictionary';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  /** Translate a dictionary key. */
  t: (key: string) => string;
  /** Resolve an inline Localized object. */
  L: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'uqm-lang';

const readInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'fr' || stored === 'ar') return stored;
  const browser = window.navigator.language?.slice(0, 2).toLowerCase();
  if (browser === 'fr') return 'fr';
  if (browser === 'ar') return 'ar';
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(readInitial);

  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? 'ltr';

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dir);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — language still applies for the session */
    }
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      isRTL: dir === 'rtl',
      setLang,
      t: (key: string) => translate(key, lang),
      L: (value: Localized) => value?.[lang] ?? value?.en ?? '',
    }),
    [lang, dir, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
};
