import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Upcoming Safaris — Kenya Wildlife Expeditions October 2026",
  description:
    "Join Salil Nair on Kenya's most iconic wildlife expeditions — Super Tuskers and Cheetah Edition. Oct 14–20, 2026. Amboseli, Lake Naivasha, Lake Nakuru & Masai Mara.",
  path: "/upcoming-safaris",
  image: "/images/og-upcoming-safaris.jpg",
});

const safaris = [
  {
    title: "Kenya Wildlife Expedition — The Super Tuskers",
    subtitle: "Discover Kenya's Legendary Giants",
    image: "/images/kenya-safari-1.png",
    date: "Oct 14–20, 2026",
    highlights: [
      "See Kenya's legendary Super Tuskers",
      "Visit Amboseli, Lake Naivasha, Lake Nakuru & Masai Mara",
      "Learn wildlife photography from Salil S. Nair",
      "Experience moonless nights beneath the Milky Way",
      "Encounter elephants, lions, cheetahs, rhinos, giraffes & rich birdlife",
      "Comfortable private 4×4 safari vehicles",
      "Luxury stays with all-inclusive meals",
      "Expert wildlife interpretation & storytelling sessions",
    ],
    whatsapp: "Hi Salil, I'm interested in the Kenya Super Tuskers Expedition (Oct 14–20, 2026). Please share details.",
  },
  {
    title: "Kenya Wildlife Expedition — Walk with the Fastest Animal on Earth",
    subtitle: "Experience the Thrill of Kenya's Wildest Landscapes",
    image: "/images/kenya-safari-2.png",
    date: "Oct 14–20, 2026",
    highlights: [
      "Witness the world's fastest land animal in its natural habitat",
      "Explore Amboseli, Lake Naivasha, Lake Nakuru & Masai Mara",
      "Wildlife photography guidance by Salil S. Nair",
      "Moonless nights perfect for Milky Way photography",
      "Spot elephants, lions, rhinos, giraffes, zebras & more",
      "Private 4×4 safari vehicles with experienced guides",
      "Luxury accommodation with all meals included",
      "Daily wildlife knowledge & conservation sessions",
    ],
    whatsapp: "Hi Salil, I'm interested in the Kenya Cheetah Expedition (Oct 14–20, 2026). Please share details.",
  },
];

export default function UpcomingSafarisPage() {
  return (
    <>
            <PageHero
        image="/images/kenya-safari-super-tuskers-expedition-2026.png"
        alt="Upcoming Kenya Wildlife Safaris 2026 — Lens N Latitudes"
        title="Upcoming Safaris"
        titlePosition="right-center"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {safaris.map((safari, i) => (
              <article key={i} className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00bcd4]/30 transition-colors">
                <div className="relative aspect-[4/3]">
                  <Image src={safari.image} alt={safari.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute top-4 right-4 bg-[#00bcd4] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {safari.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h2 className="text-white font-bold text-lg leading-tight">{safari.title}</h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-5">{safari.subtitle}</p>

                  <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {safari.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-[#00bcd4] shrink-0 mt-0.5">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton message={safari.whatsapp} label="Enquire on WhatsApp" className="w-full justify-center" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Questions? Call Salil directly:{" "}
              <a href="tel:+919944033699" className="text-[#00bcd4] hover:text-white transition-colors font-medium">
                +91-9944033699
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Event structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Kenya Wildlife Expedition 2026",
            startDate: "2026-10-14",
            endDate: "2026-10-20",
            location: { "@type": "Place", name: "Kenya", address: { "@type": "PostalAddress", addressCountry: "KE" } },
            organizer: { "@type": "Organization", name: "Lens N Latitudes", url: "https://www.lensnlatitudes.com" },
            description: "Wildlife photography safari to Kenya's iconic locations including Masai Mara, Amboseli, Lake Naivasha, and Lake Nakuru.",
          }),
        }}
      />
    </>
  );
}
