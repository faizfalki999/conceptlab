"use client";

import React from "react";

/**
 * ServiceOrbit Component
 * 
 * Checkpoint 1: Restore the original large curved ARC
 * - Open partial curve (NOT a closed circle/ring)
 * - Thick, soft grey stroke (126px) with round caps
 * - Starts off-screen at the top and sweeps down and around
 * - Soft grey gentle gradient slightly darker than the #F3F1EC page background
 * - Contained in its own section so stats sit cleanly below with zero overlap
 * - No animation yet
 */
export default function ServiceOrbit() {
  return (
    <div
      className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[620px] h-[260px] sm:h-[320px] lg:h-[440px] flex items-center justify-center select-none overflow-hidden"
      aria-label="Concept Lab Service Orbit Arc"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          {/* Soft grey gradient slightly darker than #F3F1EC page background */}
          <linearGradient id="serviceArcGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#EBE6DC" />
            <stop offset="45%" stopColor="#DDD8CE" />
            <stop offset="100%" stopColor="#E5E0D6" />
          </linearGradient>

          {/* Gentle edge shadow for soft tactile depth matching shot_01 */}
          <filter id="arcSoftDepth" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="-2"
              dy="6"
              stdDeviation="16"
              floodColor="#1E2745"
              floodOpacity="0.04"
            />
          </filter>
        </defs>

        {/* 1. SOFT BASE GLOW / DROP SHADOW */}
        <path
          d="M 680 -40 C 220 80 220 500 680 620"
          stroke="#E5E1D7"
          strokeWidth="136"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />

        {/* 2. THE MAIN OPEN CURVED ARC (thick stroke, round caps, soft grey gradient) */}
        <path
          id="serviceArcPath"
          d="M 680 -40 C 220 80 220 500 680 620"
          stroke="url(#serviceArcGrad)"
          strokeWidth="126"
          strokeLinecap="round"
          fill="none"
          filter="url(#arcSoftDepth)"
        />

        {/* 3. SUBTLE MIDLINE RUNNING ACCENT (shot_01 running-ribbon detail) */}
        <path
          d="M 680 -40 C 220 80 220 500 680 620"
          stroke="#D5D0C5"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
