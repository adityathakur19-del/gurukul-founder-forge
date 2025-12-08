import EvergreenHeroSection from "@/components/EvergreenHeroSection";
import EvergreenWhoSection from "@/components/EvergreenWhoSection";
import EvergreenWhatYouGetSection from "@/components/EvergreenWhatYouGetSection";
import EvergreenAIFrameworksSection from "@/components/EvergreenAIFrameworksSection";
import EvergreenFoundersSection from "@/components/EvergreenFoundersSection";
import EvergreenLeadMagnetSection from "@/components/EvergreenLeadMagnetSection";
import EvergreenProofSection from "@/components/EvergreenProofSection";
import EvergreenFAQSection from "@/components/EvergreenFAQSection";
import EvergreenFinalCTASection from "@/components/EvergreenFinalCTASection";
import ContactUsSection from "@/components/ContactUsSection";
import FooterSection from "@/components/FooterSection";
import FloatingChatBubble from "@/components/FloatingChatBubble";
const EvergreenLandingPage = () => {
  return <main className="min-h-screen overflow-x-hidden">
      <EvergreenHeroSection />
      <EvergreenWhoSection />
      <EvergreenWhatYouGetSection />
      <EvergreenAIFrameworksSection />
      <EvergreenFoundersSection />
      <EvergreenLeadMagnetSection />
      <EvergreenProofSection />
      <EvergreenFAQSection />
      
      <ContactUsSection />
      <FooterSection />
      <FloatingChatBubble />
    </main>;
};
export default EvergreenLandingPage;