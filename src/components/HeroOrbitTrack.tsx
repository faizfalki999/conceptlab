"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { SERVICES } from "@/data/services";

// Blur puffs trailing behind the orb, as angle offsets (degrees) up the arc
const TRAIL_PUFFS = Array.from({ length: 16 }, (_, i) => {
  const k = i / 15;
  return {
    offsetDeg: 1 + i * 2.2,
    scale: 0.95 - k * 0.4,
    opacity: 0.55 * Math.pow(1 - k, 1.6),
  };
});

// Timeline for each service (ms): slide in, hold at the anchor, slide out
const ENTER_MS = 1500;
const HOLD_MS = 3000;
const EXIT_MS = 1300;
const CYCLE_MS = ENTER_MS + HOLD_MS + EXIT_MS;

interface HeroOrbitTrackProps {
  /** Container height in px */
  height: number;
  /** X of the arc's leftmost point (track centre line), from the container's left edge */
  left: number;
  /** Y of the circle centre */
  cy: number;
  /** Radius of the track centre line */
  radius: number;
  /** Track thickness */
  track: number;
  /** Orb diameter */
  orb: number;
  /** Angle (deg, 0 = leftmost point, positive = up) where the orb pauses */
  anchorDeg: number;
  /** Where the service card sits: beside the orb, or in a fixed slot below the arc */
  cardSide: "left" | "right" | "bottom";
  className?: string;
  /** Extra content layered over the arc (e.g. stats inside the ring) */
  children?: ReactNode;
}

export default function HeroOrbitTrack({
  height,
  left,
  cy,
  radius: R,
  track,
  orb,
  anchorDeg,
  cardSide,
  className = "",
  children,
}: HeroOrbitTrackProps) {
  const cx = left + R;
  const filterId = `orbTrailBlur-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const orbRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGGElement>(null);
  const [index, setIndex] = useState(0);
  const [holding, setHolding] = useState(true);

  const getPos = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx - R * Math.cos(rad), y: cy - R * Math.sin(rad) };
  };

  // Angles where the orb is fully outside the container (top and bottom)
  const topDeg = (Math.asin(Math.min(1, (cy + orb) / R)) * 180) / Math.PI;
  const bottomDeg =
    (-Math.asin(Math.min(1, (height - cy + orb) / R)) * 180) / Math.PI;
  // Angles where the orb starts touching the container edge
  const edgeTopDeg = (Math.asin(Math.min(1, (cy - orb / 2) / R)) * 180) / Math.PI;
  const edgeBottomDeg =
    (-Math.asin(Math.min(1, (height - cy - orb / 2) / R)) * 180) / Math.PI;

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const place = (deg: number) => {
      const { x, y } = getPos(deg);
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${x - orb / 2}px, ${y - orb / 2}px)`;
        // Fade the orb out as it nears either end so it never pops at the clip edge
        const fade = Math.min(1, (edgeTopDeg - deg) / 14, (deg - edgeBottomDeg) / 14);
        orbRef.current.style.opacity = String(Math.max(0, fade));
      }
      trailRef.current?.setAttribute("transform", `rotate(${deg} ${cx} ${cy})`);
    };

    if (reduced) {
      place(anchorDeg);
      const id = window.setInterval(
        () => setIndex((i) => (i + 1) % SERVICES.length),
        HOLD_MS
      );
      return () => window.clearInterval(id);
    }

    // Start mid-hold so the first frame matches the static layout
    const start = performance.now() - ENTER_MS - 400;
    let lastCycle = 0;
    let lastHolding = true;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const cycle = Math.floor(elapsed / CYCLE_MS);
      const t = elapsed % CYCLE_MS;

      let deg: number;
      let isHolding = false;
      if (t < ENTER_MS) {
        const k = 1 - Math.pow(1 - t / ENTER_MS, 3); // ease-out
        deg = topDeg + (anchorDeg - topDeg) * k;
      } else if (t < ENTER_MS + HOLD_MS) {
        deg = anchorDeg;
        isHolding = true;
      } else {
        const k = Math.pow((t - ENTER_MS - HOLD_MS) / EXIT_MS, 3); // ease-in
        deg = anchorDeg + (bottomDeg - anchorDeg) * k;
      }

      place(deg);

      if (cycle !== lastCycle) {
        lastCycle = cycle;
        setIndex(cycle % SERVICES.length);
      }
      if (isHolding !== lastHolding) {
        lastHolding = isHolding;
        setHolding(isHolding);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cx, cy, R, orb, anchorDeg, topDeg, bottomDeg, edgeTopDeg, edgeBottomDeg]);

  const service = SERVICES[index];
  const Icon = service.icon;
  const anchor = getPos(anchorDeg);
  const initial = getPos(anchorDeg);

  // Mid-page (phones) the arc's cut ends would show, so fade them out
  const fadeMask =
    "linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)";
  const edgeFade =
    cardSide === "bottom"
      ? { maskImage: fadeMask, WebkitMaskImage: fadeMask }
      : undefined;

  const cardBody = (
    <>
      <div className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.12em] text-[#0070F3] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" />
        Service {index + 1}/{SERVICES.length}
      </div>
      <div className="mt-1 text-[13px] font-bold text-[#161C2D] leading-tight">
        {service.name}
      </div>
      <div className="mt-0.5 text-[11px] text-[#535E73] leading-snug">
        {service.description}
      </div>
    </>
  );

  return (
    <div className={className}>
      <div className="relative overflow-hidden select-none" style={{ height }}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={edgeFade}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <filter id={filterId} x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation={orb * 0.2} />
            </filter>
          </defs>

          {/* Wide stationary track */}
          <circle cx={cx} cy={cy} r={R} stroke="#E8E5DF" strokeWidth={track} />
        </svg>

        {children}

        {/* Service card, pinned next to the orb's resting point */}
        {cardSide !== "bottom" && (
          <div
            aria-live="polite"
            className={`absolute z-10 rounded-[10px] border border-[#E2DED6] bg-[#F7F5F1]/95 shadow-[0_6px_20px_rgba(22,28,45,0.06)] transition-all duration-300 ${
              holding ? "opacity-100" : "opacity-0"
            } ${cardSide === "left" ? "pr-10 pl-4" : "pl-10 pr-4"} py-3`}
            style={{
              top: anchor.y,
              left:
                cardSide === "left"
                  ? anchor.x - orb / 2 + 22
                  : anchor.x + orb / 2 - 22,
              width: 240,
              transform: `translate(${cardSide === "left" ? "-100%" : "0"}, -50%) translateY(${
                holding ? 0 : 6
              }px)`,
            }}
          >
            {cardBody}
          </div>
        )}

        {/* Motion-blur trail (rotated around the circle centre to follow the orb) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          style={edgeFade}
          fill="none"
          aria-hidden="true"
        >
          <g
            ref={trailRef}
            transform={`rotate(${anchorDeg} ${cx} ${cy})`}
            filter={`url(#${filterId})`}
          >
            {TRAIL_PUFFS.map((p) => {
              const pos = getPos(p.offsetDeg);
              return (
                <circle
                  key={p.offsetDeg}
                  cx={pos.x}
                  cy={pos.y}
                  r={(orb / 2) * p.scale}
                  fill="#1E2745"
                  opacity={p.opacity}
                />
              );
            })}
          </g>
        </svg>

        {/* The orb */}
        <div
          ref={orbRef}
          aria-hidden="true"
          className="absolute left-0 top-0 z-30 rounded-full bg-[#1E2745] border-2 border-[#2D3A66] shadow-[0_10px_28px_rgba(30,39,69,0.35)] flex items-center justify-center will-change-transform"
          style={{
            width: orb,
            height: orb,
            transform: `translate(${initial.x - orb / 2}px, ${initial.y - orb / 2}px)`,
          }}
        >
          <Icon className="text-white" style={{ width: orb * 0.36, height: orb * 0.36 }} strokeWidth={2.2} />
        </div>
      </div>

      {/* Fixed card slot below the arc (phones): always visible, content swaps per service */}
      {cardSide === "bottom" && (
        <div
          aria-live="polite"
          className="relative z-10 rounded-[10px] border border-[#E2DED6] bg-white shadow-[0_6px_20px_rgba(22,28,45,0.06)] px-4 py-3 min-h-[78px]"
        >
          <div key={index} className="animate-[heroCardIn_400ms_ease-out]">
            {cardBody}
          </div>
        </div>
      )}
    </div>
  );
}
