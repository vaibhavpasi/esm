'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AppleStorefrontSection() {
  const { language } = useLanguage();
  const shelfRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  const scrollShelf = (direction: 'left' | 'right') => {
    if (!shelfRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    shelfRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const scrollBento = (direction: 'left' | 'right') => {
    if (!bentoRef.current) return;
    const offset = direction === 'left' ? -420 : 420;
    bentoRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const categoryItems = [
    {
      id: 'pension',
      icon: '🏛️',
      name: language === 'mr' ? 'पेन्शन व ओरोप' : 'Pension & OROP',
      sub: 'SPARSH • 53% DR',
      href: '#pension-guide',
    },
    {
      id: 'senior-care',
      icon: '👴',
      name: language === 'mr' ? '८०+ वयोवृद्ध दालन' : '80+ Senior Care',
      sub: '+20% to 100% Hike',
      href: '#senior-care',
    },
    {
      id: 'echs',
      icon: '🏥',
      name: language === 'mr' ? 'ई.सी.एच.एस. दवाखाने' : 'ECHS Healthcare',
      sub: '40+ Hospitals',
      href: '#empanelled-hospitals',
    },
    {
      id: 'tri-services',
      icon: '🎖️',
      name: language === 'mr' ? 'त्रि-दल कक्ष' : 'Tri-Services',
      sub: 'Army • Navy • IAF',
      href: '#tri-services',
    },
    {
      id: 'veernari',
      icon: '👩‍👧',
      name: language === 'mr' ? 'वीर नारी सहायता' : 'Veer Nari Desk',
      sub: 'Family Grants',
      href: '#veer-nari',
    },
    {
      id: 'csd',
      icon: '🛒',
      name: language === 'mr' ? 'कॅन्टीन व वाहने' : 'CSD & AFD Portal',
      sub: 'Cars & Smartcards',
      href: '#csd-assistant',
    },
    {
      id: 'resettlement',
      icon: '💼',
      name: language === 'mr' ? 'पुनर्वसन व नोकरी' : 'Resettlement Jobs',
      sub: 'DGR Employment',
      href: '#resettlement',
    },
    {
      id: 'scholarship',
      icon: '🎓',
      name: language === 'mr' ? 'शिष्यवृत्ती केंद्र' : 'Scholarships',
      sub: '₹36,000 PMSS',
      href: '#scholarship-desk',
    },
    {
      id: 'legal',
      icon: '⚖️',
      name: language === 'mr' ? 'कायदेशीर सल्ला' : 'Legal & Land Aid',
      sub: 'Cantonment & Will',
      href: '#legal-land-aid',
    },
    {
      id: 'tribute',
      icon: '🪔',
      name: language === 'mr' ? 'अमर जवान ज्योती' : 'Amar Jawan Tribute',
      sub: 'Light a Sacred Diya',
      href: '#tribute',
    },
  ];

  return (
    <section className="apple-store-bg pt-10 pb-20 border-b border-black/[0.06]" aria-label="Apple Store Inspired Welfare Experience">
      {/* ── 1. Announcement Ribbon (Apple style) ────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-saffron-500/10 text-saffron-600 flex items-center justify-center font-bold text-sm shrink-0">
              🇮🇳
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#1d1d1f]">
              <span className="font-bold text-saffron-600">
                {language === 'mr' ? 'नवीन कल्याणकारी अपडेट:' : 'Latest Welfare Notice:'}
              </span>{' '}
              {language === 'mr'
                ? '८०+ वर्षांवरील निवृत्त सैनिकांसाठी घरपोच जीवन प्रमाण दाखला व पेन्शन वाढ सुरू आहे.'
                : 'Free Doorstep Digital Life Certificates & 80+ Age Pension Enhancements active across Nashik district.'}
            </p>
          </div>
          <a
            href="#senior-care"
            className="apple-pill-btn apple-pill-primary text-xs shrink-0 whitespace-nowrap"
          >
            <span>{language === 'mr' ? 'तपशील पहा' : 'View Assistance'}</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* ── 2. Apple Signature Typography Storefront Header ──────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6e6e73] block mb-2">
              {language === 'mr' ? 'नाशिक जिल्हा माजी सैनिक कल्याण दालन' : 'Nashik Ex-Servicemen Welfare Hub'}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.08]">
              Welfare.{' '}
              <span className="text-[#6e6e73] font-semibold">
                {language === 'mr'
                  ? 'देशासाठी लढणाऱ्या शूरवीरांसाठी सर्वोत्कृष्ट सुविधा.'
                  : 'The premier way to access defence pensions, health & family care.'}
              </span>
            </h2>
          </div>

          {/* Quick Specialist Helpdesk badge */}
          <div className="shrink-0 flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-black/[0.08] shadow-sm">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-900 to-navy-950 text-gold-300 flex items-center justify-center text-xl font-bold border border-gold-400/40">
              🎖️
            </div>
            <div className="text-left text-xs">
              <p className="font-bold text-[#1d1d1f]">
                {language === 'mr' ? 'मदत हवी आहे?' : 'Need guidance?'}
              </p>
              <a href="#contact" className="text-[#0071e3] hover:underline font-semibold flex items-center gap-1">
                <span>{language === 'mr' ? 'असोसिएशनशी बोला' : 'Connect with our team'}</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Horizontal Category Shelf (Apple Product Shelf) ──── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#6e6e73]">
            {language === 'mr' ? 'जलद सेवा मार्ग' : 'Explore by Category'}
          </p>

          {/* Scroll Paddles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollShelf('left')}
              className="w-8 h-8 rounded-full bg-white border border-black/[0.08] text-[#1d1d1f] flex items-center justify-center text-xs font-bold hover:bg-black/[0.05] transition-colors shadow-sm"
              aria-label="Scroll categories left"
            >
              ←
            </button>
            <button
              onClick={() => scrollShelf('right')}
              className="w-8 h-8 rounded-full bg-white border border-black/[0.08] text-[#1d1d1f] flex items-center justify-center text-xs font-bold hover:bg-black/[0.05] transition-colors shadow-sm"
              aria-label="Scroll categories right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={shelfRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
        >
          {categoryItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group flex-shrink-0 flex flex-col items-center text-center w-28 sm:w-32 focus:outline-none"
            >
              <div className="apple-squircle w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center p-3 mb-2.5 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl mb-1 transform group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold text-[#6e6e73] group-hover:text-[#0071e3] transition-colors line-clamp-1">
                  {item.sub}
                </span>
              </div>
              <span className="text-xs font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors leading-tight">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── 4. "The Latest." Bento Grid Showcase (Apple Store Featured) ─ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
              The Latest.{' '}
              <span className="text-[#6e6e73] font-medium">
                {language === 'mr' ? 'प्रमुख कल्याणकारी सेवा व नवीन उपक्रम.' : 'Key welfare initiatives ready for you right now.'}
              </span>
            </h3>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollBento('left')}
              className="w-8 h-8 rounded-full bg-white border border-black/[0.08] text-[#1d1d1f] flex items-center justify-center text-xs font-bold hover:bg-black/[0.05] transition-colors shadow-sm"
              aria-label="Scroll featured cards left"
            >
              ←
            </button>
            <button
              onClick={() => scrollBento('right')}
              className="w-8 h-8 rounded-full bg-white border border-black/[0.08] text-[#1d1d1f] flex items-center justify-center text-xs font-bold hover:bg-black/[0.05] transition-colors shadow-sm"
              aria-label="Scroll featured cards right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={bentoRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar py-3 px-1 scroll-smooth"
        >
          {/* Card 1: SPARSH & OROP Calculator (Obsidian Dark Card) */}
          <div className="w-[340px] sm:w-[420px] shrink-0 rounded-[28px] bg-gradient-to-br from-[#060e22] via-[#0d1e44] to-[#060e22] text-white p-8 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-saffron-400 block mb-2">
                SPARSH DEFENCE PENSION
              </span>
              <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                OROP-2 Arrears &amp; 53% DR.
              </h4>
              <p className="text-white/75 text-sm leading-relaxed mb-6">
                Calculate your precise revised monthly pension entitlement across all ranks with the latest Central Dearness Relief formula.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-6">
              <div className="flex justify-between items-center text-xs text-white/80 mb-1">
                <span>OROP-2 Benchmark</span>
                <span className="font-mono font-bold text-saffron-300">Updated 7th CPC</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                ₹26,500 <span className="text-sm font-semibold text-saffron-400">+ 53% DR</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#pension-guide"
                className="apple-pill-btn bg-white text-[#1d1d1f] hover:bg-slate-100 font-bold text-xs"
              >
                <span>Calculate Now</span>
                <span>→</span>
              </a>
              <Link
                href="/services#pension-orop"
                className="text-xs font-semibold text-white/80 hover:text-white underline underline-offset-4"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 2: Doorstep Life Certificate (Crisp White Card) */}
          <div className="w-[340px] sm:w-[420px] shrink-0 rounded-[28px] bg-white text-[#1d1d1f] p-8 flex flex-col justify-between shadow-md border border-black/[0.06] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
                DOORSTEP ASSISTANCE
              </span>
              <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1d1d1f] mb-2 leading-tight">
                100% Free Doorstep Life Certificate.
              </h4>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                No need to travel to banks. Postman biometrics and Aadhaar Face verification right at home for retirees aged 75+ and bedridden veterans.
              </p>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-4 border border-black/[0.04] mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏡</span>
                <div className="text-xs">
                  <p className="font-bold text-[#1d1d1f]">Home Visit Team active</p>
                  <p className="text-[#6e6e73]">Post Info app or Volunteer WhatsApp call</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#senior-care"
                className="apple-pill-btn apple-pill-primary text-xs font-bold"
              >
                <span>Request Visit</span>
                <span>→</span>
              </a>
              <a
                href="tel:02532570123"
                className="text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Call Helpline
              </a>
            </div>
          </div>

          {/* Card 3: ECHS Cashless Healthcare Network (Royal Azure Card) */}
          <div className="w-[340px] sm:w-[420px] shrink-0 rounded-[28px] bg-gradient-to-br from-[#0c4a6e] to-[#075985] text-white p-8 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-iaf-400/20 rounded-full blur-[90px] pointer-events-none" />

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-300 block mb-2">
                HEALTHCARE NETWORK
              </span>
              <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                40+ Empanelled Hospitals.
              </h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Direct cashless treatments, specialized cardiac, oncology &amp; orthopedic care across Nashik, with MH Deolali referrals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-6">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Military Hospital Deolali</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 font-bold text-[10px]">24x7 Casualty</span>
              </div>
              <p className="text-white/70 text-xs mt-1">ECHS Smartcard 64-KB Verified Center</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#empanelled-hospitals"
                className="apple-pill-btn bg-white text-[#075985] hover:bg-slate-100 font-bold text-xs"
              >
                <span>View Hospitals</span>
                <span>→</span>
              </a>
              <a
                href="tel:02532491234"
                className="text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
              >
                Emergency Dial
              </a>
            </div>
          </div>

          {/* Card 4: Veer Nari & Family Care (Warm Regal Card) */}
          <div className="w-[340px] sm:w-[420px] shrink-0 rounded-[28px] bg-white text-[#1d1d1f] p-8 flex flex-col justify-between shadow-md border border-black/[0.06] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[90px] pointer-events-none" />

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-600 block mb-2">
                VEER NARI &amp; FAMILY
              </span>
              <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1d1d1f] mb-2 leading-tight">
                ₹36,000/yr Education Grants.
              </h4>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Prime Minister&apos;s Scholarship Scheme (PMSS) and dedicated widow pension transition support for families of our martyrs.
              </p>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-4 border border-black/[0.04] mb-6">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1d1d1f]">PMSS Girls: ₹36,000/yr</span>
                <span className="font-bold text-[#6e6e73]">Boys: ₹30,000/yr</span>
              </div>
              <p className="text-[#6e6e73] text-[11px] mt-1">Professional degrees: Engineering, Medical, MBA</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#scholarship-desk"
                className="apple-pill-btn apple-pill-primary text-xs font-bold"
              >
                <span>Check Eligibility</span>
                <span>→</span>
              </a>
              <a
                href="#veer-nari"
                className="text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Veer Nari Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. "The ESM Difference." (Apple Store Difference Feature Row) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-8">
          The ESM Difference.{' '}
          <span className="text-[#6e6e73] font-medium">
            {language === 'mr' ? 'माजी सैनिक संघटनेशी जोडण्याचे कारण.' : 'Even more reasons to connect with our official portal.'}
          </span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🛡️',
              title: language === 'mr' ? '१००% मोफत व निस्वार्थ सेवा' : '100% Honorary Welfare',
              desc: language === 'mr'
                ? 'कोणतेही मध्यस्थ किंवा कमिशन नाही. सर्व सल्ला व मार्गदर्शन संपूर्ण मोफत.'
                : 'Zero agent fees and no middlemen. Transparent, official guidance for every veteran and family.',
            },
            {
              icon: '⚡',
              title: language === 'mr' ? 'थेट पीसीडीए व दिल्ली संपर्क' : 'Direct PCDA & Records Liaison',
              desc: language === 'mr'
                ? 'अडकलेली पेन्शन, दुरुस्ती व पीपीओसाठी रेकॉर्ड ऑफिसशी थेट पत्रव्यवहार.'
                : 'Direct channel with PCDA Allahabad, DPDO & Record Offices to expedite stalled PPOs and benefits.',
            },
            {
              icon: '🏡',
              title: language === 'mr' ? 'ज्येष्ठांसाठी घरपोच सुविधा' : 'Senior Doorstep Assistance',
              desc: language === 'mr'
                ? '७५+ वयोवृद्ध व आजारी सैनिकांसाठी घरपोच हयातीचा दाखला व सहाय्य.'
                : 'Dedicated volunteers providing doorstep digital certification and hospital referrals for 75+ retirees.',
            },
            {
              icon: '🤝',
              title: language === 'mr' ? 'एकाच छताखाली त्रि-दल बंधूत्व' : 'Unified Tri-Services Brotherhood',
              desc: language === 'mr'
                ? 'लष्कर, नौदल आणि हवाई दलातील सर्व माजी सैनिकांचा नाशिकमधील एकजूट मंच.'
                : 'Bringing Army, Navy, and Air Force veterans together under one prestigious garrison umbrella.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="apple-card p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl block mb-4" aria-hidden="true">
                  {item.icon}
                </span>
                <h4 className="font-heading font-bold text-lg text-[#1d1d1f] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. "Help is here." Quick Contact Strip (Apple Store Style) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-8">
          Help is here.{' '}
          <span className="text-[#6e6e73] font-medium">
            {language === 'mr' ? 'जेव्हा आणि जशी मदत लागेल.' : 'Whenever and however you need it.'}
          </span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="apple-card p-7 flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-3 block">📞</span>
              <h4 className="font-heading font-bold text-lg text-[#1d1d1f] mb-1">
                {language === 'mr' ? 'कल्याण अधिकाऱ्यांशी बोला' : 'Talk with a Welfare Officer'}
              </h4>
              <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed mb-4">
                Call our direct association telephone helpline for pension, documentation, and identity card assistance.
              </p>
            </div>
            <a
              href="tel:02532570123"
              className="text-sm font-bold text-[#0071e3] hover:underline inline-flex items-center gap-1"
            >
              <span>Call 0253-2570123</span>
              <span>↗</span>
            </a>
          </div>

          {/* Item 2 */}
          <div className="apple-card p-7 flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-3 block">📍</span>
              <h4 className="font-heading font-bold text-lg text-[#1d1d1f] mb-1">
                {language === 'mr' ? 'कॅनडा कॉर्नर कार्यालयास भेट द्या' : 'Visit Canada Corner Office'}
              </h4>
              <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed mb-4">
                Near Collectorate, Canada Corner, Nashik. Open Monday to Saturday 09:30 - 17:30 hrs.
              </p>
            </div>
            <a
              href="#contact"
              className="text-sm font-bold text-[#0071e3] hover:underline inline-flex items-center gap-1"
            >
              <span>Find on Maps &amp; Directions</span>
              <span>↗</span>
            </a>
          </div>

          {/* Item 3 */}
          <div className="apple-card p-7 flex flex-col justify-between border-l-4 border-l-red-500">
            <div>
              <span className="text-3xl mb-3 block">🚑</span>
              <h4 className="font-heading font-bold text-lg text-[#1d1d1f] mb-1">
                {language === 'mr' ? '२४x७ सैन्य रुग्णालय आपत्कालीन' : 'MH Deolali 24x7 Emergency'}
              </h4>
              <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed mb-4">
                Immediate casualty and ambulance assistance for defence veterans, Veer Naris, and their dependents.
              </p>
            </div>
            <a
              href="tel:02532491234"
              className="text-sm font-bold text-red-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Emergency Call 0253-2491234</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
