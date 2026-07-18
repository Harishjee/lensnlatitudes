import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Abstracts Unleashed — Abstract Wildlife Photography Tours",
  description:
    "A creative rebellion in wildlife photography. Chase abstraction, emotion, and movement with Salil Nair. Photos that distill wildlife into art.",
  path: "/abstracts-unleashed",
  image: "/images/abstract-wildlife-jungle-light-shadow.jpg",
});

const gallery = [
  { src: "/images/abstract-elephant-morning-crossing.jpg", alt: "Abstract elephant morning crossing wildlife photography" },
  { src: "/images/abstract-wildlife-blurred-motion.jpg", alt: "Abstract wildlife blurred motion photography" },
  { src: "/images/abstract-deer-silhouette-mist.jpg", alt: "Abstract deer silhouette in mist" },
  { src: "/images/abstract-tadoba-wildlife-photography.jpg", alt: "Abstract Tadoba wildlife photography" },
  { src: "/images/abstract-deer-antlers-golden-fog.jpg", alt: "Abstract deer antlers golden fog" },
  { src: "/images/abstract-waterhole-reflection-ripples.jpg", alt: "Abstract waterhole reflection ripples" },
  { src: "/images/abstract-leopard-blur-grass.jpg", alt: "Abstract leopard blur through grass" },
  { src: "/images/abstract-bird-motion-blur.jpg", alt: "Abstract bird motion blur photography" },
];

export default function AbstractsUnleashedPage() {
  return (
    <>
      {/* ── HERO SECTION — title right, image full bg ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/abstract-wildlife-jungle-light-shadow.jpg"
          alt="Abstract wildlife photography — Abstracts Unleashed"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text left */}
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                After years of capturing award-winning wildlife moments — the kind that make judges weep and Instagram swoon.
              </p>
              <p>
                I&apos;ve taken a sharp, creative left turn. These days, I&apos;m less about the checklist shots and more about the ones that stir something deeper.
              </p>
              <p>
                I&apos;m chasing abstraction, emotion, movement — photos that don&apos;t just document wildlife but distill it. The kind where a blur says more than sharp focus ever could.
              </p>
            </div>
            {/* Title right */}
            <div className="lg:text-right">
              <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
                Abstracts<br />Unleashed
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY + FOREST QUOTE SECTION ──────────────── */}
      <section className="bg-[#0a0a0a] py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-400 leading-relaxed">
          <p>
            This isn&apos;t your average safari with twenty tripods lined up at sunrise waiting for the same lion yawn. This is for the brave, the curious, the creatively restless. For those who want to reframe, rework, and redefine their visual voice — and are okay with clicking 100 frames just to fall in love with one.
          </p>
          <p>
            We&apos;ll explore wild places — and even wilder ideas. Some shots will fail spectacularly. Some will make you laugh. Some might just be your most powerful work yet.
          </p>
        </div>
      </section>

      {/* ── FOREST QUOTE BANNER ──────────────────────── */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <Image
          src="/images/abstract-forest-light-photography.jpg"
          alt="Abstract forest light photography — creative wildlife"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="font-display text-white text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug mb-6">
              If you&apos;re willing to turn prose into poetry and claim it your own.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              If you&apos;re ready to toss the rulebook, embrace beautiful mistakes, and create photography that starts conversations — not just collecting likes — then let&apos;s make some wild, weird, wonderful art together.
            </p>
            <p className="text-white font-medium">This isn&apos;t just a tour.</p>
            <p className="text-white font-medium mb-6">It&apos;s a creative rebellion. And there&apos;s a spot for you.</p>
            <WhatsAppButton message="Hi Salil, I'm interested in Abstracts Unleashed photography tour." label="Join the Rebellion" />
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────── */}
      <section className="bg-[#050505] py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-white text-2xl sm:text-3xl font-normal text-center mb-8">
            Where the Wild Turns Abstract
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {gallery.map((img, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden bg-[#111]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
