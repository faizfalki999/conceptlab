"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AGENTS = [
  {
    name: "Document Processing",
    description: "Reads invoices, orders and forms, then posts validated data into your ERP.",
    tags: ["Invoices", "Extraction", "ERP"],
  },
  {
    name: "Workflow Automation",
    description: "Routes approvals, syncs systems and flags exceptions without manual re-keying.",
    tags: ["Approvals", "Sync", "Alerts"],
  },
  {
    name: "AI Support Assistant",
    description: "Answers staff and customer questions from your own documents and data.",
    tags: ["Knowledge", "Tickets", "Hand-off"],
  },
];

export default function AiTeamCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % AGENTS.length),
      4500
    );
    return () => window.clearInterval(id);
  }, []);

  const agent = AGENTS[index];

  return (
    <div>
      <div className="text-[11px] font-bold tracking-[0.16em] text-[#8490A5] uppercase mb-4">
        Intelligent automation
      </div>

      <div className="relative w-full max-w-[280px]">
        {/* Stacked cards peeking out behind */}
        <div className="absolute inset-0 translate-x-2 -translate-y-3 rotate-[1.5deg] rounded-[10px] bg-white/50 border border-[#E8E4DC]/70" />
        <div className="absolute inset-0 translate-x-1 -translate-y-1.5 rotate-[0.75deg] rounded-[10px] bg-white/75 border border-[#E8E4DC]/80" />

        <div className="relative rounded-[10px] bg-white border border-[#ECE9E3] shadow-[0_10px_30px_rgba(22,28,45,0.06)] px-5 py-5 min-h-[150px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[13px] font-bold tracking-[0.04em] text-[#161C2D] uppercase">
                {agent.name}
              </div>
              <p className="mt-2.5 text-[12px] leading-relaxed text-[#535E73]">
                {agent.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-[4px] bg-[#F1F3F7] text-[9px] font-bold tracking-[0.08em] text-[#3A4560] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
