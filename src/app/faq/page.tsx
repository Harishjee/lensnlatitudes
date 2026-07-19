import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQSection from "@/components/ui/FAQSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Wildlife Safari Questions Answered",
  description:
    "Everything you need to know about our wildlife safaris — gear, physical requirements, group sizes, accommodation, what to pack, and more.",
  path: "/faq",
  image: "/images/india-wildlife-safari-jeep-photography.jpg",
});

const faqs = [
  {
    q: "Do I need fancy photography gear?",
    a: "Nope! If you have a camera that can take pictures, you're officially qualified. From high-end DSLRs to the trusty smartphone that's been through three upgrades — Salil can help you make magic with whatever you've got. Bonus points if you know where the zoom button is.",
  },
  {
    q: "Can I bring my kids?",
    a: "Absolutely — kids love the wild, and the wild tolerates kids. We've got child-friendly options and guides who are secretly superheroes in khaki. Just make sure the little ones don't try to ride a porcupine.",
  },
  {
    q: "How physically demanding are your tours?",
    a: "If you can walk, stand, and breathe, you're in! No marathons here — just a bit of hiking, a lot of waiting (sometimes very still waiting), and occasional awkward poses trying not to scare off a bird. We design trips to match your pace — whether you're a sprinter or a slow-motion gazelle.",
  },
  {
    q: "I've never been on a wildlife tour before — will I be the odd one out?",
    a: "Not at all! Our tours are like a nature club where beginners and pros hang out together. Salil's legendary patience means no question is too silly (even 'Is that a bird or just a very confused squirrel?'). Everyone's welcome — even those who think 'ISO' is a new coffee order.",
  },
  {
    q: "How big are your groups?",
    a: "Small enough that you won't feel like you're on a wildlife bus tour, but big enough to have some fun stories to swap by the campfire. Usually 6–10 people — because who needs more than 10 people trying to get the same shot of a sleepy leopard?",
  },
  {
    q: "Do I have to wake up at dawn every day?",
    a: "We won't make you do yoga at 5 AM (unless you want to). But wildlife is often more active early in the day, so expect a few mornings that start when most people are still hitting snooze. Coffee and a good breakfast make it easier — promise.",
  },
  {
    q: "Can I smoke or drink in the wild?",
    a: "The jungle is wild — but not that kind of wild. 🚭 Smoking is a hard 'NO' — unless you're a dragon (and even then, puff elsewhere). As for drinking: Mid-safari toasts? Still a Big NO. We run a Sober Safari so everyone — including the wildlife — stays safe, aware, and un-mauled. Save the celebrations for camp.",
  },
  {
    q: "Can I bring my drone?",
    a: "Only very few parks in the world allow drones. Most national parks don't even allow them inside the park, even in the backpack. We'll guide you through the rules — because eagles do not enjoy aerial competition.",
  },
  {
    q: "What kind of animals will we see?",
    a: "Imagine a live-action episode of Planet Earth. Depending on the latitude, expect: Lions, Tigers, Elephants, Antelopes, Flamboyant Birds, and yes, Sassy Squirrels. We never guarantee sightings, but Salil's experience means we usually find something worth framing. Surprises? Always. Regret? Never.",
  },
  {
    q: "Is food and accommodation included?",
    a: "Yes, absolutely included. Nobody takes great photos on an empty stomach. Expect tasty meals, cozy stays, and LOTS of snacks. Patience is much easier with trail mix.",
  },
  {
    q: "What should I pack?",
    a: "Earthy clothes (avoid neon!), comfy shoes, your camera, and curiosity. Don't worry — we'll send you a full checklist so you don't accidentally pack a tuxedo for the jungle.",
  },
  {
    q: "What happens if it rains?",
    a: "Then you get the dramatic rainforest look. Think Vogue, but wetter. Rain brings the jungle to life, and we come prepared with gear and good cheer. Embrace the drizzle — it's nature's way of saying 'refresh!'",
  },
  {
    q: "Are the toilets in the wild… wild?",
    a: "Sometimes modern. Sometimes… rustic. Think of it like this: 'A Loo with a View.' We prioritize hygiene and dignity. You won't be asked to dig a hole — unless you're really into that kind of thing.",
  },
  {
    q: "Are your guides trained?",
    a: "Our guides know the land like a squirrel knows tree branches. They're full of knowledge, stories, and mostly good jokes. They speak local languages, and most of them know English very well.",
  },
  {
    q: "I have more questions!",
    a: "Congratulations, you've reached Round 15. In this round, we play Dial a Friend… Call Salil directly at +91-9930123699 or email us at lensnlatitudes@gmail.com. He's like a living, breathing safari encyclopedia... with better jokes and zero buffering.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        image="/images/india-wildlife-safari-jeep-photography.jpg"
        alt="Wildlife safari FAQ — jeep photography tour India, Lens N Latitudes"
        title="Frequently Asked Questions"
        subtitle="Everything you wanted to ask before the wild calls."
        titlePosition="right-center"
      />

      <FAQSection faqs={faqs} />

      {/* JSON-LD FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
