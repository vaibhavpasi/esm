'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  textSize: 'normal' | 'large' | 'larger';
  setTextSize: (size: 'normal' | 'large' | 'larger') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean | ((prev: boolean) => boolean)) => void;
  elderMode: boolean;
  toggleElderMode: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [textSize, setTextSizeState] = useState<'normal' | 'large' | 'larger'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [elderMode, setElderMode] = useState<boolean>(false);

  const setTextSize = (size: 'normal' | 'large' | 'larger') => {
    setTextSizeState(size);
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (size === 'normal') {
        root.style.fontSize = '16px';
      } else if (size === 'large') {
        root.style.fontSize = '18px';
      } else if (size === 'larger') {
        root.style.fontSize = '20px';
      }
    }
  };

  const toggleElderMode = () => {
    const next = !elderMode;
    setElderMode(next);
    if (next) {
      setTextSize('larger');
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('elder-mode');
      }
      try { localStorage.setItem('esm_elder_mode', 'true'); } catch {}
    } else {
      setTextSize('normal');
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('elder-mode');
      }
      try { localStorage.setItem('esm_elder_mode', 'false'); } catch {}
    }
  };

  // Initialize from localStorage if client-side
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const savedLang = localStorage.getItem('esm_lang') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'mr' || savedLang === 'hi')) {
          setLanguageState(savedLang);
        }
        const savedContrast = localStorage.getItem('esm_contrast');
        if (savedContrast === 'true') {
          setHighContrast(true);
        }
        const savedElder = localStorage.getItem('esm_elder_mode');
        if (savedElder === 'true') {
          setElderMode(true);
          setTextSize('larger');
        }
      } catch {
        // Ignore storage errors
      }
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('esm_lang', lang);
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (highContrast) {
        document.documentElement.classList.add('high-contrast');
        try { localStorage.setItem('esm_contrast', 'true'); } catch {}
      } else {
        document.documentElement.classList.remove('high-contrast');
        try { localStorage.setItem('esm_contrast', 'false'); } catch {}
      }
    }
  }, [highContrast]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        textSize,
        setTextSize,
        highContrast,
        setHighContrast,
        elderMode,
        toggleElderMode,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: translations.en,
      textSize: 'normal' as const,
      setTextSize: () => {},
      highContrast: false,
      setHighContrast: () => {},
      elderMode: false,
      toggleElderMode: () => {},
    };
  }
  return context;
}
