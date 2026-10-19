import Hero from "@/components/Hero";
import TechStripAndWorkflow from "@/components/TechStripAndWorkflow";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Navbar + Hero Section (shot_01 reference) */}
      <Hero />

      {/* 2. Tech Strip + Dark 'How It Works' Section with Tabs (shot_02 reference) */}
      <TechStripAndWorkflow />

      {/* 3. Services Grid: 9 Service Cards (shot_14 reference) */}
      <ServicesGrid />

      {/* 4. Process Section: 4-Step Timeline (Discover, Design, Build, Launch) */}
      <ProcessSection />

      {/* 5. Work & Results: Interactive Case Study Tabs with Problem/Solution (shot_10 reference) */}
      <WorkSection />

      {/* 6. FAQ Section: Categories + Accordion + Schema (shot_06 reference) */}
      <FAQSection />

      {/* 7. Contact Section: Navy Card + 24hr Promise + API Form (shot_05 reference) */}
      <ContactSection />

      {/* 8. Footer: Partner Strip + 4 Link Cards + Oversized Brand Text (shot_07 reference) */}
      <Footer />
    </main>
  );
}
