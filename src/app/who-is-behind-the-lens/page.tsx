import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Who's Behind the Lens — Salil Nair, Wildlife Photographer",
  description:
    "Meet Salil Nair — award-winning wildlife photographer with 18+ years of global experience. His photographs are deeply personal, raw, and always real.",
  path: "/who-is-behind-the-lens",
  image: "/images/og-salil.jpg",
});

export default function WhoIsBehindTheLensPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image
          src="/images/salil-hero.jpg"
          alt="Salil Nair — wildlife photographer"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">
            Who&apos;s Behind the Lens
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>
            His photographs aren&apos;t just visually stunning — they&apos;re deeply personal. Sometimes raw, always real, they make you feel like you were the one crouching in the grass, holding your breath, staring through the lens. His work turns even the smallest creature into a legend.
          </p>
          <p>
            And if you&apos;re lucky enough to travel with him, you won&apos;t just learn about animals. You&apos;ll learn about wonder. About silence. About patience. About storytelling. It&apos;s a Conversation. And the lens is the translator with nature as the Backdrop.
          </p>
          <blockquote className="border-l-4 border-[#00bcd4] pl-6 italic text-white text-xl">
            &ldquo;Luck is just what happens when you&apos;ve been sitting in the same spot for 6 hours without blinking.&rdquo;
          </blockquote>
          <p>
            Salil doesn&apos;t believe in &ldquo;point-and-shoot.&rdquo; He believes in &ldquo;wait-and-be-there.&rdquo; He has a sixth sense for wildlife, to anticipate what the animal would do next. Some say animals trust him. While others chase luck, Salil waits.
          </p>
          <p>
            Salil brings a blend of creativity, patience, thoughtfulness and the No Photoshop — No gimmicks philosophy. He sees the extraordinary in the ordinary. The drama in the quiet. The story in the stillness, it&apos;s visual poetry, and infinite stories that make you believe in the wild all over again.
          </p>
          <p>
            He&apos;s mentored hundreds of photographers and travelers, teaching them not just technique, but reverence. His most important rule? <em>&ldquo;Always respect the animal. Even if it&apos;s just a squirrel.&rdquo;</em>
          </p>
          <p className="text-white font-medium text-xl">
            Come with me along with your Curiosity. There&apos;s so much more to frame.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/upcoming-safaris"
            className="inline-flex items-center bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Join a Safari
          </Link>
          <Link
            href="/awards"
            className="inline-flex items-center border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors"
          >
            See Awards
          </Link>
        </div>
      </section>
    </>
  );
}
