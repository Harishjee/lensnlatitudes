import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import LightboxGallery from "@/components/ui/LightboxGallery";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumb } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Awards, Award-Winning Wildlife Photography by Salil Nair",
  description:
    "Salil Nair's award-winning wildlife photography, Nature in Focus 2019, FIP Gold 2022, FIP Bronze 2023, Canon & Sony All India Live competitions, and Wildlife Association of India Gold Medals.",
  path: "/awards",
  image: "/images/awards-hero-tiger-tadoba-wildlife.jpg",
});

const galleryImages = [
  {
    src: "/images/award-sibling-awaited-elephants-masai-mara.jpg",
    alt: "Sibling Awaited, award-winning elephant photography Masai Mara",
    title: "Sibling Awaited",
    border: false,
  },
  {
    src: "/images/award-in-heat-on-snow-wildlife-photography.jpg",
    alt: "In Heat On Snow, award-winning snow leopard wildlife photography",
    title: "In Heat On Snow",
    border: true, // the original has a black border frame on this one
  },
  {
    src: "/images/award-angels-in-the-wind-bird-photography.jpg",
    alt: "Angels In The Wind, award-winning bird photography golden light",
    title: "Angels In The Wind",
    border: false,
  },
  {
    src: "/images/award-alice-in-wonderland-abstract-wildlife.jpg",
    alt: "Alice in Wonderland, abstract wildlife photography silhouette",
    title: "Alice in Wonderland",
    border: false,
  },
  {
    src: "/images/award-multiverse-abstract-nature-photography.jpg",
    alt: "Multiverse, abstract nature photography green plants",
    title: "Multiverse",
    border: false,
  },
  {
    src: "/images/award-eyeball-to-eyeball-predator-prey.jpg",
    alt: "Eyeball to Eyeball, predator and prey wildlife photography India",
    title: "Eyeball to Eyeball",
    border: false,
  },
];

export default function AwardsPage() {
  return (
    <>
      <PageHero
        image="/images/awards-hero-tiger-tadoba-wildlife.jpg"
        alt="Award-winning tiger resting in water, Tadoba wildlife photography by Salil Nair"
        title="Awards"
        titlePosition="right-center"
        imagePosition="center"
        animate
      />

      {/* ══════════════════════════════════════
          SECTION 2, AWARD-WINNING STORIES
          White/light bg, text LEFT + medals image RIGHT (rounded card)
      ══════════════════════════════════════ */}
      <section className="bg-white py-0">
        <div className="flex flex-col lg:flex-row items-start">

          {/* LEFT, text block */}
          <div className="w-full lg:w-[40%] px-8 sm:px-12 lg:px-16 pt-16 pb-16 lg:py-20">
            <h2
              className="font-display text-black font-normal leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Award-Winning Stories Through the Lens
            </h2>

            <p className="text-gray-800 leading-relaxed mb-6" style={{ fontSize: "20px" }}>
              Photography for me isn&apos;t just about sharp focus, it&apos;s about sharp storytelling.
              Over the years, my work has been honored by some of the most prestigious platforms
              in the industry, including
            </p>

            <ol className="space-y-1 mb-8" style={{ fontSize: "20px" }}>
              {[
                "Nature in Focus (Winner 2019)",
                "The All India Live Competitions by Canon (2019) and Sony (2025).",
                "FIP Gold for Nature 2022",
                "FIP Bronze for Nature 2023",
                "Other 6 Gold Medals from Wildlife Association of India",
              ].map((item, i) => (
                <li key={i} className="text-gray-700 italic flex gap-2">
                  <span className="text-gray-500 shrink-0">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <p className="text-gray-800 leading-relaxed mb-5" style={{ fontSize: "20px" }}>
              From earning multiple gold medals at national and international levels to having
              my images celebrated for their emotion, composition, and depth, these recognitions
              are not just awards, but affirmations of a philosophy: that a powerful photograph
              tells a story you can feel, not just see.
            </p>

            <p className="text-gray-800 leading-relaxed mb-5" style={{ fontSize: "20px" }}>
              Whether it&apos;s the quiet tension in a predator&apos;s stare or the playful chaos of a
              monkey troop, every frame I shoot is meant to transport, not just impress.
            </p>

            <p className="text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
              These aren&apos;t just wildlife shots, they&apos;re wild narratives, captured with patience,
              empathy, and a touch of soul.
            </p>
          </div>

          {/* RIGHT, medals image in rounded card */}
          <div className="w-full lg:w-[60%] lg:pt-16 lg:pr-0 flex items-start">
            <div className="w-full rounded-tl-3xl rounded-bl-3xl overflow-hidden"
                 style={{ background: "#c8dcd8" }}>
              <Image
                src="/images/awards-medals-wpai-fip-nature-in-focus.jpg"
                alt="Salil Nair wildlife photography award medals, WPAI, FIP, Nature in Focus"
                title="Salil Nair wildlife photography award medals, WPAI, FIP, Nature in Focus"
                width={1200}
                height={900}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3, LATEST AWARD WINNING IMAGES
          White bg, centered title, 3×2 image grid
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 px-8 sm:px-12 lg:px-20">
        <h2
          className="font-display text-black font-normal text-center mb-12"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
        >
          Latest Award Winning Images
        </h2>

        <div className="max-w-6xl mx-auto">
          <LightboxGallery
            images={galleryImages}
            gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-8"
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4, CLOSING STATEMENT
          Black bg, text LEFT (centered), bird image RIGHT
      ══════════════════════════════════════ */}
      <section className="bg-black">
        <div className="flex flex-col lg:flex-row items-start">

          {/* LEFT, centered text */}
          <div className="w-full lg:w-[60%] px-8 sm:px-12 lg:px-20 py-20 text-center">
            <p className="text-white leading-relaxed mb-8" style={{ fontSize: "20px" }}>
              At <strong>Lens and Latitudes</strong>, my camera has never just been a tool, it&apos;s
              an extension of how I feel, observe, and connect with the wild. Every photograph I
              make is forged with heart, soul, and an obsession for storytelling that goes far beyond
              capturing &ldquo;a sharp shot.&rdquo;
            </p>

            <p className="text-white leading-relaxed mb-8" style={{ fontSize: "20px" }}>
              I don&apos;t chase awards, I chase moments that speak, stir, and sometimes even ache.
            </p>

            <p className="text-white leading-relaxed mb-8" style={{ fontSize: "20px" }}>
              But along the way, I&apos;ve been humbled to be recognized by Nature in Focus and the
              All India Live Competitions by Canon and Sony, among others.
            </p>

            <p className="text-white leading-relaxed mb-8" style={{ fontSize: "20px" }}>
              Gold medals, both national and international, have found their way to my shelf, but what
              truly matters is when someone pauses at a frame and feels the story in it. A quiet
              stare between predator and prey. A dusty silhouette at dawn.
            </p>

            <p className="text-white leading-relaxed mb-8" style={{ fontSize: "20px" }}>
              The fragile, fleeting magic of a moment that most would miss. My work is about
              crafting these stories with creative techniques, bold composition, and patient
              waiting, sometimes for hours, sometimes for days, until nature reveals something
              extraordinary.
            </p>

            <p className="text-white/70 italic" style={{ fontSize: "19px" }}>
              Because in the end, I don&apos;t just take photos. I build windows into the wild, each
              one whispering a tale worth remembering.
            </p>
          </div>

          {/* RIGHT, bird/crane image */}
          <div className="w-full lg:w-[40%]">
            <Image
              src="/images/award-closing-bird-crane-wildlife-art.jpg"
              alt="Award-winning bird photography, crane in flight, Salil Nair"
              title="Award-winning bird photography, crane in flight, Salil Nair"
              width={800}
              height={1200}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Awards", path: "/awards" },
        ])}
      />
    </>
  );
}
