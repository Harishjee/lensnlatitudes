"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function SignatureGallery({ images }: { images: GalleryImage[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setCurrent(((i % images.length) + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  /* Autoplay every 4s, pause on hover */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Main stage — image shown at full natural aspect (no crop) ── */}
      <div className="relative flex items-center justify-center">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 z-10 w-11 h-11 flex items-center justify-center
                     text-gray-700 hover:text-black text-3xl transition-colors"
        >
          ‹
        </button>

        {/* Image — object-contain so it is never cropped */}
        <div className="w-full flex items-center justify-center px-12 sm:px-16">
          <Image
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            title={images[current].alt}
            width={1600}
            height={1067}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain animate-[fadeIn_0.5s_ease]"
            sizes="100vw"
            priority
          />
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 z-10 w-11 h-11 flex items-center justify-center
                     text-gray-700 hover:text-black text-3xl transition-colors"
        >
          ›
        </button>
      </div>

      {/* ── Thumbnails ── */}
      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative shrink-0 overflow-hidden transition-all duration-300 ${
              i === current
                ? "ring-2 ring-gray-900 ring-offset-2 opacity-100 scale-105"
                : "opacity-50 hover:opacity-90"
            }`}
            style={{ width: "clamp(56px, 8vw, 96px)", height: "clamp(42px, 6vw, 72px)" }}
          >
            <Image
              src={img.src}
              alt={`${img.alt} — thumbnail`}
              title={img.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>

      {/* ── Progress dots ── */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
