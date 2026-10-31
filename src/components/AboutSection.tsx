"use client";

import { motion } from "framer-motion";
import { Wrench, Sparkles, LifeBuoy, UserCog, ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    title: "Specialized engineering",
    desc: "Legacy modernization, complex integrations, database optimization and application development. This is where our experience runs deepest.",
    icon: Wrench,
  },
  {
    title: "AI & automation",
    desc: "Smaller, clearly scoped projects that automate processes, process documents or add AI to the systems you already run.",
    icon: Sparkles,
  },
  {
    title: "Ongoing technical services",
    desc: "Maintenance, monitoring, integration support, performance reviews and continued development, on a predictable monthly basis.",
    icon: LifeBuoy,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About ConceptLab Solutions"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden border-t border-[#E5E2DC]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Positioning */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
              ABOUT CONCEPTLAB
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D] leading-[1.1]">
              Software engineering, modernization &amp; intelligent automation.
            </h2>

            <p className="text-base sm:text-lg text-[#535E73] leading-relaxed">
              ConceptLab Solutions is a software engineering studio built on
              real business-systems experience. We help companies develop new
              software, modernize legacy applications, integrate enterprise
              systems and introduce automation where it pays off.
            </p>

            <p className="text-base text-[#535E73] leading-relaxed">
              We are not an AI-only shop. AI is most useful when it works with the
              systems a business already depends on, and that is where we focus.
            </p>
          </div>

          {/* RIGHT: How we work with clients */}
          <div className="lg:col-span-7 space-y-5">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E2DC] shadow-[0_4px_20px_rgba(22,28,45,0.03)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1E2745] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#161C2D]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#535E73] leading-relaxed mt-1.5">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Fractional senior engineering callout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl p-6 sm:p-7 bg-[#1E2745] text-white">
              <div className="flex gap-4">
                <UserCog className="w-6 h-6 text-[#66A8FF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-lg">Fractional senior engineering</h3>
                  <p className="text-sm text-[#A0ABBA] leading-relaxed mt-1">
                    Senior technical guidance for smaller businesses that need
                    experience, but not a full-time senior developer.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[5px] bg-[#0070F3] hover:bg-[#005FD1] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
              >
                <span>Talk to us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
