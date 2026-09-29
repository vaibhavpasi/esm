'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import IndianArmyCrest from './IndianArmyCrest';

export default function Hero() {
  const particleRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Generate particles
  useEffect(() => {
    if (!particleRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const container = particleRef.current;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.width = `${2 + Math.random() * 4}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = `${0.2 + Math.random() * 0.3}`;
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero — Serving Those Who Served the Nation"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-veterans.jpg)' }}
        role="img"
        aria-label="Indian Armed Forces veterans at a community gathering"
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/80 to-navy-950/95" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div ref={particleRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />

      {/* Soft glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-saffron-500/10 blur-[120px] animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-navy-400/10 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        {/* Indian Army Emblem & Official Motto */}
        <div className={`mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex flex-col items-center p-3 sm:p-4 rounded-3xl bg-navy-950/85 border border-amber-400/40 shadow-2xl backdrop-blur-md">
            <IndianArmyCrest size="xl" showMotto={true} />
            <div className="flex items-center gap-2 text-xs text-amber-200/90 font-bold px-3 py-1 mt-1 rounded-full bg-military-800/80 border border-amber-400/20">
              <span>🇮🇳 भारतीय सेना • INDIAN ARMY VETERANS WELFARE</span>
            </div>
          </div>
        </div>

        {/* Decorative badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-saffron-500/40 bg-navy-900/60 backdrop-blur-sm mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
          <span className="text-saffron-300 text-xs sm:text-sm font-semibold tracking-wide">
            {t.heroBadge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {t.heroHeadline1}{' '}
          <span className="relative">
            <span className="gradient-text-saffron">{t.heroHeadline2}</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-saffron-600 rounded-full opacity-60" aria-hidden="true" />
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {t.heroSubheadline}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            href="/membership"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-base bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
          >
            {t.ctaApply}
          </Link>
          <Link
            href="/grievance"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-base border-2 border-white/60 text-white hover:bg-white hover:text-navy-900 transition-all hover:-translate-y-1 backdrop-blur-sm"
          >
            {t.ctaGrievance}
          </Link>
          <a
            href="#tribute"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-base bg-navy-800/80 hover:bg-navy-700 text-saffron-300 border border-saffron-400/30 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            <span>🪔</span>
            <span>{t.heroTribute}</span>
          </a>
        </div>

        {/* Explorer Link */}
        <Link
          href="/services"
          className={`inline-flex items-center gap-2 text-saffron-300 hover:text-saffron-200 font-semibold text-sm transition-all duration-1000 delay-600 group ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.ctaServices}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>


        {/* Trust Strip */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/50 text-sm transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" aria-hidden="true" />
            Serving Veterans
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
            Supporting Families
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-military-400" aria-hidden="true" />
            Strengthening the Community
          </span>
        </div>

        {/* Indian Army Regiments stationed at Nashik */}
        <div
          className={`mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs transition-all duration-1000 delay-800 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="px-3 py-1 rounded-full bg-navy-950/80 border border-amber-400/30 text-amber-200/90 font-semibold shadow-sm inline-flex items-center gap-1.5">
            <span>🎖️</span>
            <span>Artillery Centre & School of Artillery, Deolali (Sarvatra Izzat-o-Iqbal)</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-950/80 border border-military-500/40 text-military-200 font-semibold shadow-sm inline-flex items-center gap-1.5">
            <span>🚁</span>
            <span>Combat Army Aviation Training School, Gandhinagar (Suvarna Chhatra)</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-950/80 border border-red-500/40 text-red-200 font-semibold shadow-sm inline-flex items-center gap-1.5">
            <span>⚔️</span>
            <span>Maratha Light Infantry & Bombay Sappers Veterans</span>
          </span>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbfd] to-transparent" aria-hidden="true" />

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
