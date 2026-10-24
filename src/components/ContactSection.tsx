"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Clock, Sparkles, Send } from "lucide-react";

const SERVICES_OPTIONS = [
  "Full-Stack Website Development",
  "E-Commerce Website Development",
  "SEO & AI Visibility Optimization",
  "AI Chatbot Development",
  "AI Call Bots & Voice Agents",
  "Maintenance & Support Retainer",
  "SaaS MVP Development",
  "Custom Shopify Themes & Apps",
  "Cross-Platform Mobile Apps",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: SERVICES_OPTIONS[0],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: SERVICES_OPTIONS[0],
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact & Book a Call"
      className="bg-[#1E2745] text-white py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-[#0070F3]/10 blur-[140px] rounded-full pointer-events-none overflow-hidden" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Main Large Card Container (shot_05 style) */}
        <div className="bg-[#141B30] rounded-3xl border border-white/15 p-7 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* LEFT: Code-Built Visual Panel & Testimonial Guarantee (shot_05 style) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E2745] to-[#0D1224] p-8 border border-white/10 flex flex-col justify-between shadow-inner min-h-[460px]">
              
              {/* Top ambient badge */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#0070F3]" />
                  <span>24-Hour Reply Guarantee</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  We reply within 24 hours with an actionable blueprint.
                </h3>

                <p className="text-xs sm:text-sm text-[#A0ABBA] leading-relaxed">
                  No generic sales reps. You will speak directly with an engineer
                  who understands system architecture, budget scoping, and timelines.
                </p>
              </div>

              {/* Center graphic preview (conceptlab showcase) */}
              <div className="my-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-white">
                  <Sparkles className="w-4 h-4 text-[#0070F3]" />
                  <span>What to expect on your call:</span>
                </div>
                <ul className="text-xs text-[#A0ABBA] space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Exact sprint timeline &amp; fixed milestone quote</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Technical stack &amp; AI architecture breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>No obligation, 100% confidential advisory</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Testimonial (shot_05 bottom overlay) */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-black shrink-0 border border-white/20">
                  <Image
                    src="/brand/founder.jpg"
                    alt="Concept Lab Verified Client"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-snug">
                    “Feels like an extension of our core team.”
                  </p>
                  <p className="text-[11px] text-[#A0ABBA] mt-0.5">
                    Founders at US SaaS &amp; E-Com Brands
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT: Contact Form (shot_05 fields & submit button) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0070F3]/20 text-[#FF8C66] text-[10px] font-extrabold uppercase tracking-widest border border-[#0070F3]/30 mb-3">
                  BOOK A CALL
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Start Your Project with Concept Lab
                </h2>
                <p className="text-sm text-[#A0ABBA] mt-2">
                  Tell us about your digital product or AI vision. We will follow
                  up within 24 hours.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-white/5 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#A0ABBA] max-w-md mx-auto">
                    Thank you for reaching out. A senior engineer will review your
                    specifications and reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-[#253157]/50 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0070F3] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#253157]/50 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0070F3] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-lg bg-[#253157]/50 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0070F3] transition-colors"
                      />
                    </div>

                    {/* Service Selection Dropdown */}
                    <div>
                      <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#253157]/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0070F3] transition-colors"
                      >
                        {SERVICES_OPTIONS.map((srv) => (
                          <option key={srv} value={srv} className="bg-[#141B30] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold text-white/90 uppercase tracking-wider mb-1.5">
                      Project Overview &amp; Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build or automate..."
                      className="w-full px-4 py-3 rounded-lg bg-[#253157]/50 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0070F3] transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <p className="text-xs text-rose-400 font-medium">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button (shot_05 blue rectangular button) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-[5px] bg-[#0070F3] hover:bg-[#005FD1] text-white font-bold text-xs uppercase tracking-[0.14em] shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
