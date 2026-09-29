import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ESM Welfare Association of Nashik — Ex-Servicemen Welfare Association",
    template: "%s | ESM Welfare Association of Nashik",
  },
  description:
    "ESM Welfare Association of Nashik (Ex-Servicemen Welfare Association) — A dedicated platform for Ex-Servicemen, veterans, war widows, dependents and their families. Welfare assistance, pension & OROP guidance, community support in Nashik, Maharashtra.",
  keywords: [
    "Ex Servicemen Welfare Association Nashik",
    "ESM Welfare Association Nashik",
    "Ex Servicemen Association Nashik",
    "Veteran Welfare Nashik",
    "Ex Servicemen Welfare Maharashtra",
    "ESM welfare services",
    "Veteran support Nashik",
    "OROP Nashik",
    "veteran community Nashik",
    "military welfare Nashik",
  ],
  authors: [{ name: "ESM Welfare Association of Nashik" }],
  openGraph: {
    title: "ESM Welfare Association of Nashik — Serving Those Who Served the Nation",
    description:
      "A dedicated platform for Ex-Servicemen, veterans, war widows, dependents and their families — connecting members with welfare assistance, information, resources and community support.",
    url: "https://esmwelfarenashik.org",
    siteName: "ESM Welfare Association of Nashik",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://esmwelfarenashik.org"),
};

import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

