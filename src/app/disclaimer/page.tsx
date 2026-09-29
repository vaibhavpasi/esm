import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export const metadata = {
  title: 'Disclaimer | ESM Welfare Association of Nashik',
  description: 'Official legal disclaimer and notices for the ESM Welfare Association of Nashik web portal.',
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors">
        <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white border-b border-amber-400/20">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-4xl mb-3 block">⚖️</span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold mb-2">Legal Disclaimer</h1>
            <p className="text-white/70 text-sm sm:text-base">
              Information notices, official source attributions, and scope of welfare services.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-navy-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg space-y-6 text-sm leading-relaxed text-slate-700 dark:text-white/80">
            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">1. Informational &amp; Advisory Nature</h2>
              <p>
                The information provided on this portal is published in good faith for general veteran welfare guidance, awareness of government schemes (OROP, ECHS, SPARSH, PMSS), and Nashik local community events. While every reasonable effort is made to maintain accurate and up-to-date circulars, policy notifications issued by the Ministry of Defence, Department of Ex-Servicemen Welfare (DESW), Kendriya Sainik Board (KSB), and PCDA(P) Prayagraj shall prevail as statutory authorities.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">2. External Links &amp; Government Portals</h2>
              <p>
                This website includes hyperlinks to external official portals (such as SPARSH, ECHS, KSB, Maharashtra Government GRs, and CSD AFD). The Association does not exercise operational control over these third-party websites and is not liable for their server downtimes, privacy practices, or content updates.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">3. Medical &amp; Hospital Advice</h2>
              <p>
                Hospital empanelment lists and emergency contact numbers (including Military Hospital Deolali and private empanelled hospitals) are provided to assist veterans in emergencies. Medical triage, treatment eligibility, and bed availability are determined exclusively by the respective hospital authorities and ECHS Polyclinics.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">4. Digital Partner Attribution</h2>
              <p>
                This digital web portal and accessibility interface is designed and maintained by <strong>4am Global Media</strong> (<a href="https://4amglobalmedia.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 font-bold underline">4amglobalmedia.com</a>) for the Ex-Servicemen Welfare Association of Nashik.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-xs text-slate-500 dark:text-white/60">
              <span>ESM Welfare Association, Nashik (Regd. 2015)</span>
              <Link href="/" className="text-amber-600 dark:text-amber-400 font-bold hover:underline">← Return to Homepage</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
