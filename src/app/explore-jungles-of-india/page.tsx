import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore Jungles of India — Wildlife Safari Tours India",
  description:
    "Wildlife photography safaris through India's legendary jungles — Bandhavgarh, Tadoba, Kaziranga, Corbett, Kabini, Bera and 58+ tiger reserves. Led by Salil Nair.",
  path: "/explore-jungles-of-india",
  image: "/images/og-india.jpg",
});

const parks = [
  { name: "Bandhavgarh National Park", state: "Madhya Pradesh", desc: "The Tiger's Stage — With the highest density of tigers in India, Bandhavgarh is where drama unfolds in golden grasslands. Ruins of ancient forts peek through the forest, giving you a mix of history and big-cat action in every frame." },
  { name: "Tadoba-Andhari Tiger Reserve", state: "Maharashtra", desc: "The Untamed Furnace — Raw, rugged, and lesser-tamed, Tadoba offers close encounters and some of the most intense tiger behavior ever captured on lens." },
  { name: "Kaziranga National Park", state: "Assam", desc: "Land of Giants — The floodplains of Assam burst with life. Home to the one-horned rhinoceros, wild water buffaloes, and riverine charm, Kaziranga is a dream for moody, monsoonal photography." },
  { name: "Corbett National Park", state: "Uttarakhand", desc: "Where Elephants Whisper and Rivers Roar — Misty mornings, riverine forests, and walking elephants — the Himalayas meet the jungle in this poetic playground for landscape and wildlife lovers." },
  { name: "Bera", state: "Rajasthan", desc: "Where Leopards Roam Among Temples — Photograph leopards silhouetted against sunset-soaked granite hills and ancient temples. It's wild India, minus the forest." },
];

export default function ExploreJunglesOfIndiaPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/india-hero.jpg" alt="Tiger in Indian jungle" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Explore Jungles of India
          </h1>
          <p className="text-gray-300 mt-2 text-xl">Ancient Forests. Elusive Beasts. A Symphony of Shadows and Silence.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
            India&apos;s jungles are more than wilderness — they&apos;re mystical realms where nature hides her best stories in whispers. With Lens and Latitudes, step into forests that breathe legends and frame creatures in moments you&apos;ll never forget.
          </p>

          <div className="space-y-6">
            {parks.map((park) => (
              <div key={park.name} className="flex gap-6 p-6 bg-[#111] rounded-xl border border-white/10 hover:border-[#00bcd4]/30 transition-colors">
                <div className="shrink-0 w-1 bg-[#00bcd4] rounded-full" />
                <div>
                  <h2 className="text-white font-bold text-xl mb-1">{park.name}</h2>
                  <p className="text-[#00bcd4] text-xs uppercase tracking-wider mb-3">{park.state}</p>
                  <p className="text-gray-400 leading-relaxed">{park.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#0d0d0d] rounded-xl border border-white/10">
            <p className="text-gray-400 leading-relaxed mb-4">
              And this is only a sliver of India&apos;s untamed soul. With over 58 Tiger Reserves, India&apos;s wild canvas is vast and varied. Whether you wish to seek the elusive black panther in Kabini, capture the rare beauty of the snow leopard in Ladakh, or photograph the rich birdlife in the wetlands of Bharatpur — we can craft your journey.
            </p>
            <p className="text-white italic font-medium">&ldquo;Hidden, Untamed, and far from the Ordinary&rdquo;</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton message="Hi Salil, I'm interested in a wildlife safari in India. Please share details." label="Plan Your India Safari" />
            <Link href="/faq" className="inline-flex items-center border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg transition-colors text-sm font-semibold">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
