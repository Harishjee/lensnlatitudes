import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Awards — Award-Winning Wildlife Photography",
  description:
    "Salil Nair's award-winning wildlife photography — Nature in Focus 2019, FIP Gold 2022, Canon & Sony All India Live competitions, and 6 Gold Medals from Wildlife Association of India.",
  path: "/awards",
  image: "/images/og-awards.jpg",
});

const awards = [
  { title: "Nature in Focus", detail: "Winner 2019", type: "National" },
  { title: "Canon All India Live Competition", detail: "Winner 2019", type: "National" },
  { title: "Sony All India Live Competition", detail: "Winner 2025", type: "National" },
  { title: "FIP Gold for Nature", detail: "2022", type: "International" },
  { title: "FIP Bronze for Nature", detail: "2023", type: "International" },
  { title: "Wildlife Association of India", detail: "6 Gold Medals", type: "National" },
];

const awardImages = [
  { src: "/images/award-sibling-awaited.jpg", title: "Sibling Awaited" },
  { src: "/images/award-alice-wonderland.jpg", title: "Alice in Wonderland" },
  { src: "/images/award-in-heat-on-snow.jpg", title: "In Heat On Snow" },
  { src: "/images/award-multiverse.jpg", title: "Multiverse" },
  { src: "/images/award-angels-wind.jpg", title: "Angels In The Wind" },
  { src: "/images/award-eyeball.jpg", title: "Eyeball to Eyeball" },
];

export default function AwardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image
          src="/images/awards-hero.jpg"
          alt="Award-winning tiger photograph by Salil Nair"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">Awards</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-white font-bold text-3xl sm:text-4xl mb-6 leading-tight">
                Award-Winning Stories<br />Through the Lens
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Photography for me isn&apos;t just about sharp focus — it&apos;s about sharp storytelling. Over the years, my work has been honored by some of the most prestigious platforms in the industry.
                </p>
                <p>
                  From earning multiple gold medals at national and international levels to having my images celebrated for their emotion, composition, and depth — these recognitions are not just awards, but affirmations of a philosophy: that a powerful photograph tells a story you can <em>feel</em>, not just see.
                </p>
                <p>
                  Whether it&apos;s the quiet tension in a predator&apos;s stare or the playful chaos of a monkey troop, every frame I shoot is meant to transport, not just impress.
                </p>
              </div>

              {/* Award list */}
              <div className="mt-8 space-y-3">
                {awards.map((a) => (
                  <div key={a.title} className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-white/10">
                    <span className="text-2xl">🏅</span>
                    <div>
                      <p className="text-white font-medium text-sm">{a.title}</p>
                      <p className="text-[#00bcd4] text-xs">{a.detail} · {a.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/awards-medals.jpg"
                  alt="Salil Nair's award medals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award-winning images gallery */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-bold text-2xl sm:text-3xl mb-10 text-center">
            Latest Award Winning Images
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {awardImages.map((img) => (
              <div key={img.title} className="group relative aspect-square rounded-lg overflow-hidden bg-[#111]">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 leading-relaxed mb-4">
            I don&apos;t chase awards — I chase moments that speak, stir, and sometimes even ache.
          </p>
          <p className="text-gray-400 leading-relaxed">
            In the end, I don&apos;t just take photos. I build windows into the wild — each one whispering a tale worth remembering.
          </p>
        </div>
      </section>
    </>
  );
}
