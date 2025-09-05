import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Calendar, Rocket, Trophy } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";

const NewJourneySection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  const journeySteps = [
    {
      icon: Users,
      title: "Join",
      subtitle: "Reserve Your Seat",
      description: "₹7,499 Early Bird. Receive pre-read pack + starter templates",
      details: "Get immediate access to foundation materials",
      color: "from-saffron to-deep-saffron"
    },
    {
      icon: Calendar,
      title: "Attend",
      subtitle: "2 Days, Live & Interactive",
      description: "Day 1: Strategy, Sales, AI Tools. Day 2: Finance, Ops & Culture, 90-day plan",
      details: "Real-time learning with immediate application",
      color: "from-green-accent to-startup-blue"
    },
    {
      icon: Rocket,
      title: "Apply",
      subtitle: "Next 90 Days",
      description: "Execute frameworks, templates, and book your 30-min 1:1 complementary expert call",
      details: "Personalized guidance for implementation",
      color: "from-startup-blue to-guru-gold"
    },
    {
      icon: Trophy,
      title: "See Results",
      subtitle: "Transform Your Startup",
      description: "Gain clarity, paying customers, investor-ready finances, repeatable growth",
      details: "Measurable outcomes within 90 days",
      color: "from-guru-gold to-saffron"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Knowledge{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              2 Days → 90 Days → Revenue Engine
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-green-accent via-startup-blue to-guru-gold opacity-30"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index}
                    className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-saffron to-deep-saffron rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    <div className="space-y-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <h4 className="text-lg font-semibold text-saffron">{step.subtitle}</h4>
                        <p className="text-foreground font-medium leading-relaxed">{step.description}</p>
                        <p className="text-sm text-muted-foreground">{step.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Journey Guarantee */}
          <div className="mt-16 bg-gradient-to-r from-startup-blue/10 to-green-accent/10 rounded-2xl p-8 border border-startup-blue/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                100% Confidence Guarantee
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You'll leave the workshop with a crystal-clear 90-day execution roadmap. 
                If not, we'll work with you 1:1 after the session at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewJourneySection;