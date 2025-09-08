import { Button } from "@/components/ui/button";
import { Tag, Users as UsersIcon, Gift, Clock } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";
const NewBonusesSection = () => {
  const {
    redirectToPayment
  } = usePaymentRedirect();
  return <section className="py-20 bg-gradient-to-b from-warm-white to-green-accent/5 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Bonuses &{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Offers
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Limited-time value packed exclusively for early birds
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Early Bird Pricing */}
            <div className="bg-gradient-to-br from-saffron/10 to-deep-saffron/20 rounded-2xl p-8 border border-saffron/30 shadow-warm animate-fade-in-up">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <Tag className="w-8 h-8 text-saffron" />
                  <h3 className="text-3xl font-bold text-foreground">Early Bird Special</h3>
                </div>
                
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4 flex-wrap">
                      <span className="text-lg sm:text-xl lg:text-3xl text-startup-gray line-through">₹24,999</span>
                      <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-saffron break-words">₹7,499</span>
                    </div>
                    <div className="bg-green-accent text-white px-6 py-2 rounded-full inline-block font-semibold animate-pulse-glow">
                      Save 70%
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-startup-blue" />
                      <span className="font-semibold text-startup-blue text-lg">Limited Time Offer</span>
                    </div>
                    <ul className="text-left space-y-2 text-muted-foreground text-sm sm:text-base lg:text-lg">
                      <li>• Less than 15 seats left</li>
                      <li>• Early bird pricing ends soon</li>
                      <li>• 40+ founders already registered</li>
                    </ul>
                  </div>
              </div>
            </div>

            {/* Value Stack */}
            <div className="space-y-6 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center text-lg">What You're Getting:</h3>
              
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                    <span className="font-medium text-foreground text-lg">Cost of 2-day workshop</span>
                    <span className="font-bold text-saffron text-lg">₹4,999</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                    <span className="font-medium text-foreground text-lg">Templates and Frameworks</span>
                    <span className="font-bold text-saffron text-lg">₹5,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                    <span className="font-medium text-foreground text-lg">AI Tools shortlist and tips</span>
                    <span className="font-bold text-saffron text-lg">₹3,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                    <span className="font-medium text-foreground text-lg">Bonus 1:1 Expert call cost</span>
                    <span className="font-bold text-saffron text-lg">₹10,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-soft">
                    <span className="font-medium text-foreground text-lg">Session Recording cost</span>
                    <span className="font-bold text-saffron text-lg">₹2,000</span>
                  </div>
                  
                  <div className="border-t-2 border-saffron/20 pt-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-saffron/10 to-deep-saffron/10 rounded-xl border border-saffron/30">
                      <span className="text-xl font-bold text-foreground">Total Value</span>
                      <span className="text-2xl font-bold text-saffron">₹24,999</span>
                    </div>
                  </div>
                  
                  <div className="text-center text-xl font-semibold text-green-accent">
                    You pay only: ₹7,499 – Save 70%
                  </div>
              </div>
            </div>
          </div>

          {/* Additional Bonuses */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-startup-blue/10 to-green-accent/10 rounded-xl p-8 border border-startup-blue/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <UsersIcon className="w-6 h-6 text-startup-blue" />
                <h4 className="text-xl font-semibold text-foreground">Bring Your Co-Founder</h4>
              </div>
              <p className="text-muted-foreground mb-3 text-lg">Second seat for just ₹6,499 extra (instead of ₹7,499). To avail the offer, contact us at contact@newgengurukul.com.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-6 text-lg sm:text-xl max-w-full" onClick={redirectToPayment}>
              Claim Early Bird ₹7,499/-
            </Button>
            <p className="text-sm text-muted-foreground mt-4">🔒 Secure payment • 💯 90-day plan guarantee</p>
          </div>
        </div>
      </div>
    </section>;
};
export default NewBonusesSection;