import { Button } from "@/components/ui/button";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";
const OptimizedHeroSection = () => {
  const {
    redirectToPayment
  } = usePaymentRedirect();
  return <section className="relative min-h-[90vh] bg-gradient-to-br from-warm-white via-background to-saffron/5 flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-lotus-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="/lovable-uploads/newgen-gurukul-logo.png" alt="NewGen Gurukul - Build Smarter with AI" className="h-24 sm:h-32 w-auto" />
          </div>
          
          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8">
            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
              Indian Professionals:{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Build your career better with AI
              </span>{" "}
              in 3 hours
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
              A free live workshop for Indian mid to senior professionals and startup leaders who want practical AI workflows and solid business fundamentals – not more generic theory. Walk away with ready-to-use templates and AI-powered systems you can plug into your sales, operations, HR or Strategy and make decisions Instantly. <strong>practical AI workflows</strong> and <strong>solid business fundamentals</strong> – not more generic theory. Walk away with <strong>ready-to-use templates</strong> and AI-powered systems you can plug into your sales, operations and decision-making <strong>within 7 days</strong>.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col items-center space-y-3 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto max-w-md" onClick={redirectToPayment}>
                Reserve My Free Seat
              </Button>
              
              {/* Supporting Micro-copy */}
              <p className="text-sm sm:text-base text-muted-foreground">
                100% free. Live, practical, and focused on real business use-cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OptimizedHeroSection;