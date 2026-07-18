"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_DROPDOWNS } from "@/lib/constants";

const TOP_LINKS = [
  { label: "Home", href: "/" },
  { label: "Salil", href: "/who-is-behind-the-lens" },
  { label: "Awards", href: "/awards" },
  { label: "Track Me", href: "/track-me" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Lens N Latitudes"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block leading-tight">
              Lens N<br />Latitudes
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {TOP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm px-3 py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {NAV_DROPDOWNS.map((dropdown) => (
              <div key={dropdown.label} className="relative group">
                <button className={`flex items-center gap-1 text-sm px-3 py-2 transition-colors ${"cta" in dropdown && dropdown.cta
                    ? "bg-[#00bcd4] text-white rounded-md font-semibold hover:bg-[#0097a7]"
                    : "text-gray-300 hover:text-white"
                }`}>
                  {dropdown.label}
                  {!("cta" in dropdown && dropdown.cta) && (
                    <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-1 w-52 bg-black/95 border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {TOP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 text-sm border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {NAV_DROPDOWNS.map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  className="w-full text-left text-gray-300 hover:text-white py-2 text-sm border-b border-white/5 flex justify-between"
                  onClick={() => setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)}
                >
                  {dropdown.label}
                  <span>{openDropdown === dropdown.label ? "▲" : "▼"}</span>
                </button>
                {openDropdown === dropdown.label && (
                  <div className="pl-4">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-400 hover:text-white py-2 text-sm border-b border-white/5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
