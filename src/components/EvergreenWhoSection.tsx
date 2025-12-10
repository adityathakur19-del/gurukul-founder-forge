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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Who This Is For
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Early-stage startup founders and startup leaders in India facing chaos, too many AI tools, no clear execution and inconsistent revenue.
            </p>
          </div>

          {/* Audience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {audience.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-5 sm:p-6 border border-border shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-saffron to-deep-saffron rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
