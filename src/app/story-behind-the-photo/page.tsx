import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Story Behind the Photo — Wildlife Photography Stories",
  description:
    "Every photograph tells a story. Read about the moments, the patience, the light, and the wild encounters behind Salil Nair's most memorable images.",
  path: "/story-behind-the-photo",
  image: "/images/og-story.jpg",
});

export default function StoryBehindThePhotoPage() {
  return (
    <>
      <section className="pt-32 min-h-[60vh] bg-[#0a0a0a] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-4">Story Behind the Photo</h1>
          <p className="text-gray-400 text-xl leading-relaxed mb-12">
            Every frame has a story. The patience, the wait, the moment — and what came before the shutter clicked.
          </p>

          {/* Coming soon placeholder — to be filled with actual stories */}
          <div className="bg-[#111] rounded-2xl p-10 border border-white/10 text-center">
            <div className="text-5xl mb-4">📸</div>
            <h2 className="text-white font-bold text-2xl mb-3">Stories coming soon</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Follow us on Instagram and YouTube for behind-the-scenes stories and the moments that made each shot possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/lensnlatitudes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-colors text-sm font-semibold"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-colors text-sm font-semibold"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Interested in joining the next safari?</p>
            <WhatsAppButton message="Hi Salil, I saw the Story Behind the Photo section and I'd love to know more about upcoming safaris." />
          </div>
        </div>
      </section>
    </>
  );
}
