import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the Rest of the World — Global Wildlife Photography Expeditions",
  description:
    "Global wildlife photography expeditions — Pantanal jaguars, Yellowstone wolves, Svalbard polar bears, Sumatra orangutans, Scottish Highlands. Led by Salil Nair.",
  path: "/explore-the-rest-of-the-world",
  image: "/images/world-wildlife-photography-hero.jpg",
});

type Destination = {
  name: string;
  country: string;
  lead: string;
  desc: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

const destinations: Destination[] = [
  {
    name: "Pantanal",
    country: "(Brazil)",
    lead: "The Jaguar's Domain",
    desc: "Venture by boat through flooded forests and photograph jaguars stalking caimans in broad daylight. Add giant river otters and hyacinth macaws, and it's a color-rich spectacle.",
    image: "/images/pantanal-jaguar-brazil-wildlife-photography.jpg",
    alt: "High-key black and white jaguar walking, Pantanal, Brazil — Salil Nair wildlife photography",
    width: 1732,
    height: 1155,
  },
  {
    name: "Yellowstone National Park",
    country: "(USA)",
    lead: "Fire, Ice, and Fur",
    desc: "Bison in blizzards, wolves in twilight, and steaming geysers painting the landscape. A truly cinematic blend of wildlife and natural drama.",
    image: "/images/yellowstone-bison-usa-wildlife-photography.jpg",
    alt: "Lone bison grazing beneath the Teton range, Yellowstone National Park, USA — Salil Nair",
    width: 2240,
    height: 1488,
  },
  {
    name: "Svalbard",
    country: "(Norway)",
    lead: "Kingdom of Ice Bears",
    desc: "Sail through glacial silence as polar bears hunt on sea ice. The Arctic light will leave your memory cards full and your heart fuller.",
    image: "/images/svalbard-polar-bear-norway-arctic.jpg",
    alt: "Polar bear standing on sea ice in Svalbard, Norway — Salil Nair Arctic wildlife photography",
    width: 1280,
    height: 718,
  },
  {
    name: "Sumatra",
    country: "(Indonesia)",
    lead: "Home of the Orangutan",
    desc: "Mist-draped rainforests echo with ancient calls. Capture orangutans swinging through dense canopy and elephants wandering through tropical fog.",
    image: "/images/sumatra-orangutan-indonesia-wildlife.jpg",
    alt: "Orangutan swinging through the green rainforest canopy, Sumatra, Indonesia — Salil Nair",
    width: 2000,
    height: 1333,
  },
  {
    name: "The Scottish Highlands",
    country: "(UK)",
    lead: "Of Myths and Stags",
    desc: "A moody, medieval backdrop for red deer, golden eagles, and elusive wildcats. Nature meets legend in every haunting frame.",
    image: "/images/scottish-highlands-wildlife-photography.jpg",
    alt: "Fox walking through snow in the Scottish Highlands, UK — Salil Nair wildlife photography",
    width: 1885,
    height: 1060,
  },
];

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <div>
      {/* Image — uniform 3:2 size across the whole grid */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-50">
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

export default function ExploreRestOfWorldPage() {
  return (
    <>
      {/* ── HERO / TITLE ── */}
      <PageHero
        image="/images/world-wildlife-photography-hero.jpg"
        alt="Explore the Rest of the World — high-key elephant global wildlife photography"
        title="Explore the Rest of the World"
        subtitle="Untouched. Unexpected. Unrepeatable."
        titlePosition="left-bottom"
        variant="contain"
        titleColor="dark"
      />

      {/* ── INTRO (centered) ── */}
      <section className="bg-white pt-14 pb-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            Wildlife wonders don&apos;t end with continents—they expand into corners you didn&apos;t know existed.
          </p>
          <p className="text-gray-900 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            Let Lens and Latitudes take you beyond borders, to places where its{" "}
            <strong>&ldquo;unseen, unspoiled, and utterly unforgettable&rdquo;</strong>
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
              The wild doesn&apos;t stop here, and neither do we.
            </p>
            <p className="text-gray-900 leading-relaxed" style={{ fontSize: "18px" }}>
              Whether it&apos;s photographing <strong>pumas in Patagonia</strong>, watching{" "}
              <strong>kiwis scurry under the moonlight in New Zealand</strong>, or following{" "}
              <strong>Grizzly bears fishing in Alaska&apos;s rushing rivers for salmon</strong>,
              we&apos;re always ready to go where the call of the wild is loudest.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLOSING (centered) ── */}
      <section className="bg-white pt-6 pb-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-900" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)" }}>
          <p className="italic">If it&apos;s &ldquo;hidden, untamed, and far from the ordinary&rdquo;</p>
          <p>you can bet we&apos;ll get you there, keep your camera ready.</p>
        </div>
      </section>
    </>
  );
}
