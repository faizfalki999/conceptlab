import HeroOrbitTrack from "./HeroOrbitTrack";
import AiTeamCard from "./AiTeamCard";
import { SERVICES } from "@/data/services";

const STATS = [
  { value: "100%", label: "Client code ownership" },
  { value: "24/7", label: "Support & monitoring" },
  { value: String(SERVICES.length), label: "Specialized services" },
];

export default function Hero() {
  return (
    <section
      aria-label="Concept Lab Hero"
      className="relative overflow-hidden bg-[#F3F1EC] pt-4 sm:pt-6 pb-16 lg:pb-0 lg:h-[880px]"
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
      {/* DESKTOP: CURVED ARC TRACK, SERVICE ORBIT & STATS          */}
      {/* ========================================================= */}
      <div className="hidden lg:block absolute inset-0 max-w-[1360px] mx-auto pointer-events-none">
        {/* Smaller laptops: scaled down, orb rests lower so the card clears the copy */}
        <div className="xl:hidden absolute top-0 -right-10 w-[1000px] origin-top-right scale-[0.8]">
          <HeroOrbitTrack
            height={1100}
            left={305}
            cy={487}
            radius={580}
            track={137}
            orb={82}
            anchorDeg={-18}
            cardSide="left"
          />
        </div>
        <div className="hidden xl:block absolute top-0 -right-10 w-[1000px]">
          <HeroOrbitTrack
            height={1100}
            left={305}
            cy={487}
            radius={580}
            track={137}
            orb={82}
            anchorDeg={-4}
            cardSide="left"
          />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 w-full pt-6 sm:pt-10">
        {/* Desktop stats, inside the ring */}
        <dl className="hidden lg:flex absolute right-10 xl:right-14 top-[150px] xl:top-[170px] w-[170px] xl:w-[200px] flex-col gap-10 xl:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-[15px] text-[#535E73] mt-1.5">{stat.label}</dt>
              <dd className="text-[52px] xl:text-[64px] font-extrabold leading-none tracking-tight text-[#161C2D]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="max-w-xl">
          {/* Tag (FROM IDEA TO LAUNCH) */}
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-[#FCEEE9] text-[#E8501F] text-[11px] font-extrabold uppercase tracking-widest mb-6 sm:mb-8">
            FROM IDEA TO LAUNCH
          </div>

          {/* Headline (Line 1 Bold, Line 2 Regular) */}
          <h1 className="text-[40px] sm:text-5xl lg:text-[50px] xl:text-[58px] leading-[1.06] tracking-tight text-[#161C2D]">
            <span className="font-extrabold block">We build websites, apps.</span>
            <span className="font-normal block mt-1.5">
              Built to grow your business.
            </span>
          </h1>

          {/* Short Subtext */}
          <p className="text-base sm:text-lg text-[#535E73] mt-6 sm:mt-7 max-w-md leading-relaxed">
            High-performance websites, custom SaaS MVPs and AI agents
            engineered to scale operations so your business grows.
          </p>

          {/* CTA Button */}
          <div className="mt-7 sm:mt-9">
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 rounded-[5px] bg-[#E8501F] hover:bg-[#D44213] text-white font-bold text-[13px] tracking-[0.18em] uppercase shadow-[0_4px_16px_rgba(232,80,31,0.28)] hover:shadow-[0_6px_22px_rgba(232,80,31,0.38)] active:scale-[0.99] transition-all"
            >
              BOOK A CALL
            </a>
          </div>
        </div>

        {/* MOBILE / TABLET: arc + orbiting service, then stats */}
        <div className="lg:hidden mt-10 -mx-6 sm:mx-0 sm:max-w-[440px]">
          <HeroOrbitTrack
            className="w-full"
            height={300}
            left={52}
            cy={150}
            radius={340}
            track={84}
            orb={60}
            anchorDeg={0}
            cardSide="right"
          />
        </div>

        <dl className="lg:hidden mt-8 grid grid-cols-3 gap-4 border-t border-[#E2DED6] pt-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-[12px] sm:text-sm text-[#535E73] mt-1 leading-snug">
                {stat.label}
              </dt>
              <dd className="text-[30px] sm:text-[40px] font-extrabold leading-none tracking-tight text-[#161C2D]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* AI team card stack */}
        <div className="mt-12 lg:mt-14">
          <AiTeamCard />
        </div>
      </div>
    </section>
  );
}
