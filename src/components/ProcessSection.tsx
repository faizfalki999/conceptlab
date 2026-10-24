"use client";

import { motion } from "framer-motion";
import { Compass, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    desc: "We analyze your business model, audit existing codebases, and map out a bulletproof technical specification with zero guesswork.",
    icon: Compass,
    deliverables: ["Technical Architecture Blueprint", "Scope & Milestone Schedule", "Tech Stack Selection"],
  },
  {
    step: "02",
    title: "Design",
    duration: "Week 1–2",
    desc: "Conversion-focused, pixel-perfect UX/UI tailored for high engagement. We design interactive Figma prototypes before writing code.",
    icon: Palette,
    deliverables: ["Interactive Component System", "Responsive Mobile Flows", "Brand Styling & Tokens"],
  },
  {
    step: "03",
    title: "Build",
    duration: "Week 2–3",
    desc: "Rapid full-stack engineering using Next.js 16, clean TypeScript, and serverless infrastructure. Daily progress updates on private staging.",
    icon: Code2,
    deliverables: ["Clean Modular Codebase", "AI Voice & Chat Integrations", "Database & Auth Setup"],
  },
  {
    step: "04",
    title: "Launch & Support",
    duration: "Week 4+",
    desc: "Rigorous performance audit, Lighthouse 95+ verification, seamless DNS cutover, and 24/7 proactive retainer monitoring.",
    icon: Rocket,
    deliverables: ["100% Client Code Ownership", "Lighthouse 95+ Audit Passed", "Ongoing SLA Retainers"],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Our Process"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden border-t border-[#E5E2DC]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            THE PROCESS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D]">
            From concept to production in 4 simple steps.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            A transparent, sprint-based workflow designed to eliminate endless
            agency meetings and get your product into users&apos; hands fast.
          </p>
        </div>

        {/* 4-Step Grid with Connecting Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-7 border border-[#E5E2DC] shadow-[0_4px_20px_rgba(22,28,45,0.03)] hover:shadow-[0_16px_40px_rgba(22,28,45,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Step Number & Duration Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-extrabold text-2xl text-[#161C2D] tracking-tight group-hover:text-[#0070F3] transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-[#8490A5] bg-[#F3F1EC] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon mark */}
                  <div className="w-10 h-10 rounded-xl bg-[#1E2745] text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-extrabold text-xl text-[#161C2D] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#535E73] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-5 border-t border-[#F0ECE4] space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0ABBA] block">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-medium text-[#161C2D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
