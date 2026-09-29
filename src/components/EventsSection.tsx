'use client';

import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/lib/data';
import { useReveal } from '@/lib/hooks';

const categoryColorMap: Record<string, { badge: string; border: string }> = {
  'Veterans Rally': { badge: 'bg-orange-50 text-saffron-700 border-saffron-300', border: 'from-saffron-500 to-amber-500' },
  'Medical Camp': { badge: 'bg-emerald-50 text-emerald-700 border-emerald-300', border: 'from-emerald-500 to-teal-500' },
  'Welfare': { badge: 'bg-sky-50 text-iaf-700 border-sky-300', border: 'from-iaf-500 to-blue-500' },
  'Memorial': { badge: 'bg-rose-50 text-rose-700 border-rose-300', border: 'from-rose-500 to-armyred-500' },
};

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const catTheme = (event.category && categoryColorMap[event.category]) || {
    badge: 'bg-navy-50 text-navy-700 border-navy-300',
    border: 'from-navy-600 to-navy-800',
  };

  return (
    <article className={`reveal delay-${(index % 3) + 1} premium-card overflow-hidden group flex-shrink-0 w-80 sm:w-auto border-2 border-navy-100/80 hover:border-gold-400/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative`}>
      {/* Top Accent Strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${catTheme.border}`} aria-hidden="true" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/30 to-transparent" />

        {/* Date Badge */}
        <div className="absolute top-3.5 left-3.5 bg-navy-950/90 border border-gold-400/50 rounded-2xl px-3.5 py-1.5 text-center shadow-xl backdrop-blur-md">
          <p className="text-[10px] font-black text-saffron-400 uppercase tracking-widest">
            {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
          </p>
          <p className="text-2xl font-black text-white leading-none mt-0.5">
            {new Date(event.date).getDate()}
          </p>
        </div>

        {/* Status Badge */}
        <div className={`absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-extrabold shadow-md border ${
          event.isUpcoming
            ? 'bg-gradient-to-r from-saffron-500 to-amber-500 text-white border-amber-300'
            : 'bg-navy-900/90 text-white/80 border-white/20'
        }`}>
          {event.isUpcoming ? '● Upcoming' : 'Past Event'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Time row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {event.category && (
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${catTheme.badge}`}>
              {event.category}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-navy-500 font-medium">
            <span aria-hidden="true">🕐</span> {event.time.split('-')[0].trim()}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-navy-500 font-semibold mb-2.5">
          <span aria-hidden="true">📍</span> <span className="truncate">{event.location}</span>
        </div>

        <h3 className="font-heading font-bold text-navy-900 text-lg mb-2 group-hover:text-navy-950 transition-colors line-clamp-1">
          {event.title}
        </h3>

        <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {event.description}
        </p>

        <Link
          href={`/events/${event.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-saffron-600 hover:text-saffron-700 transition-colors group/link"
        >
          <span>View Event</span>
          <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function EventsSection() {
  const headingRef = useReveal();

  return (
    <section id="events" className="py-20 sm:py-28 bg-white" aria-labelledby="events-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="section-divider mb-6" />
          <h2 id="events-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Upcoming & Recent Events
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Join fellow veterans at association events, ceremonies, and community programmes.
          </p>
        </div>

        {/* Desktop Grid / Mobile Horizontal Scroll */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden horizontal-scroll gap-4 pb-4 px-1 mb-12">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-navy-900 border-2 border-navy-900/20 hover:border-gold-500 hover:bg-gradient-to-r hover:from-navy-950 hover:to-navy-900 hover:text-gold-300 transition-all hover:-translate-y-1 shadow-md hover:shadow-xl group"
          >
            <span>View All Events & Rallies</span>
            <span className="transition-transform group-hover:translate-x-1.5 text-saffron-500 group-hover:text-gold-300" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
