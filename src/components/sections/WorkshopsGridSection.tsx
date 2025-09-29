import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight, Target, TrendingUp, DollarSign, Settings, UserCheck, Megaphone, Bot } from "lucide-react";

const WorkshopsGridSection = () => {
  const workshops = [
    {
      slug: "strategy",
      title: "Strategy: From Vision to Operating Plan",
      level: "Intermediate",
      duration: "2 days",
      outcomes: ["Vision → Strategy → Plan", "TAM/SAM/SOM & ICP", "12-week roadmap"],
      icon: Target
    },
    {
      slug: "sales",
      title: "Sales: Build a Repeatable Revenue Engine",
      level: "Intermediate", 
      duration: "2 days",
      outcomes: ["ICP → GTM → Pipeline", "Messaging & cadences", "Demo & objections"],
      icon: TrendingUp
    },
    {
      slug: "finance",
      title: "Finance for Business Leaders",
      level: "Beginner",
      duration: "1 day",
      outcomes: ["Forecasting basics", "Unit economics", "Cash runway"],
      icon: DollarSign
    },
    {
      slug: "operations",
      title: "Operations: Scale Without Chaos",
      level: "Intermediate",
      duration: "1 day",
      outcomes: ["SOPs & dashboards", "Automation starters", "QA loops"],
      icon: Settings
    },
    {
      slug: "hr",
      title: "HR & Hiring with AI",
      level: "Beginner",
      duration: "1 day",
      outcomes: ["JD→shortlists", "Scorecards", "Onboarding 30-60-90"],
      icon: UserCheck
    },
    {
      slug: "marketing",
      title: "Marketing & Growth Sprints",
      level: "Intermediate",
      duration: "2 days",
      outcomes: ["Positioning & offers", "Content engine", "Paid + organic playbook"],
      icon: Megaphone
    },
    {
      slug: "ai-tools",
      title: "AI Tools for Business (Automation First)",
      level: "Beginner",
      duration: "1 day",
      outcomes: ["Automate reporting", "No-code micro-apps", "Prompt systems"],
      icon: Bot
    }
  ];

  return (
    <section id="workshops-grid" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Explore the 7 Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each workshop is designed to give you immediately actionable results. Choose the ones that match your current priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {workshops.map((workshop, index) => (
            <div key={workshop.slug} className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              {/* Icon and meta */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <workshop.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    {workshop.level}
                  </Badge>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                {workshop.title}
              </h3>

              {/* Duration */}
              <div className="flex items-center text-muted-foreground mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{workshop.duration}</span>
              </div>

              {/* Outcomes */}
              <div className="space-y-2 mb-6">
                {workshop.outcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group"
                onClick={() => {
                  // Placeholder for workshop detail navigation
                  console.log(`Navigate to /workshops/${workshop.slug}`);
                }}
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsGridSection;