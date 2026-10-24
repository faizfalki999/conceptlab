"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "ecommerce",
    title: "E-Commerce Growth Platform",
    client: "Direct-to-Consumer Brand",
    stats: [
      { val: "68%", label: "Faster Page Load", detail: "Sub-1.2s mobile LCP" },
      { val: "+42%", label: "Mobile Checkout Conv.", detail: "Streamlined 1-page checkout" },
      { val: "+$180K", label: "Added Annual GMV", detail: "Attributed to speed gains" },
    ],
    problem: "The client suffered from bloated WordPress plugins, 6.2-second mobile load times, and a 78% cart abandonment rate on mobile.",
    problemTag: "SLOW MONOLITH & 6S LOAD",
    solution: "Engineered a headless Next.js 16 storefront connected to Shopify APIs with instant edge-rendered catalog caching.",
    solutionTag: "HEADLESS NEXT.JS + EDGE",
    quote: "“The new store is lightning fast. Our conversion rates climbed immediately after launch, and bounce rates dropped by half.”",
    author: "Elena Rostova",
    role: "Head of Growth",
  },
  {
    id: "saas-mvp",
    title: "B2B SaaS MVP Sprint",
    client: "Workflow Automation Startup",
    stats: [
      { val: "3 Wks", label: "Time to Production", detail: "Zero to first paying user" },
      { val: "100%", label: "Automated Billing", detail: "Stripe multi-tier billing" },
      { val: "$45K", label: "Initial Seed MRR", detail: "Within 60 days of launch" },
    ],
    problem: "The founder had a proven spreadsheet model but was losing enterprise deals due to lack of a secure, production web app.",
    problemTag: "MANUAL SPREADSHEET OPS",
    solution: "Designed and engineered an enterprise-grade Next.js SaaS MVP with Supabase PostgreSQL, Stripe subscriptions, and team workspaces.",
    solutionTag: "PRODUCTION NEXT.JS SAAS",
    quote: "“Concept Lab delivered our entire MVP in 3 weeks flat. The code quality gave investors the confidence to lead our seed round.”",
    author: "Marcus Vance",
    role: "Founder & CEO",
  },
  {
    id: "voice-agent",
    title: "AI Voice Dispatch Agent",
    client: "Commercial Logistics & Fleet",
    stats: [
      { val: "94%", label: "Inbound Calls Answered", detail: "Zero dropped calls" },
      { val: "Sub-400ms", label: "Voice Latency", detail: "Natural conversational flow" },
      { val: "16 Hrs/wk", label: "Staff Time Saved", detail: "Automated driver dispatch" },
    ],
    problem: "Dispatchers spent 4+ hours daily answering routine status calls and logging availability into legacy TMS software.",
    problemTag: "OVERWHELMED DISPATCH PHONE",
    solution: "Deployed a customized Twilio + LiveKit voice agent that handles natural caller dialogue, checks driver GPS status, and updates the database.",
    solutionTag: "AUTONOMOUS VOICE DISPATCH",
    quote: "“Our drivers love it. Calls are answered instantly without holding, and dispatchers focus only on high-priority exceptions.”",
    author: "David Chen",
    role: "VP of Operations",
  },
  {
    id: "shopify-plus",
    title: "Custom Shopify Plus Theme",
    client: "Luxury Apparel Retailer",
    stats: [
      { val: "99", label: "Lighthouse Mobile Score", detail: "Zero layout shift" },
      { val: "+31%", label: "Average Order Value", detail: "Dynamic bundle upsells" },
      { val: "0 Extra Apps", label: "Reduced Plugin Bloat", detail: "Custom native Liquid logic" },
    ],
    problem: "Third-party Shopify apps were slowing down the site and crashing during high-volume flash sales.",
    problemTag: "APP BLOAT & SYSTEM CRASHES",
    solution: "Rebuilt the entire store with a bespoke Liquid theme, native bundle logic, and zero extraneous JavaScript scripts.",
    solutionTag: "CLEAN BESPOKE THEME",
    quote: "“We did our biggest Black Friday in company history with zero downtime and a flawless checkout experience.”",
    author: "Sophie Dubois",
    role: "E-Commerce Director",
  },
];

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CASE_STUDIES[activeTab];

  return (
    <section
      id="work"
      aria-label="Our Work & Case Studies"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden border-t border-[#E5E2DC]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header (shot_10 exact style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            CASE STUDIES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D]">
            Real Work. Real Impact.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            Explore practical case studies where Concept Lab transforms slow,
            manual workflows into instant, intelligent digital products.
          </p>
        </div>

        {/* Main Grid: Left Tabs + Right Case Study Card (shot_10 style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Vertical Tab List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="space-y-1.5">
              {CASE_STUDIES.map((study, idx) => (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    activeTab === idx
                      ? "bg-white text-[#161C2D] shadow-sm border-l-4 border-l-[#0070F3] border border-[#E5E2DC]"
                      : "text-[#535E73] hover:text-[#161C2D] hover:bg-white/50"
                  }`}
                >
                  <span>{study.title}</span>
                  {activeTab === idx && (
                    <ArrowUpRight className="w-4 h-4 text-[#0070F3]" />
                  )}
                </button>
              ))}
            </div>

            {/* Testimonial Quote (shot_10 bottom left) */}
            <div className="pt-8 mt-6 border-t border-[#E5E2DC] text-left">
              <p className="text-sm italic text-[#535E73] leading-relaxed">
                {current.quote}
              </p>
              <div className="mt-3">
                <span className="font-bold text-xs text-[#161C2D] block">
                  {current.author}
                </span>
                <span className="text-[11px] text-[#8490A5]">
                  {current.role} &bull; {current.client}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Case Study Card (shot_10 exact layout) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-9 border border-[#E5E2DC] shadow-[0_8px_30px_rgba(22,28,45,0.05)] space-y-8"
              >
                {/* Top 3-Stat Row (shot_10 3-stat row) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-7 border-b border-[#F0ECE4]">
                  {current.stats.map((st) => (
                    <div key={st.label}>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#161C2D] tracking-tight">
                        {st.val}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#161C2D] mt-1">
                        {st.label}
                      </div>
                      <div className="text-[11px] text-[#8490A5] mt-0.5">
                        {st.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-heading */}
                <h3 className="text-2xl font-bold text-[#161C2D]">
                  {current.title}
                </h3>

                {/* Split Panel: Problem (Light) vs Solution (Navy) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Problem Card (Light) */}
                  <div className="p-6 rounded-2xl bg-[#F8F7F5] border border-[#E5E2DC] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#535E73] uppercase tracking-wider mb-3">
                        <AlertCircle className="w-4 h-4 text-[#8490A5]" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-sm text-[#535E73] leading-relaxed">
                        {current.problem}
                      </p>
                    </div>
                    <div className="mt-6 pt-3">
                      <span className="inline-block px-3 py-1 rounded-[4px] bg-[#E8E4DC] text-[#161C2D] text-[10px] font-bold tracking-wider uppercase">
                        {current.problemTag}
                      </span>
                    </div>
                  </div>

                  {/* Solution Card (Deep Navy) */}
                  <div className="p-6 rounded-2xl bg-[#1E2745] text-white flex flex-col justify-between shadow-md">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider mb-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0070F3]" />
                        <span>The Solution</span>
                      </div>
                      <p className="text-sm text-[#A0ABBA] leading-relaxed">
                        {current.solution}
                      </p>
                    </div>
                    <div className="mt-6 pt-3">
                      <span className="inline-block px-3 py-1 rounded-[4px] bg-[#253157] text-[#FF8C66] text-[10px] font-bold tracking-wider uppercase border border-white/10">
                        {current.solutionTag}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
