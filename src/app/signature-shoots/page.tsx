import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Signature Shoots — Private One-on-One Wildlife Photography Tours",
  description:
    "Exclusive one-on-one wildlife photography tours with Salil Nair. Create signature art tailored to your vision in India's finest wildlife reserves.",
  path: "/signature-shoots",
  image: "/images/signature-shoot-elephant-golden-grass.jpg",
});

const sliderImages = [
  { src: "/images/signature-shoot-elephant-golden-grass.jpg", alt: "Elephant in golden grass — signature wildlife shoot" },
  { src: "/images/signature-shoot-wildlife-photography-india.jpg", alt: "Wildlife photography India — signature shoot" },
  { src: "/images/signature-shoot-masai-mara-safari.jpg", alt: "Masai Mara safari — signature wildlife photography" },
  { src: "/images/signature-shoot-wildlife-frame.jpg", alt: "Wildlife frame — signature photography tour" },
  { src: "/images/signature-shoot-wildlife-close-up.jpg", alt: "Wildlife close-up — signature shoot India" },
];

export default function SignatureShootsPage() {
  return (
    <>
      <PageHero
        image="/images/signature-shoot-elephant-golden-grass.jpg"
        alt="Signature wildlife photography shoot — elephant in golden African grass"
        title="Signature Shoots"
        titlePosition="left-bottom"
      />

      {/* ── HERO QUOTE ──────────────────────────────── */}
      <section className="bg-[#0a0a0a] pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-white text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug max-w-3xl">
            Join me, and together we&apos;ll turn your vision into signature art that lasts a lifetime.
          </p>
          <p className="text-gray-500 mt-3 text-sm">
            Because your images deserve more than repetition; they deserve distinction.
          </p>
        </div>
      </section>

      {/* ── IMAGE GALLERY SLIDER ─────────────────────── */}
      <section className="bg-[#0a0a0a] pb-4 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main large image */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
            <Image
              src={sliderImages[0].src}
              alt={sliderImages[0].alt}
              width={1920}
              height={1280}
              className="w-full h-auto block"
              sizes="100vw"
              priority
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-1 mt-1">
            {sliderImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  sizes="20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY TEXT ────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-400 leading-relaxed">
          <p>
            As an award-winning wildlife photographer and destination expert, I know exactly where and when the wild reveals its most extraordinary moments. When you join my exclusive, one-on-one photography tours, you&apos;re not just another face in a crowded safari jeep — you&apos;re guided by someone who knows the secret corners and hidden gems few ever see.
          </p>
          <p>
            Together, we&apos;ll design signature shoots tailored specifically to your style and vision, exploring unique locations chosen for their unmatched photographic potential.
          </p>
          <p>
            These carefully crafted experiences are worth every moment spent in the wild. You&apos;ll break free from the usual snapshots everyone has and create original, breathtaking images that truly stand apart. I&apos;ll share advanced techniques and creative insights, helping you master elusive light, capture intimate animal behavior, and frame nature&apos;s raw emotions like never before.
          </p>
          <div className="pt-4">
            <WhatsAppButton message="Hi Salil, I'm interested in a Signature Shoot. Please share more details." />
          </div>
        </div>
      </section>
    </>
  );
}
