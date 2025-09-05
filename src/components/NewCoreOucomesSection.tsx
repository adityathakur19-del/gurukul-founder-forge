
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Calculator, Settings, Brain } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";

const NewCoreOutcomesSection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  const outcomes = [
    {
      icon: Target,
      title: "Strategy",
      description: "Turn your vision into a 90-day execution roadmap",
      details: "Clear milestones, priorities, and actionable steps",
      color: "from-saffron to-deep-saffron"
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description: "Go from zero leads to first paying customers",
      details: "GTM plan, messaging, and conversion frameworks. Specific B2B and B2C targeting framework.",
      color: "from-green-accent to-startup-blue"
    },
    {
      icon: Calculator,
      title: "Finance & Funding",
      description: "Understand numbers & speak to investors",
      details: "Financial planning, metrics, and pitch readiness",
      color: "from-startup-blue to-guru-gold"
    },
    {
      icon: Settings,
      title: "Operations & Culture",
      description: "Build systems & team culture to scale without chaos",
      details: "Processes, hiring, and organizational design",
      color: "from-guru-gold to-saffron"
    },
    {
      icon: Brain,
      title: "AI Tools",
      description: "Save hours and make smarter decisions",
      details: "Curated AI toolkit for research, outreach, and automation",
      color: "from-deep-saffron to-green-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 bg-lotus-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Five Core{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Takeaways
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Outcome-based learning that transforms your startup in 90 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${outcome.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground text-center">
                      {outcome.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg font-semibold text-saffron mb-3">
                    {outcome.description}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {outcome.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transformation Headline */}
          <div className="text-center bg-gradient-to-r from-saffron/10 to-deep-saffron/10 rounded-2xl p-8 border border-saffron/20 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Idea → Revenue Engine in{" "}
              <span className="text-saffron">90 Days</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Stop guessing. Start building with proven frameworks.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-10 py-6 text-lg"
              onClick={redirectToPayment}
            >
              Give Me the Templates + Tools
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCoreOutcomesSection;
