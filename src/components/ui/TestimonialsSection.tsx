"use client";

import { useState, useRef, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";

/* ── helpers ── */
const STARS = "★★★★★";

const SAFARI_EMOJI: Record<string, string> = {
  "masai mara": "🦁",
  kanha: "🐯",
  tadoba: "🐯",
  pench: "🐯",
};
function safariEmoji(safari: string) {
  const s = safari.toLowerCase();
  for (const [key, emoji] of Object.entries(SAFARI_EMOJI)) {
    if (s.includes(key)) return emoji;
  }
  return "🌿";
}

/* Collapse newlines so line-clamp counts visual lines correctly */
const oneLine = (text: string) => text.replace(/\s*\n+\s*/g, " ").trim();

type Testimonial = (typeof TESTIMONIALS)[number];

/* ── Modal ── */
function Modal({ t, onClose }: { t: Testimonial; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-white/40 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="px-8 pt-8 pb-5 border-b border-white/10">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-2xl font-display font-bold text-white"
              style={{ background: "linear-gradient(135deg, #1a4a2e, #00bcd4)" }}
            >
              {t.name[0]}
            </div>
            <div>
              <p className="text-[#fbbf24] text-xl tracking-wider">{STARS}</p>
              <h3 className="font-display text-white text-xl font-normal mt-1">
                {t.name}
                {t.location && (
                  <span className="text-gray-500 font-serif text-base font-normal"> — {t.location}</span>
                )}
              </h3>
              <p className="text-[#00bcd4] text-sm mt-0.5 font-medium">
                {safariEmoji(t.safari)}&nbsp;{t.safari}
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-7">
          {t.text.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0" style={{ fontSize: "18px" }}>
              {para.split("\n").map((line, j) => (
                <span key={j}>
                  {line}
                  {j < para.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Single card (detects if text exceeds 4 lines) ── */
function Card({ t, onOpen }: { t: Testimonial; onOpen: () => void }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [needsMore, setNeedsMore] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el) setNeedsMore(el.scrollHeight - el.clientHeight > 4);
  }, []);

  return (
    <article
      data-card
      className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[31.5%] flex flex-col bg-[#0d0d0d] border border-white/8 hover:border-[#00bcd4]/40 transition-all duration-300 rounded-2xl p-7"
    >
      <p className="text-[#fbbf24] text-base tracking-wide mb-3">{STARS}</p>
      <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-widest mb-4">
        {safariEmoji(t.safari)}&nbsp;{t.safari}
      </p>

      <p
        ref={ref}
        className="text-gray-300 leading-relaxed italic line-clamp-4"
        style={{ fontSize: "17px" }}
      >
        &ldquo;{oneLine(t.text)}&rdquo;
      </p>

      {needsMore && (
        <button
          onClick={onOpen}
          className="self-start mt-3 text-[#00bcd4] hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
        >
          Read more
        </button>
      )}

      <div className="mt-auto pt-5 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-white text-lg"
          style={{ background: "linear-gradient(135deg, #1a4a2e, #00bcd4)" }}
        >
          {t.name[0]}
        </div>
        <div>
          <p className="text-white font-semibold" style={{ fontSize: "16px" }}>
            {t.name}
          </p>
          {t.location && <p className="text-gray-600 text-sm">{t.location}</p>}
        </div>
      </div>
    </article>
  );
}

/* ── Main carousel ── */
export default function TestimonialsSection() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const [paused, setPaused] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amt = card ? card.clientWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amt, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused || active) return;
    const id = setInterval(() => {
      const el = scroller.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [paused, active]);

  return (
    <>
      <section
        className="py-20 px-6 sm:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg, #050505 0%, #081008 60%, #050505 100%)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00bcd4] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            From the Wild, From the Heart
          </p>
          <h2 className="font-display text-white font-normal" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            What Our Travellers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#00bcd4]/40" />
            <span className="text-[#fbbf24] text-lg">★</span>
            <div className="h-px w-16 bg-[#00bcd4]/40" />
          </div>
          <p className="text-gray-500 mt-3 text-sm">
            {TESTIMONIALS.length} verified reviews · All 5-star rated
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-8xl mx-auto">
          <div
            ref={scroller}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} t={t} onOpen={() => setActive(t)} />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 rounded-full border border-[#00bcd4]/40 text-[#00bcd4] hover:bg-[#00bcd4] hover:text-black transition-colors flex items-center justify-center text-xl"
              aria-label="Previous testimonials"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 rounded-full border border-[#00bcd4]/40 text-[#00bcd4] hover:bg-[#00bcd4] hover:text-black transition-colors flex items-center justify-center text-xl"
              aria-label="Next testimonials"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {active && <Modal t={active} onClose={() => setActive(null)} />}
    </>
  );
}
