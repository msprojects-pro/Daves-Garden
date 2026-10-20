import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Instagram,
  CheckCircle2,
  Send,
  Clock,
  RotateCcw,
} from "lucide-react";

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    service: "Lawn Mowing & Grass Cutting",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      // Find matching service option
      const match = servicesList.find((s) =>
        s.toLowerCase().includes(selectedService.toLowerCase()) ||
        selectedService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [selectedService]);

  const servicesList = [
    "Lawn Mowing & Grass Cutting",
    "Hedge Trimming & Shrub Pruning",
    "Weeding & Garden Clearance",
    "Patio & Driveway Jet Washing",
    "Fencing & Gate Repairs",
    "General Property Maintenance",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your full name.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please provide a valid phone number.";
    } else if (formData.phone.trim().length < 9) {
      errs.phone = "Please enter a valid UK phone number.";
    }
    if (!formData.location.trim()) {
      errs.location = "Please enter your Shropshire town or postcode.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      location: "",
      service: "Lawn Mowing & Grass Cutting",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Dave, I'd like a quote!%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Service:* ${encodeURIComponent(formData.service)}${formData.message ? `%0A*Message:* ${encodeURIComponent(formData.message)}` : ""}`;
    return `https://wa.me/447399406002?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0E2E17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4 [text-wrap:balance]">
            Get Your Free Quote Today
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Drop us a message or call directly to discuss your garden and property
            maintenance needs. We respond promptly and provide clear, no-obligation pricing.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Direct Details & Quick Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Direct Contact Details
              </h3>

              <div className="space-y-6">
                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E6F40] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      Phone &amp; WhatsApp
                    </p>
                    <a
                      href="tel:+447399406002"
                      className="text-lg font-bold text-white hover:text-emerald-300 transition-colors block"
                    >
                      07399 406002
                    </a>
                    <span className="text-xs text-neutral-400">
                      International: +44 7399 406002
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E6F40] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      Email
                    </p>
                    <a
                      href="mailto:davidsgardenmaintenance1@gmail.com"
                      className="text-base font-medium text-white hover:text-emerald-300 transition-colors break-all"
                    >
                      davidsgardenmaintenance1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E6F40] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      Service Area
                    </p>
                    <p className="text-base font-semibold text-white">
                      Shropshire, United Kingdom
                    </p>
                    <span className="text-xs text-neutral-400">
                      Covering SY postcodes &amp; surrounding towns
                    </span>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E6F40] text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      Instagram &amp; TikTok
                    </p>
                    <span className="text-base font-medium text-white">
                      @daves_gardens_sy10
                    </span>
                    <span className="block text-xs text-neutral-400">
                      Follow our latest garden cuts &amp; projects
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      Working Hours
                    </p>
                    <p className="text-sm text-neutral-200">
                      Monday – Saturday: 7:30 AM – 6:00 PM
                    </p>
                    <span className="text-xs text-emerald-300">
                      Weekend messages welcome
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Direct Buttons */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Fast Direct Actions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+447399406002"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors whitespace-nowrap shadow-sm text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 07399 406002</span>
                </a>

                <a
                  href="https://wa.me/447399406002?text=Hello%20Dave,%20I'd%20like%20to%20request%20a%20free%20quote%20for%20garden%20maintenance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#0E2E17] bg-[#F4F6F3] hover:bg-white rounded-lg transition-colors whitespace-nowrap text-center shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#2E6F40]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-8 sm:p-10 text-[#1A201C] shadow-lg border border-neutral-200">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-100 text-[#2E6F40] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E2E17] mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-[#0E2E17]">{formData.fullName}</strong>.
                    Dave will review your request for{" "}
                    <strong className="text-[#0E2E17]">{formData.service}</strong> in{" "}
                    <strong className="text-[#0E2E17]">{formData.location}</strong> and get back to you promptly.
                  </p>

                  <div className="p-4 bg-[#F4F6F3] rounded-lg border border-neutral-200 mb-6 text-left text-xs text-neutral-700">
                    <p className="font-semibold text-[#0E2E17] mb-1">Enquiry Summary:</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Location: {formData.location}</p>
                    <p>Service: {formData.service}</p>
                    {formData.message && <p>Details: {formData.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to Dave on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold text-neutral-700 hover:text-[#0E2E17] bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="text-2xl font-extrabold text-[#0E2E17] tracking-tight">
                      Request Your Free Quote
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Fill out the form below and we will get back to you with an honest estimate.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-[#0E2E17] uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        placeholder="e.g. Robert Davies"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1A201C] bg-[#F4F6F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6F40] ${
                          errors.fullName ? "border-red-500" : "border-neutral-300"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number & Location in 2 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold text-[#0E2E17] uppercase tracking-wider mb-1.5"
                        >
                          Phone Number <span className="text-emerald-700">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          placeholder="e.g. 07123 456789"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1A201C] bg-[#F4F6F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6F40] ${
                            errors.phone ? "border-red-500" : "border-neutral-300"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-xs font-bold text-[#0E2E17] uppercase tracking-wider mb-1.5"
                        >
                          Shropshire Location / Postcode <span className="text-emerald-700">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          value={formData.location}
                          onChange={(e) => {
                            setFormData({ ...formData, location: e.target.value });
                            if (errors.location) setErrors({ ...errors, location: "" });
                          }}
                          placeholder="e.g. Oswestry / SY10"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1A201C] bg-[#F4F6F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6F40] ${
                            errors.location ? "border-red-500" : "border-neutral-300"
                          }`}
                        />
                        {errors.location && (
                          <p className="mt-1 text-xs text-red-600">{errors.location}</p>
                        )}
                      </div>
                    </div>

                    {/* Service Required (Dropdown with the 6 services) */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold text-[#0E2E17] uppercase tracking-wider mb-1.5"
                      >
                        Service Required <span className="text-emerald-700">*</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-sm text-[#1A201C] bg-[#F4F6F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6F40] cursor-pointer"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message / Details */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold text-[#0E2E17] uppercase tracking-wider mb-1.5"
                      >
                        Project Details / Notes (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your garden size, approximate hedge height, or specific repairs needed..."
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-sm text-[#1A201C] bg-[#F4F6F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E6F40] resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-[#2E6F40] hover:bg-[#255b34] rounded-lg transition-colors cursor-pointer shadow-md disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Request Free Quote</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-neutral-500 pt-1">
                      🔒 No obligation. We will never share your contact details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
