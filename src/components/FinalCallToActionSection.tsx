import { Button } from "@/components/ui/button";
import { Clock, Users, Zap, CheckCircle } from "lucide-react";

const FinalCallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-saffron via-deep-saffron to-startup-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px] animate-light-rays"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo and Traditional Wisdom Quote */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a7ffcaf4-ff76-4a14-946a-2584e2312a85.png" 
                alt="NewGen Gurukul Logo"
                className="h-20 w-auto opacity-90"
              />
            </div>
            <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight">
              "गुरुकुल में सीखा गया ज्ञान जीवन भर काम आता है"
            </blockquote>
            <p className="text-xl text-white/90 italic">
              "Knowledge learned in the Gurukul serves you for life"
            </p>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Clock className="w-8 h-8 mx-auto mb-3 animate-pulse" />
              <div className="text-2xl font-bold">48 Hours</div>
              <div className="text-sm opacity-90">Early Bird Ends</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">3 Seats</div>
              <div className="text-sm opacity-90">Remaining</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Zap className="w-8 h-8 mx-auto mb-3 animate-pulse" />
              <div className="text-2xl font-bold">₹2,001</div>
              <div className="text-sm opacity-90">You Save Today</div>
            </div>
          </div>

          {/* Main CTA Message */}
          <div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Join 50 Founders in Building Your Repeatable Revenue Engine
            </h3>
            <div className="flex items-center justify-center space-x-4 text-white">
              <span className="text-3xl font-bold">₹4,999</span>
              <span className="bg-green-accent px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                Early Bird
              </span>
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="space-y-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-saffron hover:bg-white/90 border-white text-xl px-16 py-8 h-auto font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
            >
              <CheckCircle className="w-6 h-6 mr-2" />
              Reserve My Seat
            </Button>
            
            <div className="text-white/90 space-y-2">
              <p className="text-lg">🔒 Secure Payment • 📧 Instant Confirmation</p>
              <p className="text-sm opacity-75">Join the Gurukul of Modern Entrepreneurs</p>
            </div>
          </div>

          {/* Final Trust Elements */}
          <div className="grid md:grid-cols-3 gap-6 opacity-80">
            <div className="text-white/80 text-sm">🔒 Secure Payment</div>
            <div className="text-white/80 text-sm">📧 Instant Access</div>
            <div className="text-white/80 text-sm">💯 90-Day Plan Guarantee</div>
          </div>

          {/* Ancient Wisdom Footer */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70 text-sm italic">
              "Where ancient Gurukul wisdom meets modern startup success"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToActionSection;