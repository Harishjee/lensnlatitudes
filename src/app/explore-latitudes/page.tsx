import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore Latitudes — Wildlife Safari Photography Journeys",
  description:
    "Curated wildlife photography safaris to India, Africa & worldwide. Under the mentorship of Salil Nair — 18+ years of global experience, photography-centric itineraries.",
  path: "/explore-latitudes",
  image: "/images/og-explore-latitudes.jpg",
});

const destinations = [
  { label: "Jungles of India", href: "/explore-jungles-of-india", image: "/images/dest-india.jpg", desc: "Tigers, leopards, elephants in 58+ tiger reserves" },
  { label: "African Continent", href: "/explore-the-african-continent", image: "/images/dest-africa.jpg", desc: "The Great Migration, Big Five, cinematic savannahs" },
  { label: "Rest of the World", href: "/explore-the-rest-of-the-world", image: "/images/dest-world.jpg", desc: "Jaguars, polar bears, gorillas & beyond" },
];

export default function ExploreLatitudesPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/explore-latitudes-hero.jpg" alt="Wildlife safari photography journey" fill className="object-cover" priority sizes="100vw" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">Explore Latitudes</h1>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-5 text-gray-400 leading-relaxed text-lg">
              <p>
                At Lens and Latitudes, we don&apos;t just plan wildlife safaris — we curate immersive, purpose-driven photography journeys to some of the most spectacular jungles in India and around the world.
              </p>
              <p>
                Every journey is photography-centric, offering not just sightings, but the opportunity to learn how to turn those moments into impactful images.
              </p>
              <p>
                Under the mentorship of Salil Nair, an award-winning wildlife photographer with over 18 years of global experience, guests receive personal guidance on framing, creative storytelling, and mastering natural light.
              </p>
              <p>
                Our itineraries are crafted to ensure maximum time in the wild, avoiding tourist-heavy hours and placing you in the best spots during the golden hours of light.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/explore-latitudes-salil.jpg" alt="Salil Nair on safari" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>

          {/* Destination cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <Link key={d.href} href={d.href} className="group relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image src={d.image} alt={d.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-white font-bold text-xl mb-2">{d.label}</h2>
                  <p className="text-gray-300 text-sm mb-3">{d.desc}</p>
                  <span className="text-[#00bcd4] text-sm font-medium">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
