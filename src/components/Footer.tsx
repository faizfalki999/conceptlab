"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#141B30] text-white pt-20 sm:pt-28 pb-10 sm:pb-16 relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP CTA: Let's Upgrade Your Vision (shot_07 style)        */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Exceptional Together.
          </h2>

          <p className="text-base sm:text-lg text-[#A0ABBA] leading-relaxed font-normal">
            Partner with Concept Lab for high-performance websites, scalable
            SaaS MVPs, and intelligent AI agents built for real business growth.
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[6px] bg-[#E8501F] hover:bg-[#D44213] text-white font-bold text-xs uppercase tracking-[0.14em] shadow-lg active:scale-[0.99] transition-all"
            >
              BOOK A CALL
            </a>
          </div>
        </div>

        {/* Partner / Collaborator Row (shot_07 style) */}
        <div className="pb-14 mb-14 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#A0ABBA]">
          <span className="font-bold uppercase tracking-wider text-white/60">
            Engineered For Scale With
          </span>
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 opacity-75 font-semibold text-white/90">
            <span>▲ Next.js</span>
            <span>⚛ React</span>
            <span>🛍 Shopify Plus</span>
            <span>✦ OpenAI</span>
            <span>⚡ Supabase</span>
            <span>▲ Vercel Edge</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4 ROUNDED LINK CARDS (shot_07 exact style)                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-white/10">
          
          {/* CARD 1: Brand & Newsletter */}
          <div className="bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-black overflow-hidden flex items-center justify-center border border-white/20">
                  <Image
                    src="/brand/cl-icon.jpg"
                    alt="Concept Lab"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-extrabold text-base text-white tracking-tight">
                  Concept<span className="text-[#0070F3]">Lab</span>
                </span>
              </div>
              <p className="text-xs text-[#A0ABBA] leading-relaxed">
                Transforms concepts into production software. Senior engineering
                &amp; AI development for founders and SMBs.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block mb-2">
                Sign Up To Our Newsletter
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8501F]"
                />
                <button
                  type="button"
                  className="p-2 rounded-lg bg-[#E8501F] text-white hover:bg-[#D44213] transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: Menu */}
          <div className="bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Menu
            </span>
            <ul className="space-y-2.5 text-xs text-[#A0ABBA]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  &bull; Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  &bull; Process &amp; Workflow
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  &bull; Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  &bull; FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  &bull; Book a Discovery Call
                </a>
              </li>
            </ul>
          </div>

          {/* CARD 3: Social & Presence */}
          <div className="bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Connect
            </span>
            <ul className="space-y-2.5 text-xs text-[#A0ABBA]">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  &bull; X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  &bull; LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  &bull; GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@conceptlab.solutions"
                  className="hover:text-white transition-colors"
                >
                  &bull; contact@conceptlab.solutions
                </a>
              </li>
            </ul>
          </div>

          {/* CARD 4: Feature Spotlight / Insight (shot_07 style) */}
          <div className="bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8501F]/20 text-[#FF8C66] text-[10px] font-bold uppercase tracking-wider border border-[#E8501F]/30">
                <Sparkles className="w-3 h-3" />
                <span>AI Engineering</span>
              </span>
              <h4 className="text-sm font-bold text-white leading-snug">
                Why Modern Teams Deploy Next.js &amp; Autonomous AI
              </h4>
              <p className="text-xs text-[#A0ABBA] leading-relaxed">
                Manual workflows are holding businesses back. Learn how autonomous
                chat and voice agents scale customer operations without hiring.
              </p>
            </div>
            <a
              href="#services"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#E8501F] hover:underline"
            >
              <span>Explore AI Solutions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Copyright and Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8490A5]">
          <p>&copy; 2026 Concept Lab Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Security</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* OVERSIZED DECORATIVE BRAND TEXT AT BOTTOM (shot_07 style) */}
        {/* ========================================================= */}
        <div
          className="mt-12 -mb-20 sm:-mb-24 overflow-hidden select-none pointer-events-none text-center"
          aria-hidden="true"
        >
          <span className="font-extrabold tracking-tighter text-[80px] sm:text-[140px] md:text-[200px] lg:text-[250px] leading-none text-white/[0.05] block whitespace-nowrap">
            CONCEPT LAB
          </span>
        </div>

      </div>
    </footer>
  );
}
