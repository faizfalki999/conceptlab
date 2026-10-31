"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

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
            Engineering for the systems your business runs on.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            We modernize the software you depend on, build what is missing,
            connect it all together and automate the work in between.
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
                    <div className="w-8 h-1 rounded-full bg-[#E5E2DC] group-hover:bg-[#0070F3] transition-colors duration-200" />
                    <div className="w-9 h-9 rounded-xl bg-[#F3F1EC] group-hover:bg-[#1E2745] text-[#1E2745] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-[#161C2D] group-hover:text-[#0070F3] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description (2 clean lines) */}
                  <p className="text-sm text-[#535E73] mt-3 leading-relaxed">
                    {service.detail}
                  </p>
                </div>

                {/* Bottom Tag & Arrow Link */}
                <div className="pt-6 mt-6 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#8490A5] uppercase tracking-wider">
                    {service.tag}
                  </span>
                  <a
                    href="#contact"
                    className="p-1.5 rounded-full text-[#8490A5] group-hover:text-[#0070F3] group-hover:bg-[#E6F0FE] transition-all"
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
