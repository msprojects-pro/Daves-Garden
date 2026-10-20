import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Phone, MessageSquare } from "lucide-react";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("Lawn Mowing & Grass Cutting");

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F3] text-[#1A201C] selection:bg-[#2E6F40] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onQuoteClick={() => scrollToContact()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onQuoteClick={() => scrollToContact()} />

        {/* 2. About / Why Choose Dave's Gardens */}
        <About onQuoteClick={() => scrollToContact()} />

        {/* 3. Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 4. Our Work (Gallery) */}
        <Gallery onQuoteClick={(category) => scrollToContact(category)} />

        {/* 5. Contact / Free Quote */}
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar (Adheres to 15% Mobile Sticky Cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0E2E17] border-t border-[#2E6F40]/50 p-2.5 flex items-center justify-between gap-2 md:hidden shadow-lg">
        <a
          href="tel:+447399406002"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-[#2E6F40] rounded-lg transition-colors text-center"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 07399 406002</span>
        </a>
        <a
          href="https://wa.me/447399406002?text=Hello%20Dave,%20I'd%20like%20to%20request%20a%20free%20quote%20for%20garden%20maintenance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#0E2E17] bg-[#F4F6F3] rounded-lg transition-colors text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#2E6F40]" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
}
