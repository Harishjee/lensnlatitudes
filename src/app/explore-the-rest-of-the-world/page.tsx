import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the Rest of the World — Global Wildlife Photography Expeditions",
  description:
    "Global wildlife photography expeditions — Pantanal jaguars, Yellowstone wolves, Svalbard polar bears, Sumatra orangutans, Scottish Highlands. Led by Salil Nair.",
  path: "/explore-the-rest-of-the-world",
  image: "/images/world-wildlife-photography-hero.jpg",
});

const row1 = [
  {
    name: "Pantanal",
    country: "Brazil",
    desc: "The Jaguar's Domain — Venture by boat through flooded forests and photograph jaguars stalking caimans in broad daylight. Add giant river otters and hyacinth macaws for a colour-rich spectacle.",
    image: "/images/pantanal-jaguar-brazil-wildlife-photography.jpg",
  },
  {
    name: "Yellowstone National Park",
    country: "USA",
    desc: "Fire, Ice, and Fur — Bison in blizzards, wolves in twilight, and steaming geysers painting the landscape. A truly cinematic blend of wildlife and natural drama.",
    image: "/images/yellowstone-bison-usa-wildlife-photography.jpg",
  },
  {
    name: "Svalbard",
    country: "Norway",
    desc: "Kingdom of Ice Bears — Sail through glacial silence as polar bears hunt on sea ice. The Arctic light will leave your memory cards full and your heart fuller.",
    image: "/images/svalbard-polar-bear-norway-arctic.jpg",
  },
];

const row2 = [
  {
    name: "Sumatra",
    country: "Indonesia",
    desc: "Home of the Orangutan — Mist-draped rainforests echo with ancient calls. Capture orangutans swinging through dense canopy and elephants wandering through tropical fog.",
    image: "/images/sumatra-orangutan-indonesia-wildlife.jpg",
  },
  {
    name: "The Scottish Highlands",
    country: "UK",
    desc: "Of Myths and Stags — A moody, medieval backdrop for red deer, golden eagles, and elusive wildcats. Nature meets legend in every haunting frame.",
    image: "/images/scottish-highlands-wildlife-photography.jpg",
  },
];

export default function ExploreRestOfWorldPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
            <PageHero
        image="/images/world-wildlife-photography-hero.jpg"
        alt="Explore the Rest of the World — global wildlife photography expeditions"
        title="Explore the Rest of the World"
        subtitle="Untouched. Unexpected. Unrepeatable."
        titlePosition="left-bottom"
      />

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            Wildlife wonders don&apos;t end with continents — they expand into corners you didn&apos;t know existed. Let Lens and Latitudes take you beyond borders, to places where it&apos;s <span className="text-white">&ldquo;unseen, unspoiled, and utterly unforgettable.&rdquo;</span>
          </p>
        </div>
      </section>

      {/* ── DESTINATIONS ────────────────────────────── */}
      <section className="bg-[#0a0a0a] pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {row1.map((d) => (
              <div key={d.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={d.image}
                    alt={`${d.name} ${d.country} wildlife photography`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-display text-white text-lg font-normal">{d.name}</h2>
                <p className="text-[#00bcd4] text-xs uppercase tracking-wider mb-2">{d.country}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards + text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {row2.map((d) => (
              <div key={d.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={d.image}
                    alt={`${d.name} ${d.country} wildlife photography`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-display text-white text-lg font-normal">{d.name}</h2>
                <p className="text-[#00bcd4] text-xs uppercase tracking-wider mb-2">{d.country}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
            {/* Text block */}
            <div className="flex flex-col justify-center p-6 bg-[#0d0d0d] border border-white/5">
              <p className="font-display text-white text-xl font-normal mb-3">The wild doesn&apos;t stop here, and neither do we.</p>
              <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                <p>Whether it&apos;s photographing <span className="text-white">pumas in Patagonia</span>,</p>
                <p>watching <span className="text-white">kiwis scurry under the moonlight</span> in New Zealand,</p>
                <p>or following <span className="text-white">Grizzly bears fishing in Alaska&apos;s rushing rivers</span> for salmon,</p>
                <p className="mt-2">we&apos;re always ready to go where the call of the wild is loudest.</p>
              </div>
            </div>
          </div>

          {/* Closing quote */}
          <div className="mt-14 text-center space-y-1">
            <p className="font-display text-white text-2xl sm:text-3xl font-normal">
              If it&apos;s &ldquo;hidden, untamed, and far from the ordinary&rdquo;
            </p>
            <p className="text-gray-400">you can bet we&apos;ll get you there, keep your camera ready.</p>
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message="Hi Salil, I'm interested in an international wildlife photography expedition." label="Plan My Expedition" />
          </div>
        </div>
      </section>
    </>
  );
}
