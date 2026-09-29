'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { downloads } from '@/lib/data';
import type { DownloadCategory } from '@/lib/types';

const allCategories: (DownloadCategory | 'All')[] = [
  'All', 'Membership Forms', 'Welfare Forms', 'Pension / OROP Documents',
  'Government Circulars', 'Association Documents', 'Important Guidelines',
];

const fileIcons: Record<string, string> = {
  PDF: '📕',
  DOCX: '📘',
  XLSX: '📗',
  default: '📄',
};

export default function DownloadsPage() {
  const [filter, setFilter] = useState<DownloadCategory | 'All'>('All');
  const filtered = filter === 'All' ? downloads : downloads.filter(d => d.category === filter);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-white/70 text-lg">Forms, circulars, guidelines, and important documents for ex-servicemen.</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter downloads by category">
            {allCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === cat ? 'bg-navy-700 text-white shadow-md' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Download List */}
          <div className="space-y-3">
            {filtered.map((item) => (
              <div key={item.id} className="premium-card p-5 flex items-center gap-4 group hover:border-saffron-200 transition-colors">
                <span className="text-3xl shrink-0" aria-hidden="true">
                  {fileIcons[item.fileType] || fileIcons.default}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-800 group-hover:text-saffron-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-navy-500">{item.category} — {item.fileType} ({item.fileSize})</p>
                </div>
                <a
                  href={item.url}
                  download
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-navy-100 text-navy-700 hover:bg-saffron-500 hover:text-white transition-all shrink-0"
                  aria-label={`Download ${item.title}`}
                >
                  ⬇ Download
                </a>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-500 py-12">No downloads found for the selected category.</p>
          )}
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
