import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import SignatureGallery from "@/components/ui/SignatureGallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";
import { service, breadcrumb } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Beyond the Classrooms, Wildlife Education Tours for Students",
  description:
    "Wildlife education tours for students from Grade 1 to college. Expert naturalists, guided safaris, birding walks, and nature photography in India's national parks.",
  path: "/beyond-the-classrooms",
  image: "/images/student-wildlife-education-tour-hero.jpg",
});

const gallery = [
  { src: "/images/btc-gallery-1-leopard-tree.jpg",    alt: "Leopard resting in a tree, wildlife education by Salil Nair" },
  { src: "/images/btc-gallery-2-zebra-stripes.jpg",   alt: "Zebra stripes close-up, abstract wildlife by Salil Nair" },
  { src: "/images/btc-gallery-3-feathers.jpg",        alt: "Eagle feathers detail, wildlife photography by Salil Nair" },
  { src: "/images/btc-gallery-4-colorful-bird.jpg",   alt: "Colourful bird in motion, abstract wildlife by Salil Nair" },
  { src: "/images/btc-gallery-5-cheetah.jpg",         alt: "Cheetah, wildlife education by Salil Nair" },
  { src: "/images/btc-gallery-6-zebra-dust.jpg",      alt: "Zebra in dust, wildlife safari by Salil Nair" },
  { src: "/images/btc-gallery-7-elephant.jpg",        alt: "Elephant, wildlife education by Salil Nair" },
  { src: "/images/btc-gallery-8-lions-road.jpg",      alt: "Lions walking on a dirt road, wildlife safari by Salil Nair" },
  { src: "/images/btc-gallery-9-tiger-grass.jpg",     alt: "Tiger in grass, wildlife education India by Salil Nair" },
  { src: "/images/btc-gallery-10-tiger-face.jpg",     alt: "Tiger face close-up, wildlife photography by Salil Nair" },
  { src: "/images/btc-gallery-11-leopard-water.jpg",  alt: "Leopard drinking water, wildlife by Salil Nair" },
  { src: "/images/btc-gallery-12-elephant-skin.jpg",  alt: "Elephant skin texture, abstract wildlife by Salil Nair" },
];

export default function BeyondTheClassroomsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <PageHero
        image="/images/student-wildlife-education-tour-hero.jpg"
        alt="Beyond the Classrooms, student wildlife education tour"
        title="Beyond the Classrooms"
        titlePosition="right-center"
      />

      {/* ══════════════════════════════════════
          SECTION 2, White bg · Text LEFT · Image RIGHT
      ══════════════════════════════════════ */}
      <section className="bg-white py-14 px-4 sm:px-8 lg:px-14">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-stretch">
          {/* Left, text fills full height of image, button at bottom */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="space-y-5 text-gray-800 leading-relaxed" style={{ fontSize: "20px" }}>
              <p>
                At <strong>Lens and Latitudes</strong>, we believe that real
                learning often begins where the classroom ends. Our wildlife
                education tours are designed to bring nature alive for students, 
                from curious first graders to passionate college learners.
              </p>
              <p>
                We believe that some of the most important lessons in life don&apos;t
                happen inside four walls, they happen under open skies, with muddy
                shoes, curious minds, and the sound of birds instead of bells.
              </p>
              <p>
                Imagine your students listening to stories from the forest, not from
                a screen, but from our expert naturalists and seasoned wildlife
                professionals who live and breathe the wild every day.
              </p>
              <p>
                These aren&apos;t just guides, they&apos;re storytellers, scientists, and
                conservationists who bring nature&apos;s lessons straight to your school
                through interactive presentations, and then into the field with
                guided explorations tailored to each age group.
              </p>
            </div>
            {/* CTA fills empty space at bottom */}
            <div className="pt-6">
              <WhatsAppButton
                message="Hi Salil, I’m interested in a wildlife education tour for students. Please share more details."
                label="Book a School Safari"
              />
            </div>
          </div>

          {/* Right, buffalo portrait, full uncropped */}
          <div className="w-full">
            <Image
              src="/images/beyond-classrooms-buffalo-water.jpg"
              alt="Buffalo, wildlife by Salil Nair"
              title="Buffalo, wildlife by Salil Nair"
              width={1080}
              height={1620}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3, White bg · Image LEFT · Text RIGHT
      ══════════════════════════════════════ */}
      <section className="bg-white pb-14 px-4 sm:px-8 lg:px-14">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-start">
          {/* Left, leopard cub, full uncropped square */}
          <div className="w-full">
            <Image
              src="/images/beyond-classrooms-leopard-cub-portrait.jpg"
              alt="Leopard cub, wildlife education by Salil Nair"
              title="Leopard cub, wildlife education by Salil Nair"
              width={2236}
              height={2236}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Right, text */}
          <div
            className="space-y-5 text-gray-800 leading-relaxed"
            style={{ fontSize: "20px" }}
          >
            <p>
              Whether it&apos;s a safari through a national park, a birding walk, or a
              nature-based photography session, students learn to observe, ask
              questions, and feel a real connection to the natural world.
            </p>
            <p>
              Whether it&apos;s learning how animals communicate, understanding
              ecosystems firsthand, or simply feeling the thrill of seeing
              something wild and free, these experiences stay with students far
              beyond any exam. Plus, nothing brings a classroom together quite
              like getting slightly lost in the forest (don&apos;t worry, we&apos;ve got GPS).
            </p>
            <p>
              Our programs are safe, educational, and filled with moments of awe
             , where a sudden rustle becomes a memory, and every footprint
              becomes a clue. In a world ruled by screens and bells, we offer
              something wild, real, and wonderfully unplugged.
            </p>
            <p>
              Because when children learn outside, something inside comes alive.
              Let&apos;s give them the kind of education that doesn&apos;t just inform, it
              transforms.
            </p>
            <p>Let&apos;s take learning on a field trip they&apos;ll never forget.</p>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          SECTION 5, Dark · Full gallery with lightbox
      ══════════════════════════════════════ */}
      <section className="bg-black py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SignatureGallery images={gallery} />
        </div>
      </section>

      <JsonLd
        data={[
          service({
            name: "Beyond the Classrooms",
            description:
              "Wildlife education tours for students that bring nature alive under open skies, with storytellers, scientists, and expert guides.",
            path: "/beyond-the-classrooms",
            serviceType: "Student Wildlife Education Tour",
          }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Beyond the Classrooms", path: "/beyond-the-classrooms" },
          ]),
        ]}
      />
    </>
  );
}
