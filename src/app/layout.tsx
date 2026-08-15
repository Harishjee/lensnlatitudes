import type { Metadata, Viewport } from "next";
import { Gilda_Display, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import { organizationGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

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
    default: "Lens N Latitudes, Wildlife Photography & Safari Tours",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gildaDisplay.variable} ${ptSerif.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased flex flex-col min-h-screen font-serif">
        <JsonLd data={organizationGraph} />
        
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-J54XTY376W`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J54XTY376W');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrgznkabez");
          `}
        </Script>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
