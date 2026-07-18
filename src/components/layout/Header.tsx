"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const TOP_LINKS = [
  { label: "Home", href: "/" },
];

const SALIL_DROPDOWN = {
  label: "Salil",
  items: [
    { label: "Who's Behind the Lens", href: "/who-is-behind-the-lens" },
    { label: "Awards", href: "/awards" },
  ],
};

const CAPABILITIES_DROPDOWN = {
  label: "Capabilities",
  items: [
    { label: "Signature Shoots", href: "/signature-shoots" },
    { label: "Abstracts Unleashed", href: "/abstracts-unleashed" },
    { label: "Out of the Office", href: "/out-of-the-office" },
    { label: "Beyond the Classrooms", href: "/beyond-the-classrooms" },
  ],
};

const EXPLORE_DROPDOWN = {
  label: "Explore Latitudes",
  items: [
    { label: "Explore Latitudes", href: "/explore-latitudes" },
    { label: "Jungles of India", href: "/explore-jungles-of-india" },
    { label: "African Continent", href: "/explore-the-african-continent" },
    { label: "Rest of the World", href: "/explore-the-rest-of-the-world" },
    { label: "FAQ", href: "/faq" },
  ],
};

const SAFARI_DROPDOWN = {
  label: "Up-coming Safari's",
  items: [
    { label: "Upcoming Safaris", href: "/upcoming-safaris" },
    { label: "Story Behind the Photo", href: "/story-behind-the-photo" },
  ],
};

type Dropdown = typeof SALIL_DROPDOWN;

function NavDropdown({ dropdown }: { dropdown: Dropdown }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-0.5 text-white/90 hover:text-white text-sm px-3 py-2 transition-colors">
        {dropdown.label}
        <svg className="w-3.5 h-3.5 mt-0.5 opacity-60" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-[#0d0d0d]/98 border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1 z-50">
        {dropdown.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileDropdowns = [SALIL_DROPDOWN, CAPABILITIES_DROPDOWN, EXPLORE_DROPDOWN, SAFARI_DROPDOWN];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Lens N Latitudes logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0">
            <Link href="/" className="text-white/90 hover:text-white text-sm px-3 py-2 transition-colors">
              Home
            </Link>
            <NavDropdown dropdown={SALIL_DROPDOWN} />
            <NavDropdown dropdown={CAPABILITIES_DROPDOWN} />
            <NavDropdown dropdown={EXPLORE_DROPDOWN} />
            <NavDropdown dropdown={SAFARI_DROPDOWN} />
            <Link href="/own-it" className="text-white/90 hover:text-white text-sm px-3 py-2 transition-colors">
              Own It
            </Link>
            <Link
              href="/upcoming-safaris"
              className="ml-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Upcoming Safari
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current my-1 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-sm border-t border-white/10">
          <nav className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <Link href="/" className="block text-gray-300 py-2 text-sm border-b border-white/5" onClick={() => setMobileOpen(false)}>Home</Link>
            {mobileDropdowns.map((d) => (
              <div key={d.label}>
                <button
                  className="w-full flex justify-between text-left text-gray-300 py-2 text-sm border-b border-white/5"
                  onClick={() => setOpenSection(openSection === d.label ? null : d.label)}
                >
                  {d.label} <span className="text-gray-600">{openSection === d.label ? "−" : "+"}</span>
                </button>
                {openSection === d.label && (
                  <div className="pl-4 pb-2">
                    {d.items.map((item) => (
                      <Link key={item.href} href={item.href} className="block text-gray-500 hover:text-white py-1.5 text-sm" onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/own-it" className="block text-gray-300 py-2 text-sm border-b border-white/5" onClick={() => setMobileOpen(false)}>Own It</Link>
            <Link href="/upcoming-safaris" className="block text-center bg-[#1a1a1a] border border-white/20 text-white py-2 text-sm rounded-full mt-3" onClick={() => setMobileOpen(false)}>
              Upcoming Safari
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
