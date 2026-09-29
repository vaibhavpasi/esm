'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { events } from '@/lib/data';
import { formatDate } from '@/lib/hooks';

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'welfare'>('all');
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter((e) => {
    if (filter === 'upcoming' && !e.isUpcoming) return false;
    if (filter === 'past' && e.isUpcoming) return false;
    if (filter === 'welfare' && e.category !== 'Welfare Camp' && e.category !== 'Medical Screening') return false;

    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        e.title.toLowerCase().includes(q) ||
        (e.titleMr && e.titleMr.toLowerCase().includes(q)) ||
        e.location.toLowerCase().includes(q) ||
        (e.category && e.category.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <>
      <Navbar />

      <main id="main-content" className="bg-slate-50 dark:bg-navy-950 min-h-screen text-slate-900 dark:text-white transition-colors">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-20 text-center text-white relative overflow-hidden border-b border-amber-400/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-military-500/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-500/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-military-800/80 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span>🎖️</span>
              <span>अधिकृत कार्यक्रम, मेळावे व माध्यम वृत्तांत</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              Events &amp; Media Coverage
            </h1>

            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Official archive of annual rallies, SPARSH pension camps, medical drives, and historic military commemorations organized by the ESM Welfare Association of Nashik.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
          <div className="bg-white dark:bg-navy-900 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { id: 'all', label: 'All Events & Reports' },
                { id: 'upcoming', label: 'Upcoming Conventions' },
                { id: 'past', label: 'Past Event Reports' },
                { id: 'welfare', label: 'Welfare & Medical Camps' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as typeof filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    filter === tab.id
                      ? 'bg-amber-500 text-navy-950 shadow-md'
                      : 'bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-navy-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search event, location or camp..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Event Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md rounded-2xl px-3.5 py-2 text-center shadow-lg border border-slate-200 dark:border-white/10">
                      <p className="text-[10px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
                      </p>
                      <p className="text-2xl font-black text-navy-950 dark:text-white leading-none">
                        {new Date(event.date).getDate()}
                      </p>
                      <p className="text-[9px] text-slate-500 dark:text-white/50 font-bold">
                        {new Date(event.date).getFullYear()}
                      </p>
                    </div>

                    {/* Status badge */}
                    <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                      event.isUpcoming
                        ? 'bg-amber-500 text-navy-950'
                        : 'bg-navy-900/90 text-white/90 border border-white/20'
                    }`}>
                      {event.isUpcoming ? '📅 Upcoming' : '📜 Coverage Report'}
                    </span>

                    {/* Category pill */}
                    {event.category && (
                      <span className="absolute bottom-3 left-4 text-[11px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-navy-950/80 border border-amber-400/30">
                        {event.category}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-white/60 mb-2">
                      <span>⏰ {event.time}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-white/70 mb-3">
                      <span>📍</span>
                      <span className="line-clamp-1">{event.location}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {event.title}
                    </h3>

                    {event.titleMr && (
                      <p className="text-xs text-amber-600 dark:text-amber-300/90 font-medium mb-3 line-clamp-1">
                        {event.titleMr}
                      </p>
                    )}

                    <p className="text-slate-600 dark:text-white/75 text-xs leading-relaxed line-clamp-3 mb-4">
                      {event.description}
                    </p>

                    {/* Outcomes / Attendees badge */}
                    {event.attendeesCount && (
                      <div className="p-2.5 bg-slate-50 dark:bg-navy-950 rounded-xl border border-slate-100 dark:border-white/5 text-[11px] text-slate-700 dark:text-white/80 flex items-center justify-between">
                        <span>👥 Attendance:</span>
                        <strong className="text-amber-600 dark:text-amber-400">{event.attendeesCount}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/5 mt-2">
                  <Link
                    href={`/events/${event.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-amber-500 hover:text-navy-950 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>{event.isUpcoming ? 'View Event Details & RSVP' : 'Read Full Coverage & Photos'}</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-navy-900 rounded-3xl border border-slate-200 dark:border-white/10">
              <span className="text-4xl block mb-2">🔍</span>
              <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-white">No Events Found</h3>
              <p className="text-xs text-slate-500 dark:text-white/60">Try adjusting your filter or search keywords.</p>
            </div>
          )}

          {/* Press Coverage Strip */}
          <div className="mt-16 bg-gradient-to-r from-amber-50 to-emerald-50 dark:from-navy-900 dark:to-navy-950 border border-amber-300 dark:border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  📰 Press &amp; Media Cell
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-950 dark:text-white mb-2">
                  Media &amp; News Coverage of Association Activities
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-white/80 max-w-2xl leading-relaxed">
                  Association welfare rallies, Veer Nari felicitations, and pension camps are regularly covered by leading publications including Maharashtra Times, Sakal, Lokmat, Deshdoot, and Punyanagari.
                </p>
              </div>

              <a
                href="tel:02532570123"
                className="px-5 py-3 rounded-xl bg-navy-900 dark:bg-amber-500 hover:bg-navy-800 dark:hover:bg-amber-400 text-white dark:text-navy-950 font-bold text-xs inline-flex items-center gap-2 shadow-md shrink-0"
              >
                <span>📞 Media Liaison Desk: 0253-2570123</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </>
  );
}
