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
      id="top"
      aria-label="ConceptLab Solutions Hero"
      className="relative overflow-hidden bg-[#F3F1EC] pt-4 sm:pt-6 pb-16 lg:pb-0 lg:h-[880px]"
    >
      {/* Visually hidden list of services for search engines and AI crawlers */}
      <div className="sr-only">
        <h2>ConceptLab Solutions Services</h2>
        <ul>
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <a href="#services">
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
          {/* Tag */}
          <div className="inline-block px-3 py-1.5 rounded-[4px] bg-[#E6F0FE] text-[#0070F3] text-[11px] font-extrabold uppercase tracking-widest mb-6 sm:mb-8">
            SOFTWARE ENGINEERING &amp; MODERNIZATION
          </div>

          {/* Headline (tagline: two bold lines, one regular) */}
          <h1 className="text-[40px] sm:text-5xl lg:text-[50px] xl:text-[58px] leading-[1.06] tracking-tight text-[#161C2D]">
            <span className="font-extrabold block">Build new.</span>
            <span className="font-extrabold block">Modernize existing.</span>
            <span className="font-normal block mt-1.5">Automate smarter.</span>
          </h1>

          {/* Short Subtext */}
          <p className="text-base sm:text-lg text-[#535E73] mt-6 sm:mt-7 max-w-md leading-relaxed">
            We help businesses develop software, modernize legacy applications,
            integrate enterprise systems and introduce intelligent automation.
          </p>

          {/* CTA Button */}
          <div className="mt-7 sm:mt-9">
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 rounded-[5px] bg-[#0070F3] hover:bg-[#005FD1] text-white font-bold text-[13px] tracking-[0.18em] uppercase shadow-[0_4px_16px_rgba(0,112,243,0.28)] hover:shadow-[0_6px_22px_rgba(0,112,243,0.38)] active:scale-[0.99] transition-all"
            >
              BOOK A CALL
            </a>
          </div>
        </div>

        {/* MOBILE / TABLET: arc with stats inside the ring, service card below */}
        <HeroOrbitTrack
          className="lg:hidden mt-12 sm:max-w-[480px]"
          height={340}
          left={36}
          cy={170}
          radius={300}
          track={68}
          orb={54}
          anchorDeg={0}
          cardSide="bottom"
        >
          <dl className="absolute left-[118px] sm:left-[132px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-5">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-[13px] text-[#535E73] mt-1">{stat.label}</dt>
                <dd className="text-[34px] sm:text-[40px] font-extrabold leading-none tracking-tight text-[#161C2D]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </HeroOrbitTrack>

        {/* AI team card stack */}
        <div className="mt-12 lg:mt-14">
          <AiTeamCard />
        </div>
      </div>
    </section>
  );
}
