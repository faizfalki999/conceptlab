"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const FAQ_CATEGORIES = [
  "General",
  "Modernization",
  "Integration & AI",
  "Engagement & Support",
];

const FAQS = [
  {
    category: "General",
    q: "What does ConceptLab Solutions do?",
    a: "ConceptLab is a software engineering and modernization studio. We build custom software, modernize legacy applications, integrate enterprise systems such as ERP and CRM platforms, optimize SQL Server databases and introduce focused AI automation, with ongoing support afterwards.",
  },
  {
    category: "General",
    q: "Do we own the code and intellectual property?",
    a: "Yes, completely. All source code, database scripts, documentation and deployment configuration belong to you. You get full access to the repository and no vendor lock-in.",
  },
  {
    category: "Modernization",
    q: "Do we have to rewrite our legacy application from scratch?",
    a: "Usually not. Big-bang rewrites are expensive and risky. We prefer to modernize incrementally: stabilizing the existing system, then replacing or upgrading it module by module while old and new run side by side, so the business never has to stop.",
  },
  {
    category: "Modernization",
    q: "Which legacy technologies can you work with?",
    a: "We regularly work with VB6, WinForms, ASP.NET WebForms, older .NET Framework applications, Microsoft Access front ends and long-running SQL Server databases, and move them onto modern, supported .NET.",
  },
  {
    category: "Integration & AI",
    q: "Can you connect our ERP, CRM and other systems?",
    a: "Yes. We design and build APIs and background integrations between ERP, CRM, accounting, e-commerce and in-house systems, with logging, retries and alerts so data moves reliably and problems are visible.",
  },
  {
    category: "Integration & AI",
    q: "How do you approach AI projects?",
    a: "We start small and practical: one clearly scoped process, such as document processing or a workflow approval, built on top of your existing systems with validation and human review. Once it delivers measurable value, it can be extended.",
  },
  {
    category: "Engagement & Support",
    q: "What happens after a project is delivered?",
    a: "We offer monthly maintenance and support covering monitoring, security updates, integration support, performance reviews and planned development time, so your software keeps pace with the business.",
  },
  {
    category: "Engagement & Support",
    q: "Can you provide senior technical guidance without a full project?",
    a: "Yes. Our fractional senior engineering service gives smaller businesses experienced technical leadership, such as architecture decisions, code reviews and vendor oversight, without hiring a full-time senior developer.",
  },
  {
    category: "Engagement & Support",
    q: "How does pricing work?",
    a: "Most engagements start with an assessment, followed by a quote with clear milestones. Ongoing support and fractional engineering are billed as predictable monthly retainers.",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(
    (item) => activeCategory === "General" || item.category === activeCategory
  );

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="bg-[#F3F1EC] py-24 sm:py-32 relative overflow-hidden border-t border-[#E5E2DC]"
    >
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header (shot_06 style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-white border border-[#E5E2DC] text-[#161C2D] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            FAQ
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161C2D]">
            Questions, answered.
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            What to expect when you work with ConceptLab, from modernizing
            legacy systems and integrations to AI projects and ongoing support.
          </p>
        </div>

        {/* Main FAQ Layout: Left Category Nav + Right Accordion (shot_06 style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Category Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-1.5 border-l-2 border-[#E5E2DC] pl-4">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`block w-full text-left py-2.5 text-base font-bold transition-colors ${
                    activeCategory === cat
                      ? "text-[#161C2D] -ml-[18px] pl-4 border-l-2 border-l-[#0070F3]"
                      : "text-[#8490A5] hover:text-[#161C2D]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Support Callout Box (shot_06 bottom left) */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E2DC] shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#161C2D] block">
                Didn&apos;t find your answer?
              </span>
              <p className="text-xs text-[#535E73] leading-relaxed">
                Have a unique architecture requirement or timeline question?
                Speak directly with an engineer.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F3F1EC] hover:bg-[#0070F3] text-[#161C2D] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Contact Support</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT: Accordion List (shot_06 style with open card styling) */}
          <div className="lg:col-span-8 space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#E8E4DC]/60 border-[#D8D3C8] shadow-sm"
                      : "bg-white border-[#E5E2DC] hover:border-[#D5D0C6]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-[#161C2D]">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-black/5 flex items-center justify-center shrink-0 text-[#161C2D]">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#535E73] leading-relaxed border-t border-black/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
