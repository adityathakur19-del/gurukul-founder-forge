import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import heroImage from "@/assets/hero-founder.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-warm-white via-background to-muted flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.saffron)_1px,transparent_1px)] bg-[length:50px_50px] animate-light-rays"></div>
      </div>
      
      {/* Light Rays Animation */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-saffron/20 to-transparent rounded-full animate-light-rays opacity-60"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-green-accent/20 to-transparent rounded-full animate-light-rays delay-1000 opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Build Your Startup{" "}
                <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                  Right the First Time
                </span>{" "}
                – In 2 Days
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Strategy. Sales. Finance. AI. Culture.</span>{" "}
                Learn from founders who've built and scaled successfully.
              </p>
            </div>

            {/* Pricing Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-saffron/20 shadow-warm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl font-bold text-saffron">₹4,999</div>
                <div className="text-2xl text-startup-gray line-through">₹7,000</div>
                <div className="bg-green-accent text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                  Early Bird Offer
                </div>
              </div>
              
              <Button variant="hero" size="lg" className="w-full text-xl px-12 py-6 h-auto mb-4">
                <CheckCircle className="w-6 h-6" />
                Reserve My Seat – Only 50 Spots
              </Button>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Early Bird Ends Soon</span>
                </div>
                <span>•</span>
                <span>47 founders already registered</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 rounded-xl">
                <div className="w-8 h-8 bg-startup-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs">📺</span>
                </div>
                <div className="text-xs font-semibold">Live & Interactive</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl">
                <div className="w-8 h-8 bg-green-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs">🛠️</span>
                </div>
                <div className="text-xs font-semibold">Templates & AI Tools</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl">
                <div className="w-8 h-8 bg-saffron rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs">✅</span>
                </div>
                <div className="text-xs font-semibold">Proven Frameworks</div>
              </div>
            </div>
          </div>

          {/* Right Image with Animations */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="Founder with traditional learning elements and modern startup tools"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-saffron/20 to-transparent"></div>
            </div>
            
            {/* Animated Growth Chart */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft border animate-graph-grow">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-accent">150+</div>
                <div className="text-sm text-muted-foreground">Founders Guided</div>
              </div>
            </div>
            
            {/* Traditional Wisdom Symbol */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-soft border animate-leaf-sway">
              <div className="text-center">
                <div className="text-2xl font-bold text-saffron">🕉️</div>
                <div className="text-sm text-muted-foreground">Ancient Wisdom</div>
              </div>
            </div>

            {/* AI Icon */}
            <div className="absolute top-1/2 -right-8 bg-startup-blue rounded-full p-3 shadow-startup animate-pulse">
              <span className="text-white text-lg">🤖</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;