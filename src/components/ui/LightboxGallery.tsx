"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
  /** optional black frame around the thumbnail (matches original design) */
  border?: boolean;
};

type Props = {
  images: LightboxImage[];
  /** Tailwind grid column classes for the thumbnail grid */
  gridClassName?: string;
  /** aspect ratio utility for uniform thumbnails, e.g. "aspect-[4/3]" */
  aspect?: string;
  /** show the title caption under each thumbnail */
  showCaptions?: boolean;
};

export default function LightboxGallery({
  images,
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  aspect = "aspect-[4/3]",
  showCaptions = true,
}: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const active = open === null ? null : images[open];

  return (
    <>
      {/* ── Thumbnail grid ── */}
      <div className={gridClassName}>
        {images.map((img, i) => (
          <figure key={img.src + i}>
            <button
              onClick={() => setOpen(i)}
              className={`group relative block w-full overflow-hidden ${aspect} cursor-zoom-in ${
                img.border ? "ring-2 ring-black ring-offset-2" : ""
              }`}
              aria-label={`View ${img.title ?? img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                title={img.title ?? img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-11 h-11 rounded-full bg-white/90 text-gray-900 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
            </button>
            {showCaptions && img.title && (
              <figcaption className="text-gray-700 mt-3" style={{ fontSize: "19px" }}>
                {img.title}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* ── Lightbox modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title ?? active.alt}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Counter */}
          <p className="absolute top-7 left-6 text-white/70 text-sm tracking-wide">
            {(open ?? 0) + 1} / {images.length}
          </p>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full border border-white/25 text-white text-2xl flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Image + caption */}
          <figure
            className="relative max-w-[92vw] max-h-[86vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              title={active.title ?? active.alt}
              className="max-w-[92vw] max-h-[78vh] w-auto h-auto object-contain shadow-2xl"
            />
            {active.title && (
              <figcaption className="mt-5 text-center">
                <span className="font-display text-white text-xl sm:text-2xl font-normal">
                  {active.title}
                </span>
              </figcaption>
            )}
          </figure>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full border border-white/25 text-white text-2xl flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
