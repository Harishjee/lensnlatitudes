"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* Routes whose hero has a LIGHT background — header uses dark text there
   (until the user scrolls and the dark header bar appears). */
const LIGHT_HERO_ROUTES = new Set([
  "/explore-the-rest-of-the-world",
  "/who-is-behind-the-lens",
]);

/* nav structure matching original Squarespace site exactly */
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Salil", dropdown: [
      { label: "Who's Behind the Lens", href: "/who-is-behind-the-lens" },
      { label: "Awards", href: "/awards" },
      { label: "Track Me", href: "/track-me" },
    ],
  },
  {
    label: "Capabilities", dropdown: [
      { label: "Signature Shoots", href: "/signature-shoots" },
      { label: "Abstracts Unleashed", href: "/abstracts-unleashed" },
      { label: "Out of the Office", href: "/out-of-the-office" },
      { label: "Beyond the Classrooms", href: "/beyond-the-classrooms" },
    ],
  },
  {
    label: "Explore Latitudes", dropdown: [
      { label: "Explore Latitudes", href: "/explore-latitudes" },
      { label: "Jungles of India", href: "/explore-jungles-of-india" },
      { label: "African Continent", href: "/explore-the-african-continent" },
      { label: "Rest of the World", href: "/explore-the-rest-of-the-world" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Own It", href: "/own-it" },
  { label: "Contact Us", href: "/contact" },
];

type NavItem = (typeof NAV)[number];
type DropdownItem = { label: string; href: string };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Use dark text on light-hero pages, but only until the dark header bar
     appears on scroll. Everywhere else the text stays white. */
  const darkText = !scrolled && LIGHT_HERO_ROUTES.has(pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-none px-6 sm:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — icon only (no text beside it) */}
          <Link href="/" className="shrink-0">
            <div className="relative w-16 h-16 lg:w-20 lg:h-20">
              <Image
                src="/images/logo.png"
                alt="Lens N Latitudes"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => {
              if ("href" in item && !("dropdown" in item)) {
                /* plain link */
                return (
                  <Link
                    key={item.label}
                    href={(item as { href: string }).href}
                    className={`text-[17px] font-semibold px-3.5 py-2 transition-colors whitespace-nowrap ${
                      darkText ? "text-gray-900 hover:text-black" : "text-white hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              /* dropdown */
              const d = item as { label: string; dropdown: DropdownItem[] };
              return (
                <div key={d.label} className="relative group">
                  <button className={`flex items-center gap-0.5 text-[17px] font-semibold px-3.5 py-2 transition-colors whitespace-nowrap ${
                    darkText ? "text-gray-900 hover:text-black" : "text-white hover:text-white/80"
                  }`}>
                    {d.label}
                    <span className={`ml-0.5 text-lg leading-none ${darkText ? "text-gray-600" : "text-white/70"}`}>+</span>
                  </button>
                  {/* dropdown panel */}
                  <div className="absolute top-full left-0 mt-0.5 min-w-[180px] bg-[#0d0d0d]/98 border border-white/10
                                  shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                  transition-all duration-150 py-1 z-50">
                    {d.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2.5 text-[15px] font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Upcoming Safari CTA — white pill with dark text (matches original) */}
            <Link
              href="/upcoming-safaris"
              className={`ml-3 text-[16px] font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap ${
                darkText
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Upcoming Safari
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all ${darkText ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all ${darkText ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all ${darkText ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-black/95 border-t border-white/10">
          <nav className="px-6 py-4 max-h-[80vh] overflow-y-auto space-y-0.5">
            <Link href="/" className="block py-3 text-base font-semibold text-gray-200 border-b border-white/5"
                  onClick={() => setMobileOpen(false)}>Home</Link>
            {NAV.slice(1).map((item) => {
              if ("href" in item && !("dropdown" in item)) {
                return (
                  <Link key={item.label} href={(item as { href: string }).href}
                        className="block py-3 text-base font-semibold text-gray-200 border-b border-white/5"
                        onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                );
              }
              const d = item as { label: string; dropdown: DropdownItem[] };
              return (
                <div key={d.label}>
                  <button
                    className="w-full flex justify-between py-3 text-base font-semibold text-gray-200 border-b border-white/5"
                    onClick={() => setOpenMobile(openMobile === d.label ? null : d.label)}
                  >
                    {d.label}
                    <span className="text-gray-500">{openMobile === d.label ? "−" : "+"}</span>
                  </button>
                  {openMobile === d.label && (
                    <div className="pl-4 pb-1">
                      {d.dropdown.map((sub) => (
                        <Link key={sub.href} href={sub.href}
                              className="block py-2.5 text-[15px] font-medium text-gray-400 hover:text-white"
                              onClick={() => setMobileOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/upcoming-safaris"
                  className="block mt-4 text-center bg-white text-black py-2.5 text-sm rounded-full"
                  onClick={() => setMobileOpen(false)}>
              Upcoming Safari
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
