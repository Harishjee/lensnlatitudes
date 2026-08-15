import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumb } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us, Lens N Latitudes",
  description:
    "Get in touch with Salil Nair at Lens N Latitudes. Enquire about upcoming safaris, wildlife photography tours, corporate retreats, or fine art prints.",
  path: "/contact",
  image: "/images/explore-latitudes-masai-mara-wildlife.jpg",
});

const MAP_SRC =
  "https://www.google.com/maps?q=13.044674,80.1852768&z=17&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/place/13.044674,80.1852768/@13.044674,80.1852768,17z";

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/explore-latitudes-masai-mara-wildlife.jpg"
        alt="Contact Lens N Latitudes, wildlife safari enquiries"
        title="Contact Us"
        subtitle="Let's plan your next walk on the wild side."
        titlePosition="right-center"
      />

      {/* ── MAIN, info + form ── */}
      <section className="bg-[#0a0a0a] py-16 sm:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          {/* Left, intro + contact tiles */}
          <div>
            <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-white font-normal leading-tight" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
              Let&apos;s Plan Your Next Adventure
            </h2>
            <p className="text-gray-400 leading-relaxed mt-5" style={{ fontSize: "17px" }}>
              Whether it&apos;s an upcoming safari, a bespoke photography tour, a corporate
              escape or a fine-art print, tell us what you have in mind and we&apos;ll get
              right back to you.
            </p>

            <div className="mt-9 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#00bcd4]/50 hover:bg-white/[0.05] transition-all"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-[#00bcd4]/12 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Email</p>
                  <p className="text-gray-200 group-hover:text-white transition-colors break-all" style={{ fontSize: "16px" }}>{CONTACT.email}</p>
                </div>
              </a>

              {/* Call */}
              <a
                href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#00bcd4]/50 hover:bg-white/[0.05] transition-all"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-[#00bcd4]/12 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Call</p>
                  <p className="text-gray-200 group-hover:text-white transition-colors" style={{ fontSize: "16px" }}>{CONTACT.phone}</p>
                  <p className="text-gray-400 text-sm">{CONTACT.phone2}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#25D366]/50 hover:bg-white/[0.05] transition-all"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">WhatsApp</p>
                  <p className="text-gray-200 group-hover:text-white transition-colors" style={{ fontSize: "16px" }}>Chat with us instantly</p>
                </div>
              </a>

              {/* Address */}
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#00bcd4]/50 hover:bg-white/[0.05] transition-all"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-[#00bcd4]/12 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Studio</p>
                  <p className="text-gray-200 group-hover:text-white transition-colors leading-relaxed" style={{ fontSize: "16px" }}>{CONTACT.address}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right, form card */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#111] to-[#0d0d0d] p-6 sm:p-9 shadow-2xl">
            <h3 className="font-display text-white font-normal mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
              Send us a message
            </h3>
            <p className="text-gray-500 text-sm mb-7">
              We usually reply within a day. Fields marked * are required.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-[#050505] pb-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Find Us
            </p>
            <h2 className="font-display text-white font-normal" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
              Visit the Studio in Chennai
            </h2>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Lens N Latitudes studio location, Chennai"
              src={MAP_SRC}
              className="w-full h-[380px] sm:h-[440px] grayscale-[0.2] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00bcd4] hover:text-white text-sm font-medium transition-colors"
            >
              Open in Google Maps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
    </>
  );
}
