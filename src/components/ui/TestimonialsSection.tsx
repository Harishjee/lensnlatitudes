"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

/* ── helpers ── */
const STARS = "★★★★★";

const SAFARI_EMOJI: Record<string, string> = {
  "masai mara": "🦁",
  "kanha": "🐯",
  "tadoba": "🐯",
};
function safariEmoji(safari: string) {
  const s = safari.toLowerCase();
  for (const [key, emoji] of Object.entries(SAFARI_EMOJI)) {
    if (s.includes(key)) return emoji;
  }
  return "🌿";
}

/* First paragraph only, capped at ~220 chars */
function preview(text: string) {
  const first = text.split("\n")[0];
  return first.length > 220 ? first.slice(0, 220).trimEnd() + "…" : first;
}

/* ── Modal ── */
function Modal({
  t,
  onClose,
}: {
  t: (typeof TESTIMONIALS)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto
                   bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
                     text-gray-400 hover:text-white border border-white/10 hover:border-white/40
                     rounded-full transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-5 border-b border-white/10">
          <div className="flex items-start gap-4">
            {/* Avatar initial */}
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
                  <span className="text-gray-500 font-serif text-base font-normal">
                    {" "}— {t.location}
                  </span>
                )}
              </h3>
              <p className="text-[#00bcd4] text-sm mt-0.5 font-medium">
                {safariEmoji(t.safari)}&nbsp;{t.safari}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {t.text.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-gray-300 leading-relaxed mb-4 last:mb-0"
              style={{ fontSize: "18px" }}
            >
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

/* ── Main component ── */
export default function TestimonialsSection() {
  const [active, setActive] = useState<(typeof TESTIMONIALS)[0] | null>(null);

  return (
    <>
      {/* ── TESTIMONIALS GRID SECTION ── */}
      <section
        className="py-20 px-6 sm:px-10 lg:px-16"
        style={{ background: "linear-gradient(160deg, #050505 0%, #081008 60%, #050505 100%)" }}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#00bcd4] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            From the Wild, From the Heart
          </p>
          <h2
            className="font-display text-white font-normal"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="group flex flex-col bg-[#0d0d0d] border border-white/8
                         hover:border-[#00bcd4]/40 transition-all duration-300 rounded-xl p-6"
            >
              {/* Stars */}
              <p className="text-[#fbbf24] text-base tracking-wide mb-3">{STARS}</p>

              {/* Safari badge */}
              <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-widest mb-3">
                {safariEmoji(t.safari)}&nbsp;{t.safari}
              </p>

              {/* Preview text — 4–5 lines */}
              <p
                className="text-gray-400 leading-relaxed flex-1 italic"
                style={{ fontSize: "17px" }}
              >
                &ldquo;{preview(t.text)}&rdquo;
              </p>

              {/* Author + Read More */}
              <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold" style={{ fontSize: "17px" }}>
                    {t.name}
                  </p>
                  {t.location && (
                    <p className="text-gray-600 text-sm">{t.location}</p>
                  )}
                </div>
                <button
                  onClick={() => setActive(t)}
                  className="shrink-0 text-[#00bcd4] hover:text-white text-sm font-medium
                             underline underline-offset-4 transition-colors"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── MODAL ── */}
      {active && <Modal t={active} onClose={() => setActive(null)} />}
    </>
  );
}
