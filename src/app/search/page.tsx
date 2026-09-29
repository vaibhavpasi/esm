'use client';

import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { services, notices, events, downloads } from '@/lib/data';
import type { SearchResult } from '@/lib/types';

function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  services.forEach((s) => {
    if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
      results.push({ type: 'service', title: s.title, description: s.description, href: s.href });
    }
  });
  notices.forEach((n) => {
    if (n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q)) {
      results.push({ type: 'notice', title: n.title, description: n.description, href: `/notices` });
    }
  });
  events.forEach((e) => {
    if (e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)) {
      results.push({ type: 'event', title: e.title, description: e.description, href: `/events` });
    }
  });
  downloads.forEach((d) => {
    if (d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)) {
      results.push({ type: 'download', title: d.title, description: `${d.category} — ${d.fileType} (${d.fileSize})`, href: d.url });
    }
  });

  return results;
}

const typeLabels: Record<string, string> = {
  service: '🛡️ Service',
  notice: '📋 Notice',
  event: '📅 Event',
  download: '📄 Download',
  page: '📃 Page',
};

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => searchContent(query), [query]);

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-300 border border-saffron-500/30 uppercase tracking-wider inline-block mb-3">
            Site-wide Content Search
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Search ESM Welfare Association
          </h1>
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notices, events, downloads, pension, services…"
              className="w-full px-6 py-4 rounded-2xl text-lg text-navy-800 bg-white shadow-xl outline-none border border-slate-200 focus:ring-4 focus:ring-saffron-500/30"
              autoFocus
              aria-label="Search site content"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl" aria-hidden="true">🔍</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {query && (
          <p className="text-navy-600 font-semibold mb-6">
            {results.length} result{results.length !== 1 ? 's' : ''} found for &quot;{query}&quot;
          </p>
        )}
        <div className="space-y-4">
          {results.map((result, i) => (
            <Link
              key={`${result.href}-${i}`}
              href={result.href}
              className="premium-card p-5 block hover:border-saffron-300 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy-800 group-hover:text-saffron-600 transition-colors">
                    {result.title}
                  </p>
                  <p className="text-navy-500 text-sm mt-1">{result.description}</p>
                </div>
                <span className="badge badge-navy text-xs shrink-0">{typeLabels[result.type]}</span>
              </div>
            </Link>
          ))}
        </div>
        {query && results.length === 0 && (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4" aria-hidden="true">🔍</span>
            <p className="text-navy-800 text-lg font-bold">No results found for &quot;{query}&quot;</p>
            <p className="text-navy-500 text-sm mt-2">
              Try searching for &quot;pension&quot;, &quot;OROP&quot;, &quot;membership&quot;, &quot;ECHS&quot;, or &quot;notice&quot;.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-8 sm:pt-10 min-h-screen bg-slate-50">
        <Suspense fallback={
          <div className="py-24 text-center text-slate-500">
            <span className="text-3xl block mb-2 animate-spin">⌛</span>
            Loading Search Portal…
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
