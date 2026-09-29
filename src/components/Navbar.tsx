'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/lib/hooks';
import { useLanguage } from '@/lib/LanguageContext';
import TopBar from './TopBar';
import IndianArmyCrest from './IndianArmyCrest';
import SearchOverlay from './SearchOverlay';

interface DropdownItem {
  label: string;
  labelMr?: string;
  href: string;
  desc?: string;
  icon: string;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>('welfare');
  const [searchOpen, setSearchOpen] = useState(false);

  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const navRef = useRef<HTMLElement>(null);
  const prevPathnameRef = useRef(pathname);

  // Close menus on route change
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      queueMicrotask(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
      });
    }
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Global Ctrl+K / Cmd+K search listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation Structure
  const aboutItems: DropdownItem[] = [
    { label: 'About Association', labelMr: 'संस्थेची माहिती', href: '/about', desc: 'History, Mission, and Constitution', icon: '🔰' },
    { label: 'Office Bearers & Leadership', labelMr: 'पदाधिकारी व कार्यकारिणी', href: '/#office-bearers', desc: 'Governing body, committee & mentors', icon: '🎖️' },
    { label: 'Martyrs & Gallantry Tribute', labelMr: 'अमर जवान स्मृती व वीर हुतात्मे', href: '/#martyrs', desc: 'Amar Jawan Diya & Bugle Calls', icon: '🕯️' },
    { label: 'Tri-Services & Regimental Hub', labelMr: 'त्रि-दल व रेजिमेंटल केंद्र', href: '/#tri-services', desc: 'Artillery Centre Deolali, CATS & Units', icon: '⚔️' },
  ];

  const welfareItems: DropdownItem[] = [
    { label: 'All 12 Welfare Services', labelMr: 'सर्व कल्याणकारी योजना', href: '/services', desc: 'Comprehensive financial, medical & legal aid', icon: '🛡️' },
    { label: 'Senior Pensioners Care Desk', labelMr: 'ज्येष्ठ निवृत्तीवेतनधारक कक्ष', href: '/#senior-care', desc: '80+ Pension hike calculator & Doorstep DLC', icon: '👓' },
    { label: 'Pension & SPARSH Migration Guide', labelMr: 'स्पर्श व पेन्शन मार्गदर्शन', href: '/#pension-guide', desc: 'PPO, SPARSH login & digital certificate', icon: '💼' },
    { label: 'CSD Canteen Smart Card Assistant', labelMr: 'सीएसडी कॅन्टीन सुविधा', href: '/#csd-assistant', desc: 'Car/bike entitlement & AFD portal guide', icon: '🛒' },
    { label: 'Empanelled Cashless Hospitals', labelMr: 'ईसीएचएस कॅशलेस रुग्णालये', href: '/#empanelled-hospitals', desc: 'ECHS tie-up hospitals in Nashik', icon: '🏥' },
    { label: 'Resettlement & Civilian Careers', labelMr: 'पुनर्वसन व रोजगार संधी', href: '/#resettlement-hub', desc: 'DGR courses, security & MIDC jobs', icon: '👔' },
    { label: 'Veer Nari & War Widows Desk', labelMr: 'वीर नारी व विधवा कल्याण कक्ष', href: '/#veer-nari', desc: 'Special assistance & emergency grants', icon: '🇮🇳' },
  ];

  const eventItems: DropdownItem[] = [
    { label: 'Events & Media Coverage Hub', labelMr: 'कार्यक्रम व माध्यम वृत्तांत', href: '/events', desc: 'Annual rallies, medical drives & sammelans', icon: '📅' },
    { label: 'Photo & Video Gallery', labelMr: 'छायाचित्रे व चित्रफीत दालन', href: '/gallery', desc: 'Historic conventions, rallies & ceremonies', icon: '📸' },
    { label: 'Press Releases & Media Cell', labelMr: 'वृत्तपत्र बातम्या व प्रसिद्धीपत्रके', href: '/events#press-cell', desc: 'Official press releases & news clippings', icon: '🗞️' },
  ];

  const resourceItems: DropdownItem[] = [
    { label: 'Notices & Circulars', labelMr: 'अधिकृत सूचना व परिपत्रके', href: '/notices', desc: 'Government GRs and Association notices', icon: '📋' },
    { label: 'Claim Forms & Downloads', labelMr: 'अर्ज व कागदपत्रे डाउनलोड', href: '/downloads', desc: 'ECHS, pension, scholarship & welfare forms', icon: '📄' },
    { label: 'Nashik Cantonment Transit Guide', labelMr: 'नाशिक लष्करी वाहतूक मार्गदर्शक', href: '/#transit-guide', desc: 'Routes to Artillery Centre, MH & guest rooms', icon: '🚌' },
    { label: 'Agricultural Land (7/12) & Legal Aid', labelMr: 'जमीन व कायदेशीर सल्ला कक्ष', href: '/#legal-aid', desc: 'Free veteran property & legal clinic', icon: '⚖️' },
    { label: 'PMSS Scholarship & Academy Desk', labelMr: 'पंतप्रधान शिष्यवृत्ती कक्ष', href: '/#scholarship-desk', desc: 'Wards education grants & military coaching', icon: '🎓' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const isCurrentGroupActive = (items: DropdownItem[]) => {
    return items.some((item) => pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
  };

  return (
    <>
      {/* Tricolor top border stripe */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-1 bg-gradient-to-r from-saffron-500 via-white to-military-500" />

      {/* Top utility & accessibility bar */}
      <div className="relative z-[65] pt-1">
        <TopBar />
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b1209]/98 backdrop-blur-xl py-2 border-b border-amber-400/35 shadow-2xl'
            : 'bg-[#0e170d]/95 backdrop-blur-md py-3 border-b border-amber-400/20'
        }`}
        role="banner"
      >
        <nav
          ref={navRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo with Indian Army Insignia */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="ESM Welfare Association of Nashik — Home"
          >
            <div className="relative shrink-0">
              <IndianArmyCrest size="md" showMotto={false} className="group-hover:scale-105 transition-transform drop-shadow-[0_2px_8px_rgba(234,179,8,0.3)]" />
            </div>
            <div>
              <p className="font-heading font-extrabold text-white text-xs sm:text-sm lg:text-base leading-tight tracking-tight group-hover:text-amber-300 transition-colors">
                {language === 'mr'
                  ? 'माजी सैनिक कल्याण संस्था, नाशिक'
                  : language === 'hi'
                  ? 'पूर्व सैनिक कल्याण संघ, नासिक'
                  : 'ESM Welfare Association, Nashik'}
              </p>
              <div className="text-[10px] sm:text-[11px] font-bold text-amber-400 flex items-center gap-1.5 mt-0.5">
                <span>भारतीय सेना • सेवा परमो धर्मः</span>
                <span className="w-1 h-1 rounded-full bg-saffron-400 hidden sm:inline-block" />
                <span className="text-white/60 font-semibold hidden sm:inline-block text-[10px]">Nashik HQ</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items with Dropdowns */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5" role="menubar">
            {/* 1. Home */}
            <Link
              href="/"
              role="menuitem"
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                pathname === '/'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              {t.home}
            </Link>

            {/* 2. About Us ▾ */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => toggleDropdown('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  isCurrentGroupActive(aboutItems) || activeDropdown === 'about'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'about'}
                aria-haspopup="true"
              >
                <span>{t.about}</span>
                <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-[#0c140b] border border-amber-400/30 rounded-2xl shadow-2xl p-2 z-50 animate-[fadeIn_0.15s_ease] backdrop-blur-xl">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-lg mt-0.5" aria-hidden="true">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                          {language === 'mr' && item.labelMr ? item.labelMr : item.label}
                        </p>
                        {item.desc && <p className="text-[10px] text-white/60 leading-tight mt-0.5">{item.desc}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Welfare & Schemes ▾ */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => toggleDropdown('welfare')}
                onMouseEnter={() => setActiveDropdown('welfare')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  isCurrentGroupActive(welfareItems) || activeDropdown === 'welfare'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'welfare'}
                aria-haspopup="true"
              >
                <span>{language === 'mr' ? 'कल्याणकारी योजना' : 'Welfare & Schemes'}</span>
                <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === 'welfare' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
              </button>

              {activeDropdown === 'welfare' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-[#0c140b] border border-amber-400/30 rounded-2xl shadow-2xl p-2 z-50 animate-[fadeIn_0.15s_ease] backdrop-blur-xl">
                  {welfareItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-lg mt-0.5" aria-hidden="true">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                          {language === 'mr' && item.labelMr ? item.labelMr : item.label}
                        </p>
                        {item.desc && <p className="text-[10px] text-white/60 leading-tight mt-0.5">{item.desc}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Events & Coverage ▾ */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => toggleDropdown('events')}
                onMouseEnter={() => setActiveDropdown('events')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  isCurrentGroupActive(eventItems) || activeDropdown === 'events'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'events'}
                aria-haspopup="true"
              >
                <span>{language === 'mr' ? 'कार्यक्रम व वृत्तांत' : 'Events & Media'}</span>
                <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === 'events' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
              </button>

              {activeDropdown === 'events' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-[#0c140b] border border-amber-400/30 rounded-2xl shadow-2xl p-2 z-50 animate-[fadeIn_0.15s_ease] backdrop-blur-xl">
                  {eventItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-lg mt-0.5" aria-hidden="true">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                          {language === 'mr' && item.labelMr ? item.labelMr : item.label}
                        </p>
                        {item.desc && <p className="text-[10px] text-white/60 leading-tight mt-0.5">{item.desc}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Resources ▾ */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => toggleDropdown('resources')}
                onMouseEnter={() => setActiveDropdown('resources')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  isCurrentGroupActive(resourceItems) || activeDropdown === 'resources'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                <span>{language === 'mr' ? 'संसाधने व अर्ज' : 'Resources'}</span>
                <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full right-0 mt-1 w-80 bg-[#0c140b] border border-amber-400/30 rounded-2xl shadow-2xl p-2 z-50 animate-[fadeIn_0.15s_ease] backdrop-blur-xl">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-lg mt-0.5" aria-hidden="true">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                          {language === 'mr' && item.labelMr ? item.labelMr : item.label}
                        </p>
                        {item.desc && <p className="text-[10px] text-white/60 leading-tight mt-0.5">{item.desc}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Grievance */}
            <Link
              href="/grievance"
              role="menuitem"
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                pathname === '/grievance'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{t.grievance}</span>
            </Link>

            {/* 7. Contact */}
            <Link
              href="/contact"
              role="menuitem"
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                pathname === '/contact'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{t.contact}</span>
            </Link>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Instant Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white/90 hover:text-amber-300 border border-white/10 hover:border-amber-400/40 transition-all flex items-center gap-1.5 shadow-sm"
              title="Global Search (Press Ctrl+K)"
              aria-label="Search site"
            >
              <span className="text-sm">🔍</span>
              <span className="hidden xl:inline text-[11px] text-white/60">Ctrl+K</span>
            </button>

            {/* Apply for Membership CTA */}
            <Link
              href="/membership"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 transition-all shadow-[0_2px_10px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_16px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-1"
            >
              <span>🎖️</span>
              <span>{t.ctaApply}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 focus:outline-none transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Global In-Page Search Modal */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Sliding Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#070d06]/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0c140b] border-l border-amber-400/30 flex flex-col text-white shadow-2xl overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-amber-400/20 bg-military-950/70 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <IndianArmyCrest size="sm" showMotto={false} />
                <div>
                  <p className="font-heading font-extrabold text-white text-xs leading-tight">
                    {language === 'mr' ? 'माजी सैनिक कल्याण संस्था' : 'ESM Welfare Association'}
                  </p>
                  <p className="text-[10px] font-bold text-amber-400">भारतीय सेना • सेवा परमो धर्मः</p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white text-sm transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Quick Emergency Call Strip */}
            <div className="px-4 py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-between text-xs">
              <a
                href="tel:02532570123"
                className="flex items-center gap-1.5 text-amber-300 hover:text-white font-bold"
              >
                <span>📞</span>
                <span>Helpline: 0253-2570123</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:02532491234"
                className="text-white/70 hover:text-amber-300 font-semibold"
              >
                MH Deolali
              </a>
            </div>

            {/* Accordion Navigation Links */}
            <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm ${
                  pathname === '/' ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' : 'hover:bg-white/5'
                }`}
              >
                <span>🏠 {t.home}</span>
                <span className="text-xs text-white/40">→</span>
              </Link>

              {/* About Us Section */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'about' ? null : 'about')}
                  className="w-full flex items-center justify-between p-3 text-xs font-bold text-left hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>🔰</span>
                    <span>{t.about}</span>
                  </span>
                  <span className={`text-xs transition-transform ${mobileExpandedSection === 'about' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
                </button>
                {mobileExpandedSection === 'about' && (
                  <div className="p-2 space-y-1 bg-black/30 border-t border-white/5">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs hover:bg-white/10 text-white/90 hover:text-amber-300"
                      >
                        <span>{item.icon}</span>
                        <span>{language === 'mr' && item.labelMr ? item.labelMr : item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Welfare & Schemes Section */}
              <div className="border border-amber-400/30 rounded-2xl overflow-hidden bg-military-900/30">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'welfare' ? null : 'welfare')}
                  className="w-full flex items-center justify-between p-3 text-xs font-bold text-left hover:bg-white/5 transition-colors text-amber-300"
                >
                  <span className="flex items-center gap-2">
                    <span>🛡️</span>
                    <span>{language === 'mr' ? 'कल्याणकारी योजना' : 'Welfare & Schemes'}</span>
                  </span>
                  <span className={`text-xs transition-transform ${mobileExpandedSection === 'welfare' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
                </button>
                {mobileExpandedSection === 'welfare' && (
                  <div className="p-2 space-y-1 bg-black/30 border-t border-amber-400/20">
                    {welfareItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs hover:bg-white/10 text-white/90 hover:text-amber-300"
                      >
                        <span>{item.icon}</span>
                        <span>{language === 'mr' && item.labelMr ? item.labelMr : item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Events & Media Section */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'events' ? null : 'events')}
                  className="w-full flex items-center justify-between p-3 text-xs font-bold text-left hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{language === 'mr' ? 'कार्यक्रम व वृत्तांत' : 'Events & Media'}</span>
                  </span>
                  <span className={`text-xs transition-transform ${mobileExpandedSection === 'events' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
                </button>
                {mobileExpandedSection === 'events' && (
                  <div className="p-2 space-y-1 bg-black/30 border-t border-white/5">
                    {eventItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs hover:bg-white/10 text-white/90 hover:text-amber-300"
                      >
                        <span>{item.icon}</span>
                        <span>{language === 'mr' && item.labelMr ? item.labelMr : item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources & Downloads Section */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'resources' ? null : 'resources')}
                  className="w-full flex items-center justify-between p-3 text-xs font-bold text-left hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>📄</span>
                    <span>{language === 'mr' ? 'संसाधने व अर्ज' : 'Resources & Circulars'}</span>
                  </span>
                  <span className={`text-xs transition-transform ${mobileExpandedSection === 'resources' ? 'rotate-180 text-amber-400' : ''}`}>▾</span>
                </button>
                {mobileExpandedSection === 'resources' && (
                  <div className="p-2 space-y-1 bg-black/30 border-t border-white/5">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs hover:bg-white/10 text-white/90 hover:text-amber-300"
                      >
                        <span>{item.icon}</span>
                        <span>{language === 'mr' && item.labelMr ? item.labelMr : item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Grievance */}
              <Link
                href="/grievance"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-xs ${
                  pathname === '/grievance' ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' : 'hover:bg-white/5'
                }`}
              >
                <span>📝 {t.grievance}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-military-800 text-amber-300">24/7 Redressal</span>
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-bold text-xs ${
                  pathname === '/contact' ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' : 'hover:bg-white/5'
                }`}
              >
                <span>📍 {t.contact}</span>
                <span className="text-xs text-white/40">→</span>
              </Link>
            </nav>

            {/* Bottom Actions inside Drawer */}
            <div className="p-4 border-t border-white/10 bg-black/40 space-y-2.5">
              <Link
                href="/membership"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 text-center block shadow-lg"
              >
                🎖️ {t.ctaApply}
              </Link>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  href="/member"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-center rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold"
                >
                  👤 {t.memberPortal}
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-center rounded-xl bg-white/5 hover:bg-white/10 text-white/70 font-semibold"
                >
                  🔐 {t.adminLogin}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
