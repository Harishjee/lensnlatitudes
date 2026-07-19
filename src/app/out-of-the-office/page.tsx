import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import SignatureGallery from "@/components/ui/SignatureGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Out of the Office — Corporate Wildlife Safari Retreats",
  description:
    "Wildlife photography corporate retreats for teams. Swap Zoom calls for jeep rides. Team building, incentive trips, and offsites in India's most spectacular jungles.",
  path: "/out-of-the-office",
  image: "/images/ooo-hero-sunset-elephants-masai-mara.jpg",
});

const workshopGallery = [
  { src: "/images/ooo-grassland-dawn.jpg",       alt: "Grassland at dawn — Out of Office workshop" },
  { src: "/images/ooo-sunrise-golden.jpg",        alt: "Golden sunrise — Out of Office workshop" },
  { src: "/images/ooo-golden-sunset-water.jpg",   alt: "Golden sunset reflection — Out of Office workshop" },
  { src: "/images/ooo-sunset-reflection-tree.jpg",alt: "Sunset tree reflection — Out of Office workshop" },
  { src: "/images/ooo-hot-air-balloon-sunrise.jpg",alt: "Hot air balloon at sunrise — Out of Office workshop" },
  { src: "/images/ooo-jeep-safari-landscape.jpg", alt: "Jeep safari landscape — Out of Office workshop" },
  { src: "/images/ooo-purple-dusk-sky.jpg",       alt: "Purple dusk sky — Out of Office workshop" },
  { src: "/images/ooo-landscape-wide.jpg",        alt: "Wide landscape — Out of Office workshop" },
];

export default function OutOfTheOfficePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════ */}
      <PageHero
        image="/images/ooo-hero-sunset-elephants-masai-mara.jpg"
        alt="Out of the Office — corporate wildlife safari retreat"
        title="Out of the Office"
        titlePosition="right-center"
        imagePosition="bottom"
      />

      {/* ══════════════════════════════════════
          SECTION 2 — White bg · Text LEFT · Image RIGHT
          Heading "At Lens and Latitudes" + paragraphs
          Right: cheetah image with taglines overlaid + caption below
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-14">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-[4.2fr_5.8fr] gap-12 lg:gap-16 items-start">
          {/* Left — heading + text */}
          <div>
            <h2
              className="font-display font-normal text-gray-900 mb-8 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              At Lens and Latitudes
            </h2>
            <div className="space-y-5 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
              <p>
                we specialize in getting teams out of the inbox and into
                the wild—because let&apos;s be honest, no one has ever felt
                truly inspired between back-to-back Zoom calls and
                reheated coffee. Let&apos;s face it: your team is over-caffeinated,
                under-inspired, and probably using one screen to zone out
                while pretending to pay attention to another.
              </p>
              <p>
                That&apos;s where we come in. Our wildlife photography tours
                are the kind of refresh button that no tech can offer.
                Think of it as Ctrl+Alt+Delete, but with elephants on
                the grass and a breath of fresh air.
              </p>
              <p>
                What your team needs is the thrill of spotting a tiger
                mid-yawn or watching elephants have a better team
                meeting than most humans ever will.
              </p>
            </div>
          </div>

          {/* Right — cheetah image with text overlay + caption */}
          <div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/ooo-safari-jeep-team.jpg"
                alt="Cheetah in grassland — Out of the Office by Salil Nair"
                width={1600}
                height={1000}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Text overlay — taglines (slate/blue, matching cloud bg) */}
              <div className="absolute inset-0 flex flex-col justify-start p-8 sm:p-12">
                <div className="space-y-3 max-w-[85%]">
                  {[
                    "Less Corporate, More Curious—A Team Day They'll Talk About.",
                    "Because Grown-Ups Deserve Wild Adventures Too.",
                    "A Wild Day Out—No Spreadsheets, Just Stories.",
                    "Forget Deadlines. Follow Footprints.",
                  ].map((line) => (
                    <p
                      key={line}
                      className="text-white font-sans font-medium leading-snug"
                      style={{ fontSize: "16px", textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* Caption below image */}
            <p className="mt-5 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
              Out here, there&apos;s no Wi-Fi—but we promise you&apos;ll find a better
              connection. Teams slow down, breathe deeper, and see the world—and
              each other—through a different lens (literally). While we can&apos;t promise
              enlightenment, we <em>can</em> promise fewer emails, more eye contact
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Dark · "Out of Office Workshops" heading + Gallery
      ══════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-14 px-4 sm:px-6">
        <h2
          className="font-display text-white font-normal text-center mb-10"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Out of Office Workshops
        </h2>
        <div className="max-w-6xl mx-auto">
          <SignatureGallery images={workshopGallery} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — White bg · Image LEFT · Text RIGHT
          Safari jeep image + creative ideas text
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-14">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Left — DSLR on jeep dashboard */}
          <div className="relative">
            <Image
              src="/images/ooo-dslr-on-jeep-dashboard.jpg"
              alt="DSLR camera on jeep dashboard — Out of the Office by Salil Nair"
              width={1200}
              height={900}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Right — text */}
          <div className="space-y-6 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
            <p>
              It&apos;s where creative ideas sneak up on you, usually right after a leopard
              does. From quiet moments in a jeep to collaborative laughter under the
              stars, we help teams swap stress for presence and burnout for big-picture
              thinking.
            </p>
            <p>
              It&apos;s in these wild moments that ideas flow freely, egos dissolve, and
              collaboration takes root. And the results? Sharper minds, stronger teams,
              and a renewed sense of purpose that carries well beyond the trip.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — White bg · Text LEFT (centered) · Image RIGHT
          Corporate tailoring paragraph + giraffe image
      ══════════════════════════════════════ */}
      <section className="bg-white pb-16 px-4 sm:px-8 lg:px-14">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left — centered text */}
          <div
            className="space-y-6 text-gray-800 leading-relaxed text-center"
            style={{ fontSize: "20px" }}
          >
            <p>
              We also tailor these experiences to your corporate needs—whether it&apos;s a
              high-impact incentive trip, a mid-year offsite, or a reward for top
              performers. We can seamlessly arrange meetings, presentations, team-building
              adventures, or a corporate retreat or award ceremonies in serene natural
              settings that energize rather than drain.
            </p>
            <p>
              Think strategy session with a sunrise, KPIs discussed while giraffes stroll
              by, and awards handed out under a sky full of stars
            </p>
          </div>

          {/* Right — sunset elephants image */}
          <div className="relative">
            <Image
              src="/images/ooo-sunset-elephants-savanna.jpg"
              alt="Sunset elephants in savanna — Out of the Office by Salil Nair"
              width={1200}
              height={800}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — White bg · Full-width centered closing line
      ══════════════════════════════════════ */}
      <section className="bg-white pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
          <p>
            Because when the mind rests, it resets. When it resets, it performs. And when it performs—so does your business. Let&apos;s turn your next
            corporate retreat into something wildly effective.
          </p>
        </div>
      </section>
    </>
  );
}
