import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";
import { useCountdown } from "@/hooks/useCountdown";
const NewHeroSection = () => {
  const {
    redirectToPayment
  } = usePaymentRedirect();
  const timeLeft = useCountdown('2025-11-23T10:00:00+05:30', true);
  return <section className="relative min-h-screen bg-gradient-to-br from-warm-white via-background to-saffron/5 flex items-center justify-center overflow-x-hidden bg-lotus-pattern">
      
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-mandala-pattern"></div>
      
      {/* Animated Light Rays - Hidden on mobile to prevent overflow */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-guru-gold/30 to-transparent rounded-full animate-wisdom-glow hidden sm:block"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-saffron/20 to-transparent rounded-full animate-light-rays delay-1000 hidden sm:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <img src="/lovable-uploads/newgen-gurukul-logo.png" alt="NewGen Gurukul - Build Smarter with AI" className="h-28 sm:h-36 w-auto animate-lamp-glow" />
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
                Build Your Startup Right{" "}
                <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                  the First Time
                </span>{" "}
                – In 3 Hours
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">From Idea to Revenue Engine - Master essential frameworks, AI tools & startup fundamentals in an intensive 3-hour session from founders who've built & scaled successfully.</p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-startup-blue/10 to-saffron/10 rounded-2xl p-4 sm:p-6 border border-saffron/20">
              <div className="text-center space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm font-semibold text-startup-blue uppercase tracking-wide">SESSION STARTS IN</p>
                <div className="flex justify-center space-x-2 sm:space-x-4">
                  {Object.entries(timeLeft).map(([unit, value]) => <div key={unit} className="text-center animate-countdown-pulse">
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-soft min-w-[50px] sm:min-w-[60px]">
                        <div className="text-xl sm:text-2xl font-bold text-saffron">{value.toString().padStart(2, '0')}</div>
                        <div className="text-xs text-muted-foreground uppercase">{unit}</div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-saffron/20 shadow-warm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 text-center">
                <div className="text-xl sm:text-2xl text-startup-gray line-through">₹2,499</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-accent">FREE</div>
                <div className="bg-saffron text-white px-3 sm:px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow inline-block w-fit mx-auto sm:mx-0">
                  100% Off - Limited Seats
                </div>
              </div>
              
              <Button size="lg" className="w-full text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 h-auto mb-4 bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron" onClick={redirectToPayment}>
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="block sm:hidden">Reserve My Seat</span>
                <span className="hidden sm:block">Reserve My Seat – Less than 15 Spots Left</span>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>40+ founders registered</span>
                </div>
                <span className="hidden sm:block">•</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-guru-gold fill-current" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative animate-fade-in-scale delay-300 mt-8 lg:-mt-8 xl:-mt-16">
            {/* Traditional + Modern Blend Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-wisdom bg-gradient-to-br from-guru-gold/10 to-saffron/20 p-6 sm:p-8">
              {/* Knowledge Tree Background */}
              <div className="absolute inset-0 opacity-10 flex items-start justify-center pt-4">
                <div className="text-6xl sm:text-8xl animate-leaf-sway">🌳</div>
              </div>
              
              {/* Modern Elements Overlay */}
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="text-3xl sm:text-4xl animate-lamp-glow">🪔</div>
                  <div className="text-3xl sm:text-4xl animate-floating">💻</div>
                  <div className="text-3xl sm:text-4xl animate-graph-grow">📈</div>
                </div>
                
                <div className="text-center space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Cardinal Wisdom + Modern Tools</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">Where Gurukul tradition meets startup innovation</p>
                  
                  {/* Session Dates and Times */}
                  <div className="bg-gradient-to-r from-saffron/15 to-guru-gold/15 rounded-xl border border-saffron/30 p-3 sm:p-4 mx-auto max-w-sm animate-pulse-glow">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-foreground">
                        <Calendar className="w-4 h-4 text-saffron" />
                        <span className="text-sm sm:text-base font-semibold">23 Nov 2025</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-foreground">
                        <Clock className="w-4 h-4 text-saffron" />
                        <span className="text-sm sm:text-base font-medium">10 AM to 1 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl animate-floating delay-500">🤖</div>
                    <div className="text-xs text-muted-foreground mt-1">AI Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl animate-wisdom-glow">📜</div>
                    <div className="text-xs text-muted-foreground mt-1">Templates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl animate-floating delay-1000">🎯</div>
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
