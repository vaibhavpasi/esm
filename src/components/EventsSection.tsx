'use client';

import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/lib/data';
import { formatDate, useReveal } from '@/lib/hooks';

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  return (
    <article className={`reveal delay-${(index % 3) + 1} premium-card overflow-hidden group flex-shrink-0 w-80 sm:w-auto`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-lg">
          <p className="text-xs font-bold text-navy-500 uppercase">
            {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
          </p>
          <p className="text-2xl font-bold text-navy-800 leading-none">
            {new Date(event.date).getDate()}
          </p>
        </div>
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 badge ${event.isUpcoming ? 'badge-saffron' : 'badge-navy'}`}>
          {event.isUpcoming ? 'Upcoming' : 'Past Event'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-navy-500 mb-3">
          <span className="flex items-center gap-1">
            <span aria-hidden="true">🕐</span> {event.time}
          </span>
          <span className="flex items-center gap-1">
            <span aria-hidden="true">📍</span> {event.location}
          </span>
        </div>

        <h3 className="font-heading font-bold text-navy-800 text-lg mb-2 group-hover:text-navy-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {event.description}
        </p>

        <Link
          href={`/events/${event.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-saffron-600 transition-colors group/link"
        >
          View Event
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-navy-700 border-2 border-navy-200 hover:bg-navy-50 transition-all hover:-translate-y-0.5 group"
          >
            View All Events
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
