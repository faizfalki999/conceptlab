"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Technology strip
const TECH_LOGOS = [
  ".NET",
  "C#",
  "SQL Server",
  "Azure",
  "REST APIs",
  "Python",
  "React",
  "OpenAI",
];

// Workflow tabs (interactive card)
const TABS = [
  {
    id: "modernize",
    label: "MODERNIZE",
    name: "Legacy Modernization",
    nodes: ["VB6", "WinForms", "WebForms", "Access", ".NET 8", "ASP.NET Core"],
    metrics: [
      { label: "Approach", val: "Incremental, module by module" },
      { label: "Risk", val: "Old and new run side by side" },
      { label: "Business Rules", val: "Documented and preserved" },
      { label: "Ownership", val: "100% client code & Git" },
    ],
  },
  {
    id: "integrate",
    label: "INTEGRATE",
    name: "Enterprise Integration",
    nodes: ["ERP", "CRM", "Accounting", "REST", "Webhooks", "Queues"],
    metrics: [
      { label: "Data Flow", val: "Automatic, no re-keying" },
      { label: "Reliability", val: "Retries, logging & alerts" },
      { label: "Interfaces", val: "Documented, versioned APIs" },
      { label: "Visibility", val: "Every transfer traceable" },
    ],
  },
  {
    id: "database",
    label: "DATABASE",
    name: "SQL Server Optimization",
    nodes: ["Query Store", "Indexes", "T-SQL", "Reports", "Backups", "Monitoring"],
    metrics: [
      { label: "Focus", val: "Slowest queries fixed first" },
      { label: "Method", val: "Profiling real workloads" },
      { label: "Health", val: "Maintenance & backups reviewed" },
      { label: "Hand-over", val: "Documented baseline & actions" },
    ],
  },
  {
    id: "apps",
    label: "CUSTOM APPS",
    name: "Custom .NET Applications",
    nodes: ["C#", "ASP.NET Core", "Blazor", "React", "Azure", "SQL Server"],
    metrics: [
      { label: "Built For", val: "Line-of-business workflows" },
      { label: "Quality", val: "Tested & documented code" },
      { label: "Hosting", val: "Azure or your own servers" },
      { label: "Longevity", val: "Designed to be maintained" },
    ],
  },
  {
    id: "automation",
    label: "AI AUTOMATION",
    name: "Intelligent Automation",
    nodes: ["Documents", "OpenAI", "Validation", "Workflows", "ERP", "Review"],
    metrics: [
      { label: "Scope", val: "One process, piloted first" },
      { label: "Control", val: "Validation & human review" },
      { label: "Fit", val: "Built on existing systems" },
      { label: "Outcome", val: "Measured before scaling" },
    ],
  },
  {
    id: "support",
    label: "SUPPORT",
    name: "Maintenance & Support",
    nodes: ["Monitoring", "Patching", "Fixes", "Reviews", "Backlog", "Releases"],
    metrics: [
      { label: "Coverage", val: "Monitoring & incident response" },
      { label: "Upkeep", val: "Security patches & updates" },
      { label: "Improvement", val: "Planned monthly development" },
      { label: "Billing", val: "Predictable monthly retainer" },
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Assess & Map",
    desc: "We review existing systems, code, data and integrations before recommending anything.",
  },
  {
    title: "Stabilize",
    desc: "Tests, monitoring and documentation around the critical paths, so change becomes safe.",
  },
  {
    title: "Modernize Incrementally",
    desc: "Rebuild and upgrade in small releases while the business keeps running.",
  },
  {
    title: "Integrate & Automate",
    desc: "Connect systems through reliable APIs and add AI automation where it pays off.",
  },
  {
    title: "Support & Improve",
    desc: "Ongoing maintenance, performance reviews and continued development.",
  },
];

export default function TechStripAndWorkflow() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];

  return (
    <section
      id="how-we-work"
      aria-label="How ConceptLab Works"
      className="bg-[#1E2745] text-white pt-16 sm:pt-20 pb-24 sm:pb-32 relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[350px] bg-[#0070F3]/10 blur-[130px] rounded-full pointer-events-none overflow-hidden" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] bg-[#253157]/40 blur-[120px] rounded-full pointer-events-none overflow-hidden" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* ========================================================= */}
        {/* TOP: TECH WE WORK WITH STRIP (shot_02 exact style)        */}
        {/* ========================================================= */}
        <div className="pb-16 sm:pb-20 border-b border-white/10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#A0ABBA] mb-8">
            Technologies &amp; Frameworks We Engineer With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 opacity-80 hover:opacity-100 transition-opacity">
            {TECH_LOGOS.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wider text-white/90 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN SPLIT: HOW IT WORKS (shot_02 exact 2-column layout)  */}
        {/* ========================================================= */}
        <div className="pt-16 sm:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Tag, Heading, Subtext, Step Rows */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white/10 border border-white/10 text-white text-[11px] font-extrabold uppercase tracking-widest">
              HOW WE WORK
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.12] tracking-tight">
              Modern capabilities, without throwing away what works.
            </h2>

            <p className="text-base sm:text-lg text-[#A0ABBA] leading-relaxed max-w-lg font-normal">
              We stabilize the systems you rely on, modernize them step by step,
              connect them through reliable integrations and add automation where
              it delivers real value.
            </p>

            {/* Vertical Step Rows with subtle hover arrows (shot_02 style) */}
            <div className="pt-4 divide-y divide-white/10 border-t border-white/10">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div
                  key={step.title}
                  className="group py-4 sm:py-5 flex items-start justify-between gap-4 cursor-pointer hover:pl-2 transition-all duration-200"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#0070F3] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0ABBA] mt-1 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#0070F3] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High-End Interactive Workflow Mockup Card (shot_02) */}
          <div className="lg:col-span-6">
            <div className="bg-[#141B30] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
              
              {/* Pill Tabs at the top (shot_02: JSON, TEAMS, API, TMS, PDF, SLACK) */}
              <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/10">
                {TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === idx
                        ? "bg-white text-[#161C2D] shadow-md scale-105"
                        : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Central Flow Diagram (shot_02: animated flow lines connecting into glowing node) */}
              <div className="py-8 relative min-h-[220px] flex flex-col items-center justify-center">
                {/* Flow lines converging to central glowing orb */}
                <svg
                  className="w-full h-36 text-white/20 overflow-visible"
                  viewBox="0 0 500 140"
                  fill="none"
                >
                  {/* Converging flow lines */}
                  <path d="M 40,20 C 120,60 180,70 250,70" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 120,20 C 160,50 200,70 250,70" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 200,20 C 220,40 235,60 250,70" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 300,20 C 280,40 265,60 250,70" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 380,20 C 340,50 300,70 250,70" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 460,20 C 380,60 320,70 250,70" stroke="currentColor" strokeWidth="1.5" />

                  {/* Downward output beam */}
                  <path d="M 250,70 L 250,140" stroke="url(#flowBeam)" strokeWidth="4" />

                  <defs>
                    <linearGradient id="flowBeam" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0070F3" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0070F3" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Central glowing orb (shot_02 glowing dot) */}
                <div className="absolute top-[68px] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0070F3] to-[#66A8FF] shadow-[0_0_30px_rgba(0,112,243,0.8)] flex items-center justify-center animate-pulse">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Nodes label pills above flow lines */}
                <div className="absolute top-2 inset-x-0 flex items-center justify-between px-2 text-[10px] font-bold text-white/60 tracking-wider uppercase">
                  {currentTab.nodes.slice(0, 6).map((node, i) => (
                    <span key={node} className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom White Summary Card (shot_02 Freight Data Summary card style) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 text-[#161C2D] shadow-xl"
                >
                  <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#E5E2DC]">
                    <span className="font-extrabold text-xs uppercase tracking-wider text-[#161C2D]">
                      {currentTab.name} Output Summary
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production Ready
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {currentTab.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-xl bg-[#F8F7F5] border border-[#EDEAE4] flex items-center justify-between text-xs sm:text-sm"
                      >
                        <span className="font-semibold text-[#535E73]">{m.label}</span>
                        <span className="font-bold text-[#161C2D] text-right">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
