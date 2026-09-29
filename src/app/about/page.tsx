'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import OfficeBearersSection from '@/components/OfficeBearersSection';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">About ESM Welfare Association of Nashik</h1>
            <p className="text-white/70 text-lg">A dedicated platform serving ex-servicemen, veterans, and their families since 2015.</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <div className="section-divider mb-6 !mx-0" />
              <h2 className="font-heading text-3xl font-bold text-navy-800 mb-6">Our Story</h2>
              <div className="prose prose-navy text-navy-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  The ESM Welfare Association of Nashik was established with a singular purpose — to serve those who served the nation. Founded by a group of dedicated veterans who recognised the need for a structured platform to assist fellow ex-servicemen, the Association has grown into a trusted community organisation.
                </p>
                <p className="leading-relaxed">
                  Over the years, we have worked tirelessly to bridge the gap between ex-servicemen and the welfare benefits entitled to them. From assisting with pension-related queries to facilitating access to government schemes, the Association stands as a pillar of support for veterans and their families in Nashik district.
                </p>
                <p className="leading-relaxed">
                  We believe that the men and women who have served in the Indian Armed Forces deserve unwavering support even after their service. Our Association provides information, guidance, and community support to ensure that no veteran or their family member is left without help.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/about-meeting.jpg" alt="Association meeting" width={640} height={480} className="w-full h-auto" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-saffron-300 rounded-2xl -z-10 hidden lg:block" aria-hidden="true" />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: '🎯', title: 'Our Mission',
                text: 'To provide comprehensive welfare support, timely information, and meaningful assistance to ex-servicemen, veterans, war widows, and their families in Nashik district, ensuring they receive every benefit they are entitled to.',
              },
              {
                icon: '👁️', title: 'Our Vision',
                text: 'To build a strong, connected, and well-supported veteran community where every ex-serviceman and their family has access to welfare benefits, community support, and a dignified life after service.',
              },
              {
                icon: '💚', title: 'Our Values',
                text: 'Service, integrity, compassion, and community. We uphold the same values that our members demonstrated during their military service — discipline, dedication, and an unwavering commitment to duty.',
              },
            ].map((card) => (
              <div key={card.title} className="premium-card p-8 text-center">
                <span className="text-4xl mb-4 block" aria-hidden="true">{card.icon}</span>
                <h3 className="font-heading font-bold text-navy-800 text-xl mb-3">{card.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <div className="section-divider mb-6" />
            <h2 className="font-heading text-3xl font-bold text-navy-800 mb-8 text-center">What We Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📋', title: 'Welfare Guidance', text: 'Assisting with pension, OROP, ECHS, and government welfare scheme queries.' },
                { icon: '📄', title: 'Documentation', text: 'Helping with application preparation, verification, and submission.' },
                { icon: '🏥', title: 'Medical Support', text: 'Facilitating access to medical facilities and health camp organisation.' },
                { icon: '🤝', title: 'Community Building', text: 'Organising events, meetings, and programmes to connect veterans.' },
              ].map((card) => (
                <div key={card.title} className="premium-card p-6 text-center">
                  <span className="text-3xl mb-3 block" aria-hidden="true">{card.icon}</span>
                  <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{card.title}</h3>
                  <p className="text-navy-600 text-sm">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office Bearers */}
        <OfficeBearersSection />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
