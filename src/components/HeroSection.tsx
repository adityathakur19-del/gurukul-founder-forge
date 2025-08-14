import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-founder.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-warm-white via-background to-muted flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.sunrise)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Build Your Startup{" "}
                <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                  Right the First Time
                </span>{" "}
                — In Just 2 Days
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Live, action-packed workshop where you'll get a founder's playbook for 
                <span className="font-semibold text-foreground"> Strategy, Sales, Finance & AI Tools</span>. 
                No fluff. No theory. Just what works in the real world.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="text-xl px-12 py-6 h-auto">
                <CheckCircle className="w-6 h-6" />
                Reserve My Seat — ₹7,000{" "}
                <span className="line-through opacity-70">₹4,999</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm ml-2">
                  Only 50 Seats
                </span>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ⚡ Early Bird Pricing - Limited Time Only
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="Founder with growth chart - NewGen Gurukul Workshop"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sunrise/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft border">
              <div className="text-center">
                <div className="text-2xl font-bold text-sunrise">150+</div>
                <div className="text-sm text-muted-foreground">Founders Guided</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-soft border">
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-blue">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;