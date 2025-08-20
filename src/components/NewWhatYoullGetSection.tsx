import { Button } from "@/components/ui/button";
import { FileText, Brain, Video, Award, Users, Phone } from "lucide-react";

const NewWhatYoullGetSection = () => {
  const inclusions = [
    {
      icon: FileText,
      title: "Proven Frameworks & Templates",
      items: [
        "GTM strategy canvas",
        "Sales funnel blueprints", 
        "Financial planning models",
        "Operations & HR frameworks"
      ],
      highlight: "Worth ₹15,000 - Included Free"
    },
    {
      icon: Brain,
      title: "Curated AI Tools List",
      items: [
        "Research & market analysis tools",
        "Content & outreach automation",
        "Decision-making frameworks",
        "50+ hours of trial & error saved"
      ],
      highlight: "Exclusive Startup AI Toolkit"
    },
    {
      icon: Video,
      title: "Session Recordings",
      items: [
        "1-month access to all sessions",
        "Downloadable resources",
        "Reference materials",
        "Replay key frameworks anytime"
      ],
      highlight: "Never Miss a Detail"
    }
  ];

  const bonuses = [
    {
      icon: Phone,
      title: "Exclusive 1:1 Expert Call",
      description: "15-min post-workshop call for personalized guidance on your specific challenges",
      highlight: true
    },
    {
      icon: Award,
      title: "Digital Certificate",
      description: "Professional completion certificate for your LinkedIn and professional profiles",
      highlight: false
    },
    {
      icon: Users,
      title: "Founder Community Access",
      description: "Connect with fellow entrepreneurs and get ongoing peer support",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-white bg-lotus-pattern">
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
              Everything you need to build a successful startup
            </p>
          </div>

          {/* Main Inclusions */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {inclusions.map((inclusion, index) => {
              const IconComponent = inclusion.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-saffron to-deep-saffron rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {inclusion.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {inclusion.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gradient-to-r from-green-accent/10 to-startup-blue/10 rounded-lg p-3 border border-green-accent/20">
                    <p className="text-sm font-semibold text-green-accent text-center">
                      {inclusion.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bonuses */}
          <div className="bg-gradient-to-r from-guru-gold/10 to-saffron/10 rounded-2xl p-8 border border-guru-gold/20 mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Exclusive Bonuses</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {bonuses.map((bonus, index) => {
                const IconComponent = bonus.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-xl transition-all duration-300 bg-white shadow-warm border border-saffron/20 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-saffron to-deep-saffron">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {bonus.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {bonus.description}
                    </p>
                    {bonus.highlight && (
                      <div className="mt-3">
                        <span className="bg-saffron text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Exclusive
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-10 py-6 text-lg">
              Yes, I Want Access to These Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWhatYoullGetSection;