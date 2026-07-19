import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Upcoming Safaris 2026 — Kenya Wildlife Photography Expeditions with Salil Nair",
  description:
    "Join Salil Nair on Kenya's most iconic wildlife photography expeditions — The Super Tuskers & Walk with the Cheetahs. Oct 14–20, 2026. Amboseli, Lake Naivasha, Lake Nakuru & Masai Mara. Small groups, luxury all-inclusive stays, limited seats.",
  path: "/upcoming-safaris",
  image: "/images/ooo-hero-sunset-elephants-masai-mara.jpg",
});

/* ── Collage images for the hero background ── */
const collage = [
  { src: "/images/masai-mara-lion-safari-kenya.jpg", alt: "Lion in the Masai Mara, Kenya" },
  { src: "/images/explore-elephants-playing-amboseli.jpg", alt: "Elephants in Amboseli, Kenya" },
  { src: "/images/btc-gallery-5-cheetah.jpg", alt: "Cheetah on the Kenyan plains" },
  { src: "/images/africa-rhino-wildlife-photography-hero.jpg", alt: "Black rhino in the wild" },
  { src: "/images/ooo-giraffe-savanna-acacia-tree.jpg", alt: "Giraffe beside an acacia tree" },
  { src: "/images/explore-latitudes-masai-mara-wildlife.jpg", alt: "Masai Mara wildlife at golden hour" },
];

type Safari = {
  title: string;
  subtitle: string;
  hook: string;
  image: string;
  imageAlt: string;
  date: string;
  duration: string;
  destinations: string[];
  highlights: string[];
  whatsapp: string;
};

const safaris: Safari[] = [
  {
    title: "The Super Tuskers",
    subtitle: "Kenya Wildlife Expedition · Discover Kenya's Legendary Giants",
    hook: "Stand before Kenya's last great Super Tuskers beneath Kilimanjaro's snows — a photographic pilgrimage to giants whose ivory nearly touches the earth.",
    image: "/images/kenya-safari-1.png",
    imageAlt:
      "Kenya The Super Tuskers wildlife photography expedition poster — Oct 14–20 2026, led by Salil S. Nair, Amboseli, Lake Naivasha, Lake Nakuru, Masai Mara",
    date: "Oct 14–20, 2026",
    duration: "7 Days · 6 Nights",
    destinations: ["Amboseli", "Lake Naivasha", "Lake Nakuru", "Masai Mara"],
    highlights: [
      "Kenya's legendary Super Tuskers",
      "Photography guidance from Salil S. Nair",
      "Moonless Milky Way nights",
      "Private 4×4 safari vehicles",
      "Luxury all-inclusive stays",
      "Storytelling & conservation sessions",
    ],
    whatsapp:
      "Hi Salil, I'm interested in the Kenya Super Tuskers Expedition (Oct 14–20, 2026). Please share details, pricing and availability.",
  },
  {
    title: "Walk with the Cheetahs",
    subtitle: "Kenya Wildlife Expedition · The Fastest Animal on Earth",
    hook: "Chase the light with the world's fastest land animal — from Nakuru's flamingo shores to the Mara's endless plains, every frame a burst of raw speed and grace.",
    image: "/images/kenya-safari-2.png",
    imageAlt:
      "Kenya Walk with the Cheetahs wildlife photography expedition poster — Oct 14–20 2026, led by Salil S. Nair, Amboseli, Lake Naivasha, Lake Nakuru, Masai Mara",
    date: "Oct 14–20, 2026",
    duration: "7 Days · 6 Nights",
    destinations: ["Amboseli", "Lake Naivasha", "Lake Nakuru", "Masai Mara"],
    highlights: [
      "The world's fastest land animal in the wild",
      "Wildlife photography guidance by Salil S. Nair",
      "Moonless nights for astro-photography",
      "Experienced guides & private 4×4s",
      "Luxury accommodation, all meals included",
      "Daily wildlife & conservation sessions",
    ],
    whatsapp:
      "Hi Salil, I'm interested in the Kenya Cheetah Expedition (Oct 14–20, 2026). Please share details, pricing and availability.",
  },
];

