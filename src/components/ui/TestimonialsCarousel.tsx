"use client";

import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/constants";

/* Pair each testimonial with a safari-themed accent */
const SAFARI_ICONS: Record<string, string> = {
  "Masai Mara": "🦁",
  "Kanha": "🐯",
  "Tadoba": "🐯",
  "KANHA": "🐯",
  "TADOBA": "🐯",
  "MASAI": "🦁",
};

function getSafariIcon(safari: string) {
  for (const [key, icon] of Object.entries(SAFARI_ICONS)) {
    if (safari.toUpperCase().includes(key.toUpperCase())) return icon;
  }
  return "🌿";
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), []);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  /* Show 3 testimonials at once (desktop), 1 on mobile */
  const visible = [
    TESTIMONIALS[current],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ];

  return (
    <section
      className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050505 0%, #0a0f0a 50%, #050505 100%)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large faded quotation mark */}
        <span className="absolute top-8 left-8 font-display text-white/[0.03]"
              style={{ fontSize: "20rem", lineHeight: 1, userSelect: "none" }}>
          "
        </span>
        {/* Subtle teal line accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00bcd4]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00bcd4]/30 to-transparent" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
        <p className="text-[#00bcd4] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          From the Wild, From the Heart
        </p>
        <h2 className="font-display text-white font-normal"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
          Testimonials
        </h2>
        {/* Teal divider */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16 bg-[#00bcd4]/40" />
          <span className="text-[#00bcd4] text-lg">✦</span>
          <div className="h-px w-16 bg-[#00bcd4]/40" />
        </div>
      </div>

      {/* Desktop: 3 cards | Mobile: 1 card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-8xl mx-auto">
        {visible.map((t, i) => (
          <div
            key={`${current}-${i}`}
            className={`relative p-8 border transition-all duration-700 ${
              i === 0
                ? "border-[#00bcd4]/40 bg-[#0d1a0d]/80"
                : "border-white/8 bg-[#0a0a0a]/60 lg:opacity-80"
            } ${i > 0 ? "hidden lg:block" : ""}`}
          >
            {/* Large opening quote */}
            <span className="block font-display text-[#00bcd4]/30 leading-none mb-3"
                  style={{ fontSize: "4rem" }}>
              "
            </span>

            {/* Testimonial text */}
            <p className="text-gray-300 leading-relaxed italic mb-6"
               style={{ fontSize: "19px" }}>
              {t.text}
            </p>

            {/* Author */}
            <div className="border-t border-white/10 pt-5 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold" style={{ fontSize: "18px" }}>
                  {t.name}
                </p>
                {t.location && (
                  <p className="text-gray-500 text-sm">{t.location}</p>
                )}
              </div>
              <div className="text-right">
                <span className="text-2xl">{getSafariIcon(t.safari)}</span>
                <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-wide mt-1">
                  {t.safari.split("–")[0].trim()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: single testimonial text (already shown in first card above) */}

      {/* Navigation */}
      <div className="relative z-10 mt-10 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          className="w-10 h-10 border border-[#00bcd4]/40 text-[#00bcd4] hover:bg-[#00bcd4] hover:text-black transition-colors flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-6 h-1.5 bg-[#00bcd4]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 border border-[#00bcd4]/40 text-[#00bcd4] hover:bg-[#00bcd4] hover:text-black transition-colors flex items-center justify-center"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      <p className="relative z-10 text-center text-gray-600 text-sm mt-4">
        {current + 1} of {TESTIMONIALS.length} reviews
      </p>
    </section>
  );
}
