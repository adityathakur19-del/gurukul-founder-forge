import { Layers, Target, Users, Rocket, Brain, Zap } from "lucide-react";
const EvergreenWhatYouGetSection = () => {
  const blocks = [{
    time: "Block 1",
    title: "Strategy & Clarity",
    icon: Target,
    items: ["Define your core value proposition", "Identify your ideal customer profile", "Map revenue-generating activities"]
  }, {
    time: "Block 2",
    title: "Sales Execution",
    icon: Rocket,
    items: ["Build your sales playbook", "Set up AI-powered lead generation", "Create outreach & follow-up systems"]
  }, {
    time: "Block 3",
    title: "Marketing Workflows",
    icon: Zap,
    items: ["Content strategy & automation", "Social media scheduling systems", "Analytics & performance tracking"]
  }, {
    time: "Block 4",
    title: "Operations & Hiring",
    icon: Users,
    items: ["Streamline internal processes", "AI tools for documentation", "Hiring & onboarding frameworks"]
  }, {
    time: "Block 5",
    title: "AI Tool Stack",
    icon: Brain,
    items: ["ChatGPT, Perplexity, Canva setup", "Notion, Zapier automation", "Live Q&A on your specific needs"]
  }, {
    time: "Block 6",
    title: "Action Plan",
    icon: Layers,
    items: ["Your personalized execution roadmap", "Next 30-day action items", "Follow-up support & community access"]
  }];
  return <section className="py-20 bg-gradient-to-b from-warm-white to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What You Get in the{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                One-Day AI Execution Sprint
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">9 hours broken into focused blocks covering Strategy, Sales, Marketing, Ops, HR, AI workflows and Q&A</p>
          </div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((block, index) => {
            const IconComponent = block.icon;
            return <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron to-deep-saffron rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-saffron uppercase tracking-wide">
                        {block.time}
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {block.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {block.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>)}
                  </ul>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default EvergreenWhatYouGetSection;