const trust = [
  { icon: "🏆", label: "Award-winning guide", sub: "Led by Salil S. Nair" },
  { icon: "👥", label: "Small groups", sub: "Only 6–10 travellers" },
  { icon: "🛖", label: "All-inclusive luxury", sub: "Stays, meals & 4×4s" },
  { icon: "⭐", label: "5-star rated", sub: "Loved by past guests" },
];

const included = [
  { icon: "🚙", label: "Private 4×4 Vehicle" },
  { icon: "🍽️", label: "All Meals" },
  { icon: "🏨", label: "Luxury Stays" },
  { icon: "🎟️", label: "Park Permits" },
  { icon: "📸", label: "Photography Mentoring" },
  { icon: "🧑‍✈️", label: "Expert Driver-Guide" },
  { icon: "🦁", label: "All Safaris" },
  { icon: "🌌", label: "Milky Way Nights" },
];

export default function UpcomingSafarisPage() {
  const heroWhatsApp =
    "Hi Salil, I'd like to reserve a seat on your Kenya 2026 expedition (Oct 14–20). Please share details.";

  return (
    <>
      {/* ══════════ HERO — image collage + overlay ══════════ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Collage background */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 grid-rows-2">
          {collage.map((img) => (
            <div key={img.src} className="relative">
              <Image
                src={img.src}
                alt={img.alt}
                title={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
              />
            </div>
          ))}
        </div>
        {/* Overlays — light enough to show the collage, dark enough to read */}
        <div className="absolute inset-0 bg-black/48" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 42%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center py-28">
          <p className="text-[#00bcd4] text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-5">
            2026 Expeditions · Kenya
          </p>
          <h1
            className="font-display text-white font-normal leading-[1.05] text-on-image"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
          >
            Upcoming Safaris
          </h1>
          <p
            className="mt-6 text-gray-100 max-w-2xl mx-auto leading-relaxed text-on-image"
            style={{ fontSize: "clamp(1.05rem, 2vw, 1.4rem)" }}
          >
            Two once-in-a-lifetime wildlife photography journeys across Kenya&apos;s
            most iconic wildernesses — led by award-winning photographer Salil S. Nair.
          </p>

          {/* Urgency chip */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-5 py-2 text-white text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bcd4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bcd4]" />
            </span>
            Oct 14–20, 2026 · Limited seats — small groups only
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              message={heroWhatsApp}
              label="Reserve Your Seat"
              className="w-full sm:w-auto justify-center text-base px-8 py-4"
            />
            <a
              href="#expeditions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 text-white px-8 py-4 font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Expeditions ↓
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST BAR ══════════ */}
      <section className="bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3 px-4 py-6 justify-center text-center sm:text-left">
              <span className="text-2xl sm:text-3xl">{t.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base leading-tight">{t.label}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ EXPEDITIONS — full posters + details ══════════ */}
      <section id="expeditions" className="bg-[#0a0a0a] py-20 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Choose Your Journey
            </p>
            <h2 className="font-display text-white font-normal" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Two Expeditions. One Unforgettable Kenya.
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {safaris.map((safari, i) => {
              const reversed = i % 2 === 1;
              return (
                <article
                  key={safari.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Full poster — shown completely, never cropped */}
                  <div className={reversed ? "lg:order-2" : ""}>
                    <a
                      href={`${CONTACT.whatsapp}?text=${encodeURIComponent(safari.whatsapp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
                    >
                      <Image
                        src={safari.image}
                        alt={safari.imageAlt}
                        title={`${safari.title} — ${safari.date}`}
                        width={1024}
                        height={1536}
                        className="w-full h-auto"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="mb-6 rounded-full bg-white/95 text-gray-900 text-sm font-semibold px-5 py-2">
                          Tap to enquire on WhatsApp
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Details */}
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#00bcd4]/10 border border-[#00bcd4]/30 text-[#00bcd4] text-xs font-semibold px-4 py-1.5 mb-5">
                      📅 {safari.date} · {safari.duration}
                    </div>
                    <h3 className="font-display text-white font-normal leading-tight" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
                      {safari.title}
                    </h3>
                    <p className="text-[#00bcd4] mt-2 font-medium uppercase tracking-wide" style={{ fontSize: "15px" }}>
                      {safari.subtitle}
                    </p>
                    <p className="text-gray-200 leading-relaxed mt-5" style={{ fontSize: "20px" }}>
                      {safari.hook}
                    </p>

                    {/* Destinations */}
                    <div className="flex flex-wrap gap-2.5 mt-6">
                      {safari.destinations.map((d) => (
                        <span key={d} className="rounded-full bg-white/5 border border-white/10 text-gray-200 px-4 py-2" style={{ fontSize: "15px" }}>
                          📍 {d}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-7">
                      {safari.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-gray-200 leading-snug" style={{ fontSize: "17px" }}>
                          <span className="text-[#00bcd4] shrink-0 mt-0.5">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-9 flex flex-col sm:flex-row gap-4">
                      <WhatsAppButton
                        message={safari.whatsapp}
                        label="Learn More on WhatsApp"
                        className="justify-center text-base px-7 py-3.5"
                      />
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 text-white px-7 py-3.5 font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        ✉️ Contact Us
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ WHAT'S INCLUDED ══════════ */}
      <section className="bg-[#050505] py-20 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            The All-Inclusive Experience
          </p>
          <h2 className="font-display text-white font-normal mb-14" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            Everything Taken Care Of
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {included.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] py-8 px-4 hover:border-[#00bcd4]/40 hover:bg-white/[0.05] transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-200 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SOCIAL PROOF ══════════ */}
      <section className="bg-[#0a0a0a] py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#fbbf24] text-2xl tracking-widest mb-5">★★★★★</p>
          <blockquote className="font-display text-white font-normal leading-snug" style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
            &ldquo;Salil, your enthusiasm is dangerous, in a good way. Within 48 hours all
            of us became wildlife experts, photographers, and bird watchers. What a trip!&rdquo;
          </blockquote>
          <p className="text-gray-400 mt-6 text-sm">— Masai Mara Expedition, 2026</p>
        </div>
      </section>

      {/* ══════════ FINAL CTA BAND ══════════ */}
      <section className="relative overflow-hidden py-24 px-5 sm:px-8">
        <Image
          src="/images/ooo-hero-sunset-elephants-masai-mara.jpg"
          alt="Elephants at sunset in the Masai Mara, Kenya"
          title="Elephants at sunset in the Masai Mara, Kenya"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-white font-normal leading-tight text-on-image" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Only a Few Seats Remain
          </h2>
          <p className="text-gray-200 mt-5 leading-relaxed text-on-image" style={{ fontSize: "18px" }}>
            Kenya, October 2026. Small groups fill fast — secure your place on the
            expedition of a lifetime today.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              message={heroWhatsApp}
              label="Reserve on WhatsApp"
              className="w-full sm:w-auto justify-center text-base px-8 py-4"
            />
            <a
              href={`tel:${CONTACT.phone2.replace(/[^+\d]/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 {CONTACT.phone2}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ STRUCTURED DATA ══════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...safaris.map((s) => ({
                "@type": "Event",
                name: `Kenya Wildlife Expedition — ${s.title}`,
                description: s.hook,
                startDate: "2026-10-14",
                endDate: "2026-10-20",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                image: `https://www.lensnlatitudes.com${s.image}`,
                location: {
                  "@type": "Place",
                  name: "Amboseli, Lake Naivasha, Lake Nakuru & Masai Mara, Kenya",
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
                },
              })),
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lensnlatitudes.com" },
                  { "@type": "ListItem", position: 2, name: "Upcoming Safaris", item: "https://www.lensnlatitudes.com/upcoming-safaris" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
