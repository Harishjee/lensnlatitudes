import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SignatureGallery from "@/components/ui/SignatureGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Abstracts Unleashed, Abstract Wildlife Photography Tours",
  description:
    "A creative rebellion in wildlife photography with Salil Nair. Chase abstraction, emotion, and movement, photos that distill wildlife into art, where a blur says more than sharp focus ever could.",
  path: "/abstracts-unleashed",
  image: "/images/abstracts-hero-green-glow-plants.jpg",
});

const gallery = [
  { src: "/images/abstracts-hero-green-glow-plants.jpg", alt: "Abstract green glowing water plants, wildlife abstract photography by Salil Nair" },
  { src: "/images/abstract-animal-silhouette-white-mist.jpg", alt: "Abstract animal silhouette in white light, wildlife abstract photography" },
  { src: "/images/abstract-ostrich-backlit-dark-portrait.jpg", alt: "Backlit ostrich neck silhouette, abstract wildlife photography" },
  { src: "/images/abstract-forest-motion-blur-green.jpg", alt: "Green forest intentional motion blur, abstract nature photography" },
  { src: "/images/abstract-forest-motion-blur-blue.jpg", alt: "Blue forest intentional motion blur, abstract nature photography" },
  { src: "/images/abstract-elephant-skin-texture-bw.jpg", alt: "Elephant skin texture in black and white, abstract wildlife detail" },
  { src: "/images/abstract-forest-motion-blur-spring.jpg", alt: "Spring forest motion blur, abstract nature photography" },
  { src: "/images/abstract-lion-paw-claws-close-up.jpg", alt: "Lion paw and claws close-up, abstract wildlife detail photography" },
];

export default function AbstractsUnleashedPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          SECTION 1, HERO (green glow abstract)
      ══════════════════════════════════════ */}
      <PageHero
        image="/images/abstracts-hero-green-glow-plants.jpg"
        alt="Abstracts Unleashed, abstract wildlife photography by Salil Nair"
        title="Abstracts Unleashed"
        titlePosition="right-center"
      />

      {/* ══════════════════════════════════════
          SECTION 2, 3 COLUMNS
          Tall image LEFT · centered text · tall image RIGHT
          Side images stretch to match the text height.
      ══════════════════════════════════════ */}
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Left image */}
          <div className="relative min-h-[340px] lg:min-h-0">
            <Image
              src="/images/abstract-ostrich-backlit-dark-portrait.jpg"
              alt="Backlit ostrich neck silhouette, abstract wildlife photography by Salil Nair"
              title="Backlit ostrich neck silhouette, abstract wildlife photography by Salil Nair"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>

          {/* Center text */}
          <div className="flex flex-col justify-center text-center space-y-6 text-white/90 leading-relaxed" style={{ fontSize: "19px" }}>
            <p>
              After years of capturing award-winning wildlife moments, the kind that make judges weep
              and Instagram swoon.
            </p>
            <p>
              I&apos;ve taken a sharp, creative left turn. These days, I&apos;m less about the
              checklist shots and more about the ones that stir something deeper.
            </p>
            <p>
              I&apos;m chasing abstraction, emotion, movement, photos that don&apos;t just document
              wildlife but <em>distill</em> it. The kind where a blur says more than sharp focus ever could.
            </p>
            <p>
              This isn&apos;t your average safari with twenty tripods lined up at sunrise waiting for
              the same lion yawn. This is for the brave, the curious, the creatively restless.
            </p>
            <p>
              For those who want to <em>reframe</em>, <em>rework</em>, and <em>redefine</em> their
              visual voice, and are okay with clicking 100 frames just to fall in love with one.
              Because that one image?
            </p>
          </div>

          {/* Right image */}
          <div className="relative min-h-[340px] lg:min-h-0">
            <Image
              src="/images/abstract-animal-silhouette-white-mist.jpg"
              alt="Abstract animal silhouette in white light, abstract wildlife photography by Salil Nair"
              title="Abstract animal silhouette in white light, abstract wildlife photography by Salil Nair"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
        </div>

        {/* Full-width centered paragraph below */}
        <div className="max-w-5xl mx-auto text-center mt-12 text-white/90 leading-relaxed" style={{ fontSize: "19px" }}>
          <p>
            We&apos;ll explore wild places, and even wilder ideas. Some shots will fail spectacularly.
            Some will make you laugh. Some might just be your most powerful work yet. This is a
            playground for the creatively brave, and yes, sometimes we chase light like it&apos;s our
            jeep which is always the last out of the jungle.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3, MOTION BLUR BAND (white bg)
          Green blur + headline LEFT · blue blur RIGHT (taller)
      ══════════════════════════════════════ */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-6 items-start">
          {/* Left, green blur + headline */}
          <div>
            <Image
              src="/images/abstract-forest-motion-blur-green.jpg"
              alt="Green forest intentional camera movement blur, abstract nature photography by Salil Nair"
              title="Green forest intentional camera movement blur, abstract nature photography by Salil Nair"
              width={1400}
              height={875}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <h2
              className="font-display text-gray-900 font-normal leading-tight mt-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.4rem)" }}
            >
              If you&apos;re willing to turn prose into poetry and claim it your own.
            </h2>
          </div>

          {/* Right, blue blur (portrait, taller) */}
          <div>
            <Image
              src="/images/abstract-forest-motion-blur-blue.jpg"
              alt="Blue forest intentional camera movement blur, abstract nature photography by Salil Nair"
              title="Blue forest intentional camera movement blur, abstract nature photography by Salil Nair"
              width={800}
              height={1200}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Centered closing text */}
        <div className="max-w-4xl mx-auto text-center mt-14 space-y-6 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
          <p>
            If you&apos;re ready to toss the rulebook, embrace beautiful mistakes, and create
            photography that starts conversations - not just collecting likes - then let&apos;s make
            some wild, weird, wonderful art together.
          </p>
          <p className="font-display text-gray-900" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
            This isn&apos;t just a tour.
          </p>
          <p className="font-display text-gray-900" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
            It&apos;s a creative rebellion. And there&apos;s a spot for you.
          </p>
          <div className="pt-4">
            <Link
              href="/track-me"
              className="inline-block bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Track Me
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4, GALLERY (autoplay, no crop)
      ══════════════════════════════════════ */}
      <section className="bg-[#050505] py-14 px-4 sm:px-6 lg:px-10">
        <h2
          className="font-display text-white font-normal text-center mb-10"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Where the Wild Turns Abstract
        </h2>
        <div className="max-w-6xl mx-auto">
          <SignatureGallery images={gallery} />
        </div>
      </section>
    </>
  );
}
