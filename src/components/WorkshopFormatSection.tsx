import { Lightbulb, TrendingUp, Settings, Zap } from "lucide-react";

const WorkshopFormatSection = () => {
  const blocks = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Foundations + Clarity",
      description: "Get clarity on your current business fundamentals – model, funnel, and where you're leaking time and revenue today. We quickly align on what actually matters for your stage."
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "AI for Sales & Growth",
      description: "Learn how to use AI to generate leads, personalise outreach, and speed up sales workflows. See practical examples of WhatsApp, LinkedIn and email flows powered by AI."
    },
    {
      number: "03",
      icon: Settings,
      title: "AI for Operations & Execution",
      description: "Turn repetitive work into AI-powered systems. Reporting, follow-ups, documentation, SOPs – see how AI can help you move faster without losing control."
    },
    {
      number: "04",
      icon: Zap,
      title: "Templates, Workflows & Next 7 Days",
      description: "You get templates and workflows that you can plug into your own business, plus a clear action plan for what to do in the first 7 days after the workshop."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What Happens{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Inside the Workshop
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mt-4">
              A fast-paced, no-fluff 3-hour live session built for Indian startup leaders and senior professionals.
            </p>
          </div>
          
          {/* Timeline Blocks */}
          <div className="space-y-6 mb-12">
            {blocks.map((block, index) => {
              const IconComponent = block.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 sm:space-x-6 p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-saffron to-deep-saffron rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{block.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className="w-6 h-6 text-saffron" />
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {block.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Important Notes */}
          <div className="bg-gradient-to-r from-green-accent/10 to-startup-blue/10 rounded-xl p-6 sm:p-8 border border-green-accent/20 text-center">
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-foreground">
                <strong>Live, interactive</strong> • <strong>100% free</strong> • <strong>No catch, no forced upsell</strong>
              </p>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                This workshop is completely free. No catch, no forced upsell. You'll only be invited to deeper programs if and when you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopFormatSection;
