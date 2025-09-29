import { CheckCircle2, Target, BarChart3, Users, DollarSign, UserCheck, Megaphone } from "lucide-react";

const WhatYoullLearnSection = () => {
  const learningItems = [
    {
      icon: Target,
      text: "Strategic operating plan (Vision → Strategy → 12-week execution)"
    },
    {
      icon: Users,
      text: "ICP & offer clarity + GTM playbooks"
    },
    {
      icon: BarChart3,
      text: "Reporting automation & SOPs (Notion + n8n)"
    },
    {
      icon: Megaphone,
      text: "Sales cadences, demos, and objection handling"
    },
    {
      icon: DollarSign,
      text: "Unit economics, pricing packs, runway tracking"
    },
    {
      icon: UserCheck,
      text: "Hiring scorecards & 30-60-90 onboarding"
    },
    {
      icon: Target,
      text: "Marketing content engine + campaign trackers"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-16">
            What You'll Learn & Build
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Every session is outcome-first. You'll walk away with frameworks, checklists, and templates you can use the same day.
              </p>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent mr-3" />
                  <span className="font-semibold text-primary">Practical & Actionable</span>
                </div>
                <p className="text-muted-foreground">
                  No fluff or theory. Every workshop includes real templates, automation setups, and step-by-step playbooks you implement immediately.
                </p>
              </div>
            </div>

            {/* Right column - Checklist */}
            <div className="space-y-4">
              {learningItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-card transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;