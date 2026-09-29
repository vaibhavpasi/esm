'use client';

import Link from 'next/link';
import { navItems } from '@/lib/data';
import IndianArmyCrest from './IndianArmyCrest';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white tricolor-top" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <IndianArmyCrest size="md" showMotto={false} />
              <div>
                <p className="font-heading font-bold text-white">ESM Welfare Association</p>
                <p className="text-amber-400 font-bold text-xs">भारतीय सेना • सेवा परमो धर्मः</p>
                <p className="text-white/60 text-[11px]">Nashik District, Maharashtra</p>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              Dedicated welfare platform serving Indian Army, Navy, and Air Force veterans, Veer Naris, and defence families across Nashik district.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-saffron-500 flex items-center justify-center transition-all text-sm"
                  aria-label={`Follow us on ${social}`}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-saffron-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {navItems.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-saffron-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admin" className="text-white/60 hover:text-saffron-400 transition-colors text-sm">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>📍 Near Collectorate, Canada Corner, Nashik — 422002</p>
              <p>📞 +91 253 2570123</p>
              <p>💬 +91 98765 43210</p>
              <p>✉️ info@esmwelfarenashik.org</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
          <p>© 2026 ESM Welfare Association of Nashik. All Rights Reserved.</p>

          {/* Digital Partner Credit */}
          <a
            href="https://4amglobalmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/80 bg-navy-950/90 hover:bg-navy-900 px-3.5 py-1.5 rounded-full border border-amber-400/30 hover:border-amber-400/70 shadow-sm transition-all group hover:scale-[1.02]"
            title="Digitally Designed by 4am Global Media (4amglobalmedia.com)"
          >
            <span className="text-white/70 group-hover:text-white transition-colors">Digitally Designed by</span>
            <span className="text-amber-400 font-bold group-hover:text-amber-300 transition-colors underline decoration-amber-400/50 group-hover:decoration-amber-300">
              4am Global Media
            </span>
            <span className="text-[10px] text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">↗</span>
          </a>

          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-amber-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
