import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The strategic frameworks I learned here transformed how I approach business planning. The 12-week execution template alone was worth the entire workshop.",
      name: "Priya Sharma",
      title: "Founder, TechStart Solutions",
      rating: 5
    },
    {
      quote: "Finally, actionable content that I could implement immediately. The sales playbooks helped us double our conversion rate in just 8 weeks.",
      name: "Rajesh Kumar", 
      title: "Sales Director, GrowthCorp",
      rating: 5
    },
    {
      quote: "The operations workshop gave me the confidence to scale our team from 5 to 25 people without losing efficiency. The hiring scorecards are game-changers.",
      name: "Anita Desai",
      title: "COO, ScaleUp Ventures",
      rating: 5
    },
    {
      quote: "Best investment for any business professional. The AI automation setups save me 10+ hours per week, and the ROI tracking templates are incredibly detailed.",
      name: "Vikram Singh",
      title: "Operations Head, FinTech Plus",
      rating: 5
    },
    {
      quote: "The mentors bring real-world experience, not just theory. Every session had practical takeaways I could apply the same day.",
      name: "Meera Patel",
      title: "Marketing Manager, EcomGrow",
      rating: 5
    },
    {
      quote: "The community aspect is what sets this apart. Having peers to discuss implementation challenges with has been invaluable for my growth.",
      name: "Arjun Reddy",
      title: "Strategy Consultant, Independent",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real professionals who've applied what they learned.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 border border-border relative">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;