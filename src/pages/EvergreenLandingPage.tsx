import EvergreenHeroSection from "@/components/EvergreenHeroSection";
import EvergreenWhoSection from "@/components/EvergreenWhoSection";
import EvergreenWhatYouGetSection from "@/components/EvergreenWhatYouGetSection";
import EvergreenAIFrameworksSection from "@/components/EvergreenAIFrameworksSection";
import EvergreenFoundersSection from "@/components/EvergreenFoundersSection";
import EvergreenProofSection from "@/components/EvergreenProofSection";
import EvergreenFinalCTASection from "@/components/EvergreenFinalCTASection";
import ContactUsSection from "@/components/ContactUsSection";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const EvergreenLandingPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <EvergreenHeroSection />
      <EvergreenWhoSection />
      <EvergreenWhatYouGetSection />
      <EvergreenAIFrameworksSection />
      <EvergreenFoundersSection />
      <EvergreenProofSection />
      <EvergreenFinalCTASection />
      <ContactUsSection />
      <FloatingChatBubble />
    </main>
  );
};

export default EvergreenLandingPage;
