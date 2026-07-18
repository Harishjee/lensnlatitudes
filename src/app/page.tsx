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
          SECTION 1 — HERO
          Full natural-size image, NO overlay, text-shadow for readability
      ══════════════════════════════════════════════ */}
      <section className="relative w-full">
        <Image
          src="/images/home-hero-wildlife-safari-lens-n-latitudes.jpg"
          alt="Lens N Latitudes — wildlife photography safari"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />

        {/* Title — upper-left, directly below logo position */}
        <div className="absolute left-6 sm:left-10 lg:left-16 z-10"
             style={{ top: "clamp(120px, 20vh, 240px)" }}>
          <h1
            className="font-display text-white font-normal leading-none text-on-image"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}
          >
            Lens N Latitudes
          </h1>
          <p
            className="mt-4 text-white/95 italic font-display text-on-image"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Framing Nature, One Latitude at a Time
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — BEACH INTRO
          Full natural-size image, NO overlay
          Text top-left + bottom-right, 20px font, text-shadow
      ══════════════════════════════════════════════ */}
      <section className="relative w-full">
        <Image
          src="/images/home-wildlife-photography-intro.jpg"
          alt="Lens N Latitudes — wildlife photography story, Goa beach landscape"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          sizes="100vw"
        />

        {/* Top-left text block — wider, no overlay */}
        <div className="absolute top-[5%] left-6 sm:left-10 lg:left-14 z-10"
             style={{ maxWidth: "min(42%, 560px)" }}>
          <h2
            className="font-display text-white font-normal leading-snug text-on-image mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Lens N Latitudes
          </h2>
          <p className="text-white leading-relaxed text-on-image" style={{ fontSize: "20px" }}>
            Lens and Latitudes was born out of one simple idea: wild things deserve
            wild stories. And those stories deserve to be told through honest and
            creative photography.
          </p>
        </div>

        {/* Bottom-right text block — wider, no overlay */}
        <div className="absolute bottom-[5%] right-6 sm:right-10 lg:right-14 z-10 text-right"
             style={{ maxWidth: "min(45%, 580px)" }}>
          <p className="text-white leading-relaxed text-on-image" style={{ fontSize: "20px" }}>
            Bring your Curiosity &amp; your Camera (or just your Mobile or the Binocs),
            pick a latitude, and let&apos;s frame some nature together, a story
            one click at a time.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — MORE THAN JUST A SAFARI (banner image)
          Full natural-size image, NO overlay
          Title right-aligned, text-shadow
      ══════════════════════════════════════════════ */}
      <section className="relative w-full">
        <Image
          src="/images/home-more-than-safari-jeep-wild.jpg"
          alt="More than just a safari — safari jeep at dramatic sunset, Masai Mara"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          sizes="100vw"
        />

        {/* "More Than Just a Safari" — right-aligned, vertically in upper area */}
        <div className="absolute top-[15%] right-6 sm:right-10 lg:right-16 z-10">
          <h2
            className="font-display text-white font-normal text-right text-on-image"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
          >
            More Than Just a Safari
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — MORE THAN SAFARI BODY TEXT (dark bg)
      ══════════════════════════════════════════════ */}
      <section className="bg-black py-14 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl space-y-5 text-white/85 leading-relaxed mb-12">
          <p>At Lens and Latitudes, we design wildlife experiences for people who want more than just a simple vacation.</p>
          <p>There is No script, No Stage, Just Wildlife that Roams - with Drama that makes you feel Right at Home.</p>
          <p>Whether you&apos;re a solo shutterbug chasing the perfect frame, a group of friends with an itch for adventure, or a corporate team that&apos;s over trust falls - or students in a room with walls that wish to Grow roots together.</p>
          <p>This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.</p>
          <p>We&apos;re talking dusty boots, foggy forests, jeep rides that feel like rollercoasters, and quiet moments when wildlife looks straight back at you.</p>
        </div>
        <Link
          href="/upcoming-safaris"
          className="inline-block border border-white/80 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Upcoming Safari&apos;s
        </Link>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — YOUR PACK… CAPABILITIES (WHITE bg)
          Images displayed at FULL NATURAL SIZE — no cropping, no overlay
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
        {/* Heading — single line, centered */}
        <div className="mb-12 text-center">
          <h2
            className="font-display text-black font-normal whitespace-nowrap mb-5"
            style={{ fontSize: "clamp(1.2rem, 3.2vw, 3rem)" }}
          >
            Your Pack…&nbsp;&nbsp;&nbsp;Your Path…&nbsp;&nbsp;&nbsp;Let Nature Do the Talking
          </h2>
          <p className="text-gray-700 text-center" style={{ fontSize: "20px" }}>
            This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.
          </p>
        </div>

        {/* Capability cards — image LEFT at full natural size, text RIGHT */}
        <div className="space-y-16">
          {capabilities.map((cap) => (
            <div key={cap.href} className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
              {/* Image — full natural size, no cropping, no overlay */}
              <Link href={cap.href} className="shrink-0 w-full sm:w-[380px] lg:w-[420px]">
                <Image
                  src={cap.image}
                  alt={cap.alt}
                  width={840}
                  height={560}
                  className="w-full h-auto block"
                  sizes="(max-width: 640px) 100vw, 420px"
                />
              </Link>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h3
                  className="font-display text-black font-normal mb-3"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
                >
                  {cap.title}
                </h3>
                {cap.desc.split("\n").map((line, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed" style={{ fontSize: "20px" }}>
                    {line}
                  </p>
                ))}
                <Link
                  href={cap.href}
                  className="mt-4 text-black underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
                  style={{ fontSize: "20px" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <TestimonialsCarousel />

      {/* ══════════════════════════════════════════════
          SECTION 7 — REAL ADVENTURES (light bg + 2×2 videos)
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-10">
          <h2
            className="font-display text-black font-normal mb-5"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
          >
            Real Adventures. Real Experiences.
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "20px" }}>
            Discover why travellers from across India choose us for their wildlife journeys.
            Watch authentic stories of thrilling tiger sightings, African safaris, expert guidance,
            wildlife photography, and lifelong friendships formed in the heart of nature.
          </p>
        </div>

        {/* 2×2 video grid with real thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {[
            { thumb: "/images/video-testimonial-safari-1.jpg", dur: "1:20", label: "Dr. S. Manivannan — Masai Mara" },
            { thumb: "/images/video-testimonial-safari-2.jpg", dur: "1:14", label: "Safari testimonial — wildlife journey" },
            { thumb: "/images/video-testimonial-safari-3.jpg", dur: "0:46", label: "Client review — photography tour" },
            { thumb: "/images/video-testimonial-safari-4.jpg", dur: "0:41", label: "Client testimonial — safari experience" },
          ].map((v, i) => (
            <a
              key={i}
              href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-black"
              aria-label={v.label}
            >
              {/* Real thumbnail */}
              <Image
                src={v.thumb}
                alt={v.label}
                width={800}
                height={450}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Play button overlay (minimal — just the play icon, no dark overlay) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/60 border-2 border-white/90 flex items-center justify-center
                                group-hover:bg-[#00bcd4] group-hover:border-[#00bcd4] transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Duration badge */}
              <span className="absolute bottom-2 left-2 text-white text-xs font-mono bg-black/60 px-1.5 py-0.5 rounded">
                {v.dur}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors underline underline-offset-2"
            style={{ fontSize: "20px" }}
          >
            View all testimonials on YouTube →
          </a>
        </div>
      </section>
    </>
  );
}
