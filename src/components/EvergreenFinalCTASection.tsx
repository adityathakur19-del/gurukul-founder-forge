import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EvergreenFinalCTASection = () => {
  const handlePrimaryCTA = () => {
    window.location.href = 'https://forms.gle/QqYW7A7bNpxGnubq6';
  };

  const handleSecondaryCTA = () => {
    window.location.href = 'https://forms.gle/QqYW7A7bNpxGnubq6';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-saffron/5 via-background to-warm-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground))_1px,transparent_0)] bg-[length:40px_40px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Turn AI Into a{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Revenue-Ready Plan
              </span>
              {" "}in One Day
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop experimenting. Start executing. Join early-stage founders and startup leaders who are building with clarity and focus.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-8 py-6 text-lg font-semibold shadow-warm hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                onClick={handlePrimaryCTA}
              >
                Get Details on 9-Hour Bootcamp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-6 text-lg font-semibold hover:-translate-y-0.5 transition-all"
                onClick={handleSecondaryCTA}
              >
                Join Founders & Leaders WhatsApp Group
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-accent rounded-full"></div>
                <span>Founder-friendly language</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-accent rounded-full"></div>
                <span>Practical frameworks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-accent rounded-full"></div>
                <span>No fluff, just execution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenFinalCTASection;
