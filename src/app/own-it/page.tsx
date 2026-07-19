import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Own It — Wildlife Photography Prints for Sale",
  description:
    "Buy Salil Nair's award-winning wildlife photography prints. Real, unfiltered moments from the wild — for your home, office, or gifting. Every print sparks a conversation.",
  path: "/own-it",
  image: "/images/og-own-it.jpg",
});

export default function OwnItPage() {
  return (
    <>
            <PageHero
        image="/images/wildlife-photography-prints-for-sale.jpg"
        alt="Own It — wildlife photography fine art prints by Salil Nair"
        title="Own It"
        titlePosition="right-center"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>
            Imagine a child walking into your home and stopping mid-step, eyes wide at the sight of a tiger staring back from the wall. Or a friend at your office asking, &ldquo;Wait — where was this taken?&rdquo;
          </p>
          <p>
            These photographs don&apos;t just hang — they speak. They speak for what can&apos;t shout for itself. They spark curiosity, wonder, and conversations that matter.
          </p>
          <p>
            Every image is a real moment from the wild — untouched, unfiltered, and often, unrepeatable. These aren&apos;t just photos, they&apos;re whispers in a frame, of jungles that breathe, of beasts with no names.
          </p>

          <blockquote className="border-l-4 border-[#00bcd4] pl-6 italic text-white text-xl">
            &ldquo;This isn&apos;t about buying art. It&apos;s About Investing In Awareness.&rdquo;
          </blockquote>

          <p>
            These prints are seeds of change, planted on walls and blooming in conversations. Let your space do more than look good. Let it mean something.
          </p>

          {/* Poem */}
          <div className="bg-[#0d0d0d] rounded-xl p-8 border border-white/10 text-center space-y-4 text-gray-400 italic">
            <p>These photographs don&apos;t just hang — they speak.<br />Of tigers that prowl and jungles that breathe.</p>
            <p>They don&apos;t just hang — they watch.<br />With eyes that remember, with stories to tell.</p>
            <p>They don&apos;t just hang — they invite.<br />To pause, to wonder, to ask, &ldquo;Where is this?&rdquo;</p>
            <p>They don&apos;t just hang — they protect.<br />Because every glance plants a seed of care.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-[#111] rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-white font-bold text-2xl mb-3">Buy a Print</h2>
            <p className="text-gray-400 mb-6">
              All prints are available in multiple sizes. Enquire via WhatsApp or email for pricing, available images, and custom framing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton message="Hi Salil, I'm interested in purchasing a wildlife photography print. Please share the available images and pricing." label="Enquire About Prints" />
              <a
                href="mailto:lensnlatitudes@gmail.com"
                className="inline-flex items-center border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-colors text-sm font-semibold"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
