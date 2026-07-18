import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the African Continent — African Wildlife Safari Photography",
  description:
    "African wildlife photography safaris — Masai Mara, Serengeti, Okavango, Etosha, South Luangwa. Led by Salil Nair. Witness the Great Migration, Big Five & more.",
  path: "/explore-the-african-continent",
  image: "/images/africa-rhino-wildlife-photography-hero.jpg",
});

const destinations = [
  {
    name: "Masai Mara",
    country: "Kenya",
    desc: "The Greatest Show on Earth — Home to the Great Migration and golden hour lion hunts, the Mara offers adrenaline-packed storytelling at every turn. It's chaos, beauty, and drama in motion.",
    image: "/images/masai-mara-lion-safari-kenya.jpg",
  },
  {
    name: "Okavango Delta",
    country: "Botswana",
    desc: "Where Water Paints the Wild — A labyrinth of life, captured best from mokoros or helicopters. Think elephants wading through lilies, leopards lounging on trees, and mirrored reflections everywhere.",
    image: "/images/okavango-delta-botswana-wildlife-safari.jpg",
  },
  {
    name: "Serengeti National Park",
    country: "Tanzania",
    desc: "Eternal Savannah — Endlessly cinematic. Lions on kopjes, cheetahs scanning the golden plains, and thunderous wildebeest herds — a photographer's paradise of movement and stillness.",
    image: "/images/serengeti-tanzania-wildlife-photography.jpg",
  },
  {
    name: "Etosha National Park",
    country: "Namibia",
    desc: "The Salt-Pan Silence — White expanses and minimalist compositions. Etosha gives you ghostly elephants, stark light, and surreal frames.",
    image: "/images/africa-rhino-wildlife-photography-hero.jpg",
  },
  {
    name: "South Luangwa",
    country: "Zambia",
    desc: "Africa's Best-Kept Secret — The birthplace of walking safaris, this emerald-toned park offers thrilling ground-level encounters and stunning leopard sightings.",
    image: "/images/okavango-delta-botswana-wildlife-safari.jpg",
  },
];

export default function ExploreAfricanContinentPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative w-full">
        <Image
          src="/images/africa-rhino-wildlife-photography-hero.jpg"
          alt="African rhino wildlife photography — Explore the African Continent"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />
        
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-14 z-10">
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-normal text-on-image leading-tight">
            Explore the<br />African Continent
          </h1>
          <p className="text-gray-300 mt-2 italic text-on-image">
            Where Earth Roars. Where Light Dances. Where the Wild is Eternal.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-3 text-gray-400 leading-relaxed max-w-3xl">
          <p>Africa is not just a destination — it&apos;s the origin of awe.</p>
          <p>Every horizon burns with possibility, and every safari here is an orchestra of motion and instinct.</p>
          <p>With Salil Nair&apos;s expert eye guiding your lens, witness the grand theatre of nature like never before.</p>
        </div>
      </section>

      {/* ── DESTINATIONS GRID ────────────────────────── */}
      <section className="bg-[#0a0a0a] pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* First row — 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {destinations.slice(0, 3).map((d) => (
              <div key={d.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={d.image}
                    alt={`${d.name} ${d.country} wildlife photography safari`}
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

          {/* Second row — 2 + text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {destinations.slice(3, 5).map((d) => (
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
              <p className="font-display text-white text-xl font-normal mb-3">Africa&apos;s wild is endless — and so are the possibilities.</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                Beyond the famed plains lie adventures few ever see. From trekking through the lush rainforests of <span className="text-white">Uganda</span> to meet the mighty silverback gorillas, to gliding along the waterways of Okavango National park, or exploring the remote deserts of <span className="text-white">Namibia</span>, our safaris are curated to match your wildest visions.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 italic text-lg">&ldquo;Beyond the crowds, Beyond the guidebooks, Beyond belief.&rdquo;</p>
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message="Hi Salil, I'm interested in an African wildlife safari. Please share details." label="Plan My Africa Safari" />
          </div>
        </div>
      </section>
    </>
  );
}
