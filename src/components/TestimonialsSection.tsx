import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Aditya's approach is practical, not just inspirational. The GTM template alone was worth the fee.",
      author: "Priya Sharma",
      role: "Founder, TechVenture",
      rating: 5
    },
    {
      quote: "I went from idea to my first 10 paying customers within 3 weeks of implementing what I learned.",
      author: "Rajesh Kumar", 
      role: "First-time Founder",
      rating: 5
    },
    {
      quote: "Finally, a workshop that connects all the dots. No more random advice - just a clear roadmap.",
      author: "Anita Desai",
      role: "Serial Entrepreneur",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-trust-blue/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Founders Are{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                Saying
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real founders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-sunrise to-saffron rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-saffron" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-foreground leading-relaxed italic">
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

          {/* Trust Badge */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-6 bg-white rounded-xl px-8 py-4 shadow-soft border">
              <div className="text-center">
                <div className="text-2xl font-bold text-sunrise">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-blue">98%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-saffron">150+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;