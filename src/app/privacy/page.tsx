import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export const metadata = {
  title: 'Privacy Policy | ESM Welfare Association of Nashik',
  description: 'Privacy Policy and data protection terms for the Ex-Servicemen Welfare Association of Nashik.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors">
        <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white border-b border-amber-400/20">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-4xl mb-3 block">🔒</span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold mb-2">Privacy Policy &amp; Data Protection</h1>
            <p className="text-white/70 text-sm sm:text-base">
              Safeguarding the personal and service data of our revered veterans, Veer Naris, and their families.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-navy-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg space-y-6 text-sm leading-relaxed text-slate-700 dark:text-white/80">
            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">1. Information We Collect</h2>
              <p>
                The ESM Welfare Association of Nashik collects only necessary identification and service credentials required for welfare verification, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Service Number, Rank, Regiment / Arm, and Date of Discharge</li>
                <li>PPO (Pension Payment Order) number and SPARSH ID (for pension troubleshooting)</li>
                <li>Contact details: Name, Mobile number, Email address, and Residential address in Nashik district</li>
                <li>Grievance details and supporting documents submitted voluntarily for dispute resolution</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">2. How Your Data is Used</h2>
              <p>
                Your data is exclusively utilized for:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Processing membership verification and issuing Association Veteran ID cards</li>
                <li>Liaising with Zilla Sainik Welfare Office (ZSWO) Nashik, PCDA Prayagraj, and Station HQ Deolali</li>
                <li>Sending emergency medical alerts, rally invitations, and pension update circulars via SMS or WhatsApp</li>
                <li>Processing ECHS hospital assistance and legal aid consultations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">3. Strict Confidentiality &amp; No Commercial Sharing</h2>
              <p>
                We maintain a strict zero-commercialization policy. <strong>No military service records, phone numbers, or pension details are ever sold, rented, or shared with third-party advertisers or private agencies.</strong> Data is shared only with authorized government bodies (such as Kendriya Sainik Board, DESW, or Nashik Police / NMC) when requested by the member or mandated by law.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">4. Digital Security &amp; Encryption</h2>
              <p>
                All digital records are securely encrypted in transit via SSL/TLS. Access to grievance portals and member verification records is restricted solely to authorized Executive Committee office-bearers under strict audit logging.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-navy-950 dark:text-amber-400 mb-2">5. Contact Grievance / Privacy Officer</h2>
              <p>
                If you have any questions about your data or wish to update your records, please contact:
              </p>
              <div className="mt-3 p-4 bg-slate-50 dark:bg-navy-950 rounded-2xl border border-slate-200 dark:border-white/10 text-xs">
                <p className="font-bold text-navy-950 dark:text-white">Honorary Secretary &amp; Records In-charge</p>
                <p>ESM Welfare Association, Nashik Road, Maharashtra 422101</p>
                <p>📞 Helpline: 0253-2570123 | ✉️ info@esmwelfarenashik.org</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-xs text-slate-500 dark:text-white/60">
              <span>Last updated: September 2026</span>
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
