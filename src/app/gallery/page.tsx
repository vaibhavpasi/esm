'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { galleryImages } from '@/lib/data';
import type { GalleryCategory } from '@/lib/types';

const categories: (GalleryCategory | 'All')[] = [
  'All', 'Welfare Activities', 'Meetings', 'Veteran Events', 'Felicitation Programs', 'Community Events',
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | 'All'>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter(g => g.category === filter);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-white/70 text-lg">Photos from association events, welfare activities, and community programmes.</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter gallery by category">
            {categories.map((cat) => (
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

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {filtered.map((image, i) => (
              <button
                key={image.id}
                onClick={() => setLightbox(i)}
                className="w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
                aria-label={`View ${image.caption || image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold text-sm">{image.caption}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-6 right-6 text-white text-2xl hover:text-saffron-400 z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-saffron-400 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-saffron-400 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(filtered.length - 1, lightbox + 1)); }}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-semibold">{filtered[lightbox].caption}</p>
                <p className="text-white/60 text-sm">{filtered[lightbox].category}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
