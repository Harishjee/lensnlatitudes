import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Abstracts Unleashed — Abstract Wildlife Photography Tours",
  description:
    "A creative rebellion in wildlife photography. Chase abstraction, emotion, and movement. Photos that don't just document wildlife but distill it into art.",
  path: "/abstracts-unleashed",
  image: "/images/og-abstracts.jpg",
});

const galleryImages = [
  { src: "/images/abstract-jungle-light-shadow.jpg", alt: "Jungle light and shadow abstract" },
  { src: "/images/abstract-deer-silhouette-mist.jpg", alt: "Deer silhouette in mist" },
  { src: "/images/abstract-elephant-crossing.jpg", alt: "Elephant morning crossing abstract" },
  { src: "/images/abstract-antlers-golden-fog.jpg", alt: "Antlers in golden fog" },
  { src: "/images/abstract-bird-flight-blur.jpg", alt: "Bird in flight motion blur" },
  { src: "/images/abstract-ripples-reflection.jpg", alt: "Waterhole reflection ripples" },
  { src: "/images/abstract-leopard-grass.jpg", alt: "Leopard through grass blur" },
  { src: "/images/abstract-bird-motion.jpg", alt: "Bird motion abstract" },
];

export default function AbstractsUnleashedPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/abstracts-hero.jpg" alt="Abstract wildlife photography" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">Abstracts Unleashed</h1>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>
            After years of capturing award-winning wildlife moments — the kind that make judges weep and Instagram swoon — I&apos;ve taken a sharp, creative left turn. These days, I&apos;m less about the checklist shots and more about the ones that stir something deeper.
          </p>
          <p>
            I&apos;m chasing abstraction, emotion, movement — photos that don&apos;t just document wildlife but distill it. The kind where a blur says more than sharp focus ever could.
          </p>
          <p>
            This isn&apos;t your average safari with twenty tripods lined up at sunrise waiting for the same lion yawn. This is for the brave, the curious, the creatively restless. For those who want to reframe, rework, and redefine their visual voice — and are okay with clicking 100 frames just to fall in love with one.
          </p>
          <p>
            We&apos;ll explore wild places — and even wilder ideas. Some shots will fail spectacularly. Some will make you laugh. Some might just be your most powerful work yet. This is a playground for the creatively brave.
          </p>
          <p className="text-white text-xl font-medium">
            This isn&apos;t just a tour. It&apos;s a creative rebellion. And there&apos;s a spot for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <WhatsAppButton message="Hi Salil, I'm interested in the Abstracts Unleashed photography tour." />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-bold text-2xl sm:text-3xl mb-8 text-center">Where the Wild Turns Abstract</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-lg overflow-hidden bg-[#111]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
