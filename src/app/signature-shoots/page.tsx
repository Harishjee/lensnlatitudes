import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Signature Shoots — Private One-on-One Wildlife Photography Tours",
  description:
    "Exclusive one-on-one wildlife photography tours led by Salil Nair. Break free from crowded safari jeeps and create signature art tailored to your vision.",
  path: "/signature-shoots",
  image: "/images/og-signature-shoots.jpg",
});

export default function SignatureShootsPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[460px] flex items-end pb-12 overflow-hidden">
        <Image src="/images/signature-shoots-hero.jpg" alt="Signature wildlife photography shoot" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">Signature Shoots</h1>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-400 leading-relaxed text-lg">
          <p className="text-white text-xl italic">
            Join me, and together we&apos;ll turn your vision into signature art that lasts a lifetime. Because your images deserve more than repetition; they deserve distinction.
          </p>
          <p>
            As an award-winning wildlife photographer and destination expert, I know exactly where and when the wild reveals its most extraordinary moments. When you join my exclusive, one-on-one photography tours, you&apos;re not just another face in a crowded safari jeep — you&apos;re guided by someone who knows the secret corners and hidden gems few ever see.
          </p>
          <p>
            Together, we&apos;ll design signature shoots tailored specifically to your style and vision, exploring unique locations chosen for their unmatched photographic potential.
          </p>
          <p>
            These carefully crafted experiences are worth every moment spent in the wild. You&apos;ll break free from the usual snapshots everyone has and create original, breathtaking images that truly stand apart. I&apos;ll share advanced techniques and creative insights, helping you master elusive light, capture intimate animal behavior, and frame nature&apos;s raw emotions like never before.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col sm:flex-row gap-4">
          <WhatsAppButton message="Hi Salil, I'm interested in a Signature Shoot. Please share more details." />
          <Link href="/contact" className="inline-flex items-center border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-sm font-semibold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
