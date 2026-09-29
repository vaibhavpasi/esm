'use client';

import Link from 'next/link';
import { notices } from '@/lib/data';
import { formatDate, useReveal } from '@/lib/hooks';
import type { NoticeItem } from '@/lib/types';

function getCategoryStyle(category: NoticeItem['category']) {
  switch (category) {
    case 'Urgent': return 'badge-urgent';
    case 'Pension / OROP': return 'badge-saffron';
    case 'Government Update': return 'badge-navy';
    case 'Meeting': return 'badge-military';
    default: return 'badge-navy';
  }
}

function NoticeCard({ notice, index }: { notice: NoticeItem; index: number }) {
  return (
    <article className={`reveal delay-${(index % 3) + 1} premium-card p-6 group`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className={`badge ${getCategoryStyle(notice.category)}`}>
          {notice.isUrgent && <span className="mr-1" aria-hidden="true">⚠️</span>}
          {notice.category}
        </span>
        <time dateTime={notice.date} className="text-sm text-navy-400 shrink-0">
          {formatDate(notice.date)}
        </time>
      </div>

      <h3 className="font-heading font-bold text-navy-800 text-lg mb-2 group-hover:text-navy-600 transition-colors">
        {notice.title}
      </h3>

      <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {notice.description}
      </p>

      <div className="flex items-center gap-4">
        <Link
          href={`/notices/${notice.id}`}
          className="text-sm font-semibold text-navy-600 hover:text-saffron-600 transition-colors inline-flex items-center gap-1 group/link"
        >
          View Details
          <span className="transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
        {notice.pdfUrl && (
          <a
            href={notice.pdfUrl}
            className="text-sm font-semibold text-military-600 hover:text-military-700 transition-colors inline-flex items-center gap-1"
            download
          >
            📄 Download PDF
          </a>
        )}
      </div>
    </article>
  );
}

export default function NoticesSection() {
  const headingRef = useReveal();
  const displayedNotices = notices.filter(n => n.publishStatus === 'published').slice(0, 4);

  return (
    <section id="notices" className="py-20 sm:py-28 bg-gradient-to-b from-navy-50/30 to-white" aria-labelledby="notices-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="section-divider mb-6" />
          <h2 id="notices-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Latest Notices & Updates
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Stay informed about the latest association updates, government circulars, and important announcements.
          </p>
        </div>

        {/* Notice Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {displayedNotices.map((notice, i) => (
            <NoticeCard key={notice.id} notice={notice} index={i} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-navy-700 border-2 border-navy-200 hover:bg-navy-50 transition-all hover:-translate-y-0.5 group"
          >
            View All Notices
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
