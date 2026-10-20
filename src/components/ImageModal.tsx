import React, { useEffect } from "react";
import { X, MapPin, ArrowRight } from "lucide-react";
import { GalleryItem } from "../data/galleryData";

interface ImageModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onRequestQuote: (serviceCategory: string) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  item,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close image modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="relative aspect-4/3 w-full bg-[#0E2E17]">
          <img
            src={item.imageUrl}
            alt={item.alt}
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Info */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E6F40]">
              {item.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#2E6F40]" />
              <span>{item.location}</span>
            </div>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#0E2E17] mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-neutral-700 mb-6 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-neutral-100">
            <p className="text-xs text-neutral-500">
              Need similar work for your Shropshire property?
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(item.category);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors cursor-pointer"
            >
              <span>Request Quote For This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
