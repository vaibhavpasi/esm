import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export const metadata = {
  title: 'Terms & Conditions | ESM Welfare Association of Nashik',
  description: 'Terms of membership, welfare usage, and digital code of conduct for the Ex-Servicemen Welfare Association of Nashik.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors">
        <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white border-b border-amber-400/20">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-4xl mb-3 block">📜</span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold mb-2">Terms of Association &amp; Service</h1>
            <p className="text-white/70 text-sm sm:text-base">
              Rules of membership, code of veteran camaraderie, and portal usage policies.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-navy-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg space-y-6 text-sm leading-relaxed text-slate-700 dark:text-white/80">
            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">1. Eligibility for Membership</h2>
              <p>
                Membership to the ESM Welfare Association of Nashik is open to all discharged, released, or retired personnel of the **Indian Armed Forces** (Indian Army, Indian Navy, Indian Air Force), Territorial Army (embodied service), Assam Rifles, Veer Naris, and legally recognized military dependents residing in or connected with the Nashik revenue district.
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-white/60">
                *Presentation of a valid Discharge Book, ESM Identity Card (issued by ZSWO), or PPO is mandatory for permanent membership confirmation.*
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">2. Non-Political &amp; Secular Nature</h2>
              <p>
                The Association is strictly a non-political, secular, and non-profit welfare organisation. Use of Association forums, rallies, WhatsApp community groups, or the digital portal for political campaigns, electoral solicitation, or religious sectarianism is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">3. Welfare &amp; Grievance Assistance</h2>
              <p>
                The Association acts as an advocacy, guidance, and assistance body to help veterans navigate official grievance portals (SPARSH, CPGRAMS, KSB, ECHS, NMC, and DLSA). The Association does not charge fees for grievance filing, pension calculations, or legal counseling. Final administrative decisions rest with the competent military authorities, PCDA, or judicial courts.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">4. Digital ID Card Terms</h2>
              <p>
                The digital Tri-Service ID card issued via this portal is for internal Association verification, welfare drives, and convention entry. It does not replace the statutory Defence Ministry Canteen Smart Card (CSD) or ZSWO Ex-Servicemen Identity Card.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-xs text-slate-500 dark:text-white/60">
              <span>Governed by Society Registration Act &amp; Association Bylaws</span>
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
