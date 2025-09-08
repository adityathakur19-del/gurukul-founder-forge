import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Zap, Users, Calendar } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";
import { useCountdown } from "@/hooks/useCountdown";
const NewFinalCTASection = () => {
  const {
    redirectToPayment
  } = usePaymentRedirect();
  const timeLeft = useCountdown('2025-09-27T10:00:00+05:30');
  return <section className="py-20 bg-gradient-to-br from-saffron via-deep-saffron to-startup-blue relative overflow-hidden">
      {/* Traditional Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-mandala-pattern"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px] animate-light-rays"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo and Traditional Wisdom Quote */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <img src="/lovable-uploads/a7ffcaf4-ff76-4a14-946a-2584e2312a85.png" alt="NewGen Gurukul Logo" className="h-20 w-auto opacity-90 animate-wisdom-glow" />
            </div>
            <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight">
              "गुरुकुल की शिक्षा, व्यवसाय की सफलता"
            </blockquote>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/25 transition-all duration-300 animate-fade-in-up">
              <Clock className="w-8 h-8 mx-auto mb-3 animate-countdown-pulse" />
              <div className="text-2xl font-bold">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</div>
              <div className="text-sm opacity-90">Early Bird Ends</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/25 transition-all duration-300 animate-fade-in-up delay-100">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">Less than 15</div>
              <div className="text-sm opacity-90">Seats Remaining</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/25 transition-all duration-300 animate-fade-in-up delay-200">
              <Zap className="w-8 h-8 mx-auto mb-3 animate-pulse" />
              <div className="text-2xl font-bold">₹17,500</div>
              <div className="text-sm opacity-90">You Save Today</div>
            </div>
          </div>

          {/* Main CTA Message */}
          <div className="space-y-6 bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Join 50 Founders in Building Your Repeatable Revenue Engine
            </h3>
            <div className="flex items-center justify-center space-x-4 text-white">
              <span className="text-4xl font-bold">₹7,499</span>
              <span className="bg-green-accent px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
                Early Bird Offer
              </span>
            </div>
            <p className="text-lg text-white/90">
              From Idea → Revenue Engine in 90 Days
            </p>
          </div>

          {/* Final CTA Button */}
          <div className="space-y-6">
            <Button size="lg" className="bg-white text-saffron hover:bg-white/90 hover:text-deep-saffron border-2 border-white text-lg sm:text-xl lg:text-2xl px-6 sm:px-12 lg:px-20 py-6 sm:py-8 h-auto font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 animate-pulse-glow" onClick={redirectToPayment}>
              <CheckCircle className="w-8 h-8 mr-3" />
              Yes! Reserve My Seat
            </Button>
            
            <div className="text-white/90 space-y-4">
              <p className="text-lg">🔒 Secure Payment • 💯 90-Day Plan Guarantee</p>
              <p className="text-sm opacity-75">Join the Gurukul of Modern Entrepreneurs</p>
              
              {/* Session Dates */}
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-6 text-white">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">27 Sep & 28 Sep</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">10 AM to 6 PM IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose NewGen Gurukul */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">Why Choose NewGen Gurukul?</h4>
            <div className="grid md:grid-cols-2 gap-4 text-white/90 text-sm">
              <div className="flex items-center space-x-2">
                <span>📖</span>
                <span>Cardinal Gurukul wisdom + Modern startup tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🧑‍💻</span>
                <span>Practical, founder-to-founder learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📊</span>
                <span>Proven results with 150+ founders mentored</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>AI integration for execution speed</span>
              </div>
            </div>
          </div>

          {/* Ancient Wisdom Footer */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70 text-sm italic">"Where cardinal Gurukul wisdom meets modern startup success"</p>
          </div>
        </div>
      </div>
    </section>;
};
export default NewFinalCTASection;