import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore Latitudes — Wildlife Safari Photography Journeys",
  description:
    "Curated wildlife photography safaris to India, Africa & worldwide. Under the mentorship of Salil Nair — 18+ years of global experience, photography-centric itineraries.",
  path: "/explore-latitudes",
  image: "/images/og-explore-latitudes.jpg",
});

const bodyText = { fontSize: "20px" };

export default function ExploreLatitudesPage() {
  return (
    <>
      {/* ── HERO / TITLE (unchanged) ── */}
      <PageHero
        image="/images/explore-latitudes-masai-mara-wildlife.jpg"
        alt="Explore Latitudes — wildlife safari photography journeys worldwide"
        title="Explore Latitudes"
        titlePosition="left-bottom"
      />

      {/* ══════════════════════════════════════
          SECTION A — magazine grid (white bg)
          Maasai (tall, left) · intro + cubs (middle) · elephants + tigers text (right)
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          {/* Left — Maasai warrior, spans both rows */}
          <div className="lg:row-span-2">
            <Image
              src="/images/explore-maasai-warrior-jumping-kenya.jpg"
              alt="Maasai warrior jumping in traditional dress, Kenya — Lens and Latitudes safari"
              width={900}
              height={1350}
              className="w-full h-auto block"
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Middle top — intro paragraph */}
          <div className="flex items-start">
            <p className="text-gray-800 leading-relaxed" style={bodyText}>
              At <strong>Lens and Latitudes</strong>, we don&apos;t just plan wildlife safaris—we
              curate immersive, purpose-driven photography journeys to some of the most spectacular
              jungles in India and around the world.
            </p>
          </div>

          {/* Right top — elephants image */}
          <div>
            <Image
              src="/images/explore-elephants-playing-amboseli.jpg"
              alt="Two elephants playing in green savanna with mountain backdrop — Amboseli safari"
              width={1000}
              height={667}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Middle bottom — lion cubs image */}
          <div>
            <Image
              src="/images/explore-lion-cubs-walking-masai-mara.jpg"
              alt="Two lion cubs walking together in Masai Mara — Lens and Latitudes safari"
              width={1000}
              height={667}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Right bottom — tigers text */}
          <div className="flex items-center">
            <p className="text-gray-800 leading-relaxed" style={bodyText}>
              Whether it&apos;s tracking tigers in Jim Corbett, leopards in Jawai, a pride of lions in
              the African bush or cheetahs across the golden plains of Kenya, each safari is designed
              with care and intent.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION B — big lion with OVERLAPPING dark text boxes (white bg)
          Lion is the base layer (left); dark boxes overlap its right edge.
      ══════════════════════════════════════ */}
      <section className="bg-white py-12 lg:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative">
          {/* Lion — base layer, vertically centered on desktop */}
          <div className="w-full lg:w-[58%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-0">
            <Image
              src="/images/explore-lion-portrait-bw-rain.jpg"
              alt="Black and white portrait of a male lion in the rain — Salil Nair wildlife photography"
              width={1200}
              height={800}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          {/* Right column — flows normally (defines height), overlaps the lion */}
          <div className="mt-8 lg:mt-0 lg:ml-[46%] lg:w-[54%] relative z-10 space-y-8 lg:space-y-10">
            {/* Dark box 1 — overlaps lion top-right */}
            <div className="bg-[#0d0d0d] px-8 py-10 text-center space-y-5 text-white/90 leading-relaxed" style={bodyText}>
              <p>
                Our itineraries are crafted to ensure <strong className="text-white">maximum time in
                the wild</strong>, avoiding tourist-heavy hours and placing you in the best spots
                during the golden hours of light.
              </p>
              <p>
                Travel logistics are handled seamlessly, so your time and energy stay focused on the
                field—not on figuring out transit or schedules.
              </p>
            </div>

            {/* Buffalo square — sits in the clear area, right of the lion */}
            <div className="flex justify-center">
              <Image
                src="/images/explore-buffalo-grass-bw-placeholder.jpg"
                alt="Cape buffalo standing in tall grass, black and white — Salil Nair wildlife photography"
                width={600}
                height={600}
                className="w-1/2 lg:w-[52%] h-auto block grayscale"
                sizes="(max-width: 1024px) 50vw, 28vw"
              />
            </div>

            {/* Dark box 2 — overlaps lion bottom-right */}
            <div className="bg-[#0d0d0d] px-8 py-10 text-center space-y-5 text-white/90 leading-relaxed" style={bodyText}>
              <p>
                Every journey is <strong className="text-white">photography-centric</strong>, offering
                not just sightings, but the opportunity to learn how to turn those moments into
                impactful images.
              </p>
              <p>
                Under the mentorship of <strong className="text-white">Salil Nair</strong>, an
                award-winning wildlife photographer with over 18 years of global experience, guests
                receive personal guidance on framing, creative storytelling, and mastering natural light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION C — tiger reflection + closing text (white bg)
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — tiger reflection */}
          <div>
            <Image
              src="/images/salil-nair-tiger-reflection-wildlife-photography.jpg"
              alt="Tiger walking beside water with reflection, lush jungle — Salil Nair wildlife photography"
              width={1200}
              height={800}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — closing text */}
          <div className="space-y-6 text-gray-800 leading-relaxed" style={bodyText}>
            <p>
              Whether you&apos;re a beginner or an enthusiast, you&apos;ll return not just with great
              photos, but as a more thoughtful photographer.
            </p>
            <p>
              Safety, comfort, and an eye for rare moments define our safaris. With Lens and Latitudes,
              you&apos;re not just seeing the wild—you&apos;re learning to{" "}
              <strong className="text-gray-900">see through it, with intent and creative imagination</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
