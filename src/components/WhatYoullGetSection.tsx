import { FileText, Bot, Video, Award, Gift } from "lucide-react";

const WhatYoullGetSection = () => {
  const inclusions = [
    {
      icon: FileText,
      title: "Frameworks & Templates",
      items: ["GTM Strategy Template", "Sales Playbook", "Financial Planning Sheet", "Ops & HR Toolkit"],
      color: "from-saffron to-deep-saffron"
    },
    {
      icon: Bot,
      title: "Curated AI Tools List",
      items: ["Research Automation", "Content Generation", "Sales Outreach", "Decision Support"],
      color: "from-startup-blue to-accent"
    },
    {
      icon: Video,
      title: "1-Month Recording Access",
      items: ["Full Workshop Videos", "Downloadable Resources", "Bonus Content", "Quick Reference Guides"],
      color: "from-green-accent to-accent"
    },
    {
      icon: Award,
      title: "Digital Certificate",
      items: ["Completion Certificate", "LinkedIn Shareable", "Professional Recognition", "Network Access"],
      color: "from-deep-saffron to-startup-blue"
    }
  ];

  const bonuses = [
    {
      title: "Early Bird Pricing",
      description: "₹7,000 → ₹4,999 (Save ₹2,001)",
      highlight: true
    },
    {
      title: "Limited Seats",
      description: "Only 50 spots available",
      highlight: false
    },
    {
      title: "Ops/Culture Toolkit",
      description: "Bonus frameworks for scaling teams",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You'll{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Get
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete toolkit for startup success
            </p>
          </div>

          {/* Main Inclusions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {inclusions.map((inclusion, index) => {
              const IconComponent = inclusion.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${inclusion.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {inclusion.title}
                    </h3>
                    <ul className="space-y-2">
                      {inclusion.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-saffron rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bonuses & Offers */}
          <div className="bg-white rounded-2xl shadow-warm p-8 border border-saffron/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center">
                <Gift className="w-6 h-6 text-saffron mr-2" />
                Bonuses & Offers
              </h3>
              <p className="text-muted-foreground">Exclusive benefits for early registrants</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {bonuses.map((bonus, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                    bonus.highlight 
                      ? 'bg-gradient-to-br from-saffron/10 to-deep-saffron/10 border-saffron/30 shadow-warm' 
                      : 'bg-muted/30 border-border hover:shadow-soft'
                  }`}
                >
                  <div className="text-center">
                    <h4 className={`text-lg font-bold mb-2 ${
                      bonus.highlight ? 'text-saffron' : 'text-foreground'
                    }`}>
                      {bonus.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {bonus.description}
                    </p>
                    {bonus.highlight && (
                      <div className="mt-3 inline-block bg-green-accent text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                        Limited Time
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-accent/10 to-accent/10 rounded-xl p-8 border border-green-accent/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">💯 Our Guarantee</h3>
              <p className="text-lg text-muted-foreground">
                Walk away with a 90-day execution plan or we'll work 1:1 with you at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullGetSection;