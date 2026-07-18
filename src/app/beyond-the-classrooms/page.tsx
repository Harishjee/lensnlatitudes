import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Beyond the Classrooms — Wildlife Education Tours for Students",
  description:
    "Wildlife education tours for students from Grade 1 to college. Expert naturalists, guided safaris, birding walks, and nature photography in India's national parks.",
  path: "/beyond-the-classrooms",
  image: "/images/student-wildlife-education-tour-hero.jpg",
});

export default function BeyondTheClassroomsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative w-full">
        <Image
          src="/images/student-wildlife-education-tour-hero.jpg"
          alt="Beyond the Classrooms — student wildlife education tour"
          width={1920}
          height={1280}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />
        
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-14 z-10">
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-normal text-on-image">
            Beyond the Classrooms
          </h1>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — text */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                At Lens and Latitudes, we believe that real learning often begins where the classroom ends. Our wildlife education tours are designed to bring nature alive for students — from curious first graders to passionate college learners.
              </p>
              <p>
                We believe that some of the most important lessons in life don&apos;t happen inside four walls — they happen under open skies, with muddy shoes, curious minds, and the sound of birds instead of bells.
              </p>
              <p>
                Imagine your students listening to stories from the forest, not from a screen, but from our expert naturalists and seasoned wildlife professionals who live and breathe the wild every day.
              </p>
              <p>
                These aren&apos;t just guides — they&apos;re storytellers, scientists, and conservationists who bring nature&apos;s lessons straight to your school through interactive presentations, and then into the field with guided explorations tailored to each age group.
              </p>
            </div>

            {/* Right — 2 stacked images */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/student-wildlife-tour-masai-mara.jpg"
                  alt="Students on wildlife safari photography tour"
                  width={1920}
                  height={1280}
                  className="w-full h-auto block"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/student-wildlife-photography-safari.jpg"
                  alt="Wildlife education photography session for students"
                  width={1920}
                  height={1280}
                  className="w-full h-auto block"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Second text block */}
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Whether it&apos;s learning how animals communicate, understanding ecosystems firsthand, or simply feeling the thrill of seeing something wild and free — these experiences stay with students far beyond any exam. Plus, nothing brings a classroom together quite like getting slightly lost in the forest (don&apos;t worry, we&apos;ve got GPS).
              </p>
              <p>
                Our programs are safe, educational, and filled with moments of awe — where a sudden rustle becomes a memory, and every footprint becomes a clue.
              </p>
              <p className="text-white font-medium">
                Because when children learn outside, something inside comes alive. Let&apos;s give them the kind of education that doesn&apos;t just inform — it transforms.
              </p>
              <div className="pt-2">
                <WhatsAppButton message="Hi Salil, I'm interested in a wildlife education tour for students. Please share more details." label="Book a School Safari" />
              </div>
            </div>

            {/* Tiger image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/tiger-wildlife-education-tour-india.jpg"
                alt="Tiger — wildlife education experience India"
                width={1920}
                height={1280}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
