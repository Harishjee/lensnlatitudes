import type { Metadata } from "next";
import { Gilda_Display, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

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
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gildaDisplay.variable} ${ptSerif.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased flex flex-col min-h-screen font-serif">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
