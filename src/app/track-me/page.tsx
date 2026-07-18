import type { Metadata } from "next";
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
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <Image
          src="/images/salil-nair-track-me-wildlife-photographer.jpg"
          alt="Salil Nair wildlife photographer — track me"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-12 pt-28">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-normal mb-0">
                Track Me
              </h1>
            </div>
            <div>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed italic">
                If you&apos;re looking to meet the man behind the lens, you&apos;ll probably find him in the middle of nowhere — grinning, kneeling, whispering, &ldquo;Just one more shot.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT — eagle image left, text right ─── */}
      <section className="bg-[#0a0a0a] py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Eagle image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/eagle-flight-wildlife-photography-india.jpg"
                alt="Eagle in flight — Salil Nair wildlife photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <p className="absolute bottom-3 left-3 text-white/60 text-xs font-display italic">Salil S. Nair</p>
            </div>
            {/* Text */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Not for likes, Not for glory, Because somewhere, across the next latitude, nature is posing for her next masterpiece and he believes the world deserves to see how breathtaking Nature really is.
              </p>
              <p>
                You need to Track him down… then probably, when he&apos;s not chasing the perfect shot, he&apos;s writing, on his photos, it&apos;s a love letter to this planet.
              </p>
              <p className="text-white italic">
                A silent prayer of gratitude to Mother Nature for letting me witness her magic up close.
              </p>
            </div>
          </div>

          {/* When he's home */}
          <div className="border-t border-white/10 pt-10">
            <h2 className="text-gray-500 text-xs uppercase tracking-widest mb-6">
              That&apos;s when you will find him here —
            </h2>
            <address className="not-italic grid sm:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Address</p>
                <p className="leading-relaxed">{CONTACT.address}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors block">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Call</p>
                <a href={`tel:${CONTACT.phone2.replace(/-/g, "")}`} className="hover:text-white transition-colors block">
                  {CONTACT.phone2}
                </a>
                <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="hover:text-white transition-colors block mt-1">
                  {CONTACT.phone}
                </a>
              </div>
            </address>
          </div>

          {/* Social */}
          <div className="mt-8 flex gap-5">
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg className="w-6 h-6 text-gray-500 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 text-gray-500 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
