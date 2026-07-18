import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Track Me — Find Salil Nair",
  description:
    "Track Salil Nair across latitudes. When he's not in the jungle, you'll find him in Chennai. Contact details and a love letter to the planet.",
  path: "/track-me",
  image: "/images/og-track-me.jpg",
});

export default function TrackMePage() {
  return (
    <>
      <section className="pt-32 pb-0 min-h-screen bg-[#0a0a0a] flex flex-col">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-8">Track Me</h1>

          <div className="space-y-5 text-gray-400 leading-relaxed text-lg mb-12">
            <p>
              You need to track him down… then probably, when he&apos;s not chasing the perfect shot, he&apos;s writing, on his photos, it&apos;s a love letter to this planet.
            </p>
            <p className="text-white italic text-xl">
              &ldquo;A silent prayer of gratitude to Mother Nature for letting me witness her magic up close.&rdquo;
            </p>
            <p>
              Not for likes, Not for glory, Because somewhere, across the next latitude, nature is posing for her next masterpiece — and he believes the world deserves to see how breathtaking Nature really is.
            </p>
          </div>

          {/* When he IS home */}
          <div className="bg-[#111] rounded-2xl p-8 border border-white/10">
            <h2 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-6">
              That&apos;s when you will find him here
            </h2>
            <address className="not-italic space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <span className="text-[#00bcd4] text-lg shrink-0 mt-0.5">📍</span>
                <p className="leading-relaxed">{CONTACT.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00bcd4] text-lg shrink-0">✉️</span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00bcd4] text-lg shrink-0">📞</span>
                <div className="space-y-1">
                  <a href={`tel:${CONTACT.phone2.replace(/-/g, "")}`} className="block hover:text-white transition-colors">
                    {CONTACT.phone2}
                  </a>
                  <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`} className="block hover:text-white transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </address>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-colors text-sm font-semibold"
            >
              Follow on Instagram
            </a>
            <a
              href={CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-colors text-sm font-semibold"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
