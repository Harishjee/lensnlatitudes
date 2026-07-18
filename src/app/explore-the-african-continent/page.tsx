import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the African Continent — African Wildlife Safari Tours",
  description:
    "African wildlife photography safaris — Masai Mara, Serengeti, Okavango, Etosha, South Luangwa. Expert led by Salil Nair. Witness the Great Migration & Big Five.",
  path: "/explore-the-african-continent",
  image: "/images/og-africa.jpg",
});

const destinations = [
  { name: "Masai Mara", country: "Kenya", desc: "The Greatest Show on Earth — Home to the Great Migration and golden hour lion hunts, the Mara offers adrenaline-packed storytelling at every turn. It's chaos, beauty, and drama in motion." },
  { name: "Etosha National Park", country: "Namibia", desc: "The Salt-Pan Silence — White expanses and minimalist compositions. Etosha gives you ghostly elephants, stark light, and surreal frames." },
  { name: "Okavango Delta", country: "Botswana", desc: "Where Water Paints the Wild — A labyrinth of life, captured best from mokoros or helicopters. Think elephants wading through lilies, leopards lounging on trees, and mirrored reflections everywhere." },
  { name: "South Luangwa", country: "Zambia", desc: "Africa's Best-Kept Secret — The birthplace of walking safaris, this emerald-toned park offers thrilling ground-level encounters and stunning leopard sightings." },
  { name: "Serengeti National Park", country: "Tanzania", desc: "Eternal Savannah — Endlessly cinematic. Lions on kopjes, cheetahs scanning the golden plains, and thunderous wildebeest herds — a photographer's paradise of movement and stillness." },
];

export default function ExploreAfricanContinentPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/africa-hero.jpg" alt="African wildlife — lions in savannah" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Explore the<br />African Continent
          </h1>
          <p className="text-gray-300 mt-2 text-xl">Where Earth Roars. Where Light Dances. Where the Wild is Eternal.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Africa is not just a destination — it&apos;s the origin of awe. Every horizon burns with possibility, and every safari here is an orchestra of motion and instinct. With Salil Nair&apos;s expert eye guiding your lens, witness the grand theatre of nature like never before.
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
            <p className="text-gray-400 leading-relaxed mb-4">
              Africa&apos;s wild is endless — and so are the possibilities. From trekking through the lush rainforests of Uganda to meet the mighty silverback gorillas, to gliding along the waterways of Okavango, or exploring the remote deserts of Namibia.
            </p>
            <p className="text-white italic font-medium">&ldquo;Beyond the crowds, Beyond the guidebooks, Beyond belief&rdquo;</p>
          </div>

          <div className="mt-10">
            <WhatsAppButton message="Hi Salil, I'm interested in an African wildlife safari. Please share details." label="Plan Your Africa Safari" />
          </div>
        </div>
      </section>
    </>
  );
}
