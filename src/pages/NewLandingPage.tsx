import NewHeroSection from "@/components/NewHeroSection";
import TrustHighlightsSection from "@/components/TrustHighlightsSection";
import NewWhoShouldAttendSection from "@/components/NewWhoShouldAttendSection";
import NewCoreOutcomesSection from "@/components/NewCoreOucomesSection";
import NewMentorSection from "@/components/NewMentorSection";
import NewJourneySection from "@/components/NewJourneySection";
import NewWhatYoullGetSection from "@/components/NewWhatYoullGetSection";
import NewBonusesSection from "@/components/NewBonusesSection";
import NewProofSection from "@/components/NewProofSection";
import NewFAQSection from "@/components/NewFAQSection";
import NewFinalCTASection from "@/components/NewFinalCTASection";
import ContactUsSection from "@/components/ContactUsSection";

const NewLandingPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <NewHeroSection />
      <TrustHighlightsSection />
      <NewWhoShouldAttendSection />
      <NewCoreOutcomesSection />
      <NewMentorSection />
      <NewJourneySection />
      <NewWhatYoullGetSection />
      <NewBonusesSection />
      <NewProofSection />
      <NewFAQSection />
      <NewFinalCTASection />
      <ContactUsSection />
    </main>
  );
};

export default NewLandingPage;