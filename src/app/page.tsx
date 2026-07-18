import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Lens N Latitudes — Wildlife Photography & Safari Tours India",
  description:
    "Award-winning wildlife photography safaris led by Salil Nair. India, Africa & worldwide expeditions. Expert guidance, small groups, luxury stays. Based in Chennai.",
  alternates: { canonical: "https://www.lensnlatitudes.com/" },
};

/* ── capability cards ── */
const capabilities = [
  {
    title: "Signature Shoots",
    desc: "Not Just Captured. Crafted to Stand Apart",
    href: "/signature-shoots",
    image: "/images/home-hero-wildlife-safari-lens-n-latitudes.jpg",
    alt: "Signature wildlife photography shoots — Lens N Latitudes",
  },
  {
    title: "Abstracts Unleased",
    desc: "Minimal in Form. Monumental in Feeling.",
    href: "/abstracts-unleashed",
    image: "/images/home-capability-abstracts-wildlife.jpg",
    alt: "Abstract wildlife photography — Lens N Latitudes",
  },
  {
    title: "Out Of Office",
    desc: "From deadlines to treelines — the perfect escape...The Only Meeting is in the Wild.",
    href: "/out-of-the-office",
    image: "/images/home-capability-out-of-office-safari.jpg",
    alt: "Corporate wildlife safari retreat — Out of Office",
  },
  {
    title: "Beyond The Classrooms",
    desc: "Where the jungle teaches what walls cannot...\nOut of their textbooks & Into the wild.\nBecause the forest has no blackboard — only lessons.",
    href: "/beyond-the-classrooms",
    image: "/images/home-capability-beyond-classrooms-elephant.jpg",
    alt: "Wildlife education tour for students — Beyond The Classrooms",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO (full-screen cave image)
      ══════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Image
          src="/images/home-hero-wildlife-safari-lens-n-latitudes.jpg"
          alt="Lens N Latitudes — wildlife photography safari cave"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* subtle dark gradient — darker at edges, lighter in centre */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/40" />

        {/* title — bottom-left */}
        <div className="absolute bottom-16 left-8 sm:left-12 lg:left-16 z-10">
          <h1 className="font-display text-white font-normal leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            Lens N Latitudes
          </h1>
          <p className="mt-3 text-white/90 italic font-display"
             style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
            Framing Nature, One Latitude at a Time
          </p>
        </div>

        {/* Salil S Nair watermark — bottom-left below title */}
        <p className="absolute bottom-5 left-8 sm:left-12 lg:left-16 z-10
                      text-white/60 font-display italic text-sm tracking-wide">
          Salil S Nair
        </p>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — LENS N LATITUDES (beach image)
          Text overlay: top-left + bottom-right
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "clamp(480px, 65vw, 800px)" }}>
        <Image
          src="/images/home-wildlife-photography-intro.jpg"
          alt="Lens N Latitudes — wildlife photography story, beach landscape"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Top-left text block */}
        <div className="absolute top-10 left-8 sm:left-12 lg:left-16 z-10 max-w-sm sm:max-w-md">
          <h2 className="font-display text-white font-normal mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Lens N Latitudes
          </h2>
          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
            Lens and Latitudes was born out of one simple idea: wild things deserve wild stories.
            And those stories deserve to be told through honest and creative photography.
          </p>
        </div>

        {/* Bottom-right text block */}
        <div className="absolute bottom-10 right-8 sm:right-12 lg:right-16 z-10 max-w-sm sm:max-w-md text-right">
          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
            Bring your Curiosity &amp; your Camera (or just your Mobile or the Binocs),
            pick a latitude, and let&apos;s frame some nature together, a story one click at a time.
          </p>
        </div>

        {/* Watermark */}
        <p className="absolute bottom-4 left-8 sm:left-12 lg:left-16 z-10
                      text-white/50 font-display italic text-sm">
          Salil S Nair
        </p>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — MORE THAN JUST A SAFARI (full-bleed)
          Title RIGHT-ALIGNED on the image
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "clamp(380px, 55vw, 680px)" }}>
        <Image
          src="/images/home-more-than-safari-jeep-wild.jpg"
          alt="More than just a safari — safari jeep at dramatic sunset"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Title — right side, vertically centred */}
        <div className="absolute inset-0 flex items-start justify-end z-10 pt-16 pr-8 sm:pr-14 lg:pr-20">
          <h2 className="font-display text-white font-normal text-right"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
            More Than Just a Safari
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — MORE THAN JUST A SAFARI (dark text section)
      ══════════════════════════════════════════════ */}
      <section className="bg-black py-14 px-8 sm:px-12 lg:px-20">
        <div className="max-w-4xl space-y-4 text-white/85 leading-relaxed text-sm sm:text-base font-serif mb-12">
          <p>At Lens and Latitudes, we design wildlife experiences for people who want more than just a simple vacation.</p>
          <p>There is No script, No Stage, Just Wildlife that Roams - with Drama that makes you feel Right at Home.</p>
          <p>Whether you&apos;re a solo shutterbug chasing the perfect frame, a group of friends with an itch for adventure, or a corporate team that&apos;s over trust falls - or students in a room with walls that wish to Grow roots together.</p>
          <p>This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.</p>
          <p>We&apos;re talking dusty boots, foggy forests, jeep rides that feel like rollercoasters, and quiet moments when wildlife looks straight back at you.</p>
        </div>

        {/* Upcoming Safari's button — white outline pill */}
        <Link
          href="/upcoming-safaris"
          className="inline-block border border-white/80 text-white text-sm px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Upcoming Safari&apos;s
        </Link>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — YOUR PACK… (WHITE background)
          Large heading + 4 horizontal capability cards
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-8 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-display text-black font-normal leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Your Pack…&nbsp;&nbsp;&nbsp;Your Path…&nbsp;&nbsp;&nbsp;Let Nature Do the Talking
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl">
            This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.
          </p>
        </div>

        {/* Capability cards */}
        <div className="space-y-10">
          {capabilities.map((cap) => (
            <div key={cap.href} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              {/* Image */}
              <Link href={cap.href} className="shrink-0 w-full sm:w-64 lg:w-80">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <Image
                    src={cap.image}
                    alt={cap.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                  {/* Salil S Nair watermark on image */}
                  <p className="absolute bottom-2 left-2 text-white/60 font-display italic text-xs pointer-events-none">
                    Salil S Nair
                  </p>
                </div>
              </Link>

              {/* Text */}
              <div className="flex flex-col justify-center pt-1">
                <h3 className="font-display text-black font-normal mb-2"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                  {cap.title}
                </h3>
                {cap.desc.split("\n").map((line, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
                <Link
                  href={cap.href}
                  className="mt-3 text-black text-sm underline underline-offset-2 hover:text-gray-600 transition-colors w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS (dark background)
      ══════════════════════════════════════════════ */}
      <TestimonialsCarousel />

      {/* ══════════════════════════════════════════════
          SECTION 7 — REAL ADVENTURES (light background)
          "Real Adventures. Real Experiences." + 2×2 videos
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-8 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-display text-black font-normal mb-5"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>
            Real Adventures. Real Experiences.
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover why travellers from across India choose us for their wildlife journeys.
            Watch authentic stories of thrilling tiger sightings, African safaris, expert guidance,
            wildlife photography, and lifelong friendships formed in the heart of nature.
          </p>
        </div>

        {/* 2×2 video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {[
            { id: "1", label: "Client testimonial — Dr. S. Manivannan" },
            { id: "2", label: "Client testimonial — safari experience" },
            { id: "3", label: "Client testimonial — wildlife journey" },
            { id: "4", label: "Client testimonial — photography safari" },
          ].map((v) => (
            <a
              key={v.id}
              href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video bg-black flex items-center justify-center overflow-hidden"
              aria-label={v.label}
            >
              {/* Play button overlay */}
              <div className="w-14 h-14 rounded-full bg-black/60 border-2 border-white/80 flex items-center justify-center
                              group-hover:bg-black/80 transition-colors">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Duration placeholder */}
              <span className="absolute bottom-2 left-2 text-white text-xs font-mono bg-black/50 px-1 rounded">
                00:00 / 01:20
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-sm underline underline-offset-2 transition-colors"
          >
            View all testimonials on YouTube →
          </a>
        </div>
      </section>
    </>
  );
}
