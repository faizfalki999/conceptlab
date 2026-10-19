"use client";

import { useEffect, useRef, useState } from "react";

// Blur puff configuration for organic motion-blur trail
const TRAIL_PUFFS = [
  { offsetDeg: 2, radius: 41, opacity: 0.82, blur: 8 },
  { offsetDeg: 5, radius: 40, opacity: 0.70, blur: 11 },
  { offsetDeg: 9, radius: 38, opacity: 0.55, blur: 14 },
  { offsetDeg: 14, radius: 36, opacity: 0.40, blur: 17 },
  { offsetDeg: 20, radius: 34, opacity: 0.26, blur: 21 },
  { offsetDeg: 27, radius: 31, opacity: 0.14, blur: 25 },
  { offsetDeg: 35, radius: 28, opacity: 0.05, blur: 30 },
];

export default function HeroOrbitTrack() {
  const requestRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);

  // SVG coordinate dimensions: viewBox 0 0 1200 880
  const cx = 1180;
  const cy = 480;
  const R = 550;
  const trackWidth = 140;

  // Arc boundaries in degrees:
  // Top entrance: +80° (sweeps in above the stats from top right)
  // Leftmost apex: 0° (X = 630px, Y = 480px, to the left of the stats)
  // Bottom exit: -70° (exits below the screen)
  const arcTopDeg = 80;
  const arcBottomDeg = -70;
  const totalArcSpan = arcTopDeg - arcBottomDeg; // 150 degrees

  const [frameData, setFrameData] = useState<{
    discs: Array<{
      id: string;
      type: "cl" | "soundwave";
      head: { x: number; y: number };
      puffs: Array<{ x: number; y: number; radius: number; opacity: number; blur: number }>;
      opacity: number;
    }>;
  }>({
    discs: [
      {
        id: "disc-cl",
        type: "cl",
        head: { x: 894, y: 72 },
        puffs: TRAIL_PUFFS.map((p) => ({
          x: 1180 - 550 * Math.cos(((62 + p.offsetDeg) * Math.PI) / 180),
          y: 480 - 550 * Math.sin(((62 + p.offsetDeg) * Math.PI) / 180),
          radius: p.radius,
          opacity: p.opacity,
          blur: p.blur,
        })),
        opacity: 1,
      },
      {
        id: "disc-soundwave",
        type: "soundwave",
        head: { x: 815, y: 750 },
        puffs: TRAIL_PUFFS.map((p) => ({
          x: 1180 - 550 * Math.cos(((-13 + p.offsetDeg) * Math.PI) / 180),
          y: 480 - 550 * Math.sin(((-13 + p.offsetDeg) * Math.PI) / 180),
          radius: p.radius,
          opacity: p.opacity,
          blur: p.blur,
        })),
        opacity: 1,
      },
    ],
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const getPos = (deg: number) => {
      const rad = (deg * Math.PI) / 180;
      return {
        x: cx - R * Math.cos(rad),
        y: cy - R * Math.sin(rad), // Y increases downwards as deg decreases
      };
    };

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!prefersReducedMotion) {
        // Discs travel smoothly downwards (1 full cycle ~ 14s)
        progressRef.current = (progressRef.current + delta * 0.07) % 1;
      }

      const p = progressRef.current;

      // 2 Discs spaced across the track
      const discTypes: Array<"cl" | "soundwave"> = ["cl", "soundwave"];

      const discs = discTypes.map((type, index) => {
        // Spaced by 0.5 (half-cycle apart)
        const discP = (p + index * 0.5) % 1;
        const discDeg = arcTopDeg - discP * totalArcSpan;

        const head = getPos(discDeg);

        // Calculate opacity fade at the extreme top and bottom ends
        let opacity = 1;
        if (discDeg > 65) {
          opacity = Math.max(0, (arcTopDeg - discDeg) / 15);
        } else if (discDeg < -55) {
          opacity = Math.max(0, (discDeg - arcBottomDeg) / 15);
        }

        // Generate the organic trailing blur puffs extending UPWARDS behind the disc
        const puffs = TRAIL_PUFFS.map((puff) => {
          const puffDeg = discDeg + puff.offsetDeg;
          const pos = getPos(puffDeg);
          return {
            x: pos.x,
            y: pos.y,
            radius: puff.radius,
            opacity: puff.opacity * opacity,
            blur: puff.blur,
          };
        });

        return {
          id: `disc-${type}`,
          type,
          head,
          puffs,
          opacity,
        };
      });

      setFrameData({ discs });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Compute wide beige stationary track path
  const radTop = (arcTopDeg * Math.PI) / 180;
  const radBottom = (arcBottomDeg * Math.PI) / 180;
  const trackStartX = cx - R * Math.cos(radTop);
  const trackStartY = cy - R * Math.sin(radTop);
  const trackEndX = cx - R * Math.cos(radBottom);
  const trackEndY = cy - R * Math.sin(radBottom);
  const trackPathD = `M ${trackStartX.toFixed(1)} ${trackStartY.toFixed(1)} A ${R} ${R} 0 0 0 ${trackEndX.toFixed(1)} ${trackEndY.toFixed(1)}`;

  return (
    <div
      className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="absolute right-0 top-0 w-[900px] lg:w-[1150px] xl:w-[1300px] h-full pointer-events-none"
        viewBox="0 0 1200 880"
        fill="none"
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          {/* Strict circular clip for CL logo to prevent any rectangular boundary */}
          <clipPath id="clCircleMask">
            <circle cx="0" cy="0" r="41.5" />
          </clipPath>
        </defs>

        {/* 1. SOLID WIDE BEIGE/GREY CIRCULAR TRACK (shot_01: smooth 140px ribbon) */}
        <path
          d={trackPathD}
          stroke="#E5E2DC"
          strokeWidth={trackWidth}
          strokeLinecap="butt"
          fill="none"
        />

        {/* 2. DIRECTIONAL SMOKE / SPEED BLUR TRAILS BEHIND EACH DISC */}
        {frameData.discs.map((disc) => (
          <g key={`trail-group-${disc.id}`}>
            {disc.puffs.map((puff, i) => (
              <circle
                key={`puff-${disc.id}-${i}`}
                cx={puff.x}
                cy={puff.y}
                r={puff.radius}
                fill="#1E2745"
                opacity={puff.opacity}
                style={{ filter: `blur(${puff.blur}px)` }}
              />
            ))}
          </g>
        ))}

        {/* 3. THE ORBITING DISCS (Sits right on the leading edge of the trail) */}
        {frameData.discs.map((disc) => (
          <g
            key={`disc-elem-${disc.id}`}
            transform={`translate(${disc.head.x}, ${disc.head.y})`}
            opacity={disc.opacity}
          >
            {/* DISC 1: Official Concept Lab 3D Blue CL Logo Disc */}
            {disc.type === "cl" && (
              <>
                <circle cx="0" cy="0" r="42" fill="#0B1120" />
                <g clipPath="url(#clCircleMask)">
                  <image
                    href="/brand/cl-icon.jpg"
                    x="-42"
                    y="-42"
                    width="84"
                    height="84"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
                <circle
                  cx="0"
                  cy="0"
                  r="42"
                  fill="none"
                  stroke="#1E2745"
                  strokeWidth="2.5"
                />
              </>
            )}

            {/* DISC 2: AI Voice Soundwave Bars (from Video & shot_01) */}
            {disc.type === "soundwave" && (
              <>
                <circle cx="0" cy="0" r="42" fill="#1E2745" />
                <line
                  x1="-16"
                  y1="-8"
                  x2="-16"
                  y2="8"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="-8"
                  y1="-14"
                  x2="-8"
                  y2="14"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="0"
                  y1="-8"
                  x2="0"
                  y2="8"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="-16"
                  x2="8"
                  y2="16"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="16"
                  y1="-6"
                  x2="16"
                  y2="6"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="42"
                  fill="none"
                  stroke="#2D3A66"
                  strokeWidth="2"
                />
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
