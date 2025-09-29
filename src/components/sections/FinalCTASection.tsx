import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const scrollToWorkshops = () => {
    const workshopsSection = document.getElementById('workshops-grid');
    workshopsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommunity = () => {
    const communitySection = document.getElementById('community-teaser');
    communitySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to apply AI to real business problems?
            </h2>
          </div>

          <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Stop learning in isolation. Join hundreds of professionals who are building better businesses with practical frameworks, AI-powered tools, and community support.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl group"
              onClick={scrollToWorkshops}
            >
              Explore Workshops
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-xl"
              onClick={scrollToCommunity}
            >
              Join the Community
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Start building your competitive advantage today
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;