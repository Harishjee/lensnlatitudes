import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumb } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Own It, Wildlife Photography Fine Art Prints by Salil Nair",
  description:
    "Own a real, unfiltered moment from the wild. Salil Nair's award-winning wildlife photography prints turn any wall into a story, buy one, gift one, hang one.",
  path: "/own-it",
  image: "/images/ooo-sunset-reflection-tree.jpg",
});

type Row = {
  image: string;
  alt: string;
  width: number;
  height: number;
  heading: React.ReactNode;
  text: string;
};

const rows: Row[] = [
  {
    image: "/images/signature-photographer-cave-adventure.jpg",
    alt: "Photographer standing inside a sunlit canyon cave, Salil Nair",
    width: 1620,
    height: 1080,
    heading: <>These photographs don&apos;t just hang, they speak.</>,
    text: "Of tigers that prowl and jungles that breathe, Of quiet moments the wild lets us keep.",
  },
  {
    image: "/images/abstracts-hero-green-glow-plants.jpg",
    alt: "Abstract green glowing water plants, Salil Nair wildlife art",
    width: 1620,
    height: 1080,
    heading: (
      <>
        They don&apos;t just hang, they <em>watch</em>.
      </>
    ),
    text: "With eyes that remember, with stories to tell, They hold the hush between heartbeat and yell.",
  },
  {
    image: "/images/ooo-safari-jeep-lion-team-masai-mara.jpg",
    alt: "Safari jeep with photographers on the green Masai Mara plains, Salil Nair",
    width: 2500,
    height: 1407,
    heading: <>They don&apos;t just hang, they invite.</>,
    text: "To pause, to wonder, to ask, “Where is this?” And maybe even dream of the wilderness.",
  },
  {
    image: "/images/eagle-flight-wildlife-photography-india.jpg",
    alt: "Fish eagle swooping to catch prey over water, Salil Nair",
    width: 1885,
    height: 1060,
    heading: <>They don&apos;t just hang, they protect.</>,
    text: "Because every glance plants a seed of care, A reminder the wild is still out there.",
  },
];

export default function OwnItPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        image="/images/ooo-sunset-reflection-tree.jpg"
        alt="Own It, wildlife photography fine art prints by Salil Nair"
        title="Own It"
        titlePosition="left-bottom"
      />

      {/* ── THE POWER OF THE PHOTOGRAPH (text left + lion right) ── */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Text */}
          <div className="flex items-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
            <div className="max-w-xl">
              <h2 className="font-display font-normal text-gray-900 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                The Power of the Photograph
              </h2>
              <div className="mt-8 space-y-6 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
                <p>
                  Imagine a child walking into your home and stopping mid-step, eyes wide at
                  the sight of a tiger staring back from the wall. Or a friend at your office
                  asking, &ldquo;Wait, <em>where</em> was this taken?&rdquo; A cozy coffee shop
                  transforms into a roaring rainforest. A little shop turns into a jungle trail.
                </p>
                <p>
                  These photographs don&apos;t just hang, they <em>speak</em>. They <em>speak</em>{" "}
                  for what can&apos;t <em>shout</em> for itself… They spark curiosity, wonder,
                  and conversations that matter.
                </p>
                <p>
                  Every image is a real moment from the wild, untouched, unfiltered, and often,
                  unrepeatable. These aren&apos;t just photos, they&apos;re whispers in a frame,
                  of jungles that breathe, of beasts with no names. And when someone asks about
                  it, you get to tell the story. Maybe even inspire them to go see it, feel it,
                  protect it.
                </p>
              </div>
              <Link
                href="/track-me"
                className="inline-flex items-center mt-10 rounded-full bg-gray-900 text-white px-8 py-3.5 font-medium hover:bg-[#00bcd4] transition-colors"
              >
                Track me
              </Link>
            </div>
          </div>

          {/* Lion image, fills the right panel fully */}
          <div className="relative bg-[#f2f2f2] min-h-[480px] lg:min-h-full">
            <Image
              src="/images/own-it-hero.jpg"
              alt="Fine art black and white lion portrait print, Salil Nair"
              title="Fine art black and white lion portrait print, Salil Nair"
              fill
              className="object-cover"
              style={{ objectPosition: "center bottom" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── BUY ONE, GIFT ONE, HANG ONE (centered) ── */}
      <section className="bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-normal text-gray-900 leading-tight" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Buy one, gift one, hang one
          </h2>
          <p className="italic text-gray-700 mt-6" style={{ fontSize: "18px" }}>
            let every Viewer feel what we stand to lose.
          </p>
          <div className="mt-10 space-y-7 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
            <p>
              This isn&apos;t about buying art. &ldquo;It&apos;s About Investing In
              Awareness&rdquo;. The amount you spend isn&apos;t just for a frame, it&apos;s for the
              future. It&apos;s for every person who stops and stares and suddenly sees the wild
              not as something far away, but something worth caring for.
            </p>
            <p>
              These prints are seeds of change, planted on walls and blooming in conversations.
              Let your space do more than look good. Let it <em>mean</em> something.
            </p>
            <p>
              Nature is waiting, and your wall could be its loudest voice. Will your walls answer?
            </p>
          </div>
        </div>
      </section>

      {/* ── ALTERNATING IMAGE + TEXT ROWS ── */}
      <section className="bg-white pb-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
          {rows.map((row, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <Image
                src={row.image}
                alt={row.alt}
                title={row.alt}
                width={row.width}
                height={row.height}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Text */}
              <div>
                <h3 className="font-display font-normal text-gray-900 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)" }}>
                  {row.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed mt-6" style={{ fontSize: "20px" }}>
                  {row.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PURCHASE CTA ── */}
      <section className="bg-[#faf9f7] py-20 px-6 sm:px-10 lg:px-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-normal text-gray-900 leading-tight" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Own a Piece of the Wild
          </h2>
          <p className="text-gray-700 leading-relaxed mt-5" style={{ fontSize: "20px" }}>
            Every print is available in multiple sizes with custom framing. Enquire for the full
            collection, pricing and details.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hi Salil, I'm interested in purchasing a wildlife photography print. Please share the available images and pricing."
              label="Enquire About Prints"
              className="justify-center text-base px-8 py-4"
            />
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 text-gray-900 px-8 py-4 font-semibold hover:border-[#00bcd4] hover:text-[#00bcd4] transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Own It", path: "/own-it" },
        ])}
      />
    </>
  );
}
