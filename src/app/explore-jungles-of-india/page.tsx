import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore Jungles of India, Wildlife Safari Tours India",
  description:
    "Wildlife photography safaris in India's legendary jungles, Bandhavgarh, Tadoba, Kaziranga, Corbett, Kabini, Bera and 58+ tiger reserves. Led by award-winning photographer Salil Nair.",
  path: "/explore-jungles-of-india",
  image: "/images/india-wildlife-safari-jeep-photography.jpg",
});

type Park = {
  name: string;
  state: string;
  lead: string;
  desc: string;
  image: string;
  alt: string;
};

const parks: Park[] = [
  {
    name: "Bandhavgarh National Park",
    state: "(Madhya Pradesh)",
    lead: "The Tiger's Stage",
    desc: "With the highest density of tigers in India, Bandhavgarh is where drama unfolds in golden grasslands. Ruins of ancient forts peek through the forest, giving you a mix of history and big-cat action in every frame.",
    image: "/images/bandhavgarh-tiger-national-park-india.jpg",
    alt: "Tiger resting in green grass at Bandhavgarh National Park, Madhya Pradesh, Salil Nair",
  },
  {
    name: "Kaziranga National Park",
    state: "(Assam)",
    lead: "Land of Giants",
    desc: "The floodplains of Assam burst with life. Home to the one-horned rhinoceros, wild water buffaloes, and riverine charm, Kaziranga is a dream for moody, monsoonal photography.",
    image: "/images/kaziranga-wildlife-national-park-assam.jpg",
    alt: "Young elephant with a bird in flight through tall grass, Kaziranga National Park, Assam, Salil Nair",
  },
  {
    name: "Bera",
    state: "(Rajasthan)",
    lead: "Where Leopards Roam Among Temples",
    desc: "Photograph leopards silhouetted against sunset-soaked granite hills and ancient temples. It's wild India, minus the forest.",
    image: "/images/bera-leopard-rajasthan-india-wildlife.jpg",
    alt: "Two leopards resting in a tree canopy at Bera, Rajasthan, Salil Nair wildlife photography",
  },
  {
    name: "Tadoba-Andhari Tiger Reserve",
    state: "(Maharashtra)",
    lead: "The Untamed Furnace",
    desc: "Raw, rugged, and lesser-tamed, Tadoba offers close encounters and some of the most intense tiger behavior ever captured on lens.",
    image: "/images/tadoba-sloth-bear-forest-road-maharashtra.jpg",
    alt: "Sloth bear walking along a forest road at Tadoba-Andhari Tiger Reserve, Maharashtra, Salil Nair",
  },
  {
    name: "Corbett National Park",
    state: "(Uttarakhand)",
    lead: "Where Elephants Whisper and Rivers Roar",
    desc: "Misty mornings, riverine forests, and walking elephants, the Himalayas meet the jungle in this poetic playground for landscape and wildlife lovers.",
    image: "/images/corbett-wildlife-photography-uttarakhand.jpg",
    alt: "Tiger resting by water beside a tree at Corbett National Park, Uttarakhand, Salil Nair",
  },
];

function ParkCard({ park }: { park: Park }) {
  return (
    <div>
      {/* Image, uniform aspect for clean alignment */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={park.image}
          alt={park.alt}
          title={`${park.name} ${park.state}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Name */}
      <h3 className="font-display text-gray-900 font-normal mt-5" style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}>
        {park.name}
      </h3>
      {/* State */}
      <p className="font-display text-gray-900 font-normal mt-3" style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)" }}>
        {park.state}
      </p>
      {/* Description */}
      <p className="text-gray-800 leading-relaxed mt-5" style={{ fontSize: "17px" }}>
        <em>{park.lead}</em>, {park.desc}
      </p>
    </div>
  );
}

export default function ExploreJunglesOfIndiaPage() {
  return (
    <>
      {/* ── HERO / TITLE ── */}
      <PageHero
        image="/images/india-wildlife-safari-jeep-photography.jpg"
        alt="Wildlife safari jeep photography India, Explore Jungles of India"
        title="Explore Jungles of India"
        subtitle="Ancient Forests. Elusive Beasts. A Symphony of Shadows and Silence."
        titlePosition="left-bottom"
      />

      {/* ── INTRO (centered) ── */}
      <section className="bg-white pt-14 pb-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            India&apos;s jungles are more than wilderness, they&apos;re{" "}
            <strong>mystical realms</strong> where nature hides her best stories in whispers.
          </p>
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            With Lens and Latitudes, step into forests that breathe legends and{" "}
            <strong>frame creatures in moments you&apos;ll never forget.</strong>
          </p>
        </div>
      </section>

      {/* ── 3-COLUMN PARK GRID (5 cards + text block) ── */}
      <section className="bg-white py-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 items-start">
          {parks.map((park) => (
            <ParkCard key={park.name} park={park} />
          ))}

          {/* 6th cell, text block */}
          <div className="flex flex-col justify-start pt-2">
            <p className="font-display text-gray-900 font-normal text-center leading-snug mb-4" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>
              And this is only a sliver of India&apos;s untamed soul.
            </p>
            <p className="text-gray-900 text-center leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              With over 58 Tiger Reserves, India&apos;s wild canvas is vast and varied.
            </p>
            <p className="text-gray-900 text-center leading-relaxed" style={{ fontSize: "18px" }}>
              Whether you wish to seek the elusive <strong>black panther in Kabini</strong>, capture
              the rare beauty of the <strong>snow leopard in Ladakh</strong>, or photograph the rich
              birdlife in the wetlands of <strong>Bharatpur</strong>, we can craft your journey.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLOSING (centered) ── */}
      <section className="bg-white pt-6 pb-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-900" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)" }}>
          <p>Every itinerary is personalized, every trail chosen with intent</p>
          <p className="italic">&ldquo;Hidden, Untamed, and far from the Ordinary&rdquo;</p>
          <p>So get your lens to find stories that others miss.</p>
        </div>
      </section>
    </>
  );
}
