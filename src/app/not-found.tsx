'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import IndianArmyCrest from '@/components/IndianArmyCrest';

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-[75vh] flex items-center justify-center bg-slate-50 dark:bg-[#070e06] text-slate-800 dark:text-white px-4 py-16">
        <div className="max-w-xl w-full text-center bg-white dark:bg-[#0c140b] border border-slate-200 dark:border-amber-400/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex justify-center mb-6">
            <IndianArmyCrest size="lg" showMotto={true} />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3">
            Error 404 • Page Not Found
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-black mb-3 text-navy-950 dark:text-white">
            Target Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 leading-relaxed mb-8">
            The page or document you are attempting to access has been moved, archived, or is currently unavailable. Please return to base or use the welfare directory below.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8 text-left text-xs">
            <Link
              href="/"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-amber-500/10 border border-slate-200 dark:border-white/10 hover:border-amber-400/50 transition-all font-semibold"
            >
              <p className="font-bold text-slate-900 dark:text-amber-300">🏛️ Home Portal</p>
              <p className="text-[11px] text-slate-500 dark:text-white/60">Main dashboard</p>
            </Link>
            <Link
              href="/services"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-amber-500/10 border border-slate-200 dark:border-white/10 hover:border-amber-400/50 transition-all font-semibold"
            >
              <p className="font-bold text-slate-900 dark:text-amber-300">🛡️ Welfare Services</p>
              <p className="text-[11px] text-slate-500 dark:text-white/60">All 12 programmes</p>
            </Link>
            <Link
              href="/events"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-amber-500/10 border border-slate-200 dark:border-white/10 hover:border-amber-400/50 transition-all font-semibold"
            >
              <p className="font-bold text-slate-900 dark:text-amber-300">📅 Events Coverage</p>
              <p className="text-[11px] text-slate-500 dark:text-white/60">Rallies & camps</p>
            </Link>
            <Link
              href="/grievance"
              className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-amber-500/10 border border-slate-200 dark:border-white/10 hover:border-amber-400/50 transition-all font-semibold"
            >
              <p className="font-bold text-slate-900 dark:text-amber-300">📝 Grievance Cell</p>
              <p className="text-[11px] text-slate-500 dark:text-white/60">Submit complaint</p>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              ← Back to Association Home
            </Link>
            <a
              href="tel:02532570123"
              className="px-5 py-2.5 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold text-xs sm:text-sm transition-all"
            >
              📞 Call Helpline: 0253-2570123
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </>
  );
}
