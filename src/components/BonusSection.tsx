import { Gift, Users, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BonusSection = () => {
  const bonuses = [
    {
      icon: Gift,
      title: "Founder Toolkit",
      description: "GTM, sales, finance templates + outreach scripts + AI tool shortlist",
      value: "₹5,000 Value"
    },
    {
      icon: Users,
      title: "Post-Workshop Q&A",
      description: "Live follow-up call to clarify doubts and get personalized advice",
      value: "₹2,000 Value"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Recording access for 1 month + downloadable resources forever",
      value: "₹3,000 Value"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sunrise/5 via-saffron/5 to-trust-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              But Wait,{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                There's More
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every attendee gets these exclusive bonuses worth ₹10,000
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-sunrise to-saffron rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="bg-trust-blue/10 text-trust-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {bonus.value}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">{bonus.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl shadow-warm border-2 border-sunrise/20 overflow-hidden max-w-md mx-auto">
            <div className="bg-gradient-to-r from-sunrise to-saffron p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Early Bird Special</h3>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-3xl font-bold text-white line-through opacity-70">₹7,000</span>
                <span className="text-4xl font-bold text-white">₹4,999</span>
              </div>
              <p className="text-white/90 mt-2">Save ₹2,001 + Get ₹10,000 in bonuses</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Workshop</span>
                <span className="font-semibold">₹4,999</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Bonuses</span>
                <span className="font-semibold text-trust-blue">₹10,000 FREE</span>
              </div>
              <hr className="border-border" />
              <div className="flex items-center justify-between font-bold">
                <span>Total Value</span>
                <span className="text-sunrise text-xl">₹14,999</span>
              </div>
              
              <Button variant="cta" className="w-full mt-6" size="lg">
                <Tag className="w-5 h-5" />
                Claim This Deal - Only 3 Seats Left
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                ⚡ Price increases to ₹7,000 in 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;