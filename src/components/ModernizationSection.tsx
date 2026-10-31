"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

// Typical modernization engagements (illustrative scenarios, not client case studies)
const ENGAGEMENTS = [
  {
    id: "desktop-to-web",
    title: "Desktop App to Modern .NET",
    focus: [
      { val: "Phased", label: "Migration Plan", detail: "Module by module, no big-bang cutover" },
      { val: "Kept", label: "Business Rules", detail: "Existing logic documented and preserved" },
      { val: "Web", label: "New Access", detail: "Usable from any browser, securely" },
    ],
    problem:
      "A VB6 or WinForms application runs core operations, but only one person understands it, it only works on office PCs and every change feels risky.",
    problemTag: "VB6 • WINFORMS • ACCESS",
    solution:
      "We map the existing behaviour, put tests around the critical paths, then rebuild screen by screen on modern .NET, running old and new side by side until the switch-over.",
    solutionTag: "INCREMENTAL .NET REBUILD",
  },
  {
    id: "webforms-upgrade",
    title: "WebForms to Modern .NET",
    focus: [
      { val: "Supported", label: "Runtime", detail: "Off end-of-life .NET Framework" },
      { val: "Faster", label: "Releases", detail: "Automated builds and deployments" },
      { val: "Secure", label: "Foundation", detail: "Current patches and authentication" },
    ],
    problem:
      "An ASP.NET WebForms portal still works, but it is stuck on an old framework, hard to host, slow to change and increasingly difficult to secure.",
    problemTag: "END-OF-LIFE FRAMEWORK",
    solution:
      "We move features route by route onto modern ASP.NET Core, sharing the same database, so users keep working while the old pages are retired one at a time.",
    solutionTag: "ROUTE-BY-ROUTE MIGRATION",
  },
  {
    id: "erp-integration",
    title: "ERP & System Integration",
    focus: [
      { val: "One", label: "Source of Truth", detail: "Orders, stock and customers in sync" },
      { val: "No", label: "Re-keying", detail: "Data flows between systems automatically" },
      { val: "Logged", label: "Every Transfer", detail: "Clear errors, retries and alerts" },
    ],
    problem:
      "Teams copy data between the ERP, CRM, e-commerce and spreadsheets by hand, which causes delays, mismatched records and costly mistakes.",
    problemTag: "MANUAL DATA ENTRY",
    solution:
      "We design documented APIs and background integrations that move data reliably between systems, with monitoring so problems are caught before customers notice.",
    solutionTag: "API & QUEUE INTEGRATION",
  },
  {
    id: "sql-performance",
    title: "SQL Server Performance",
    focus: [
      { val: "Faster", label: "Key Queries", detail: "Slow reports and screens tuned" },
      { val: "Healthier", label: "Database", detail: "Indexes, maintenance and backups reviewed" },
      { val: "Clear", label: "Action List", detail: "Prioritized fixes with expected impact" },
    ],
    problem:
      "The database has grown for years. Reports time out, screens lag at month-end and nobody is sure which changes are safe to make.",
    problemTag: "SLOW REPORTS & TIMEOUTS",
    solution:
      "We profile real workloads, fix the worst queries and indexes first, and leave a documented health baseline so performance stays predictable.",
    solutionTag: "PROFILE • TUNE • MONITOR",
  },
  {
    id: "document-automation",
    title: "AI Document Automation",
    focus: [
      { val: "Scoped", label: "Pilot First", detail: "One process, measured before scaling" },
      { val: "Checked", label: "AI Output", detail: "Validation rules and human review" },
      { val: "Connected", label: "To Your ERP", detail: "Results land where work happens" },
    ],
    problem:
      "Staff spend hours reading invoices, orders or forms and typing the details into the ERP, slowing down approvals and payments.",
    problemTag: "MANUAL DOCUMENT HANDLING",
    solution:
      "We add AI extraction on top of your existing systems, with validation and review steps, so documents are processed faster without losing control.",
    solutionTag: "AI ON EXISTING SYSTEMS",
  },
];

export default function ModernizationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = ENGAGEMENTS[activeTab];

  return (
    <section
      id="modernization"
      aria-label="Legacy Software Modernization"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden border-t border-[#E5E2DC]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            MODERNIZATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D]">
            Modernize without starting over.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            Businesses want new capabilities, but they cannot simply discard the
            systems they depend on. We modernize in stages, so operations keep
            running while the software improves.
          </p>
        </div>

        {/* Main Grid: Left Tabs + Right Engagement Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT: Vertical Tab List */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8490A5] pb-1">
              Typical engagements
            </span>
            <div className="space-y-1.5">
              {ENGAGEMENTS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    activeTab === idx
                      ? "bg-white text-[#161C2D] shadow-sm border-l-4 border-l-[#0070F3] border border-[#E5E2DC]"
                      : "text-[#535E73] hover:text-[#161C2D] hover:bg-white/50"
                  }`}
                >
                  <span>{item.title}</span>
                  {activeTab === idx && (
                    <ArrowUpRight className="w-4 h-4 text-[#0070F3]" />
                  )}
                </button>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-8 mt-6 border-t border-[#E5E2DC] text-left space-y-3">
              <p className="text-sm text-[#535E73] leading-relaxed">
                Not sure where to start? A modernization review gives you a clear
                picture of risks, options and a realistic roadmap.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0070F3] hover:underline"
              >
                <span>Request a modernization review</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT: Engagement Card */}
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
                {/* Top 3-Point Focus Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-7 border-b border-[#F0ECE4]">
                  {current.focus.map((f) => (
                    <div key={f.label}>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#161C2D] tracking-tight">
                        {f.val}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#161C2D] mt-1">
                        {f.label}
                      </div>
                      <div className="text-[11px] text-[#8490A5] mt-0.5">
                        {f.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-heading */}
                <h3 className="text-2xl font-bold text-[#161C2D]">
                  {current.title}
                </h3>

                {/* Split Panel: Challenge (Light) vs Approach (Navy) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 rounded-2xl bg-[#F8F7F5] border border-[#E5E2DC] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#535E73] uppercase tracking-wider mb-3">
                        <AlertCircle className="w-4 h-4 text-[#8490A5]" />
                        <span>The Challenge</span>
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

                  <div className="p-6 rounded-2xl bg-[#1E2745] text-white flex flex-col justify-between shadow-md">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider mb-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0070F3]" />
                        <span>Our Approach</span>
                      </div>
                      <p className="text-sm text-[#A0ABBA] leading-relaxed">
                        {current.solution}
                      </p>
                    </div>
                    <div className="mt-6 pt-3">
                      <span className="inline-block px-3 py-1 rounded-[4px] bg-[#253157] text-[#66A8FF] text-[10px] font-bold tracking-wider uppercase border border-white/10">
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
