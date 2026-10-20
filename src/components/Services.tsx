import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    id: "lawn-mowing",
    title: "Lawn Mowing & Care",
    description: "Regular grass cutting, edging, and lawn maintenance for a pristine finish.",
    features: ["Precision mower striping", "Crisp border & pavement edging", "Grass clippings removal & disposal"],
  },
  {
    number: "02",
    id: "hedge-trimming",
    title: "Hedge Trimming & Pruning",
    description: "Professional shaping and trimming for hedges, bushes, and shrubs.",
    features: ["Conifer, laurel & box hedging", "Shrub thinning & height reductions", "Neat top & side beveling"],
  },
  {
    number: "03",
    id: "garden-clearance",
    title: "Garden Clearance & Weeding",
    description: "Clearing overgrown plots, leaf removal, and thorough weed control.",
    features: ["Overgrown vegetation cutbacks", "Root extraction & flower bed weeding", "Complete seasonal tidy-ups"],
  },
  {
    number: "04",
    id: "jet-washing",
    title: "Patio & Driveway Jet Washing",
    description: "Pressure washing for patios, paths, and driveways to eliminate grime and dirt.",
    features: ["Stone, slab & block paving cleaning", "Algae, moss & lichen removal", "Re-sanding & preventative treatment"],
  },
  {
    number: "05",
    id: "fencing-repairs",
    title: "Fencing & Gate Repairs",
    description: "Sturdy repairs and upkeep for boundary fences and garden gates.",
    features: ["Lap panel replacements", "Timber post stabilising & spurs", "Gate latch, hinge & frame fixes"],
  },
  {
    number: "06",
    id: "property-maintenance",
    title: "General Property Maintenance",
    description: "General odd jobs and outdoor property repairs handled professionally.",
    features: ["Gutter cleaning & clearance", "Exterior timber woodstaining", "Outdoor shed, step & wall touch-ups"],
  },
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#2E6F40] uppercase mb-2 block">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2E17] tracking-tight leading-tight [text-wrap:balance]">
            Gardening &amp; Property Services
          </h2>
          <p className="mt-3 text-base text-[#2D3730]">
            From routine scheduled upkeep to one-off heavy outdoor jobs, we provide
            dependable craftsmanship across Shropshire homes and grounds.
          </p>
        </div>

        {/* 6 Structured Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#F4F6F3] p-7 rounded-xl border border-neutral-200/90 hover:border-[#2E6F40] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Forest green numbering */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0E2E17] group-hover:text-[#2E6F40] transition-colors tabular-nums">
                    {service.number}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-[#0E2E17] group-hover:bg-[#2E6F40] group-hover:text-white group-hover:border-[#2E6F40] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={`Get quote for ${service.title}`}
                    title={`Select ${service.title} for quote`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-[#0E2E17] mb-2.5 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-[#2D3730] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Service Details Checklist */}
                <ul className="space-y-1.5 pt-4 border-t border-neutral-200/80 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-neutral-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E6F40] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#0E2E17] hover:text-white bg-white hover:bg-[#2E6F40] border border-neutral-300 hover:border-[#2E6F40] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Request Quote for {service.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
