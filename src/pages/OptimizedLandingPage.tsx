import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import ThisIsForYouSection from "@/components/ThisIsForYouSection";
import WalkAwayWithSection from "@/components/WalkAwayWithSection";
import WorkshopFormatSection from "@/components/WorkshopFormatSection";
import WhyLearnFromUsSection from "@/components/WhyLearnFromUsSection";
import OptimizedTestimonialsSection from "@/components/OptimizedTestimonialsSection";
import OptimizedFAQSection from "@/components/OptimizedFAQSection";
import OptimizedFooterSection from "@/components/OptimizedFooterSection";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const OptimizedLandingPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <OptimizedHeroSection />
      <ThisIsForYouSection />
      <WalkAwayWithSection />
      <WorkshopFormatSection />
      <WhyLearnFromUsSection />
      <OptimizedTestimonialsSection />
      <OptimizedFAQSection />
      <OptimizedFooterSection />
      <FloatingChatBubble />
    </main>
  );
};

export default OptimizedLandingPage;
