'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import IndianArmyCrest from './IndianArmyCrest';

export default function Hero() {
  const particleRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
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

      {/* Soft glow orbs - Tri-Services colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-saffron-500/20 blur-[130px] animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-iaf-500/20 blur-[130px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-tiranga-500/15 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '3s' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/15 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        {/* Indian Army Emblem & Official Motto */}
        <div className={`mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex flex-col items-center p-3.5 sm:p-4.5 rounded-3xl bg-navy-950/90 border-2 border-gold-400/40 shadow-2xl backdrop-blur-md glow-gold">
            <IndianArmyCrest size="xl" showMotto={true} />
            <div className="flex items-center gap-2 text-xs text-gold-200 font-bold px-3.5 py-1 mt-1.5 rounded-full bg-gradient-to-r from-military-900 via-navy-900 to-military-900 border border-gold-400/30">
              <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse" />
              <span>🇮🇳 भारतीय सेना • INDIAN ARMED FORCES VETERANS WELFARE</span>
            </div>
          </div>
        </div>

        {/* Decorative badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-saffron-400/50 bg-navy-950/70 backdrop-blur-md mb-6 transition-all duration-1000 shadow-md ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-saffron-400 to-amber-300 animate-pulse shadow-sm shadow-saffron-500" />
          <span className="text-saffron-300 text-xs sm:text-sm font-bold tracking-wide">
            {t.heroBadge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {t.heroHeadline1}{' '}
          <span className="relative inline-block">
            <span className="gradient-text-saffron drop-shadow-sm">{t.heroHeadline2}</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron-500 via-gold-400 to-tiranga-500 rounded-full opacity-80" aria-hidden="true" />
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-lg md:text-xl text-navy-50/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium transition-all duration-1000 delay-400 ${
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
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-extrabold text-base bg-gradient-to-r from-saffron-500 via-amber-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-amber-600 transition-all shadow-xl shadow-saffron-500/25 hover:shadow-2xl hover:shadow-saffron-500/40 hover:-translate-y-1 active:translate-y-0 border border-saffron-300/40"
          >
            {t.ctaApply}
          </Link>
          <Link
            href="/grievance"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-base bg-gradient-to-r from-emerald-600 to-tiranga-700 hover:from-emerald-500 hover:to-tiranga-600 text-white transition-all hover:-translate-y-1 shadow-lg shadow-emerald-950/40 border border-emerald-400/40"
          >
            {t.ctaGrievance}
          </Link>
          <a
            href="#tribute"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-base bg-navy-900/90 hover:bg-navy-800 text-gold-300 hover:text-gold-200 border-2 border-gold-400/40 hover:border-gold-400 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 shadow-lg shadow-navy-950/50"
          >
            <span className="text-lg">🪔</span>
            <span>{t.heroTribute}</span>
          </a>
        </div>

        {/* Explorer Link */}
        <Link
          href="/services"
          className={`inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-bold text-sm transition-all duration-1000 delay-600 group bg-navy-950/60 px-4 py-1.5 rounded-full border border-gold-400/20 backdrop-blur-sm ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.ctaServices}
          <span className="transition-transform group-hover:translate-x-1.5 text-saffron-400">→</span>
        </Link>


        {/* Trust Strip */}
        <div
          className={`mt-14 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-xs sm:text-sm font-semibold transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950/60 border border-saffron-500/30">
            <span className="w-2 h-2 rounded-full bg-saffron-500" aria-hidden="true" />
            Serving 14,000+ Veterans
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950/60 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
            Supporting Veer Naris & Families
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950/60 border border-tiranga-500/30">
            <span className="w-2 h-2 rounded-full bg-tiranga-400" aria-hidden="true" />
            Nashik & Deolali Garrison
          </span>
        </div>

        {/* Indian Army Regiments stationed at Nashik */}
        <div
          className={`mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs transition-all duration-1000 delay-800 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-navy-950 via-amber-950/50 to-navy-950 border border-gold-400/50 text-gold-300 font-semibold shadow-md inline-flex items-center gap-1.5">
            <span>🎖️</span>
            <span>Artillery Centre & School of Artillery, Deolali (Sarvatra Izzat-o-Iqbal)</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-navy-950 via-sky-950/50 to-navy-950 border border-iaf-400/50 text-iaf-200 font-semibold shadow-md inline-flex items-center gap-1.5">
            <span>🚁</span>
            <span>Combat Army Aviation Training School, Gandhinagar (Suvarna Chhatra)</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-navy-950 via-rose-950/50 to-navy-950 border border-armyred-400/50 text-red-200 font-semibold shadow-md inline-flex items-center gap-1.5">
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
