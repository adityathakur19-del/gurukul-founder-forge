import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PainPointSection from "@/components/PainPointSection";
import AgendaSection from "@/components/AgendaSection";
import AudienceSection from "@/components/AudienceSection";
import ComparisonSection from "@/components/ComparisonSection";
import JourneySection from "@/components/JourneySection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <PainPointSection />
      <AgendaSection />
      <AudienceSection />
      <ComparisonSection />
      <JourneySection />
      <BonusSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default LandingPage;