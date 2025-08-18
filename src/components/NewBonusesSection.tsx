import { Button } from "@/components/ui/button";
import { Tag, Users as UsersIcon, Gift, Clock } from "lucide-react";

const NewBonusesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-warm-white to-green-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Bonuses &{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Offers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Limited-time value packed exclusively for early birds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Early Bird Pricing */}
            <div className="bg-gradient-to-br from-saffron/10 to-deep-saffron/20 rounded-2xl p-8 border border-saffron/30 shadow-warm animate-fade-in-up">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <Tag className="w-8 h-8 text-saffron" />
                  <h3 className="text-3xl font-bold text-foreground">Early Bird Special</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-3xl text-startup-gray line-through">₹7,000</span>
                    <span className="text-6xl font-bold text-saffron">₹4,999</span>
                  </div>
                  <div className="bg-green-accent text-white px-6 py-2 rounded-full inline-block font-semibold animate-pulse-glow">
                    Save ₹2,001 Today
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-startup-blue" />
                    <span className="font-semibold text-startup-blue">Limited Time Offer</span>
                  </div>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Only 50 seats available</li>
                    <li>• Early bird pricing ends in 2 days</li>
                    <li>• 47 founders already registered</li>
                    <li>• No payment plans after early bird</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Value Stack */}
            <div className="space-y-6 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">What You're Getting:</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                  <span className="font-medium text-foreground">2-Day Live Workshop</span>
                  <span className="font-bold text-saffron">₹5,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                  <span className="font-medium text-foreground">Templates & Frameworks</span>
                  <span className="font-bold text-saffron">₹15,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                  <span className="font-medium text-foreground">AI Tools Shortlist</span>
                  <span className="font-bold text-saffron">₹8,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                  <span className="font-medium text-foreground">1:1 Expert Call</span>
                  <span className="font-bold text-saffron">₹3,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                  <span className="font-medium text-foreground">Session Recordings</span>
                  <span className="font-bold text-saffron">₹2,000</span>
                </div>
                
                <div className="border-t-2 border-saffron/20 pt-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-saffron/10 to-deep-saffron/10 rounded-xl border border-saffron/30">
                    <span className="text-xl font-bold text-foreground">Total Value</span>
                    <span className="text-2xl font-bold text-saffron">₹33,000</span>
                  </div>
                </div>
                
                <div className="text-center text-lg font-semibold text-green-accent">
                  You Pay Only ₹4,999 - Save 85%!
                </div>
              </div>
            </div>
          </div>

          {/* Additional Bonuses */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-startup-blue/10 to-green-accent/10 rounded-xl p-6 border border-startup-blue/20">
              <div className="flex items-center space-x-3 mb-4">
                <UsersIcon className="w-6 h-6 text-startup-blue" />
                <h4 className="text-lg font-semibold text-foreground">Bring Your Co-Founder</h4>
              </div>
              <p className="text-muted-foreground mb-3">
                Second seat for just ₹3,999 extra (instead of ₹4,999)
              </p>
              <span className="bg-startup-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                ₹1,000 Off
              </span>
            </div>
            
            <div className="bg-gradient-to-r from-guru-gold/10 to-saffron/10 rounded-xl p-6 border border-guru-gold/20">
              <div className="flex items-center space-x-3 mb-4">
                <Gift className="w-6 h-6 text-guru-gold" />
                <h4 className="text-lg font-semibold text-foreground">Ops/Culture Toolkit</h4>
              </div>
              <p className="text-muted-foreground mb-3">
                Ready-to-use hiring, onboarding, and culture-building templates
              </p>
              <span className="bg-guru-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                Bonus Included
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-12 py-6 text-xl">
              Claim Early Bird - ₹4,999
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              🔒 Secure payment • 📧 Instant confirmation • 💯 90-day plan guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBonusesSection;