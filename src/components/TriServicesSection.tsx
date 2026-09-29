'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type ServiceForce = 'army' | 'navy' | 'airforce' | 'parity';

interface RankEquivalence {
  level: string;
  category: string;
  army: string;
  navy: string;
  airforce: string;
  insigniaDesc: string;
}

const rankEquivalenceList: RankEquivalence[] = [
  // Commissioned Officers
  {
    level: 'Pay Level 18',
    category: 'Commissioned Officer',
    army: 'General (Gen)',
    navy: 'Admiral (Adm)',
    airforce: 'Air Chief Marshal (ACM)',
    insigniaDesc: 'Crossed sword & baton with Ashoka Lions and four stars',
  },
  {
    level: 'Pay Level 17',
    category: 'Commissioned Officer',
    army: 'Lieutenant General (Lt Gen)',
    navy: 'Vice Admiral (V Adm)',
    airforce: 'Air Marshal (Air Mshl)',
    insigniaDesc: 'Crossed sword & baton with Ashoka Lions',
  },
  {
    level: 'Pay Level 14',
    category: 'Commissioned Officer',
    army: 'Major General (Maj Gen)',
    navy: 'Rear Admiral (R Adm)',
    airforce: 'Air Vice Marshal (AVM)',
    insigniaDesc: 'Crossed sword & baton with star',
  },
  {
    level: 'Pay Level 13A',
    category: 'Commissioned Officer',
    army: 'Brigadier (Brig)',
    navy: 'Commodore (Cmde)',
    airforce: 'Air Commodore (Air Cmde)',
    insigniaDesc: 'Ashoka Lions over triangle of three stars',
  },
  {
    level: 'Pay Level 13',
    category: 'Commissioned Officer',
    army: 'Colonel (Col)',
    navy: 'Captain (Capt)',
    airforce: 'Group Captain (Gp Capt)',
    insigniaDesc: 'Ashoka Lions over two stars',
  },
  {
    level: 'Pay Level 12A',
    category: 'Commissioned Officer',
    army: 'Lieutenant Colonel (Lt Col)',
    navy: 'Commander (Cdr)',
    airforce: 'Wing Commander (Wg Cdr)',
    insigniaDesc: 'Ashoka Lions over one star',
  },
  {
    level: 'Pay Level 11',
    category: 'Commissioned Officer',
    army: 'Major (Maj)',
    navy: 'Lieutenant Commander (Lt Cdr)',
    airforce: 'Squadron Leader (Sqn Ldr)',
    insigniaDesc: 'Ashoka Lions national emblem',
  },
  {
    level: 'Pay Level 10B',
    category: 'Commissioned Officer',
    army: 'Captain (Capt)',
    navy: 'Lieutenant (Lt)',
    airforce: 'Flight Lieutenant (Flt Lt)',
    insigniaDesc: 'Three five-pointed stars',
  },
  {
    level: 'Pay Level 10',
    category: 'Commissioned Officer',
    army: 'Lieutenant (Lt)',
    navy: 'Sub Lieutenant (Sub Lt)',
    airforce: 'Flying Officer (Fg Off)',
    insigniaDesc: 'Two five-pointed stars',
  },

  // Junior Commissioned Officers (JCOs) / Warrant Officers
  {
    level: 'Pay Level 8 / 9',
    category: 'JCO / Warrant Officer',
    army: 'Subedar Major (Sub Maj)',
    navy: 'Master Chief Petty Officer I (MCPO I)',
    airforce: 'Master Warrant Officer (MWO)',
    insigniaDesc: 'Ashoka Lions with tricolor band (Army) / Naval crest on cuff (Navy)',
  },
  {
    level: 'Pay Level 7',
    category: 'JCO / Warrant Officer',
    army: 'Subedar (Sub)',
    navy: 'Master Chief Petty Officer II (MCPO II)',
    airforce: 'Warrant Officer (WO)',
    insigniaDesc: 'Two stars with tricolor band (Army) / Naval crossed anchors',
  },
  {
    level: 'Pay Level 6',
    category: 'JCO / Warrant Officer',
    army: 'Naib Subedar (Nb Sub)',
    navy: 'Chief Petty Officer (CPO)',
    airforce: 'Junior Warrant Officer (JWO)',
    insigniaDesc: 'One star with tricolor band (Army) / Three chevrons with crown',
  },

  // Non-Commissioned Officers & Other Ranks
  {
    level: 'Pay Level 5',
    category: 'NCO & Other Ranks',
    army: 'Havildar (Hav)',
    navy: 'Petty Officer (PO)',
    airforce: 'Sergeant (Sgt)',
    insigniaDesc: 'Three rank chevrons (V-stripes)',
  },
  {
    level: 'Pay Level 4',
    category: 'NCO & Other Ranks',
    army: 'Naik (Nk)',
    navy: 'Leading Seaman (LS)',
    airforce: 'Corporal (Cpl)',
    insigniaDesc: 'Two rank chevrons (V-stripes)',
  },
  {
    level: 'Pay Level 3',
    category: 'NCO & Other Ranks',
    army: 'Lance Naik (L/Nk)',
    navy: 'Seaman I',
    airforce: 'Leading Aircraftman (LAC)',
    insigniaDesc: 'Single rank chevron / Propeller badge (IAF)',
  },
  {
    level: 'Pay Level 3',
    category: 'NCO & Other Ranks',
    army: 'Sepoy / Gunner / Rifleman',
    navy: 'Seaman II',
    airforce: 'Aircraftman (AC)',
    insigniaDesc: 'Basic Service Entry Rank',
  },
];

export default function TriServicesSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ServiceForce>('army');
  const [filterCategory, setFilterCategory] = useState<'All' | 'Commissioned Officer' | 'JCO / Warrant Officer' | 'NCO & Other Ranks'>('All');

  const filteredRanks = rankEquivalenceList.filter(
    (r) => filterCategory === 'All' || r.category === filterCategory
  );

  return (
    <section id="tri-services" className="py-20 sm:py-24 bg-navy-950 text-white relative overflow-hidden" aria-labelledby="tri-services-heading">
      {/* Decorative service glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-military-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4 text-saffron-300">
            <span>🇮🇳</span>
            <span>Indian Armed Forces Tri-Service Welfare</span>
          </div>

          <h2 id="tri-services-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {language === 'mr'
              ? 'भारतीय सेना, नौसेना व वायु सेना माजी सैनिक कक्ष'
              : language === 'hi'
              ? 'भारतीय थल, नौ एवं वायु सेना पूर्व सैनिक प्रभाग'
              : 'Tri-Services Veteran Division — Army, Navy & Air Force'}
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'नाशिक जिल्ह्यातील लष्कर, नौदल आणि हवाई दलातील निवृत्त अधिकारी, जवान आणि त्यांच्या कुटुंबियांसाठी समर्पित सेवा व मार्गदर्शन केंद्र.'
              : language === 'hi'
              ? 'नासिक जिले के थल सेना, नौसेना एवं वायु सेना के पूर्व सैनिकों एवं उनके परिवारों हेतु समर्पित कल्याणकारी एवं प्रशासनिक सेवाएं।'
              : 'Comprehensive welfare assistance, record offices, pension cells, and rank equivalences for Army, Navy, and Air Force veterans in Nashik.'}
          </p>
        </div>

        {/* Force Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            {
              id: 'army' as const,
              label: 'Indian Army',
              marathi: 'भारतीय सेना (थल)',
              icon: '🪖',
              activeClass: 'bg-gradient-to-r from-military-800 via-military-700 to-navy-950 text-gold-200 border-gold-400 shadow-[0_0_25px_rgba(202,138,4,0.35)]',
              inactiveClass: 'bg-navy-900/80 text-white/80 border-military-500/30 hover:border-military-400 hover:text-white',
            },
            {
              id: 'navy' as const,
              label: 'Indian Navy',
              marathi: 'भारतीय नौसेना',
              icon: '⚓',
              activeClass: 'bg-gradient-to-r from-blue-900 via-navy-800 to-cyan-900 text-cyan-200 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)]',
              inactiveClass: 'bg-navy-900/80 text-white/80 border-cyan-500/30 hover:border-cyan-400 hover:text-white',
            },
            {
              id: 'airforce' as const,
              label: 'Indian Air Force',
              marathi: 'भारतीय वायु सेना',
              icon: '✈️',
              activeClass: 'bg-gradient-to-r from-sky-800 via-blue-900 to-iaf-800 text-sky-100 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.35)]',
              inactiveClass: 'bg-navy-900/80 text-white/80 border-sky-500/30 hover:border-sky-400 hover:text-white',
            },
            {
              id: 'parity' as const,
              label: 'Tri-Service Rank Matrix',
              marathi: 'समकक्ष पदश्रेणी तक्ता',
              icon: '🎖️',
              activeClass: 'bg-gradient-to-r from-saffron-500 via-amber-500 to-saffron-600 text-white border-amber-300 shadow-[0_0_25px_rgba(255,103,31,0.35)]',
              inactiveClass: 'bg-navy-900/80 text-white/80 border-saffron-500/30 hover:border-saffron-400 hover:text-white',
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-lg border-2 ${
                activeTab === tab.id
                  ? `${tab.activeClass} scale-105`
                  : `${tab.inactiveClass} hover:bg-navy-800`
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{language === 'mr' ? tab.marathi : tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── ARMY TAB ───────────────────────────────────────── */}
        {activeTab === 'army' && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease]">
            {/* Banner */}
            <div className="bg-gradient-to-r from-military-950 via-navy-900 to-navy-950 border border-military-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-military-800/80 border border-military-400/50 flex items-center justify-center text-3xl shadow-inner">
                    🪖
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-military-600/80 text-white">
                      Land Forces
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                      Indian Army (भारतीय सेना)
                    </h3>
                    <p className="text-military-300 font-serif italic text-sm mt-0.5">
                      Motto: &ldquo;सेवा परमो धर्मः&rdquo; (Service Before Self)
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://rodra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-military-700/80 hover:bg-military-600 text-white text-xs font-bold transition-all border border-military-400/30"
                  >
                    RODRA Portal ↗
                  </a>
                  <a
                    href="https://indianarmyveterans.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold transition-all shadow"
                  >
                    DIAV Veteran Cell ↗
                  </a>
                </div>
              </div>

              {/* Nashik Local Stronghold */}
              <div className="mt-6 pt-2">
                <h4 className="text-xs font-bold text-saffron-400 uppercase tracking-wider mb-3">
                  📍 Nashik Army Establishments & Heritage:
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">Artillery Centre, Nashik Road</p>
                    <p className="text-xs text-white/60">
                      Training center for Regiment of Artillery recruits. Major employer and residence base for thousands of artillery veterans.
                    </p>
                  </div>
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">School of Artillery, Deolali</p>
                    <p className="text-xs text-white/60">
                      Premier tactical training institution. Features officers mess, artillery museum, Temple Hill, and veteran transit rooms.
                    </p>
                  </div>
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">Combat Army Aviation (CATS)</p>
                    <p className="text-xs text-white/60">
                      Gandhinagar Airfield, Nashik. Main flight training school for Indian Army Aviation Corps helicopter pilots.
                    </p>
                  </div>
                </div>
              </div>

              {/* Major Record Offices */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3">
                  Key Army Record Offices for Nashik Ex-Servicemen:
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Artillery Records</p>
                    <p className="text-white/50">Nashik Road, MH • 0253-2412855</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Maratha LI Records</p>
                    <p className="text-white/50">Belgaum, Karnataka</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Bombay Sappers Records</p>
                    <p className="text-white/50">Kirkee, Pune, MH</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Armoured Corps Records</p>
                    <p className="text-white/50">Ahmednagar, MH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── NAVY TAB ───────────────────────────────────────── */}
        {activeTab === 'navy' && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease]">
            <div className="bg-gradient-to-r from-blue-950 via-navy-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-900/80 border border-cyan-400/50 flex items-center justify-center text-3xl shadow-inner">
                    ⚓
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-700/80 text-white">
                      Maritime Defence
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                      Indian Navy (भारतीय नौसेना)
                    </h3>
                    <p className="text-cyan-300 font-serif italic text-sm mt-0.5">
                      Motto: &ldquo;शं नो वरुणः&rdquo; (May the Lord of Water be Auspicious Unto Us)
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.desanavy.wordpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-700/80 hover:bg-blue-600 text-white text-xs font-bold transition-all border border-cyan-400/30"
                  >
                    DESA Navy Portal ↗
                  </a>
                  <a
                    href="https://sparsh.defencepension.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold transition-all shadow"
                  >
                    NAVPEN Mumbai Cell ↗
                  </a>
                </div>
              </div>

              {/* Naval Veterans Network */}
              <div className="mt-6 pt-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  ⚓ Western Naval Command & Maharashtra Bases:
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">HQ Western Naval Command</p>
                    <p className="text-xs text-white/60">
                      Located in Mumbai. Administers welfare, healthcare referrals, and family benefits for Naval veterans throughout Maharashtra.
                    </p>
                  </div>
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">INS Shivaji, Lonavala</p>
                    <p className="text-xs text-white/60">
                      Center of Excellence in Marine Engineering. Close connection with technical ex-sailors settled in the Nashik-Pune belt.
                    </p>
                  </div>
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">Navy Foundation (Nashik Chapter)</p>
                    <p className="text-xs text-white/60">
                      Association network connecting retired Naval officers, sailors, and their families residing across Nashik district.
                    </p>
                  </div>
                </div>
              </div>

              {/* Naval Record Offices */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3">
                  Essential Contacts for Navy Veterans:
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Bureau of Sailors (CABS)</p>
                    <p className="text-white/50">Cheetah Camp, Mankhurd, Mumbai - 400088</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Naval Pension Office (NAVPEN)</p>
                    <p className="text-white/50">Direct Line: 022-25075455 / 1800-220-560</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">DESA (New Delhi)</p>
                    <p className="text-white/50">Toll Free: 1800-11-3838 • desa@navy.gov.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── AIR FORCE TAB ──────────────────────────────────── */}
        {activeTab === 'airforce' && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease]">
            <div className="bg-gradient-to-r from-sky-950 via-navy-900 to-slate-950 border border-sky-400/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-sky-900/80 border border-sky-300/50 flex items-center justify-center text-3xl shadow-inner">
                    ✈️
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-700/80 text-white">
                      Air Superiority
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                      Indian Air Force (भारतीय वायु सेना)
                    </h3>
                    <p className="text-sky-300 font-serif italic text-sm mt-0.5">
                      Motto: &ldquo;नभः स्पृशं दीप्तम्&rdquo; (Touch the Sky with Glory)
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://iafveterans.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-sky-700/80 hover:bg-sky-600 text-white text-xs font-bold transition-all border border-sky-400/30"
                  >
                    DAV Air Veterans ↗
                  </a>
                  <a
                    href="https://indianairforce.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold transition-all shadow"
                  >
                    AFRO Subroto Park ↗
                  </a>
                </div>
              </div>

              {/* Nashik Local Aerospace Stronghold */}
              <div className="mt-6 pt-2">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                  ✈️ Nashik Air Force Hub & Aviation Assets:
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">Air Force Station Ojhar (Nashik)</p>
                    <p className="text-xs text-white/60">
                      Major IAF maintenance and logistics base located in Ojhar, Nashik, home to veteran airmen and engineering personnel.
                    </p>
                  </div>
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">11 Base Repair Depot (11 BRD)</p>
                    <p className="text-xs text-white/60">
                      Premier depot for overhaul, structural modernization, and maintenance of front-line Su-30MKI fighter jets.
                    </p>
                  </div>
                  <div className="bg-navy-900/60 p-4 rounded-2xl border border-white/5">
                    <p className="font-bold text-sm text-white mb-1">HAL Aircraft Division, Ozar</p>
                    <p className="text-xs text-white/60">
                      Historic defence aerospace ecosystem employing and training hundreds of retired IAF technical personnel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Air Force Record Offices */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3">
                  Essential Contacts for Air Force Veterans:
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Directorate of Air Veterans (DAV)</p>
                    <p className="text-white/50">Toll Free: 1800-11-5800 • Subroto Park, New Delhi</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Air Force Record Office (AFRO)</p>
                    <p className="text-white/50">Airmen Pension & Record Redressal: 011-25695240</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-bold text-white">Air Force Association (AFA)</p>
                    <p className="text-white/50">Maharashtra Branch & Nashik Area Representation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── RANK MATRIX TAB ───────────────────────────────── */}
        {activeTab === 'parity' && (
          <div className="space-y-6 animate-[fadeIn_0.3s_ease]">
            <div className="bg-navy-900/90 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    Tri-Services Equivalent Rank Structure
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Official comparative rank hierarchy across Indian Army, Indian Navy, and Indian Air Force
                  </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'All', activeBg: 'bg-gradient-to-r from-saffron-500 to-amber-500 text-white shadow-md ring-1 ring-saffron-300' },
                    { label: 'Commissioned Officer', activeBg: 'bg-gradient-to-r from-amber-500 to-gold-600 text-white shadow-md ring-1 ring-amber-300' },
                    { label: 'JCO / Warrant Officer', activeBg: 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md ring-1 ring-rose-300' },
                    { label: 'NCO & Other Ranks', activeBg: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md ring-1 ring-emerald-300' },
                  ].map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => setFilterCategory(cat.label as typeof filterCategory)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        filterCategory === cat.label
                          ? `${cat.activeBg} scale-105`
                          : 'bg-white/10 text-white/75 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-navy-950 border-b border-white/10 text-white font-heading">
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-saffron-400">Pay Level</th>
                      <th className="py-3 px-4 font-bold text-military-300">🪖 Indian Army</th>
                      <th className="py-3 px-4 font-bold text-cyan-300">⚓ Indian Navy</th>
                      <th className="py-3 px-4 font-bold text-sky-300">✈️ Indian Air Force</th>
                      <th className="py-3 px-4 text-xs text-white/50">Insignia / Distinctions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/90">
                    {filteredRanks.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-mono font-semibold text-xs text-saffron-300/80">
                          {item.level}
                        </td>
                        <td className="py-3 px-4 font-bold text-white">
                          {item.army}
                        </td>
                        <td className="py-3 px-4 font-bold text-cyan-200">
                          {item.navy}
                        </td>
                        <td className="py-3 px-4 font-bold text-sky-200">
                          {item.airforce}
                        </td>
                        <td className="py-3 px-4 text-xs text-white/60">
                          {item.insigniaDesc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-white/50 flex-wrap gap-2">
                <span>* Reference: 7th CPC Defence Pay Matrix & Ministry of Defence Rank Parity Table</span>
                <span>All ranks eligible for Association Welfare Benefits in Nashik</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
