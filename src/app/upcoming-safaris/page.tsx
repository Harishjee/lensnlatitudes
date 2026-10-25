import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "BNI Exclusive Kenya Safari Jan 2027, Wildlife Expedition with Salil Nair",
  description:
    "BNI Members Exclusive — Kenya Wildlife Safari, Jan 15-21, 2027. 7 days across Masai Mara, Lake Nakuru & Lake Naivasha. Led by award-winning photographer Salil Nair with Mr. Sunil Sethia.",
  path: "/upcoming-safaris",
  image: "/images/ooo-hero-sunset-elephants-masai-mara.jpg",
});

const WHATSAPP_MSG =
  "Hi Salil, I'm a BNI member interested in the Kenya Exclusive Safari (Jan 15-21, 2027). Please share details, pricing and availability.";

const PDF = "/BNI-Exclusive-Kenya-Tour-Itinerary-Jan-2027.pdf";

export default function UpcomingSafarisPage() {
  return (
    <>
      {/* ══════ SLIM HEADER STRIP ══════ */}
      <section className="bg-[#0a0a0a] border-b border-white/10 pt-24 pb-8 px-5 sm:px-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600/90 text-white text-xs font-bold px-5 py-2 mb-4 uppercase tracking-widest">
          BNI Members Exclusive
        </div>
        <h1
          className="font-display text-white font-normal"
          style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
        >
          Kenya Wildlife Safari
        </h1>
        <p className="text-[#00bcd4] mt-2 font-semibold uppercase tracking-widest text-sm">
          15 – 21 Jan 2027 · Masai Mara · Lake Nakuru · Lake Naivasha · 6 Nights / 7 Days
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            message={WHATSAPP_MSG}
            label="Reserve Your Seat"
            className="justify-center px-7 py-3"
          />
          <a
            href={PDF}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white px-7 py-3 font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm"
          >
            📄 Download PDF
          </a>
          <a
            href={`tel:${CONTACT.phone2.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-7 py-3 font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            📞 {CONTACT.phone2}
          </a>
        </div>
      </section>

      {/* ══════ FULL-PAGE PDF EMBED ══════ */}
      <section className="bg-[#111] w-full">
        {/* Desktop: iframe embed */}
        <object
          data={`${PDF}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
          type="application/pdf"
          className="hidden sm:block w-full"
          style={{ height: "calc(100vh - 80px)", minHeight: "800px" }}
          aria-label="BNI Exclusive Kenya Tour Itinerary Jan 2027"
        >
          {/* Fallback for browsers that can't embed PDFs */}
          <div className="flex flex-col items-center justify-center h-96 gap-4 text-gray-400">
            <p>Your browser cannot display PDFs inline.</p>
            <a
              href={PDF}
              download
              className="rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              📄 Download the Itinerary PDF
            </a>
          </div>
        </object>

        {/* Mobile: PDF doesn't embed reliably — show download prompt instead */}
        <div className="sm:hidden flex flex-col items-center justify-center py-20 px-6 gap-6 text-center">
          <p className="text-gray-300 text-lg font-display">View the Full Itinerary</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Open or download the complete BNI Exclusive Kenya Safari itinerary, including day-by-day schedule,
            pricing, inclusions, and lodge details.
          </p>
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#00bcd4] text-black px-8 py-4 font-semibold text-base hover:bg-[#00acc1] transition-colors"
          >
            Open Itinerary PDF
          </a>
          <a
            href={PDF}
            download
            className="text-gray-400 hover:text-white text-sm underline underline-offset-2 transition-colors"
          >
            Download instead →
          </a>
        </div>
      </section>

      {/* ══════ BOTTOM CTA ══════ */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-10 px-5 sm:px-10 text-center">
        <p className="text-gray-400 text-sm mb-4">
          Questions? Reach Salil directly — seats fill fast.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            message={WHATSAPP_MSG}
            label="Reserve on WhatsApp"
            className="justify-center px-7 py-3"
          />
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 text-white px-7 py-3 font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm"
          >
            ✉️ Contact Us
          </a>
        </div>
      </section>

      {/* ══════ STRUCTURED DATA ══════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Event",
                name: "BNI Exclusive Kenya Wildlife Safari — Lens N Latitudes",
                description:
                  "BNI Members exclusive Kenya safari: 7 days across Masai Mara, Lake Nakuru & Lake Naivasha, led by Salil Nair with Mr. Sunil Sethia. Jan 15-21, 2027.",
                startDate: "2027-01-15",
                endDate: "2027-01-21",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                location: {
                  "@type": "Place",
                  name: "Masai Mara, Lake Nakuru & Lake Naivasha, Kenya",
                  address: { "@type": "PostalAddress", addressCountry: "KE" },
                },
                organizer: {
                  "@type": "Organization",
                  name: "Lens N Latitudes",
                  url: "https://www.lensnlatitudes.com",
                },
                performer: { "@type": "Person", name: "Salil S. Nair" },
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/LimitedAvailability",
                  url: "https://www.lensnlatitudes.com/upcoming-safaris",
                  priceCurrency: "USD",
                  price: "2580",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lensnlatitudes.com" },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Upcoming Safaris",
                    item: "https://www.lensnlatitudes.com/upcoming-safaris",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
