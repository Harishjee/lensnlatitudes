import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Beyond the Classrooms — Wildlife Education Tours for Students",
  description:
    "Wildlife education tours for students — from curious first graders to passionate college learners. Guided by expert naturalists and wildlife professionals in India's national parks.",
  path: "/beyond-the-classrooms",
  image: "/images/og-beyond-classrooms.jpg",
});

export default function BeyondTheClassroomsPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/beyond-classrooms-hero.jpg" alt="Students on wildlife education tour" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">Beyond the Classrooms</h1>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-400 leading-relaxed text-lg">
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
          <p>
            Whether it&apos;s learning how animals communicate, understanding ecosystems firsthand, or simply feeling the thrill of seeing something wild and free — these experiences stay with students far beyond any exam.
          </p>

          <div className="bg-[#111] rounded-xl p-6 border border-white/10 my-8">
            <h3 className="text-white font-semibold text-lg mb-4">Program Highlights</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Safari through national parks & guided nature walks",
                "Birding walks with expert naturalists",
                "Nature-based photography sessions",
                "Interactive wildlife presentations",
                "Ecosystem & conservation education",
                "Age-appropriate programs (Grade 1 – College)",
                "GPS-guided group explorations (don&apos;t worry, you won&apos;t get lost!)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-[#00bcd4] mt-0.5">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <p className="text-white font-medium text-xl">
            Because when children learn outside, something inside comes alive. Let&apos;s give them the kind of education that doesn&apos;t just inform — it transforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <WhatsAppButton message="Hi Salil, I'm interested in a wildlife education tour for students. Please share more details." label="Book a School Safari" />
        </div>
      </section>
    </>
  );
}
