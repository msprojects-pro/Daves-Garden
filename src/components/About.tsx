import React from "react";
import { Check, MapPin, ArrowRight } from "lucide-react";

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick }) => {
  const towns = [
    "Oswestry",
    "Shrewsbury",
    "Telford",
    "Ellesmere",
    "Wem",
    "Whitchurch",
    "Church Stretton",
    "Market Drayton",
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#0E2E17]/10 shadow-sm bg-white">
              <img
                src="/src/assets/images/about_garden_craft_1792525421926.jpg"
                alt="Pristine residential garden and pathway in Shropshire countryside"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0E2E17]">
                  <MapPin className="w-4 h-4 text-[#2E6F40]" />
                  <span>Shropshire Residential Care</span>
                </div>
                <span className="text-xs text-neutral-500">Established Local Service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Trust Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small green label (clean unboxed text, no pill) */}
            <span className="text-xs font-bold tracking-widest text-[#2E6F40] uppercase mb-3">
              ABOUT DAVE'S GARDENS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2E17] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Keeping Your Property Looking Its Best.
            </h2>

            <p className="text-base sm:text-lg text-[#2D3730] leading-relaxed mb-8">
              Based in Shropshire, Dave's Garden &amp; Property Maintenance provides
              reliable, high-quality outdoor care for residential properties.
              Whether your garden needs a seasonal tidy-up, routine lawn mowing,
              or general property upkeep, we handle every job with care and
              attention to detail.
            </p>

            {/* Trust Points with green checkmarks (#2E6F40) */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#2E6F40] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E2E17]">
                    Reliable &amp; Affordable Local Service
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Punctual visits, honest upfront pricing, and tidy work with all green waste removed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#2E6F40] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E2E17]">
                    No Job Too Big or Small
                  </h3>
                  <p className="text-sm text-neutral-600">
                    From quick fortnightly front lawn cuts to extensive plot clearances and fence replacements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#2E6F40] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E2E17]">
                    Free, No-Obligation Quotes via Phone or WhatsApp
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Send photos or schedule a visit to receive a clear, straightforward estimate with no hidden costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Coverage Footprint */}
            <div className="pt-6 border-t border-neutral-200">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Regular Service Coverage in Shropshire:
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-700">
                {towns.map((town, idx) => (
                  <span key={town}>
                    {town}
                    {idx < towns.length - 1 && (
                      <span aria-hidden="true" className="text-neutral-400 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2E6F40] hover:text-[#0E2E17] transition-colors cursor-pointer group"
                >
                  <span>Request an estimate for your property</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
