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
    image: "/images/home-capability-signature-shoots-wildlife.jpg",
  },
  {
    title: "Abstracts Unleased",
    desc: "Minimal in Form. Monumental in Feeling.",
    href: "/abstracts-unleashed",
    image: "/images/home-capability-abstracts-wildlife.jpg",
  },
  {
    title: "Out Of Office",
    desc: "From deadlines to treelines — the perfect escape.",
    href: "/out-of-the-office",
    image: "/images/home-capability-out-of-office-safari.jpg",
  },
  {
    title: "Beyond The Classrooms",
    desc: "Where the jungle teaches what walls cannot.",
    href: "/beyond-the-classrooms",
    image: "/images/home-capability-beyond-classrooms-wildlife.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/home-hero-wildlife-safari-lens-n-latitudes.jpg"
          alt="Lens N Latitudes — wildlife safari photography"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 w-full">
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight max-w-2xl">
            Lens N Latitudes
          </h1>
          <p className="mt-3 text-gray-200 text-base sm:text-lg max-w-md">
            Framing Nature, One Latitude at a Time
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/explore-latitudes"
              className="inline-block bg-transparent border border-white/70 text-white text-sm px-6 py-2.5 hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-white text-3xl sm:text-4xl font-normal mb-6">
                Lens N Latitudes
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Lens and Latitudes was born out of one simple idea: wild things deserve wild stories. And those stories deserve to be told through honest and creative photography.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Bring your Curiosity &amp; your Camera (or just your Mobile or the Binocs), pick a latitude, and let&apos;s frame some nature together, a story one click at a time.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-wildlife-photography-intro.jpg"
                alt="Lens N Latitudes wildlife photography safari"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE THAN JUST A SAFARI ───────────────────── */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <Image
          src="/images/home-more-than-safari-jeep-wild.jpg"
          alt="More than just a safari — wildlife experience"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-normal max-w-3xl leading-snug mb-8">
            More Than Just a Safari
          </h2>
          <div className="max-w-2xl space-y-4 text-gray-300 leading-relaxed">
            <p>At Lens and Latitudes, we design wildlife experiences for people who want more than just a simple vacation.</p>
            <p>There is No script, No Stage, Just Wildlife that Roams — with Drama that makes you feel Right at Home.</p>
            <p>Whether you&apos;re a solo shutterbug chasing the perfect frame, a group of friends with an itch for adventure, or a corporate team that&apos;s over trust falls — or students in a room with walls that wish to Grow roots together.</p>
            <p>This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.</p>
          </div>
        </div>
      </section>

      {/* ── UPCOMING SAFARI CTA ──────────────────────── */}
      <section className="bg-[#0a0a0a] py-14 text-center px-4">
        <h2 className="font-display text-white text-2xl sm:text-3xl font-normal mb-1">Upcoming Safari&apos;s</h2>
        <p className="text-gray-400 text-base italic mb-2">
          Your Pack…&nbsp;&nbsp;Your Path…&nbsp;&nbsp;Let Nature Do the Talking
        </p>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-6">
          This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.
        </p>
        <Link
          href="/upcoming-safaris"
          className="inline-block bg-[#00bcd4] hover:bg-[#0097a7] text-white text-sm font-semibold px-8 py-3 transition-colors"
        >
          View Upcoming Safaris
        </Link>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────── */}
      <section className="bg-[#0a0a0a] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="space-y-4">
            {capabilities.map((cap) => (
              <Link
                key={cap.href}
                href={cap.href}
                className="group flex flex-col sm:flex-row items-stretch bg-[#0d0d0d] border border-white/5 hover:border-white/15 transition-colors overflow-hidden"
              >
                {/* image */}
                <div className="relative w-full sm:w-48 lg:w-56 h-40 sm:h-auto shrink-0">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                </div>
                {/* text */}
                <div className="flex flex-col justify-center px-6 py-5">
                  <h3 className="font-display text-white text-xl font-normal mb-1">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                  <span className="mt-2 text-[#00bcd4] text-xs font-medium tracking-wide">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── VIDEO SECTION ────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="font-display text-white text-2xl sm:text-3xl font-normal mb-3">
              Real Adventures. Real Experiences.
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
              Discover why travellers from across India choose us for their wildlife journeys. Watch authentic stories of thrilling tiger sightings, African safaris, expert guidance, and lifelong friendships formed in the heart of nature.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video bg-[#111] flex items-center justify-center border border-white/10 hover:border-[#00bcd4]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#00bcd4] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
