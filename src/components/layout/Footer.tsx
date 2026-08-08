import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black pt-14 pb-10">
      <div className="max-w-none px-8 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1, Large logo */}
          <div className="flex items-start">
            <Link href="/">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                <Image
                  src="/images/logo.png"
                  alt="Lens N Latitudes logo"
                  title="Lens N Latitudes logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Col 2, Explore */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-5">Explore</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Who's Behind the Lens", href: "/who-is-behind-the-lens" },
                { label: "Awards", href: "/awards" },
                { label: "Own It", href: "/own-it" },
                { label: "Track Me", href: "/track-me" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                        className="text-gray-400 hover:text-white text-sm underline underline-offset-2 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3, Follow us */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-5">Follow us</h3>
            <ul className="space-y-2.5">
              <li>
                <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white text-sm underline underline-offset-2 transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white text-sm underline underline-offset-2 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4, Contact Us */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-5">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm text-gray-400 leading-relaxed">
              <p>
                <span className="text-white">Address</span> - {CONTACT.address}
              </p>
              <p>
                <span className="text-white">Email</span> -{" "}
                <a href={`mailto:${CONTACT.email}`}
                   className="underline underline-offset-2 hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <span className="text-white">Call</span> -{" "}
                <a href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                   className="underline underline-offset-2 hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Lens N Latitudes. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center sm:text-right">
            Website designed by{" "}
            <a
              href="https://www.digitalnadu.com/"
              target="_blank"
              rel="noopener"
              className="text-gray-300 hover:text-white underline underline-offset-2 transition-colors"
            >
              DigitalNadu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
