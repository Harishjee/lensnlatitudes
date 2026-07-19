import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Who's Behind the Lens — Salil Nair, Wildlife Photographer",
  description:
    "Meet Salil Nair — founder of Lens and Latitudes. The man who crafts stories with shadows, poetry with paws, and portraits that seem to breathe. Framing Nature, One Latitude at a Time.",
  path: "/who-is-behind-the-lens",
  image: "/images/salil-nair-rhino-bw-wildlife-photography.jpg",
});

const bodyText = { fontSize: "21px" };

export default function WhoIsBehindTheLensPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          SECTION 1 — TITLE (white bg, centered)
      ══════════════════════════════════════ */}
      <section className="bg-white pt-28 pb-10 px-6 text-center">
        <h1
          className="font-display text-gray-900 font-normal"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Who&apos;s Behind the Lens
        </h1>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — SALIL NAIR + RHINO
          White bg — name & intro LEFT, rhino image RIGHT
      ══════════════════════════════════════ */}
      <section className="bg-white pb-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left column — name + intro text */}
          <div className="px-8 sm:px-12 lg:px-20 order-2 lg:order-1">
            <h2
              className="font-display text-gray-900 font-normal mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.08em" }}
            >
              SALIL NAIR
            </h2>
            <p className="text-gray-800 leading-relaxed mb-6" style={bodyText}>
              The Man Behind the Lens - the man who crafts stories with shadows,
              poetry with paws, and portraits that seem to breathe.
            </p>
            <p className="text-gray-800 leading-relaxed" style={bodyText}>
              <em>Salil Nair</em> - the founder of <em>Lens and Latitudes</em>, a
              company that lives by the motto:{" "}
              <em>Framing Nature, One Latitude at a Time.</em>
            </p>
          </div>

          {/* Right column — rhino B&W image (full natural size) */}
          <div className="order-1 lg:order-2">
            <Image
              src="/images/salil-nair-rhino-bw-wildlife-photography.jpg"
              alt="Salil Nair wildlife photography — black and white rhino portrait"
              width={1000}
              height={800}
              className="w-full h-auto block"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — FULL-WIDTH BEACH IMAGE
      ══════════════════════════════════════ */}
      <section className="bg-white py-4 px-4 sm:px-8 lg:px-12">
        <Image
          src="/images/home-wildlife-photography-intro.jpg"
          alt="Salil Nair long-exposure seascape — Goa beach landscape photography"
          width={1920}
          height={1200}
          className="w-full h-auto block"
          sizes="100vw"
        />
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — 3 PARAGRAPHS (light bg)
      ══════════════════════════════════════ */}
      <section className="bg-white py-14 px-8 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-7 text-gray-800 leading-relaxed" style={bodyText}>
          <p>
            His photographs aren&apos;t just visually stunning — they&apos;re deeply personal.
            Sometimes raw, always real, they make you feel like you were the one crouching
            in the grass, holding your breath, staring through the lens. His work turns even
            the smallest creature into a legend.
          </p>
          <p>
            And if you&apos;re lucky enough to travel with him, you won&apos;t just learn about
            animals. You&apos;ll learn about wonder. About silence. About patience. About
            storytelling. It&apos;s a Conversation. And the lens is the translator with nature
            as the Backdrop.
          </p>
          <p>
            Salil doesn&apos;t believe in &ldquo;point-and-shoot.&rdquo; He believes in
            &ldquo;wait-and-be-there.&rdquo; He has a sixth sense for wildlife, to anticipate
            what the animal would do next. Some say animals trust him. While others chase luck,
            Salil says, &ldquo;Luck is just what happens when you&apos;ve been sitting in the
            same spot for 6 hours without blinking.&rdquo;
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — TEXT LEFT + TIGER IMAGE RIGHT (black bg)
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — text */}
          <div className="space-y-6 text-white/90 leading-relaxed order-2 lg:order-1" style={{ fontSize: "20px" }}>
            <p>
              Salil brings a blend of creativity, patience, thoughtfulness and the No Photoshop -
              No gimmicks. He sees the extraordinary in the ordinary. The drama in the quiet.
              The story in the stillness, it&apos;s visual poetry, and infinite stories that make
              you believe in the wild all over again.
            </p>
            <p>Just real moments, framed one latitude at a time.</p>
            <p>
              He&apos;s mentored hundreds of photographers and travelers, teaching them not just
              technique, but reverence. His most important rule? &quot;Always respect the animal.
              Even if it&apos;s just a squirrel.&quot;
            </p>
            <p>
              And if you&apos;re lucky enough to travel with him, you won&apos;t just learn about
              animals. You&apos;ll learn. About silence. About patience. About storytelling.
              It&apos;s a Conversation. And the lens is the translator with nature as the Backdrop.
            </p>
            <p>Come with me along with your Curiosity. There&apos;s so much more to frame.</p>
          </div>

          {/* Right — tiger reflection image (full natural size) */}
          <div className="order-1 lg:order-2">
            <Image
              src="/images/salil-nair-tiger-reflection-wildlife-photography.jpg"
              alt="Salil Nair wildlife photography — tiger walking with reflection in water"
              width={1200}
              height={800}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/upcoming-safaris"
            className="inline-block bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-8 py-3 rounded-full transition-colors text-center"
          >
            Join a Safari
          </Link>
          <Link
            href="/awards"
            className="inline-block border border-white/50 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full transition-colors text-center"
          >
            See Awards
          </Link>
        </div>
      </section>

      {/* JSON-LD Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Salil Nair",
            jobTitle: "Wildlife Photographer & Safari Guide",
            worksFor: { "@type": "Organization", name: "Lens N Latitudes" },
            description:
              "Founder of Lens and Latitudes — award-winning wildlife photographer crafting stories with shadows, poetry with paws.",
          }),
        }}
      />
    </>
  );
}
