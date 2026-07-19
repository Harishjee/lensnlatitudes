import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Track Me — Find Salil Nair, Wildlife Photographer",
  description:
    "Track Salil Nair across latitudes. Not for likes, not for glory — somewhere across the next latitude, nature is posing for her next masterpiece.",
  path: "/track-me",
  image: "/images/salil-nair-track-me-wildlife-photographer.jpg",
});

export default function TrackMePage() {
  return (
    <>
      {/* ── HERO — person on rock with text overlay ── */}
            <PageHero
        image="/images/salil-nair-track-me-wildlife-photographer.jpg"
        alt="Track Me — Salil Nair wildlife photographer on location"
        title="Track Me"
        titlePosition="right-center"
      />

      {/* ── CONTENT — big eagle image LEFT, text RIGHT ─── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[3fr_1fr] gap-8 lg:gap-10 items-center mb-20">
            {/* Eagle image — big */}
            <div className="relative">
              <Image
                src="/images/eagle-flight-wildlife-photography-india.jpg"
                alt="African fish eagle swooping to catch fish — Salil Nair wildlife photography"
                title="African fish eagle swooping to catch fish — Salil Nair wildlife photography"
                width={1600}
                height={1067}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
            {/* Text — right, centered */}
            <div className="space-y-6 text-gray-800 leading-relaxed text-center lg:text-left" style={{ fontSize: "19px" }}>
              <p>
                Not for likes, Not for glory, Because somewhere, across the next latitude, nature is
                posing for her next masterpiece and he believes the world deserves to see how
                breathtaking Nature really is.
              </p>
              <p>
                You need to Track him down … then probably, when he&apos;s not chasing the perfect
                shot, he&apos;s writing, on his photos, it&apos;s a love letter to this planet.
              </p>
              <p className="italic text-gray-600">
                A silent prayer of gratitude to Mother Nature for letting me witness her magic up close.
              </p>
            </div>
          </div>

          {/* ── "That's when you will find him here" — professional contact section ── */}
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#0d1512] via-[#0a0a0a] to-[#0d0d0d] border border-white/10">
            {/* Subtle top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00bcd4]/50 to-transparent" />

            <div className="px-6 sm:px-12 py-14 sm:py-16">
              <div className="text-center mb-12">
                <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                  Reach the Wild
                </p>
                <h2 className="font-display text-white font-normal" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)" }}>
                  That&apos;s when you will find him here —
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {/* Address */}
                <div className="group flex flex-col items-center text-center rounded-2xl bg-white/[0.04] border border-white/10 p-8 hover:border-[#00bcd4]/50 hover:bg-white/[0.06] transition-all">
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-[#00bcd4]/12 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-[#00bcd4] text-xs uppercase tracking-[0.2em] font-semibold mb-3">Address</p>
                  <p className="text-gray-300 leading-relaxed" style={{ fontSize: "15px" }}>{CONTACT.address}</p>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex flex-col items-center text-center rounded-2xl bg-white/[0.04] border border-white/10 p-8 hover:border-[#00bcd4]/50 hover:bg-white/[0.06] transition-all"
                >
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-[#00bcd4]/12 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </div>
                  <p className="text-[#00bcd4] text-xs uppercase tracking-[0.2em] font-semibold mb-3">Email</p>
                  <span className="text-gray-300 group-hover:text-white transition-colors break-all" style={{ fontSize: "15px" }}>
                    {CONTACT.email}
                  </span>
                </a>

                {/* Call */}
                <div className="group flex flex-col items-center text-center rounded-2xl bg-white/[0.04] border border-white/10 p-8 hover:border-[#00bcd4]/50 hover:bg-white/[0.06] transition-all">
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-[#00bcd4]/12 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                    </svg>
                  </div>
                  <p className="text-[#00bcd4] text-xs uppercase tracking-[0.2em] font-semibold mb-3">Call</p>
                  <a href={`tel:${CONTACT.phone2.replace(/[^+\d]/g, "")}`} className="text-gray-300 hover:text-white transition-colors block" style={{ fontSize: "15px" }}>
                    {CONTACT.phone2}
                  </a>
                  <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="text-gray-300 hover:text-white transition-colors block mt-1" style={{ fontSize: "15px" }}>
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8 flex gap-5 justify-center">
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg className="w-6 h-6 text-gray-600 hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 text-gray-600 hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
