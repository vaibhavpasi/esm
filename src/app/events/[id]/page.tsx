import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { events } from '@/lib/data';
import { formatDate } from '@/lib/utils';

// Pre-render all 6 event coverage pages for static export & fast performance
export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main id="main-content" className="pt-6 sm:pt-8 pb-20 bg-slate-50 dark:bg-navy-950 min-h-screen text-slate-900 dark:text-white transition-colors">
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/60">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-amber-500">Events Coverage</Link>
            <span>/</span>
            <span className="text-amber-600 dark:text-amber-400 font-semibold truncate max-w-xs">{event.title}</span>
          </div>
        </div>

        {/* Hero Header Card */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-white/10 bg-navy-900">
            {/* Banner Image */}
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

              {/* Status and Category Badges */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
                  event.isUpcoming
                    ? 'bg-amber-500 text-navy-950'
                    : 'bg-military-700 text-white border border-military-500/50'
                }`}>
                  {event.isUpcoming ? '📅 Upcoming Event' : '📜 Event Coverage & Report'}
                </span>
                {event.category && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-900/90 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                    {event.category}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Metadata Overlay */}
            <div className="p-6 sm:p-10 -mt-20 relative z-10 text-white">
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-2 leading-tight">
                {event.title}
              </h1>
              {event.titleMr && (
                <p className="text-amber-300 text-lg sm:text-xl font-heading mb-4 font-bold">
                  {event.titleMr}
                </p>
              )}

              {/* Event Quick Details Pills */}
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/80 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <span>📅</span>
                  <span className="font-semibold text-white">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>⏰</span>
                  <span className="font-semibold text-white">{event.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  <span className="font-semibold text-white">{event.location}</span>
                </div>
                {event.attendeesCount && (
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <span>👥</span>
                    <span className="font-bold">{event.attendeesCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Full Coverage Story, Outcomes & Media Gallery */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Summary */}
              <div className="bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy-950 dark:text-white mb-4 flex items-center gap-2">
                  <span>📰</span>
                  <span>Detailed Event Report &amp; Proceedings</span>
                </h2>
                <p className="text-slate-700 dark:text-white/80 leading-relaxed text-sm sm:text-base mb-6">
                  {event.fullReport || event.description}
                </p>

                {/* Key Outcomes / Achievements */}
                {event.outcomes && event.outcomes.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/10">
                    <h3 className="font-heading font-bold text-base text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                      <span>🎖️</span>
                      <span>Key Outcomes &amp; Welfare Impact</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {event.outcomes.map((outcome, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-white/90 bg-slate-50 dark:bg-navy-950 p-3 rounded-xl border border-slate-200 dark:border-white/5"
                        >
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Photo Coverage Gallery */}
              {event.galleryImages && event.galleryImages.length > 0 && (
                <div className="bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-950 dark:text-white mb-4 flex items-center gap-2">
                    <span>📸</span>
                    <span>Event Photo Highlights &amp; Media</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {event.galleryImages.map((src, i) => (
                      <div key={i} className="relative h-32 sm:h-40 rounded-xl overflow-hidden shadow-md group">
                        <Image
                          src={src}
                          alt={`${event.title} photo ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Press & Media Mention */}
              {event.pressReport && (
                <div className="bg-amber-50/70 dark:bg-navy-900/60 border border-amber-300 dark:border-amber-400/30 p-6 rounded-2xl text-xs sm:text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                  <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">
                    🗞️ Press &amp; News Coverage:
                  </span>
                  &ldquo;{event.pressReport}&rdquo;
                </div>
              )}
            </div>

            {/* Right Col: Chief Guests, RSVP & Sharing */}
            <div className="space-y-6">
              {/* Chief Guests Card */}
              {event.chiefGuests && event.chiefGuests.length > 0 && (
                <div className="bg-white dark:bg-navy-900 p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
                  <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white mb-4 flex items-center gap-2">
                    <span>🎖️</span>
                    <span>Dignitaries &amp; Chief Guests</span>
                  </h3>
                  <ul className="space-y-2 text-xs">
                    {event.chiefGuests.map((guest, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 dark:bg-navy-950 p-2.5 rounded-xl border border-slate-100 dark:border-white/5 text-slate-700 dark:text-white/80">
                        <span className="text-amber-500 font-bold">★</span>
                        <span className="font-medium">{guest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* RSVP / Registration Card (for upcoming events) */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-6 rounded-3xl border border-amber-400/40 shadow-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-300 text-[11px] font-bold mb-3 border border-saffron-500/30">
                  {event.isUpcoming ? 'Attendance RSVP' : 'Official Archive'}
                </div>

                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  {event.isUpcoming ? 'Attend This Event' : 'Need Event Documents?'}
                </h4>

                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {event.isUpcoming
                    ? 'All registered Ex-Servicemen, Veer Naris, and family members are cordially invited. Please carry your ESM Identity Card.'
                    : 'Official press releases, photo sets, and welfare resolutions from this convention are archived at the Association office.'}
                </p>

                <div className="space-y-2 text-xs">
                  <a
                    href="tel:02532570123"
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-center block shadow-md transition-all"
                  >
                    📞 Call Helpdesk: 0253-2570123
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`ESM Welfare Association Nashik Event: ${event.title} on ${event.date}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center block shadow-md transition-all"
                  >
                    💬 Share on WhatsApp
                  </a>
                </div>
              </div>

              {/* Back to Events list */}
              <div className="text-center pt-2">
                <Link
                  href="/events"
                  className="text-xs text-slate-500 dark:text-white/60 hover:text-amber-500 dark:hover:text-amber-400 font-semibold inline-flex items-center gap-1"
                >
                  <span>←</span>
                  <span>Back to All Events &amp; Coverage</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingElements />
    </>
  );
}
