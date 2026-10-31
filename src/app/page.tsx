import Hero from "@/components/Hero";
import TechStripAndWorkflow from "@/components/TechStripAndWorkflow";
import ServicesGrid from "@/components/ServicesGrid";
import ModernizationSection from "@/components/ModernizationSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Navbar + Hero Section */}
      <Hero />

      {/* 2. Tech Strip + Dark 'How We Work' Section with Tabs */}
      <TechStripAndWorkflow />

      {/* 3. Services Grid: 9 Service Cards */}
      <ServicesGrid />

      {/* 4. Modernization: Typical Engagements with Challenge/Approach */}
      <ModernizationSection />

      {/* 5. Our Approach: 4-Step Timeline (Assess, Plan, Build, Support) */}
      <ProcessSection />

      {/* 6. About: Positioning + Three Service Streams */}
      <AboutSection />

      {/* 7. FAQ Section: Categories + Accordion + Schema */}
      <FAQSection />

      {/* 8. Contact Section: Navy Card + 24hr Promise + API Form */}
      <ContactSection />

      {/* 9. Footer: Tech Strip + 4 Link Cards + Oversized Brand Text */}
      <Footer />
    </main>
  );
}
