import { Button } from "@/components/ui/button";
import { Clock, Users, Zap } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sunrise via-saffron to-trust-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Quote */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💡</span>
            </div>
            <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight">
              "Two days can save you two years of trial & error."
            </blockquote>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">48 Hours</div>
              <div className="text-sm opacity-90">Price increases</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">3 Seats</div>
              <div className="text-sm opacity-90">Remaining</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Zap className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">₹2,001</div>
              <div className="text-sm opacity-90">You save today</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-sunrise hover:bg-white/90 border-white text-xl px-16 py-8 h-auto font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Reserve My Seat Now
            </Button>
            
            <div className="text-white/90 space-y-2">
              <p className="text-lg">Secure payment • Instant confirmation</p>
              <p className="text-sm opacity-75">Join 47 founders already registered</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 opacity-80">
            <div className="text-white/80 text-sm">🔒 Secure Payment</div>
            <div className="text-white/80 text-sm">📧 Instant Access</div>
            <div className="text-white/80 text-sm">💯 Money-Back Guarantee*</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;