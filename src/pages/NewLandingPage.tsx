import { Suspense, lazy } from "react";
import NewHeroSection from "@/components/NewHeroSection";
import TrustHighlightsSection from "@/components/TrustHighlightsSection";
import LazySection from "@/components/LazySection";

// Lazy load heavy components
const NewWhoShouldAttendSection = lazy(() => import("@/components/NewWhoShouldAttendSection"));
const NewCoreOutcomesSection = lazy(() => import("@/components/NewCoreOucomesSection"));
const NewMentorSection = lazy(() => import("@/components/NewMentorSection"));
const NewJourneySection = lazy(() => import("@/components/NewJourneySection"));
const NewWhatYoullGetSection = lazy(() => import("@/components/NewWhatYoullGetSection"));
const NewBonusesSection = lazy(() => import("@/components/NewBonusesSection"));
const NewProofSection = lazy(() => import("@/components/NewProofSection"));
const NewFAQSection = lazy(() => import("@/components/NewFAQSection"));
const NewFinalCTASection = lazy(() => import("@/components/NewFinalCTASection"));

const LoadingFallback = () => (
  <div className="w-full h-32 bg-background/50 animate-pulse rounded-lg" />
);

const NewLandingPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <NewHeroSection />
      <TrustHighlightsSection />
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewWhoShouldAttendSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewCoreOutcomesSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewMentorSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewJourneySection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewWhatYoullGetSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewBonusesSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewProofSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewFAQSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<LoadingFallback />}>
          <NewFinalCTASection />
        </Suspense>
      </LazySection>
    </main>
  );
};

export default NewLandingPage;