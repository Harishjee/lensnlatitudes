"use client";

import { useState } from "react";
import Image from "next/image";

export type VideoTestimonial = {
  src: string;
  poster: string;
  name: string;
  role: string;
};

export default function VideoTestimonials({ videos }: { videos: VideoTestimonial[] }) {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
      {videos.map((v, i) => (
        <div
          key={v.src}
          className="group relative aspect-video overflow-hidden rounded-2xl bg-black ring-1 ring-black/10 shadow-lg"
        >
          {playing === i ? (
            <video
              src={v.src}
              poster={v.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover bg-black"
              onEnded={() => setPlaying(null)}
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(i)}
              className="absolute inset-0 w-full h-full"
              aria-label={`Play video testimonial from ${v.name}`}
            >
              <Image
                src={v.poster}
                alt={`${v.name} — ${v.role} video testimonial`}
                title={`${v.name} — ${v.role}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-black/55 border-2 border-white/90 flex items-center justify-center group-hover:bg-[#00bcd4] group-hover:border-[#00bcd4] group-hover:scale-110 transition-all">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              {/* Name caption */}
              <span className="absolute inset-x-0 bottom-0 p-4 text-left bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <span className="block text-white font-semibold" style={{ fontSize: "16px" }}>
                  {v.name}
                </span>
                <span className="block text-gray-300 text-sm">{v.role}</span>
              </span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
