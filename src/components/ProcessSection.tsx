"use client";

import { motion } from "framer-motion";
import { Search, Map as MapIcon, Code2, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Assess",
    duration: "1–2 Weeks",
    desc: "We review your existing systems, code, data and integrations to understand what works, what is fragile and what the business actually needs.",
    icon: Search,
    deliverables: ["System & Code Assessment", "Risk & Dependency Map", "Business Priorities Agreed"],
  },
  {
    step: "02",
    title: "Plan",
    duration: "1 Week",
    desc: "A practical roadmap: what to modernize, rebuild, integrate or automate first, in which order, and how to do it without disrupting operations.",
    icon: MapIcon,
    deliverables: ["Modernization Roadmap", "Architecture Proposal", "Milestones & Estimates"],
  },
  {
    step: "03",
    title: "Build & Modernize",
    duration: "Iterative",
    desc: "Delivery in small, tested increments. Old and new systems run side by side where needed, with regular demos and no big-bang cutovers.",
    icon: Code2,
    deliverables: ["Tested, Documented Code", "Integrations & Data Migration", "Staged Releases"],
  },
  {
    step: "04",
    title: "Support & Evolve",
    duration: "Ongoing",
    desc: "Monitoring, maintenance, performance reviews and continued development, so the software keeps pace with the business.",
    icon: LifeBuoy,
    deliverables: ["100% Client Code Ownership", "Monitoring & Maintenance", "Ongoing Improvements"],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="approach"
      aria-label="Our Approach"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden border-t border-[#E5E2DC]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            OUR APPROACH
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D]">
            A low-risk path from assessment to long-term support.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            Every engagement starts with understanding what you already have,
            then improves it in stages you can see, test and rely on.
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
