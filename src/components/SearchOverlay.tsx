'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { services, notices, events, downloads } from '@/lib/data';
import type { SearchResult } from '@/lib/types';

function searchContent(query: string, activeFilter: string = 'all'): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search services
  if (activeFilter === 'all' || activeFilter === 'service') {
    services.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
        results.push({ type: 'service', title: s.title, description: s.description, href: s.href });
      }
    });
  }

  // Search notices
  if (activeFilter === 'all' || activeFilter === 'notice') {
    notices.forEach((n) => {
      if (n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q)) {
        results.push({ type: 'notice', title: n.title, description: n.description, href: `/notices/${n.id}` });
      }
    });
  }

  // Search events
  if (activeFilter === 'all' || activeFilter === 'event') {
    events.forEach((e) => {
      if (e.title.toLowerCase().includes(q) || (e.titleMr && e.titleMr.toLowerCase().includes(q)) || e.description.toLowerCase().includes(q)) {
        results.push({ type: 'event', title: e.title, description: e.description, href: `/events/${e.id}` });
      }
    });
  }

  // Search downloads
  if (activeFilter === 'all' || activeFilter === 'download') {
    downloads.forEach((d) => {
      if (d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)) {
        results.push({ type: 'download', title: d.title, description: `${d.category} — ${d.fileType} (${d.fileSize})`, href: d.url });
      }
    });
  }

  // Search pages & specialized sections
  if (activeFilter === 'all' || activeFilter === 'page') {
    const pages = [
      { title: 'About Us & History', description: 'Learn about the ESM Welfare Association of Nashik', href: '/about' },
      { title: 'Membership & Digital Veteran ID Card', description: 'Join the association as a member & generate Tri-Service ID card', href: '/membership' },
      { title: 'Events & Media Coverage Hub', description: 'Official archive of rallies, health camps, and conventions', href: '/events' },
      { title: 'Photo & Video Gallery', description: 'View photos from association events and commemorative ceremonies', href: '/gallery' },
      { title: 'Contact & 24x7 Helplines', description: 'Get in touch with the association office and Nashik military hotlines', href: '/contact' },
      { title: 'Grievance Redressal Cell', description: 'Submit or track an official welfare, land, or pension grievance', href: '/grievance' },
      { title: 'Senior Veterans & Retired Persons Care Desk', description: '80+ pension hike calculator, doorstep life certificate DLC, NMC 100% house tax exemption & elderly widow pension', href: '/#senior-care' },
      { title: 'Pension & SPARSH Migration Guide', description: 'Step-by-step guidance for Defence pension, DLC and PPO', href: '/#pension-guide' },
      { title: 'CSD Canteen & AFD-1 Vehicle Assistant', description: 'Grocery/liquor quota and 4-wheeler/2-wheeler entitlement calculator', href: '/#csd-assistant' },
      { title: 'ECHS Empanelled Cashless Hospitals', description: 'Wockhardt, Ashoka Medicover, Sahyadri, Six Sigma cashless treatment & 48-hr emergency protocol', href: '/#empanelled-hospitals' },
      { title: 'Nashik Defence Transit & Cantonment Guide', description: 'Routes to Artillery Centre, MH Deolali, CATS, Ojhar Airbase, CityLink buses & gate passes', href: '/#transit-guide' },
      { title: 'DGR Resettlement & Second Careers Hub', description: 'Military trade to civilian job matcher, age relaxation calculator & Nashik MIDC placements', href: '/#resettlement-hub' },
      { title: 'Agricultural Land (7/12) & Legal Aid Cell', description: 'Maharashtra Land Revenue Code Sec 143, Rent Control Sec 23 & free Saturday legal clinic', href: '/#legal-aid' },
      { title: 'PMSS Scholarship & Agniveer Academy', description: 'Prime Minister scholarship eligibility calculator for wards & free Nashik military coaching', href: '/#scholarship-desk' },
      { title: 'Military & Pension Terms Decoder', description: 'Decode SPARSH, PPO, ECHS, CSD, AFD-1, OROP, DLC, and KSB acronyms', href: '/#military-terms' },
      { title: 'Amar Jawan & Ceremonial Bugle Calls', description: 'Homage to martyrs & listen to synthesized Reveille, Rouse, The Last Post & Sunset bugles', href: '/#martyrs' },
      { title: 'Tri-Services & Rank Parity Matrix', description: 'Indian Army, Indian Navy, Indian Air Force 7th CPC equivalent ranks & Nashik units', href: '/#tri-services' },
      { title: 'Veer Nari & War Widows Desk', description: 'Special welfare desk, RMDF grants, and dedicated emergency assistance', href: '/#veer-nari' },
    ];
    pages.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        results.push({ type: 'page', ...p });
      }
    });
  }

  return results.slice(0, 15);
}

const typeIcons: Record<string, string> = {
  service: '🛡️',
  notice: '📋',
  event: '📅',
  download: '📄',
  page: '📃',
};

const typeLabels: Record<string, string> = {
  service: 'Service',
  notice: 'Notice',
  event: 'Event',
  download: 'Download',
  page: 'Portal Section',
};

export default function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      queueMicrotask(() => {
        setQuery('');
        setResults([]);
      });
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setResults(searchContent(query, activeFilter));
    }, 150);
    return () => clearTimeout(debounce);
  }, [query, activeFilter]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#070d06]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Panel */}
      <div className="relative w-full max-w-2xl bg-[#0e170d] border border-amber-400/40 rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease] text-white">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4.5 border-b border-amber-400/20 bg-military-950/70">
          <span className="text-xl text-amber-400" aria-hidden="true">🔍</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pension, SPARSH, ECHS hospitals, events, notices…"
            className="flex-1 bg-transparent text-white text-base sm:text-lg outline-none placeholder:text-white/40"
            aria-label="Search across all veteran welfare content"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-white/50 hover:text-white text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10"
              aria-label="Clear query"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
            aria-label="Close search (ESC)"
          >
            ESC
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-black/30 border-b border-white/5 overflow-x-auto no-scrollbar text-xs">
          <span className="text-white/40 text-[11px] uppercase font-bold shrink-0">Filter:</span>
          {[
            { id: 'all', label: 'All' },
            { id: 'service', label: '🛡️ Services' },
            { id: 'event', label: '📅 Events' },
            { id: 'notice', label: '📋 Notices' },
            { id: 'download', label: '📄 Forms' },
            { id: 'page', label: '📃 Sections' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === f.id
                  ? 'bg-amber-500 text-navy-950 font-bold shadow-sm'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-1.5 custom-scrollbar">
          {query && results.length === 0 && (
            <div className="text-center py-10 px-4">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-white/90 font-semibold mb-1">No matches found for &quot;{query}&quot;</p>
              <p className="text-white/50 text-xs">
                Try searching for keywords like &quot;SPARSH&quot;, &quot;ECHS&quot;, &quot;Deolali&quot;, &quot;Pension&quot;, or &quot;Widow&quot;.
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-1.5">
              {results.map((result, i) => (
                <Link
                  key={`${result.href}-${i}`}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-amber-400/30 transition-all group"
                >
                  <span className="text-xl mt-0.5 shrink-0" aria-hidden="true">
                    {typeIcons[result.type] || '📌'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-bold text-white text-sm group-hover:text-amber-300 transition-colors truncate">
                      {result.title}
                    </p>
                    <p className="text-white/60 text-xs truncate mt-0.5">{result.description}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-military-800 text-amber-300 border border-amber-400/30 shrink-0">
                    {typeLabels[result.type] || result.type}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {!query && (
            <div className="py-6 px-4">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400/80 mb-3">Popular Searches for Veterans:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'SPARSH Pension Migration',
                  'ECHS Cashless Hospitals',
                  '80+ Age Additional Pension',
                  'Doorstep Digital Life Certificate',
                  'CSD Canteen Grocery & Liquor',
                  'NMC Property Tax Exemption',
                  'Artillery Centre Deolali Transit',
                  'Veer Nari Welfare Desk',
                  'Armed Forces Veterans Day Rally',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-amber-300 border border-white/10 transition-colors"
                  >
                    🔍 {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80">ESC</kbd> to exit</span>
          <Link href="/search" onClick={onClose} className="hover:text-amber-400 transition-colors underline">
            Open Advanced Search Page →
          </Link>
        </div>
      </div>
    </div>
  );
}
