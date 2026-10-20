import React from "react";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-[#0E2E17] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background garden image with measured contrast overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_shropshire_garden_1792525421407.jpg"
          alt="Lush manicured garden in Shropshire countryside with striped green lawn"
          className="w-full h-full object-cover object-center opacity-30"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0E2E17]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Shropshire location indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-300 mb-4">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Serving Shropshire &amp; Surrounding Areas</span>
            <span aria-hidden="true" className="text-emerald-500">·</span>
            <span>SY Postcodes</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 [text-wrap:balance]">
            Get Your Garden Ready. Professional Maintenance Across Shropshire.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Reliable, affordable, and no job too big or small. From regular lawn care
            to full garden clearances, we keep your property looking its best year-round.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors whitespace-nowrap shadow-md cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+447399406002"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call 07399 406002</span>
            </a>

            <a
              href="https://wa.me/447399406002?text=Hello%20Dave,%20I'd%20like%20to%20request%20a%20free%20quote%20for%20garden%20maintenance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-emerald-200 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Credibility Line (No pill badge, clean typography) */}
          <div className="pt-6 border-t border-white/15">
            <p className="text-sm sm:text-base text-neutral-300 font-medium flex items-center flex-wrap gap-2">
              <span className="text-emerald-400">🌿</span>
              <span>Reliable &amp; Affordable</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>No Job Too Big or Small</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>Free Quotations</span>
            </p>
          </div>
        </div>

        {/* Quick highlight bar at bottom of hero */}
        <div className="mt-12 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-white/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#2E6F40]/40 flex items-center justify-center shrink-0 text-emerald-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Quality Guarantee</p>
              <p className="text-sm font-semibold text-white">Attention to Detail</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#2E6F40]/40 flex items-center justify-center shrink-0 text-emerald-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Coverage</p>
              <p className="text-sm font-semibold text-white">Shropshire &amp; Borders</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#2E6F40]/40 flex items-center justify-center shrink-0 text-emerald-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Fast Response</p>
              <p className="text-sm font-semibold text-white">Call or WhatsApp</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#2E6F40]/40 flex items-center justify-center shrink-0 text-emerald-300">
              <span className="text-xs font-bold text-emerald-300">£0</span>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Pricing</p>
              <p className="text-sm font-semibold text-white">Free No-Obligation Quotes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
