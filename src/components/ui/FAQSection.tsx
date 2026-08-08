"use client";

import { useState, useMemo } from "react";
import { CONTACT } from "@/lib/constants";

export type FAQ = { q: string; a: string };

function AccordionItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: FAQ;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 ${
        open
          ? "border-[#00bcd4]/50 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "border-gray-200 bg-white hover:border-[#00bcd4]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span
          className={`font-display shrink-0 tabular-nums transition-colors ${
            open ? "text-[#00bcd4]" : "text-gray-300 group-hover:text-[#00bcd4]/60"
          }`}
          style={{ fontSize: "1.1rem" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="flex-1 font-display font-normal text-gray-900"
          style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)" }}
        >
          {item.q}
        </span>
        <span
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-[#00bcd4] bg-[#00bcd4] text-white"
              : "border-gray-300 text-gray-500 group-hover:border-[#00bcd4] group-hover:text-[#00bcd4]"
          }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="px-6 pb-6 pl-[4.25rem] text-gray-600 leading-relaxed"
            style={{ fontSize: "17px" }}
          >
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs.map((item, i) => ({ item, i }));
    return faqs
      .map((item, i) => ({ item, i }))
      .filter(
        ({ item }) =>
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      );
  }, [faqs, query]);

  return (
    <section className="bg-[#faf9f7] py-16 sm:py-20 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-16 items-start">
        {/* ── Left: sticky intro / help panel ── */}
        <div className="lg:sticky lg:top-28">
          <p className="text-[#00bcd4] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Help Centre
          </p>
          <h2
            className="font-display font-normal text-gray-900 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Questions? <br className="hidden sm:block" />
            We&apos;ve got answers.
          </h2>
          <p className="text-gray-600 leading-relaxed mt-5" style={{ fontSize: "18px" }}>
            Everything you might wonder about before joining a Lens &amp; Latitudes
            safari, gear, groups, comfort, and the wild little details in between.
          </p>

          {/* Contact card */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
            <p className="font-display text-gray-900 font-normal mb-1" style={{ fontSize: "1.25rem" }}>
              Still curious?
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Salil is a living, breathing safari encyclopedia, just ask.
            </p>
            <a
              href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 rounded-xl bg-gray-900 text-white px-5 py-3 mb-3 hover:bg-[#00bcd4] transition-colors"
            >
              <span aria-hidden>📞</span>
              <span className="text-sm font-medium">{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-xl border border-gray-200 text-gray-800 px-5 py-3 hover:border-[#00bcd4] hover:text-[#00bcd4] transition-colors"
            >
              <span aria-hidden>✉️</span>
              <span className="text-sm font-medium break-all">{CONTACT.email}</span>
            </a>
          </div>
        </div>

        {/* ── Right: search + accordion ── */}
        <div>
          {/* Search */}
          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 transition"
              style={{ fontSize: "16px" }}
            />
          </div>

          {/* Items */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <p className="text-gray-500 text-center py-12" style={{ fontSize: "17px" }}>
                No questions match &ldquo;{query}&rdquo;. Try another word, or just{" "}
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="text-[#00bcd4] underline">
                  call us
                </a>
                .
              </p>
            ) : (
              filtered.map(({ item, i }) => (
                <AccordionItem
                  key={i}
                  item={item}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
