import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Lens N Latitudes",
  description:
    "Get in touch with Salil Nair at Lens N Latitudes. Enquire about upcoming safaris, wildlife photography tours, corporate retreats, or fine art prints.",
  path: "/contact",
  image: "/images/wildlife-photography-prints-gallery-wall.png",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/explore-latitudes-masai-mara-wildlife.jpg"
        alt="Contact Lens N Latitudes — wildlife safari enquiries"
        title="Contact Us"
        titlePosition="right-center"
      />
      <section className="bg-[#0a0a0a] pt-14 pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — form */}
            <div>
              <h2 className="font-display text-white text-3xl font-normal mb-3">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                Let people know what to reach out about and what to expect after contacting you.
              </p>
              <div className="text-gray-500 text-xs mb-8 space-y-0.5">
                <p>{CONTACT.email}</p>
                <p>{CONTACT.phone}</p>
              </div>
              <ContactForm />
            </div>

            {/* Right — gallery image */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden">
              <Image
                src="/images/wildlife-photography-prints-gallery-wall.png"
                alt="Wildlife photography fine art prints gallery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            name: "Lens N Latitudes",
            description: "Award-winning wildlife photography safaris led by Salil Nair. India, Africa & worldwide expeditions.",
            url: "https://www.lensnlatitudes.com",
            telephone: "+91-9930123699",
            email: "lensnlatitudes@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd floor, 115, above union bank, Arcot Road",
              addressLocality: "Alwarthirunagar, Chennai",
              postalCode: "600087",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/lensnlatitudes/",
              "https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g",
            ],
          }),
        }}
      />
    </>
  );
}
