import React from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0E2E17] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#2E6F40] flex items-center justify-center text-white shrink-0">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white uppercase leading-none">
                DAVE'S GARDENS &amp; PROPERTY MAINTENANCE
              </span>
            </div>

            <p className="text-sm text-neutral-300 max-w-sm mb-6 leading-relaxed">
              Reliable, affordable garden services across Shropshire.
            </p>

            <div className="text-xs text-neutral-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Serving Oswestry, Shrewsbury, Telford, Ellesmere &amp; Shropshire</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href="mailto:davidsgardenmaintenance1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  davidsgardenmaintenance1@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Phone & Fast Call */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Direct Contact
            </p>
            <div className="space-y-3">
              <a
                href="tel:+447399406002"
                className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2E6F40]" />
                <span>07399 406002</span>
              </a>
              <p className="text-xs text-neutral-300">
                Call or WhatsApp anytime for free quotes and friendly advice.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors"
                >
                  Request Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Dave's Garden &amp; Property Maintenance. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
