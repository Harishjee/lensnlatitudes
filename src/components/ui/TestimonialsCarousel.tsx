"use client";

import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-[#0d0d0d] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-12">
          Testimonials
        </h2>

        <div
          className="relative min-h-[200px] flex flex-col items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <blockquote className="text-gray-300 text-lg sm:text-xl leading-relaxed italic max-w-3xl">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-white font-semibold">
              {t.name}
              {t.location && (
                <span className="text-gray-500 font-normal"> — {t.location}</span>
              )}
            </p>
            <p className="text-[#00bcd4] text-sm mt-1">{t.safari}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/60 transition-colors"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-[#00bcd4] w-4" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/60 transition-colors"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          {current + 1} of {TESTIMONIALS.length}
        </p>
      </div>
    </section>
  );
}
