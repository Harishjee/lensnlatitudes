import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the Rest of the World — Global Wildlife Photography Tours",
  description:
    "Global wildlife photography expeditions — Pantanal jaguars, Sumatra orangutans, Yellowstone wolves, Svalbard polar bears, Scottish Highlands red deer. Led by Salil Nair.",
  path: "/explore-the-rest-of-the-world",
  image: "/images/og-world.jpg",
});

const destinations = [
  { name: "Pantanal", country: "Brazil", desc: "The Jaguar's Domain — Venture by boat through flooded forests and photograph jaguars stalking caimans in broad daylight. Add giant river otters and hyacinth macaws, and it's a color-rich spectacle." },
  { name: "Sumatra", country: "Indonesia", desc: "Home of the Orangutan — Mist-draped rainforests echo with ancient calls. Capture orangutans swinging through dense canopy and elephants wandering through tropical fog." },
  { name: "Yellowstone National Park", country: "USA", desc: "Fire, Ice, and Fur — Bison in blizzards, wolves in twilight, and steaming geysers painting the landscape. A truly cinematic blend of wildlife and natural drama." },
  { name: "The Scottish Highlands", country: "UK", desc: "Of Myths and Stags — A moody, medieval backdrop for red deer, golden eagles, and elusive wildcats. Nature meets legend in every haunting frame." },
  { name: "Svalbard", country: "Norway", desc: "Kingdom of Ice Bears — Sail through glacial silence as polar bears hunt on sea ice. The Arctic light will leave your memory cards full and your heart fuller." },
];

export default function ExploreRestOfWorldPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/world-hero.jpg" alt="Global wildlife photography" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Explore the Rest<br />of the World
          </h1>
          <p className="text-gray-300 mt-2 text-xl">Untouched. Unexpected. Unrepeatable.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Wildlife wonders don&apos;t end with continents — they expand into corners you didn&apos;t know existed. Let Lens and Latitudes take you beyond borders, to places where it&apos;s &ldquo;unseen, unspoiled, and utterly unforgettable.&rdquo;
          </p>

          <div className="space-y-6">
            {destinations.map((d) => (
              <div key={d.name} className="flex gap-6 p-6 bg-[#111] rounded-xl border border-white/10 hover:border-[#00bcd4]/30 transition-colors">
                <div className="shrink-0 w-1 bg-[#00bcd4] rounded-full" />
                <div>
                  <h2 className="text-white font-bold text-xl mb-1">{d.name}</h2>
                  <p className="text-[#00bcd4] text-xs uppercase tracking-wider mb-3">{d.country}</p>
                  <p className="text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#0d0d0d] rounded-xl border border-white/10">
            <p className="text-gray-400 leading-relaxed mb-2">
              Whether it&apos;s photographing pumas in Patagonia, watching kiwis scurry under the moonlight in New Zealand, or following Grizzly bears fishing in Alaska&apos;s rushing rivers — we&apos;re always ready to go where the call of the wild is loudest.
            </p>
            <p className="text-white italic font-medium">&ldquo;Hidden, untamed, and far from the ordinary — keep your camera ready.&rdquo;</p>
          </div>

          <div className="mt-10">
            <WhatsAppButton message="Hi Salil, I'm interested in an international wildlife photography expedition." label="Plan Your Expedition" />
          </div>
        </div>
      </section>
    </>
  );
}
