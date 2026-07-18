import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { CAPABILITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lens N Latitudes — Wildlife Photography & Safari Tours",
  description:
    "Join award-winning photographer Salil Nair on curated wildlife safaris in India, Africa & worldwide. Small groups, expert guidance, unforgettable encounters. Based in Chennai.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Wildlife photography — Lens N Latitudes"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <p className="text-[#00bcd4] text-sm uppercase tracking-widest font-semibold mb-4">
            Lens N Latitudes
          </p>
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-3xl">
            Framing Nature,<br />One Latitude<br />at a Time
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/upcoming-safaris"
              className="inline-flex items-center bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm"
            >
              View Upcoming Safaris
            </Link>
            <Link
              href="/explore-latitudes"
              className="inline-flex items-center border border-white/40 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-sm"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-white font-bold text-3xl sm:text-4xl leading-tight mb-6">
                Lens N Latitudes
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Lens and Latitudes was born out of one simple idea: wild things deserve wild stories. And those stories deserve to be told through honest and creative photography.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Bring your Curiosity &amp; your Camera (or just your Mobile or the Binocs), pick a latitude, and let&apos;s frame some nature together, a story one click at a time.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/home-intro.jpg"
                alt="Salil Nair wildlife photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Than Just a Safari */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/home-safari-banner.jpg"
          alt="Safari jeep in the wild"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight mb-6">
            More Than Just a Safari
          </h2>
          <div className="space-y-4 text-gray-300 max-w-2xl leading-relaxed">
            <p>
              At Lens and Latitudes, we design wildlife experiences for people who want more than just a simple vacation.
            </p>
            <p>
              There is No script, No Stage, Just Wildlife that Roams — with Drama that makes you feel Right at Home.
            </p>
            <p>
              Whether you&apos;re a solo shutterbug chasing the perfect frame, a group of friends with an itch for adventure, or a corporate team that&apos;s over trust falls — This is where the Wi-Fi ends and real connection begins.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Safari CTA */}
      <section className="bg-[#050505] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2">
            Upcoming Safari&apos;s
          </h2>
          <p className="text-gray-400 text-lg italic mb-6">
            Your Pack… &nbsp; Your Path… &nbsp; Let Nature Do the Talking
          </p>
          <p className="text-gray-500 text-sm mb-8">
            This is where the Wi-Fi ends and real connection begins — we&apos;ve got you covered.
          </p>
          <Link
            href="/upcoming-safaris"
            className="inline-flex items-center bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            View Upcoming Safaris
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap) => (
              <Link
                key={cap.href}
                href={cap.href}
                className="group relative aspect-[16/9] rounded-xl overflow-hidden"
              >
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{cap.title}</h3>
                  <p className="text-gray-300 text-sm">{cap.tagline}</p>
                  <span className="mt-3 inline-block text-[#00bcd4] text-sm font-medium">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Video Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white font-bold text-3xl sm:text-4xl mb-4">
              Real Adventures. Real Experiences.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover why travellers from across India choose us for their wildlife journeys. Watch authentic stories of thrilling tiger sightings, African safaris, expert guidance, and lifelong friendships.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <a
                key={i}
                href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video bg-[#111] rounded-xl overflow-hidden flex items-center justify-center border border-white/10 hover:border-[#00bcd4]/50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00bcd4] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Watch on YouTube</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00bcd4] hover:text-white transition-colors text-sm font-medium"
            >
              View all videos on YouTube →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
