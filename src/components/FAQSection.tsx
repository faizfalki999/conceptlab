"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, HelpCircle } from "lucide-react";

const FAQ_CATEGORIES = [
  "General",
  "Technical",
  "AI Capabilities",
  "Pricing & Retainers",
];

const FAQS = [
  {
    category: "General",
    q: "What is Concept Lab, and how do you differ from traditional agencies?",
    a: "Concept Lab is an agile engineering and AI studio for founders and SMBs. Unlike bloated agencies that hand off work to junior freelancers and drown projects in account management fees, we work in fast 2–4 week production sprints with senior engineers, providing clean code, direct Slack communication, and guaranteed turnaround times.",
  },
  {
    category: "General",
    q: "Do I own 100% of the code and intellectual property?",
    a: "Yes, completely. All source code, Figma design files, database configurations, and deployment setups belong entirely to you from day one. We hand over the private Git repository with full documentation and zero vendor lock-in.",
  },
  {
    category: "Technical",
    q: "How fast can you build and launch a custom website or SaaS MVP?",
    a: "Standard landing pages and brand websites launch in 1 to 2 weeks. Custom SaaS MVPs, bespoke Shopify themes, or specialized AI platforms typically launch in 3 to 4 weeks. Every project is broken into clear milestones with staging previews updated continuously.",
  },
  {
    category: "AI Capabilities",
    q: "How do your AI voice agents and chatbots connect to our existing tools?",
    a: "We integrate directly with your stack via REST APIs and Webhooks. Voice bots connect to Twilio, LiveKit, and your existing telephony, while chatbots sync with your CRM (HubSpot, Salesforce), support desks (Zendesk, Intercom), and private databases via secure retrieval-augmented generation (RAG).",
  },
  {
    category: "AI Capabilities",
    q: "What is AI Visibility SEO, and how does it help my business?",
    a: "Traditional SEO focuses only on Google blue links. AI Visibility SEO structures your site’s schema, entities, and citations so large language models—including ChatGPT Search, Perplexity, Gemini, and Google AI Overviews—actively reference and recommend your business when prospective clients ask questions.",
  },
  {
    category: "Pricing & Retainers",
    q: "What happens after launch? Do you provide ongoing maintenance?",
    a: "Yes. We offer monthly maintenance retainers covering 24/7 uptime monitoring, security patches, performance audits, and dedicated monthly development hours for continuous feature additions and optimizations.",
  },
  {
    category: "Pricing & Retainers",
    q: "How does your pricing work?",
    a: "We offer transparent, fixed-scope sprint pricing for new builds so there are never surprise hourly invoices. After an initial discovery call, we provide a fixed quote with clear milestones and deliverables.",
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
            All About Concept Lab, Explained
          </h2>

          <p className="text-base sm:text-lg text-[#535E73] leading-relaxed font-normal max-w-2xl mx-auto">
            Everything you need to know about how Concept Lab fits into your
            workflow, from setup and code ownership to AI capabilities and retainers.
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
