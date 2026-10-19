"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Search,
  Bot,
  PhoneCall,
  ShieldCheck,
  Layers,
  ShoppingBag,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "full-stack-web",
    title: "Full-Stack Website Development",
    desc: "Bespoke, blazing-fast web applications built with Next.js, TypeScript, and modern headless architectures.",
    tag: "Next.js 16 • Edge Deployed",
    icon: Globe,
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Website Development",
    desc: "High-converting online stores optimized for lightning-speed checkout, frictionless UX, and scalable payment processing.",
    tag: "High Conversion • Stripe",
    icon: ShoppingCart,
  },
  {
    id: "ai-visibility-seo",
    title: "SEO & AI Visibility Optimization",
    desc: "Rank on Google and get cited as the primary source in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    tag: "LLMs & Google AI Overviews",
    icon: Search,
  },
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development",
    desc: "Autonomous, context-aware conversational bots trained on your business data to handle customer inquiries 24/7.",
    tag: "Trained on Private Data",
    icon: Bot,
  },
  {
    id: "ai-voice-agents",
    title: "AI Call Bots & Voice Agents",
    desc: "Human-grade voice agents for inbound dispatch, lead qualification, and automatic calendar scheduling.",
    tag: "Sub-400ms Turn-Taking",
    icon: PhoneCall,
  },
  {
    id: "maintenance-retainers",
    title: "Maintenance & Support Retainers",
    desc: "Proactive uptime monitoring, security patches, performance tuning, and priority engineering iterations.",
    tag: "24/7 Continuous Monitoring",
    icon: ShieldCheck,
  },
  {
    id: "saas-mvp-development",
    title: "SaaS MVP Development",
    desc: "From concept to production software in 2–4 weeks with user authentication, database architecture, and billing.",
    tag: "Production Ready in 3 Weeks",
    icon: Layers,
  },
  {
    id: "custom-shopify",
    title: "Custom Shopify Themes & Apps",
    desc: "Tailored Shopify Liquid themes and custom private apps engineered for brands that have outgrown templates.",
    tag: "Bespoke Theme & API",
    icon: ShoppingBag,
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    desc: "Native-feel iOS and Android mobile applications built for fluid 60fps performance and offline-first capabilities.",
    tag: "iOS & Android Single Stack",
    icon: Smartphone,
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header Section (shot_14 style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            OUR SERVICES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D]">
            Everything your business needs online.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            From ground-up web platforms to autonomous voice bots, we engineer
            high-performance digital software designed to scale your operations.
          </p>
        </div>

        {/* 3x3 Card Grid (shot_14 card style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E2DC] shadow-[0_4px_20px_rgba(22,28,45,0.03)] hover:shadow-[0_16px_40px_rgba(22,28,45,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Accent Dash (from shot_14) + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-1 rounded-full bg-[#E5E2DC] group-hover:bg-[#E8501F] transition-colors duration-200" />
                    <div className="w-9 h-9 rounded-xl bg-[#F3F1EC] group-hover:bg-[#1E2745] text-[#1E2745] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-[#161C2D] group-hover:text-[#E8501F] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description (2 clean lines) */}
                  <p className="text-sm text-[#535E73] mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Tag & Arrow Link */}
                <div className="pt-6 mt-6 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#8490A5] uppercase tracking-wider">
                    {service.tag}
                  </span>
                  <a
                    href="#contact"
                    className="p-1.5 rounded-full text-[#8490A5] group-hover:text-[#E8501F] group-hover:bg-[#FCEEE9] transition-all"
                    aria-label={`Get started with ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
