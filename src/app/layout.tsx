import type { Metadata, Viewport } from "next";
import { Gilda_Display, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE, CONTACT } from "@/lib/constants";

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  variable: "--font-gilda",
  display: "swap",
  weight: "400",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-pt-serif",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lens N Latitudes — Wildlife Photography & Safari Tours",
    template: "%s | Lens N Latitudes",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Salil Nair" }],
  creator: "Salil Nair",
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "/" },
  keywords: [
    "wildlife photography",
    "safari tours",
    "Salil Nair",
    "Masai Mara safari",
    "India tiger safari",
    "Kenya wildlife expedition",
    "wildlife photography tours",
    "fine art wildlife prints",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

/* Sitewide brand entity — Organization + WebSite (John Mueller–recommended). */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE.url}/images/og-default.jpg`,
      description: SITE.description,
      founder: { "@type": "Person", name: "Salil Nair" },
      email: CONTACT.email,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd floor, 115, above union bank, Arcot Road",
        addressLocality: "Alwarthirunagar, Chennai",
        postalCode: "600087",
        addressCountry: "IN",
      },
      sameAs: [CONTACT.instagram, CONTACT.youtube],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gildaDisplay.variable} ${ptSerif.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased flex flex-col min-h-screen font-serif">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
