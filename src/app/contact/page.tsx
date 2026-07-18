import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Lens N Latitudes",
  description:
    "Get in touch with Salil Nair at Lens N Latitudes. Enquire about upcoming safaris, wildlife photography tours, corporate retreats, or print purchases.",
  path: "/contact",
  image: "/images/og-contact.jpg",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — form */}
            <div>
              <h1 className="text-white font-bold text-4xl sm:text-5xl mb-3">Contact Us</h1>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Let us know what you&apos;re looking for — an upcoming safari, a photography tour, a corporate retreat, or a wildlife print. We&apos;ll get back to you as soon as we can.
              </p>
              <ContactForm />
            </div>

            {/* Right — details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-4">Quick Enquiry</h2>
                <WhatsAppButton message="Hi Salil, I'd like to enquire about your safari tours." className="w-full justify-center" />
              </div>

              <div className="bg-[#111] rounded-2xl p-6 border border-white/10 space-y-5">
                <div>
                  <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-2">Email</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-2">Phone</h3>
                  <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="text-gray-300 hover:text-white transition-colors block">
                    {CONTACT.phone}
                  </a>
                  <a href={`tel:${CONTACT.phone2.replace(/-/g, "")}`} className="text-gray-300 hover:text-white transition-colors block mt-1">
                    {CONTACT.phone2}
                  </a>
                </div>
                <div>
                  <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-2">Address</h3>
                  <address className="not-italic text-gray-400 text-sm leading-relaxed">{CONTACT.address}</address>
                </div>
                <div>
                  <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</a>
                    <span className="text-gray-700">·</span>
                    <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LocalBusiness structured data */}
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
