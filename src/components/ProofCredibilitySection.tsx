import { Star, Quote } from "lucide-react";

const ProofCredibilitySection = () => {
  const testimonials = [
    {
      quote: "This workshop gave me the clarity I was missing. The GTM template alone transformed how I approach customers.",
      author: "Priya Sharma",
      role: "Founder, TechVenture",
      rating: 5
    },
    {
      quote: "From idea to my first 10 paying customers in 3 weeks. The frameworks are practical and immediately actionable.",
      author: "Rajesh Kumar", 
      role: "First-time Founder",
      rating: 5
    },
    {
      quote: "Finally, a workshop that connects all the dots. No more random advice - just a clear roadmap to success.",
      author: "Anita Desai",
      role: "Serial Entrepreneur",
      rating: 5
    }
  ];

  const startupLogos = [
    { name: "TechVenture", logo: "🚀" },
    { name: "GrowthCorp", logo: "📈" },
    { name: "InnovateLab", logo: "💡" },
    { name: "ScaleUp", logo: "⚡" },
    { name: "NextGen", logo: "🌟" },
    { name: "FutureForge", logo: "🔥" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-startup-blue/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Proof &{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Credibility
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real founders
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-saffron to-deep-saffron rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 text-white" />
                </div>

                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-saffron" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Startup Logos */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">
              Startups We've Mentored
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {startupLogos.map((startup, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-2">{startup.logo}</div>
                  <div className="text-xs font-medium text-muted-foreground">{startup.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Stats */}
          <div className="bg-white rounded-xl shadow-warm p-8 border border-saffron/10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-saffron mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-startup-blue mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-accent mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-deep-saffron mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofCredibilitySection;