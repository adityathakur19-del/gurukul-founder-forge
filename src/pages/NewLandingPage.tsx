import NewHeroSection from "@/components/sections/NewHeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import WhatYoullLearnSection from "@/components/sections/WhatYoullLearnSection";
import WorkshopsGridSection from "@/components/sections/WorkshopsGridSection";
import MentorsSection from "@/components/sections/MentorsSection";
import CommunityTeaserSection from "@/components/sections/CommunityTeaserSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const NewLandingPage = () => {
  return (
    <main className="min-h-screen">
      <NewHeroSection />
      <SocialProofSection />
      <WhatYoullLearnSection />
      <WorkshopsGridSection />
      <MentorsSection />
      <CommunityTeaserSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default NewLandingPage;