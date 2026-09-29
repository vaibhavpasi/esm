'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/lib/hooks';

export default function AboutSection() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-meeting.jpg"
                alt="ESM Welfare Association meeting with veteran members"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 glass-dark px-4 py-2 rounded-xl">
                <p className="text-white text-sm font-semibold">Since 2015</p>
                <p className="text-white/70 text-xs">Serving Veterans in Nashik</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-saffron-300 rounded-2xl -z-10 hidden lg:block" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-military-100 rounded-2xl -z-10 hidden lg:block" aria-hidden="true" />
          </div>

          {/* Content */}
          <div>
            <div className="section-divider mb-6 !mx-0" />
            <h2 id="about-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-6">
              About ESM Welfare Association of Nashik
            </h2>
            <p className="text-lg text-navy-600 mb-6 leading-relaxed">
              The ESM Welfare Association of Nashik is a dedicated platform committed to supporting
              ex-servicemen, veterans, war widows, and their families. Established with a deep sense
              of duty and gratitude towards those who served the nation, the Association works
              tirelessly to connect members with welfare assistance, government schemes, and community support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-saffron-50/50 border border-saffron-200/60">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-500 text-white flex items-center justify-center text-lg shrink-0 shadow-md" aria-hidden="true">🎯</span>
                <div>
                  <h3 className="font-heading font-bold text-navy-900 text-base">Mission</h3>
                  <p className="text-navy-600 text-sm">To provide comprehensive welfare support, guidance, and assistance to ex-servicemen and their families in Nashik district.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-sky-50/50 border border-sky-200/60">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-iaf-500 to-blue-600 text-white flex items-center justify-center text-lg shrink-0 shadow-md" aria-hidden="true">👁️</span>
                <div>
                  <h3 className="font-heading font-bold text-navy-900 text-base">Vision</h3>
                  <p className="text-navy-600 text-sm">To build a strong, connected, and well-supported veteran community where every ex-serviceman and their family has access to the benefits they deserve.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-tiranga-600 text-white flex items-center justify-center text-lg shrink-0 shadow-md" aria-hidden="true">💚</span>
                <div>
                  <h3 className="font-heading font-bold text-navy-900 text-base">Welfare Commitment</h3>
                  <p className="text-navy-600 text-sm">We are committed to ensuring that no veteran or their family is left without support, information, or access to entitled benefits.</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold bg-navy-900 text-gold-300 border-2 border-gold-400/40 hover:border-gold-400 hover:text-white hover:bg-navy-800 transition-all hover:-translate-y-0.5 shadow-lg group"
            >
              <span>Learn More About Us</span>
              <span className="transition-transform group-hover:translate-x-1.5 text-saffron-400">→</span>
            </Link>
          </div>
        </div>

        {/* Sub-cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: '🛡️', title: 'Welfare & Assistance', desc: 'Comprehensive support for pension, OROP, medical, and government scheme-related matters.', bar: 'from-amber-400 to-gold-500', iconBg: 'bg-amber-100 text-amber-800' },
            { icon: '🤝', title: 'Veteran Community', desc: 'A platform to connect, share experiences, and build a strong support network among ex-servicemen.', bar: 'from-saffron-500 to-orange-500', iconBg: 'bg-orange-100 text-orange-800' },
            { icon: '👨‍👩‍👧‍👦', title: 'Family Support', desc: 'Dedicated assistance for families, dependents, and war widows of our brave servicemen.', bar: 'from-emerald-500 to-tiranga-600', iconBg: 'bg-emerald-100 text-emerald-800' },
          ].map((card, i) => (
            <div key={card.title} className={`reveal delay-${i + 1} premium-card p-6 text-center relative overflow-hidden bg-white/95 border-2 border-navy-100/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.bar}`} aria-hidden="true" />
              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-4 ${card.iconBg} shadow-sm`} aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">{card.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
