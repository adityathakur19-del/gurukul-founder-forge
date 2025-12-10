import { Layers, Target, Users, Rocket, Brain, Zap } from "lucide-react";

const EvergreenWhatYouGetSection = () => {
  const blocks = [
    {
      time: "Block 1",
      title: "Strategy & Clarity",
      icon: Target,
      items: [
        "Define your core value proposition",
        "Identify your ideal customer profile",
        "Map revenue-generating activities"
      ]
    },
    {
      time: "Block 2",
      title: "Sales Execution",
      icon: Rocket,
      items: [
        "Build your sales playbook",
        "Set up AI-powered lead generation",
        "Create outreach & follow-up systems"
      ]
    },
    {
      time: "Block 3",
      title: "Marketing Workflows",
      icon: Zap,
      items: [
        "Content strategy & automation",
        "Social media scheduling systems",
        "Analytics & performance tracking"
      ]
    },
    {
      time: "Block 4",
      title: "Operations & Hiring",
      icon: Users,
      items: [
        "Streamline internal processes",
        "AI tools for documentation",
        "Hiring & onboarding frameworks"
      ]
    },
    {
      time: "Block 5",
      title: "AI Tool Stack",
      icon: Brain,
      items: [
        "ChatGPT, Perplexity, Canva setup",
        "Notion, Zapier automation",
        "Live Q&A on your specific needs"
      ]
    },
    {
      time: "Block 6",
      title: "Action Plan",
      icon: Layers,
      items: [
        "Your personalized execution roadmap",
        "Next 30-day action items",
        "Follow-up support & community access"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-warm-white to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              What You Get in the{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                One-Day AI Execution Sprint
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              9 hours broken into focused blocks covering Strategy, Sales, Marketing, Ops, HR, AI workflows and Q&A
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {blocks.map((block, index) => {
              const IconComponent = block.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-5 sm:p-6 border border-border shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-saffron to-deep-saffron rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs font-semibold text-saffron uppercase tracking-wide">
                        {block.time}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                        {block.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenWhatYouGetSection;
