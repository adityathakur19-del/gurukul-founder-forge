import { Quote, TrendingUp, Target, Zap } from "lucide-react";

const EvergreenProofSection = () => {
  const outcomes = [
    {
      icon: Target,
      metric: "Clarified GTM",
      description: "Found their go-to-market strategy in one day"
    },
    {
      icon: Zap,
      metric: "First AI Workflows",
      description: "Set up automated sales & marketing systems"
    },
    {
      icon: TrendingUp,
      metric: "Revenue Focus",
      description: "Shifted from scattered tasks to revenue-driving actions"
    }
  ];

  const testimonials = [
    {
      quote: "I walked in with a dozen AI tools and no clear plan. I walked out with a focused execution strategy and three working automations for my sales process.",
      author: "Founder, SaaS Startup",
      role: "Early-stage"
    },
    {
      quote: "The frameworks were exactly what I needed. No fluff, no theory overload—just practical steps I could implement immediately.",
      author: "Startup Leader, EdTech",
      role: "Series A"
    },
    {
      quote: "Finally, someone who speaks founder language. This wasn't about AI hype; it was about execution and revenue. Worth every minute.",
      author: "Co-founder, FinTech",
      role: "Bootstrapped"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-warm-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Proof &{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Trust
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Real outcomes from founders and startup leaders who've attended
            </p>
          </div>

          {/* Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-border shadow-soft text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-saffron to-deep-saffron rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                    {outcome.metric}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 border border-border shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-saffron/30 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-3 sm:pt-4">
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenProofSection;
