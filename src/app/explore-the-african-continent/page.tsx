import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the African Continent — African Wildlife Safari Photography",
  description:
    "African wildlife photography safaris — Masai Mara, Serengeti, Okavango, Etosha, South Luangwa. Led by Salil Nair. Witness the Great Migration, Big Five & more.",
  path: "/explore-the-african-continent",
  image: "/images/africa-rhino-wildlife-photography-hero.jpg",
});

type Destination = {
  name: string;
  country: string;
  lead: string;
  desc: string;
  image: string;
  alt: string;
};

const destinations: Destination[] = [
  {
    name: "Masai Mara",
    country: "(Kenya)",
    lead: "The Greatest Show on Earth",
    desc: "Home to the Great Migration and golden hour lion hunts, the Mara offers adrenaline-packed storytelling at every turn. It's chaos, beauty, and drama in motion.",
    image: "/images/masai-mara-lion-safari-kenya.jpg",
    alt: "Lion with a kill in the golden grass of the Masai Mara, Kenya — Salil Nair wildlife photography",
  },
  {
    name: "Okavango Delta",
    country: "(Botswana)",
    lead: "Where Water Paints the Wild",
    desc: "A labyrinth of life, captured best from mokoros or helicopters. Think elephants wading through lilies, leopards lounging on trees, and mirrored reflections everywhere.",
    image: "/images/okavango-delta-botswana-wildlife-safari.jpg",
    alt: "Leopard drinking at the water's edge in the Okavango Delta, Botswana — Salil Nair",
  },
  {
    name: "Serengeti National Park",
    country: "(Tanzania)",
    lead: "Eternal Savannah",
    desc: "Endlessly cinematic. Lions on kopjes, cheetahs scanning the golden plains, and thunderous wildebeest herds—a photographer's paradise of movement and stillness.",
    image: "/images/serengeti-tanzania-wildlife-photography.jpg",
    alt: "Lions resting on a kopje under a blue sky in the Serengeti, Tanzania — Salil Nair",
  },
  {
    name: "Etosha National Park",
    country: "(Namibia)",
    lead: "The Salt-Pan Silence",
    desc: "White expanses and minimalist compositions. Etosha gives you ghostly elephants, stark light, and surreal frames.",
    image: "/images/signature-zebras-bw-high-key-herd.jpg",
    alt: "High-key black and white herd of zebras in Etosha National Park, Namibia — Salil Nair",
  },
  {
    name: "South Luangwa",
    country: "(Zambia)",
    lead: "Africa's Best-Kept Secret",
    desc: "The birthplace of walking safaris, this emerald-toned park offers thrilling ground-level encounters and stunning leopard sightings.",
    image: "/images/signature-elephant-dust-devil-amboseli.jpg",
    alt: "Elephant walking the savanna beneath a distant dust column in South Luangwa, Zambia — Salil Nair",
  },
];

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <div>
      {/* Image — uniform aspect for clean alignment */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.alt}
          title={`${dest.name} ${dest.country}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Name (Country) */}
      <h3 className="font-display text-gray-900 font-normal mt-5" style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}>
        {dest.name} <span className="whitespace-nowrap">{dest.country}</span>
      </h3>
      {/* Description */}
      <p className="text-gray-800 leading-relaxed mt-5" style={{ fontSize: "17px" }}>
        <em>{dest.lead}</em> — {dest.desc}
      </p>
    </div>
  );
}

export default function ExploreAfricanContinentPage() {
  return (
    <>
      {/* ── HERO / TITLE ── */}
      <PageHero
        image="/images/africa-rhino-wildlife-photography-hero.jpg"
        alt="Explore the African Continent — black rhino wildlife photography safari"
        title="Explore the African Continent"
        subtitle="Where Earth Roars. Where Light Dances. Where the Wild is Eternal."
        titlePosition="right-center"
        fullHeight
      />

      {/* ── INTRO (centered) ── */}
      <section className="bg-white pt-14 pb-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            Africa is not just a destination—it&apos;s the origin of awe.
          </p>
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            Every horizon burns with possibility, and every safari here is an orchestra of motion and instinct.
          </p>
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            With Salil Nair&apos;s expert eye guiding your lens, witness the grand theatre of nature like never before.
          </p>
        </div>
      </section>

      {/* ── 3-COLUMN DESTINATION GRID (5 cards + text block) ── */}
      <section className="bg-white py-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 items-start">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} dest={dest} />
          ))}

          {/* 6th cell — text block */}
          <div className="flex flex-col justify-start pt-2 text-center">
            <p className="font-display text-gray-900 font-normal leading-snug mb-4" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>
              Africa&apos;s wild is endless—and so are the possibilities.
            </p>
            <p className="text-gray-900 leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              Beyond the famed plains lie adventures few ever see.
            </p>
            <p className="text-gray-900 leading-relaxed" style={{ fontSize: "18px" }}>
              From trekking through the lush rainforests of{" "}
              <strong>Uganda to meet the mighty silverback gorillas</strong>, to gliding along the
              waterways of <strong>Okavango National park</strong>, or exploring the{" "}
              <strong>remote deserts of Namibia</strong>, our safaris are curated to match your
              wildest visions.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLOSING (centered) ── */}
      <section className="bg-white pt-6 pb-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-900" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)" }}>
          <p>Tell us your dream, and we&apos;ll trace its coordinates on Africa&apos;s untamed map,</p>
          <p className="font-semibold">
            &ldquo;Beyond the crowds, Beyond the guidebooks, Beyond belief&rdquo;.
          </p>
        </div>
      </section>
    </>
  );
}
