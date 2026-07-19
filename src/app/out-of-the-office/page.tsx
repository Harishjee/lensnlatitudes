import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Out of the Office — Corporate Wildlife Safari Retreats",
  description:
    "Wildlife photography corporate retreats for teams. Swap Zoom calls for jeep rides. Team building, incentive trips, and offsites in India's most spectacular jungles.",
  path: "/out-of-the-office",
  image: "/images/og-out-of-office.jpg",
});

export default function OutOfTheOfficePage() {
  return (
    <>
            <PageHero
        image="/images/corporate-wildlife-safari-retreat-india.jpg"
        alt="Out of the Office — corporate wildlife safari retreat India"
        title="Out of the Office"
        titlePosition="left-bottom"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>
            At Lens and Latitudes we specialize in getting teams out of the inbox and into the wild — because let&apos;s be honest, no one has ever felt truly inspired between back-to-back Zoom calls and reheated coffee.
          </p>
          <p>
            Our wildlife photography tours are the kind of refresh button that no tech can offer. Think of it as Ctrl+Alt+Delete, but with elephants on the grass and a breath of fresh air.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 my-8">
            {[
              { icon: "🌿", label: "Less Corporate, More Curious", desc: "A Team Day They'll Talk About." },
              { icon: "🚙", label: "Forget Deadlines", desc: "Follow Footprints." },
              { icon: "🌟", label: "A Wild Day Out", desc: "No Spreadsheets, Just Stories." },
            ].map((item) => (
              <div key={item.label} className="bg-[#111] rounded-lg p-5 border border-white/10 text-center">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-white font-semibold text-sm mt-3">{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            Out here, there&apos;s no Wi-Fi — but we promise you&apos;ll find a better connection. Teams slow down, breathe deeper, and see the world — and each other — through a different lens. It&apos;s in these wild moments that ideas flow freely, egos dissolve, and collaboration takes root.
          </p>
          <p>
            We also tailor these experiences to your corporate needs — whether it&apos;s a high-impact incentive trip, a mid-year offsite, or a reward for top performers. Strategy sessions with a sunrise, KPIs discussed while giraffes stroll by, and awards handed out under a sky full of stars.
          </p>
          <p>
            Because when the mind rests, it resets. When it resets, it performs. And when it performs — so does your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid sm:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image src="/images/out-of-office-1.jpg" alt="Corporate team on wildlife safari" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image src="/images/out-of-office-2.jpg" alt="Team building in nature" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <WhatsAppButton message="Hi Salil, I'm interested in planning a corporate wildlife retreat for my team." label="Plan Your Team Retreat" />
        </div>
      </section>
    </>
  );
}
