import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0E2E17] shadow-md py-3.5 border-b border-[#2E6F40]/30"
          : "bg-[#0E2E17] py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with clean leaf/garden icon */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white focus-visible:ring-2 focus-visible:ring-[#2E6F40] rounded group shrink-0"
            aria-label="Dave's Garden & Property Maintenance - Home"
          >
            <div className="w-9 h-9 rounded-md bg-[#2E6F40] flex items-center justify-center text-white shadow-sm shrink-0">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white leading-tight uppercase">
                Dave's Gardens
              </span>
              <span className="text-[10px] tracking-widest text-emerald-200/80 uppercase font-medium">
                &amp; Property Maintenance
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone Action & WhatsApp */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/447399406002?text=Hello%20Dave,%20I'd%20like%20to%20request%20a%20free%20quote%20for%20garden%20maintenance."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-lg border border-white/20 text-emerald-200 hover:text-white hover:bg-[#2E6F40]/30 transition-colors"
              title="WhatsApp: 07399 406002"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="tel:+447399406002"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>07399 406002</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp button + Mobile Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/447399406002?text=Hello%20Dave,%20I'd%20like%20to%20request%20a%20free%20quote%20for%20garden%20maintenance."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#2E6F40] rounded-md"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="tel:+447399406002"
              className="p-2 text-white bg-[#2E6F40] rounded-md"
              aria-label="Call Dave directly"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white rounded-md focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 pb-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+447399406002"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#2E6F40] rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call 07399 406002
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#0E2E17] bg-[#F4F6F3] rounded-lg"
                >
                  Get Free Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
