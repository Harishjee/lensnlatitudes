import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import VideoTestimonials from "@/components/ui/VideoTestimonials";

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
          title="Lens N Latitudes — wildlife photography safari"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />

        {/* Title — stacks below image on mobile, overlays upper-left on desktop */}
        <div className="relative lg:absolute z-10 px-6 py-8 lg:p-0 lg:left-16 lg:top-[18vh]">
          <h1
            className="font-display text-white font-normal leading-none text-on-image"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 6rem)" }}
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
          title="Lens N Latitudes — wildlife photography story, Goa beach landscape"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          sizes="100vw"
        />

        {/* Top-left text block — stacks below on mobile, overlays on desktop */}
        <div className="relative lg:absolute lg:top-[5%] lg:left-14 z-10 px-6 pt-8 lg:p-0 max-w-full lg:max-w-[42%]">
          <h2
            className="font-display text-white font-normal leading-snug text-on-image mb-5"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 3rem)" }}
          >
            Lens N Latitudes
          </h2>
          <p className="text-white leading-relaxed text-on-image" style={{ fontSize: "20px" }}>
            Lens and Latitudes was born out of one simple idea: wild things deserve
            wild stories. And those stories deserve to be told through honest and
            creative photography.
          </p>
        </div>

        {/* Bottom-right text block — stacks below on mobile, overlays on desktop */}
        <div className="relative lg:absolute lg:bottom-[5%] lg:right-14 z-10 text-left lg:text-right px-6 pt-6 pb-8 lg:p-0 max-w-full lg:max-w-[45%]">
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
          title="More than just a safari — safari jeep at dramatic sunset, Masai Mara"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          sizes="100vw"
        />

        {/* "More Than Just a Safari" — stacks below on mobile, overlays on desktop */}
        <div className="relative lg:absolute lg:top-[15%] lg:right-16 z-10 px-6 py-8 lg:p-0">
          <h2
            className="font-display text-white font-normal text-left lg:text-right text-on-image"
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
            className="font-display text-black font-normal mb-5"
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
                  title={cap.title}
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
      <TestimonialsSection />

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

        {/* Inline video testimonials — uniform 16:9 cards, click to play */}
        <VideoTestimonials
          videos={[
            {
              src: "/videos/dr-manivannan-masai-mara.mp4",
              poster: "/videos/dr-manivannan-masai-mara-poster.jpg",
              name: "Dr. S. Manivannan",
              role: "Founder & MD, Kauvery Hospital — Masai Mara",
            },
            {
              src: "/videos/jaykumar-chennai.mp4",
              poster: "/videos/jaykumar-chennai-poster.jpg",
              name: "Jaykumar",
              role: "Chennai — Wildlife Safari",
            },
            {
              src: "/videos/ambika-bangalore.mp4",
              poster: "/videos/ambika-bangalore-poster.jpg",
              name: "Ambika",
              role: "Bangalore — Wildlife Safari",
            },
            {
              src: "/videos/bala-masai-mara.mp4",
              poster: "/videos/bala-masai-mara-poster.jpg",
              name: "Bala",
              role: "Masai Mara — Trip Testimonial",
            },
          ]}
        />

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
