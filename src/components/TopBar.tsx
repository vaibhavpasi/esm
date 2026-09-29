'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function TopBar() {
  const { language, setLanguage, t, textSize, setTextSize, highContrast, setHighContrast, elderMode, toggleElderMode } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-[#030914] via-[#07132c] to-[#081206] text-white text-xs border-b border-amber-400/25 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-2">
        {/* Left: Indian Army Regalia & Helplines */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5">
          {/* Regalia badge */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-military-900 to-military-800 text-amber-300 font-extrabold border border-amber-400/40 whitespace-nowrap shadow-[0_0_10px_rgba(234,179,8,0.2)] text-[11px]">
            <span>⚔️</span>
            <span className="hidden sm:inline">भारतीय सेना • </span>
            <span>सेवा परमो धर्मः</span>
          </span>

          {/* 24x7 Helpline */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse hidden sm:inline-block" />
            <a
              href="tel:02532570123"
              className="text-white/85 hover:text-amber-300 transition-colors font-semibold flex items-center gap-1 text-[11px] sm:text-xs"
              title="Nashik Veterans 24x7 Helpline: 0253-2570123"
            >
              <span>📞</span>
              <span className="hidden md:inline">24x7:</span> 0253-2570123
            </a>
          </div>

          <span className="text-white/20 hidden md:inline">|</span>

          {/* MH Deolali Emergency */}
          <a
            href="tel:02532491234"
            className="text-white/75 hover:text-amber-300 transition-colors whitespace-nowrap hidden lg:flex items-center gap-1 text-[11px]"
            title="Military Hospital Deolali Emergency: 0253-2491234"
          >
            <span>🏥</span> MH Deolali: 0253-2491234
          </a>

          <span className="text-white/20 hidden xl:inline">|</span>

          {/* SPARSH Link */}
          <a
            href="https://sparsh.defencepension.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-amber-300 transition-colors whitespace-nowrap hidden xl:flex items-center gap-1 text-[11px]"
            title="Official SPARSH Defence Pension Portal"
          >
            <span>🌐</span> SPARSH
          </a>
        </div>

        {/* Right: Accessibility Controls & Language Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
          {/* Senior Veteran Mode Toggle */}
          <button
            onClick={toggleElderMode}
            className={`px-2 sm:px-2.5 py-0.5 rounded-lg font-bold border transition-all flex items-center gap-1 text-[11px] ${
              elderMode
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 border-emerald-300 shadow-[0_0_12px_rgba(34,197,94,0.4)] font-extrabold'
                : 'bg-military-900/90 border-amber-400/30 text-amber-300 hover:bg-military-800'
            }`}
            title="Senior Citizen / Retired Person Easy-Reading Mode"
            aria-pressed={elderMode}
          >
            <span>👓</span>
            <span className="hidden sm:inline">
              {elderMode
                ? (language === 'mr' ? 'ज्येष्ठ मोड सुरू' : 'Senior ON')
                : (language === 'mr' ? 'ज्येष्ठ सुलभ' : 'Senior Mode')}
            </span>
          </button>

          {/* Text Resizer (A- / A / A+) */}
          <div className="hidden sm:flex items-center gap-0.5 bg-white/5 rounded-lg p-0.5 border border-white/10" title="Text Resizer">
            <button
              onClick={() => setTextSize('normal')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors ${textSize === 'normal' ? 'bg-amber-400 text-navy-950 font-black' : 'text-white/70 hover:text-white'}`}
              aria-label="Normal text size"
            >
              A-
            </button>
            <button
              onClick={() => setTextSize('large')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors ${textSize === 'large' ? 'bg-amber-400 text-navy-950 font-black' : 'text-white/70 hover:text-white'}`}
              aria-label="Large text size"
            >
              A
            </button>
            <button
              onClick={() => setTextSize('larger')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors ${textSize === 'larger' ? 'bg-amber-400 text-navy-950 font-black' : 'text-white/70 hover:text-white'}`}
              aria-label="Extra large text size"
            >
              A+
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`px-1.5 sm:px-2 py-0.5 rounded-lg font-medium border transition-colors flex items-center gap-1 text-[11px] ${
              highContrast
                ? 'bg-yellow-400 text-black border-yellow-300 font-bold'
                : 'bg-white/5 border-white/15 text-white/80 hover:text-white'
            }`}
            title="Toggle High Contrast for low-vision readability"
            aria-pressed={highContrast}
          >
            <span>🌓</span>
            <span className="hidden md:inline">{highContrast ? t.highContrast : t.contrast}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#07132a] border border-amber-400/30 rounded-lg overflow-hidden p-0.5 text-[11px] shadow-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-400 text-slate-950 font-black shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold transition-all ${
                language === 'mr'
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-400 text-slate-950 font-black shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold transition-all ${
                language === 'hi'
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-400 text-slate-950 font-black shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Quick Member / Admin Portal (Desktop only) */}
          <div className="hidden xl:flex items-center gap-2 border-l border-white/15 pl-2.5 text-[11px]">
            <Link
              href="/member"
              className="text-white/80 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
            >
              <span>👤</span> {t.memberPortal}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
