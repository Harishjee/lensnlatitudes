import Link from "next/link";
import Image from "next/image";
import { CONTACT, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Explore */}
          <div>
            <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-4">
              Follow us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#00bcd4] text-xs uppercase tracking-widest font-semibold mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <p className="leading-relaxed">{CONTACT.address}</p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="Lens N Latitudes"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-gray-500 text-xs">Lens N Latitudes</span>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Lens N Latitudes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
