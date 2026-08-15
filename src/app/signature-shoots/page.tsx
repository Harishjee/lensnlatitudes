import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SignatureGallery from "@/components/ui/SignatureGallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";
import { service, breadcrumb } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Signature Shoots, Private One-on-One Wildlife Photography Tours",
  description:
    "Exclusive one-on-one wildlife photography tours with Salil Nair. Create signature art tailored to your vision in India's & Africa's finest wildlife reserves.",
  path: "/signature-shoots",
  image: "/images/signature-shoots-hero-twilight-landscape.jpg",
});

const galleryImages = [
  { src: "/images/signature-cheetah-bw-high-key-portrait.jpg", alt: "Cheetah high-key black and white portrait, signature wildlife shoot by Salil Nair" },
  { src: "/images/signature-zebras-fighting-dust-masai-mara.jpg", alt: "Zebras fighting in dust, Masai Mara, signature wildlife photography" },
  { src: "/images/signature-elephant-dust-devil-amboseli.jpg", alt: "Elephant with dust devil, Amboseli, signature wildlife photography" },
  { src: "/images/signature-leopard-drinking-water-rocks.jpg", alt: "Leopard drinking water on rocks, signature wildlife photography" },
  { src: "/images/signature-zebras-bw-high-key-herd.jpg", alt: "Zebra herd high-key black and white, signature wildlife photography" },
  { src: "/images/signature-photographer-cave-adventure.jpg", alt: "Photographer exploring a cave, signature adventure shoot" },
];

export default function SignatureShootsPage() {
  return (
    <>
      {/* ── HERO, purple twilight landscape ── */}
      <PageHero
        image="/images/signature-shoots-hero-twilight-landscape.jpg"
        alt="Signature Shoots, twilight landscape wildlife photography by Salil Nair"
        title="Signature Shoots"
        titlePosition="left-bottom"
      />

      {/* ── HEADLINE (white bg, centered) ── */}
      <section className="bg-white pt-14 pb-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="font-display text-gray-900 font-normal leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Join me, and together we&apos;ll turn your vision into signature art that lasts a lifetime.
          </h2>
          <p className="text-gray-700" style={{ fontSize: "21px" }}>
            Because your images deserve more than repetition; they deserve distinction.
          </p>
        </div>
      </section>

      {/* ── AUTOPLAY GALLERY (no crop) ── */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto">
          <SignatureGallery images={galleryImages} />
        </div>
      </section>

      {/* ── BODY TEXT (white bg, centered) ── */}
      <section className="bg-white py-14 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center space-y-7 text-gray-800 leading-relaxed" style={{ fontSize: "21px" }}>
          <p>
            As an award-winning wildlife photographer and destination expert, I know exactly where
            and when the wild reveals its most extraordinary moments. When you join my exclusive,
            one-on-one photography tours, you&apos;re not just another face in a crowded safari
            jeep, you&apos;re guided by someone who knows the secret corners and hidden gems few ever see.
          </p>
          <p>
            Together, we&apos;ll design signature shoots tailored specifically to your style and
            vision, exploring unique locations chosen for their unmatched photographic potential.
          </p>
          <p>
            These carefully crafted experiences are worth every moment spent in the wild. You&apos;ll
            break free from the usual snapshots everyone has and create original, breathtaking images
            that truly stand apart. I&apos;ll share advanced techniques and creative insights, helping
            you master elusive light, capture intimate animal behavior, and frame nature&apos;s raw
            emotions like never before.
          </p>
          <div className="pt-4 flex justify-center">
            <WhatsAppButton message="Hi Salil, I'm interested in a Signature Shoot. Please share more details." />
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          service({
            name: "Signature Shoots",
            description:
              "Private, one-on-one wildlife photography tours with Salil Nair to the secret corners and hidden gems few ever see.",
            path: "/signature-shoots",
            serviceType: "Private Wildlife Photography Tour",
          }),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Signature Shoots", path: "/signature-shoots" },
          ]),
        ]}
      />
    </>
  );
}
