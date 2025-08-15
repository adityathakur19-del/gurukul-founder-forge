import { Map, Target, Calculator, Settings, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoreTakeawaysSection = () => {
  const takeaways = [
    {
      icon: Map,
      title: "Turn your vision into an execution roadmap",
      description: "Crystal clear strategy that aligns your entire business",
      color: "from-saffron to-deep-saffron"
    },
    {
      icon: Target,
      title: "Go from no leads to a GTM plan that brings customers",
      description: "Proven frameworks for predictable revenue generation",
      color: "from-startup-blue to-accent"
    },
    {
      icon: Calculator,
      title: "Understand your numbers and speak to investors",
      description: "Master founder-friendly finance and cash flow control",
      color: "from-green-accent to-accent"
    },
    {
      icon: Settings,
      title: "Set up systems and culture to scale without chaos",
      description: "Build operational excellence from day one",
      color: "from-deep-saffron to-startup-blue"
    },
    {
      icon: Bot,
      title: "Leverage AI to save time and make better decisions",
      description: "Automate research, outreach, and decision-making",
      color: "from-startup-blue to-green-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Five Core{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Takeaways
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Outcome-based learning that transforms your startup
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {takeaways.map((takeaway, index) => {
              const IconComponent = takeaway.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border group"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${takeaway.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {takeaway.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {takeaway.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg" className="px-12 py-6 h-auto">
              Get These Frameworks – Reserve Seat Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTakeawaysSection;