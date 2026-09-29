'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { notices } from '@/lib/data';
import { formatDate } from '@/lib/hooks';
import type { NoticeCategory } from '@/lib/types';

const categories: (NoticeCategory | 'All')[] = ['All', 'Association Notice', 'Pension / OROP', 'Government Update', 'Welfare', 'Meeting', 'Urgent'];

export default function NoticesPage() {
  const [filter, setFilter] = useState<NoticeCategory | 'All'>('All');
  const filtered = filter === 'All' ? notices : notices.filter(n => n.category === filter);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Notices & Updates</h1>
            <p className="text-white/70 text-lg">All association notices, government circulars, and important updates in one place.</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter notices by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-navy-700 text-white shadow-md'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notice List */}
          <div className="space-y-4">
            {filtered.map((notice) => (
              <article key={notice.id} className="premium-card p-6 group hover:border-saffron-200 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`badge ${notice.isUrgent ? 'badge-urgent' : notice.category === 'Pension / OROP' ? 'badge-saffron' : 'badge-navy'}`}>
                      {notice.isUrgent && '⚠️ '}{notice.category}
                    </span>
                  </div>
                  <time dateTime={notice.date} className="text-sm text-navy-400">{formatDate(notice.date)}</time>
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{notice.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-4">{notice.description}</p>
                <div className="flex items-center gap-4">
                  <button className="text-sm font-semibold text-navy-600 hover:text-saffron-600 transition-colors">View Details →</button>
                  {notice.pdfUrl && (
                    <a href={notice.pdfUrl} className="text-sm font-semibold text-military-600 hover:text-military-700 transition-colors">📄 Download PDF</a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-500 py-12">No notices found for the selected category.</p>
          )}
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
