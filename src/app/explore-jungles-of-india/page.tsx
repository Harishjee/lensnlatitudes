import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore Jungles of India — Wildlife Safari Tours India",
  description:
    "Wildlife photography safaris in India's legendary jungles — Bandhavgarh, Tadoba, Kaziranga, Corbett, Kabini, Bera and 58+ tiger reserves. Led by award-winning photographer Salil Nair.",
  path: "/explore-jungles-of-india",
  image: "/images/india-wildlife-safari-jeep-photography.jpg",
});

const parks = [
  {
    name: "Bandhavgarh National Park",
    state: "Madhya Pradesh",
    desc: "The Tiger's Stage — With the highest density of tigers in India, Bandhavgarh is where drama unfolds in golden grasslands. Ruins of ancient forts peek through the forest, giving you a mix of history and big-cat action in every frame.",
    image: "/images/bandhavgarh-tiger-national-park-india.jpg",
  },
  {
    name: "Kaziranga National Park",
    state: "Assam",
    desc: "Land of Giants — The floodplains of Assam burst with life. Home to the one-horned rhinoceros, wild water buffaloes, and riverine charm, Kaziranga is a dream for moody, monsoonal photography.",
    image: "/images/kaziranga-wildlife-national-park-assam.jpg",
  },
  {
    name: "Bera",
    state: "Rajasthan",
    desc: "Where Leopards Roam Among Temples — Photograph leopards silhouetted against sunset-soaked granite hills and ancient temples. It's wild India, minus the forest.",
    image: "/images/bera-leopard-rajasthan-india-wildlife.jpg",
  },
  {
    name: "Tadoba-Andhari Tiger Reserve",
    state: "Maharashtra",
    desc: "The Untamed Furnace — Raw, rugged, and lesser-tamed, Tadoba offers close encounters and some of the most intense tiger behavior ever captured on lens.",
    image: "/images/tadoba-tiger-maharashtra-india-safari.jpg",
  },
  {
    name: "Corbett National Park",
    state: "Uttarakhand",
    desc: "Where Elephants Whisper and Rivers Roar — Misty mornings, riverine forests, and walking elephants — the Himalayas meet the jungle in this poetic playground for landscape and wildlife lovers.",
    image: "/images/corbett-wildlife-photography-uttarakhand.jpg",
  },
];

export default function ExploreJunglesOfIndiaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/images/india-wildlife-safari-jeep-photography.jpg"
          alt="Wildlife safari jeep photography India — Explore Jungles"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pb-12">
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-normal">
            Explore Jungles of India
          </h1>
          <p className="text-gray-300 mt-2 italic">
            Ancient Forests. Elusive Beasts. A Symphony of Shadows and Silence.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            India&apos;s jungles are more than wilderness — they&apos;re <span className="text-white">mystical realms</span> where nature hides her best stories in whispers.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-3xl mt-3">
            With Lens and Latitudes, step into forests that breathe legends and <span className="text-white">frame creatures in moments you&apos;ll never forget.</span>
          </p>
        </div>
      </section>

      {/* ── DESTINATIONS GRID ────────────────────────── */}
      <section className="bg-[#0a0a0a] pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* First row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {parks.slice(0, 3).map((park) => (
              <div key={park.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-3">
                  <Image
                    src={park.image}
                    alt={`${park.name} wildlife photography safari India`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-display text-white text-lg font-normal">{park.name}</h2>
                <p className="text-[#00bcd4] text-xs uppercase tracking-wider mb-2">{park.state}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{park.desc}</p>
              </div>
            ))}
          </div>

          {/* Second row — 2 cards + text block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {parks.slice(3, 5).map((park) => (
              <div key={park.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-3">
                  <Image
                    src={park.image}
                    alt={`${park.name} wildlife photography safari India`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-display text-white text-lg font-normal">{park.name}</h2>
                <p className="text-[#00bcd4] text-xs uppercase tracking-wider mb-2">{park.state}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{park.desc}</p>
              </div>
            ))}
            {/* Text block */}
            <div className="flex flex-col justify-center p-6 bg-[#0d0d0d] border border-white/5">
              <p className="font-display text-white text-xl font-normal mb-3">
                And this is only a sliver of India&apos;s untamed soul.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                With over 58 Tiger Reserves, India&apos;s wild canvas is vast and varied. Whether you wish to seek the elusive black panther in Kabini, capture the rare beauty of the <span className="text-white">snow leopard in Ladakh</span>, or photograph the rich birdlife in the wetlands of <span className="text-white">Bharatpur</span>, we can craft your journey.
              </p>
              <p className="text-gray-400 text-sm">Every itinerary is personalized, every trail chosen with intent.</p>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-10 text-center space-y-2">
            <p className="text-gray-400 italic">&ldquo;Hidden, Untamed, and far from the Ordinary&rdquo;</p>
            <p className="text-gray-500 text-sm">So get your lens to find stories that others miss.</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton message="Hi Salil, I'm interested in a wildlife safari in India. Please share details." label="Plan My India Safari" />
            <Link href="/faq" className="inline-flex items-center border border-white/20 hover:border-white/60 text-gray-400 hover:text-white px-6 py-3 text-sm transition-colors">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
