import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import WhoShouldAttendSection from "@/components/WhoShouldAttendSection";
import CoreTakeawaysSection from "@/components/CoreTakeawaysSection";
import MentorSection from "@/components/MentorSection";
import WhatYoullGetSection from "@/components/WhatYoullGetSection";
import ProofCredibilitySection from "@/components/ProofCredibilitySection";
import ComparisonSection from "@/components/ComparisonSection";
import JourneySection from "@/components/JourneySection";
import EnhancedFAQSection from "@/components/EnhancedFAQSection";
import FinalCallToActionSection from "@/components/FinalCallToActionSection";

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <WhoShouldAttendSection />
      <CoreTakeawaysSection />
      <MentorSection />
      <WhatYoullGetSection />
      <ProofCredibilitySection />
      <ComparisonSection />
      <JourneySection />
      <EnhancedFAQSection />
      <FinalCallToActionSection />
    </main>
  );
};

export default LandingPage;