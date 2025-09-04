import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";
import { useCountdown } from "@/hooks/useCountdown";
const NewHeroSection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  const timeLeft = useCountdown('2025-09-13T10:00:00+05:30', true);
  return <section className="relative min-h-screen bg-gradient-to-br from-warm-white via-background to-saffron/5 flex items-center justify-center overflow-hidden bg-lotus-pattern">
      
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-mandala-pattern"></div>
      
      {/* Animated Light Rays */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-guru-gold/30 to-transparent rounded-full animate-wisdom-glow"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-saffron/20 to-transparent rounded-full animate-light-rays delay-1000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img src="/lovable-uploads/a7ffcaf4-ff76-4a14-946a-2584e2312a85.png" alt="NewGen Gurukul Logo" className="h-32 w-auto animate-lamp-glow" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Build Your Startup{" "}
                <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                  Right the First Time
                </span>{" "}
                – In 2 Days
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                From vision to funding – master{" "}
                <span className="font-semibold text-foreground">strategy, sales, finance, AI, and culture</span>{" "}
                with founders who've built and scaled successfully.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-startup-blue/10 to-saffron/10 rounded-2xl p-6 border border-saffron/20">
              <div className="text-center space-y-4">
                <p className="text-sm font-semibold text-startup-blue uppercase tracking-wide">Early Bird Ends In</p>
                <div className="flex justify-center space-x-4">
                  {Object.entries(timeLeft).map(([unit, value]) => <div key={unit} className="text-center animate-countdown-pulse">
                      <div className="bg-white rounded-lg p-3 shadow-soft min-w-[60px]">
                        <div className="text-2xl font-bold text-saffron">{value.toString().padStart(2, '0')}</div>
                        <div className="text-xs text-muted-foreground uppercase">{unit}</div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-saffron/20 shadow-warm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-2xl text-startup-gray line-through">₹7,000</div>
                <div className="text-5xl font-bold text-saffron">₹4,999</div>
                <div className="bg-green-accent text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
                  Early Bird Offer
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-xl px-12 py-6 h-auto mb-4 bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron"
                onClick={redirectToPayment}
              >
                <CheckCircle className="w-6 h-6 mr-2" />
                Reserve My Seat – Only 50 Spots
              </Button>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>47 founders registered</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-guru-gold fill-current" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative animate-fade-in-scale delay-300 -mt-8 lg:-mt-16">
            {/* Traditional + Modern Blend Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-wisdom bg-gradient-to-br from-guru-gold/10 to-saffron/20 p-8">
              {/* Knowledge Tree Background */}
              <div className="absolute inset-0 opacity-10 flex items-start justify-center pt-4">
                <div className="text-8xl animate-leaf-sway">🌳</div>
              </div>
              
              {/* Modern Elements Overlay */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl animate-lamp-glow">🪔</div>
                  <div className="text-4xl animate-floating">💻</div>
                  <div className="text-4xl animate-graph-grow">📈</div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Cardinal Wisdom + Modern Tools</h3>
                  <p className="text-muted-foreground">Where Gurukul tradition meets startup innovation</p>
                </div>
                
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl animate-floating delay-500">🤖</div>
                    <div className="text-xs text-muted-foreground mt-1">AI Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl animate-wisdom-glow">📜</div>
                    <div className="text-xs text-muted-foreground mt-1">Templates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl animate-floating delay-1000">🎯</div>
                    <div className="text-xs text-muted-foreground mt-1">Strategy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NewHeroSection;