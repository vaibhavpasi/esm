'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function FloatingElements() {
  const [helpOpen, setHelpOpen] = useState(false);
  const { toggleElderMode, elderMode } = useLanguage();

  return (
    <>
      {/* Desktop Floating Action Buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Help Options Popover */}
        {helpOpen && (
          <div
            className="bg-[#0c140b] border border-amber-400/40 text-white rounded-2xl shadow-2xl p-4 w-72 mb-2 animate-[fadeIn_0.2s_ease] backdrop-blur-xl"
            role="menu"
            aria-label="Help options"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-400/20">
              <p className="font-heading font-extrabold text-amber-300 text-xs uppercase tracking-wider">
                🎖️ Quick Welfare Assistance
              </p>
              <button
                onClick={() => setHelpOpen(false)}
                className="text-white/60 hover:text-white text-xs px-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <nav className="space-y-1">
              {[
                { label: 'Senior Veterans Care Desk', href: '/#senior-care', icon: '👓', desc: '80+ Hike & Doorstep DLC' },
                { label: 'Pension & SPARSH Help', href: '/#pension-guide', icon: '💼', desc: 'Migration & PPO assistance' },
                { label: 'ECHS Empanelled Hospitals', href: '/#empanelled-hospitals', icon: '🏥', desc: 'Cashless treatment network' },
                { label: 'CSD Smart Card Guide', href: '/#csd-assistant', icon: '🛒', desc: 'Quota & vehicle booking' },
                { label: 'Submit Grievance', href: '/grievance', icon: '📝', desc: '24/7 Redressal cell' },
                { label: 'Contact Association', href: '/contact', icon: '📞', desc: 'Office & direct hotlines' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="flex items-start gap-3 p-2 rounded-xl text-xs font-semibold text-white/90 hover:text-amber-300 hover:bg-white/10 transition-colors group"
                  onClick={() => setHelpOpen(false)}
                >
                  <span className="text-base shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold leading-tight">{item.label}</p>
                    <p className="text-[10px] text-white/50 leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Need Help Button */}
        <button
          onClick={() => setHelpOpen(!helpOpen)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-xl transition-all hover:-translate-y-0.5 border ${
            helpOpen
              ? 'bg-[#0f1710] border-amber-400 text-amber-300'
              : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 border-amber-400/60 shadow-[0_4px_16px_rgba(245,158,11,0.35)]'
          }`}
          aria-label={helpOpen ? 'Close help menu' : 'Need Help?'}
          aria-expanded={helpOpen}
        >
          <span>{helpOpen ? '✕' : '🆘'}</span>
          <span>{helpOpen ? 'Close' : 'Quick Help Desk'}</span>
        </button>
      </div>

      {/* Desktop WhatsApp Floating Button */}
      <a
        href="https://wa.me/912532570123"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 left-6 z-40 items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl border border-emerald-400/40"
        aria-label="Connect with ESM Welfare Helpline on WhatsApp"
        title="WhatsApp Veterans Helpline"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span>WhatsApp Help</span>
      </a>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <aside
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c140b]/98 backdrop-blur-xl border-t border-amber-400/30 px-2 py-1.5 flex items-center justify-around text-white shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
        aria-label="Mobile quick actions"
      >
        <a
          href="tel:02532570123"
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 text-white/85 hover:text-amber-400 transition-colors"
          aria-label="Call 24/7 Helpline"
        >
          <span className="text-base">📞</span>
          <span className="text-[10px] font-bold">Helpline</span>
        </a>

        <a
          href="https://wa.me/912532570123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          aria-label="WhatsApp"
        >
          <span className="text-base">💬</span>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        <button
          onClick={toggleElderMode}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-colors ${
            elderMode ? 'text-amber-400 font-black' : 'text-white/70 hover:text-white'
          }`}
          aria-label="Senior Citizen Mode"
        >
          <span className="text-base">👓</span>
          <span className="text-[10px] font-bold">{elderMode ? 'Senior ON' : 'Senior'}</span>
        </button>

        <Link
          href="/grievance"
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 text-white/85 hover:text-amber-400 transition-colors"
        >
          <span className="text-base">📝</span>
          <span className="text-[10px] font-bold">Grievance</span>
        </Link>

        <Link
          href="/membership"
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 text-amber-400 hover:text-amber-300 font-extrabold transition-colors"
        >
          <span className="text-base">🎖️</span>
          <span className="text-[10px]">Join</span>
        </Link>
      </aside>
    </>
  );
}
