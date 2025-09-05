import { Star, Quote } from "lucide-react";

const NewProofSection = () => {
  const testimonials = [
    {
      quote: "Aditya's approach is practical, not just inspirational. The GTM template alone was worth the entire fee. Got my first 5 paying customers within 3 weeks.",
      name: "Priya Sharma",
      role: "Founder, HealthTech Startup",
      rating: 5,
      result: "First customers in 3 weeks"
    },
    {
      quote: "I went from scattered ideas to a crystal-clear 90-day execution plan. The AI tools list saved me months of research. Best investment I made as a founder.",
      name: "Rajesh Kumar", 
      role: "Solo Founder, EdTech Platform",
      rating: 5,
      result: "Clear execution roadmap"
    },
    {
      quote: "The frameworks are battle-tested and immediately applicable. Finally understand my numbers and can speak confidently to investors.",
      name: "Meera Patel",
      role: "Founder, SaaS Product",
      rating: 5,
      result: "Investor-ready in 60 days"
    }
  ];

  const logos = [
    { name: "TechCorp", symbol: "🚀" },
    { name: "InnovateLab", symbol: "🔬" },
    { name: "GrowthEngine", symbol: "📈" },
    { name: "ScaleUp", symbol: "⚡" },
    { name: "BuildCo", symbol: "🏗️" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-accent/5 to-background">
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
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-guru-gold fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-8 h-8 text-saffron/30 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="bg-gradient-to-r from-green-accent/10 to-startup-blue/10 rounded-lg p-3 border border-green-accent/20">
                      <p className="text-sm font-semibold text-green-accent">
                        Result: {testimonial.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-saffron/10 to-deep-saffron/10 rounded-2xl p-8 border border-saffron/20 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-saffron mb-2">150+</div>
                <div className="text-muted-foreground">Founders Mentored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-accent mb-2">40%</div>
                <div className="text-muted-foreground">Non-Tech Founders</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-startup-blue mb-2">90%</div>
                <div className="text-muted-foreground">Implementation Rate</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewProofSection;