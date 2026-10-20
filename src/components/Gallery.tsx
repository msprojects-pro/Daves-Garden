import React, { useState } from "react";
import { galleryItems, GalleryItem } from "../data/galleryData";
import { ImageModal } from "./ImageModal";
import { MapPin, Maximize2, ArrowRight } from "lucide-react";

interface GalleryProps {
  onQuoteClick: (serviceCategory?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onQuoteClick }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F4F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#2E6F40] uppercase mb-2 block">
            OUR WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2E17] tracking-tight leading-tight [text-wrap:balance]">
            Recent Garden &amp; Property Projects
          </h2>
          <p className="mt-3 text-base text-[#2D3730]">
            Take a look at real transformations completed for our residential clients across Shropshire.
          </p>
        </div>

        {/* 6 Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-xs hover:border-[#2E6F40] transition-all duration-200 flex flex-col"
            >
              {/* Image Container with Zoom Affordance */}
              <div
                className="relative aspect-4/3 overflow-hidden bg-neutral-100 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-white text-[#0E2E17] shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-[#2E6F40] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-neutral-500">
                      <MapPin className="w-3 h-3 text-[#2E6F40]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0E2E17] mb-2 group-hover:text-[#2E6F40] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-semibold text-neutral-700 hover:text-[#2E6F40] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuoteClick(item.category)}
                    className="text-xs font-bold text-[#2E6F40] hover:text-[#0E2E17] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Below Gallery */}
        <div className="mt-16 bg-[#0E2E17] text-white rounded-xl p-8 sm:p-10 border border-[#2E6F40]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Ready to get your garden looking its best?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300">
              Get in touch with Dave today for honest advice and a fast, free quotation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onQuoteClick()}
            className="px-7 py-3.5 text-sm font-bold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors whitespace-nowrap shadow-md cursor-pointer shrink-0"
          >
            Request Free Quote
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onRequestQuote={(category) => onQuoteClick(category)}
      />
    </section>
  );
};

export default Gallery;
