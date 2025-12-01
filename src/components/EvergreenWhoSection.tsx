import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const EvergreenWhoSection = () => {
  const audience = [
    {
      icon: Target,
      title: "Early-stage founders",
      description: "Navigating chaos, juggling too many AI tools, struggling to find a clear execution path"
    },
    {
      icon: Lightbulb,
      title: "Startup leaders",
      description: "Need structured systems to move from scattered efforts to consistent revenue"
    },
    {
      icon: TrendingUp,
      title: "Revenue-focused builders",
      description: "Want to cut through the noise and focus only on what drives growth"
    },
    {
      icon: Users,
      title: "Execution-oriented teams",
      description: "Looking for plug-and-play frameworks, not another theory session"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who This Is For
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Early-stage startup founders and startup leaders in India facing chaos, too many AI tools, no clear execution, and inconsistent revenue.
            </p>
          </div>

          {/* Audience Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {audience.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-border shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-saffron to-deep-saffron rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenWhoSection;
