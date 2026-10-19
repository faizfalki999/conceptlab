import HeroOrbitTrack from "./HeroOrbitTrack";
import { SERVICES } from "@/data/services";

export default function Hero() {
  return (
    <section
      aria-label="Concept Lab Hero"
      className="relative overflow-hidden bg-[#F3F1EC] pt-4 sm:pt-6 pb-16 sm:pb-20 min-h-[780px] lg:h-[860px] flex flex-col justify-between"
    >
      {/* Visually hidden list of services for search engines and AI crawlers */}
      <div className="sr-only">
        <h2>Concept Lab Specialized Services</h2>
        <ul>
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <a href={`/services/${service.slug}`}>
                {service.name}: {service.description}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ========================================================= */}
      {/* THE CURVED ARC TRACK & SERVICE ORBIT                      */}
      {/* ========================================================= */}
      <HeroOrbitTrack />

      {/* ========================================================= */}
      {/* MAIN HERO CONTENT (EXACT LAYOUT & TYPOGRAPHY)             */}
      {/* ========================================================= */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 w-full pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Tag, Headline, Subtext, Orange Button */}
          <div className="lg:col-span-8 max-w-xl">
            {/* Tag (FROM IDEA TO LAUNCH) */}
            <div className="inline-block px-3 py-1.5 rounded-[4px] bg-[#FCEEE9] text-[#E8501F] text-[11px] font-extrabold uppercase tracking-widest mb-6 sm:mb-8">
              FROM IDEA TO LAUNCH
            </div>

            {/* Headline (Line 1 Bold, Line 2 Regular) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.08] tracking-tight text-[#161C2D]">
              <span className="font-extrabold block text-[#161C2D]">
                We build websites, apps.
              </span>
              <span className="font-normal block text-[#161C2D] mt-1.5">
                Built to grow your business.
              </span>
            </h1>

            {/* Short Subtext */}
            <p className="text-base sm:text-lg text-[#535E73] mt-6 sm:mt-7 max-w-md leading-relaxed font-normal">
              High-performance websites, custom SaaS MVPs and AI agents
              engineered to scale operations so your business grows.
            </p>

            {/* CTA Button */}
            <div className="mt-7 sm:mt-9">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[5px] bg-[#E8501F] hover:bg-[#D44213] text-white font-bold text-xs sm:text-[13px] tracking-[0.14em] uppercase shadow-[0_4px_16px_rgba(232,80,31,0.28)] hover:shadow-[0_6px_22px_rgba(232,80,31,0.38)] active:scale-[0.99] transition-all"
              >
                BOOK A CALL
              </a>
            </div>

            {/* MOBILE HERO STATS + ARC CONTAINER (under 'BOOK A CALL', screens under 1024px) */}
            <div
              className="lg:hidden relative w-full overflow-hidden mt-6"
              style={{ height: "420px" }}
            >
              {/* The Ring: 130vw circle, starts from right side, curves to left edge at left: 48px */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "130vw",
                  height: "130vw",
                  maxWidth: "520px",
                  maxHeight: "520px",
                  left: "48px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "38px solid #E5E2DC",
                }}
              />

              {/* The Dark Orb with waveform icon: 56px, centered on the ring's left edge */}
              <div
                className="absolute flex items-center justify-center z-10"
                style={{
                  width: "56px",
                  height: "56px",
                  left: "48px",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Directional motion blur trail puff behind orb */}
                <div
                  className="absolute -top-3.5 -right-2 w-14 h-14 rounded-full bg-[#1E2745]/35 pointer-events-none"
                  style={{ filter: "blur(12px)" }}
                />
                <div
                  className="absolute -top-6 -right-5 w-12 h-12 rounded-full bg-[#1E2745]/20 pointer-events-none"
                  style={{ filter: "blur(16px)" }}
                />

                {/* The 56px Dark Navy Orb */}
                <div className="relative w-14 h-14 rounded-full bg-[#1E2745] border-2 border-[#2D3A66] shadow-[0_8px_24px_rgba(30,39,69,0.3)] flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="4" y1="9" x2="4" y2="15" />
                    <line x1="8" y1="6" x2="8" y2="18" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="16" y1="4" x2="16" y2="20" />
                    <line x1="20" y1="10" x2="20" y2="14" />
                  </svg>
                </div>
              </div>

              {/* The 3 Stats inside the ring: left: 110px, vertically centered */}
              <div
                className="absolute z-10 space-y-6 text-left"
                style={{
                  left: "110px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#161C2D]">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#535E73] mt-1">
                    Client code ownership
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#161C2D]">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#535E73] mt-1">
                    Support &amp; monitoring
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#161C2D]">
                    9
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#535E73] mt-1">
                    Specialized services
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}
