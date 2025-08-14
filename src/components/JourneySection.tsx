import { UserPlus, Calendar, Lightbulb, Target } from "lucide-react";

const JourneySection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Join",
      description: "Reserve your seat",
      color: "from-sunrise to-saffron"
    },
    {
      icon: Calendar,
      title: "Attend", 
      description: "Live, interactive sessions",
      color: "from-saffron to-trust-blue"
    },
    {
      icon: Lightbulb,
      title: "Apply",
      description: "Use the templates & tools immediately",
      color: "from-trust-blue to-accent"
    },
    {
      icon: Target,
      title: "See Results",
      description: "Get clarity, revenue, and traction faster",
      color: "from-accent to-sunrise"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                4-Step Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From enrollment to results in just 2 days
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sunrise via-saffron via-trust-blue to-accent transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center space-y-6">
                    {/* Step Circle */}
                    <div className="relative mx-auto">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-warm`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-sunrise rounded-full flex items-center justify-center shadow-soft">
                        <span className="text-sm font-bold text-sunrise">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <span>⏱️ Workshop starts in 2 weeks</span>
              <span>•</span>
              <span>🔥 47 seats already booked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;