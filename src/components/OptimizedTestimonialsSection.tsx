import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";

const OptimizedTestimonialsSection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  
  const testimonials = [
    {
      quote: "The frameworks I learned helped me structure my entire GTM approach. Within 2 weeks, we had our first paying customers.",
      name: "Priya Sharma",
      role: "Founder",
      company: "HealthTech Startup"
    },
    {
      quote: "I implemented the AI workflows immediately. Saved 15+ hours per week on outreach and follow-ups alone.",
      name: "Rajesh Kumar",
      role: "Sales Head",
      company: "B2B SaaS"
    },
    {
      quote: "Finally, someone who gives practical templates instead of just theory. The WhatsApp automation workflow was a game-changer.",
      name: "Neha Patel",
      role: "Co-Founder",
      company: "D2C Brand"
    },
    {
      quote: "The clarity I got on business fundamentals was worth 10x the investment. The AI tools were a bonus on top.",
      name: "Amit Singh",
      role: "Senior Professional",
      company: "EdTech"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Others Say
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Real results from founders and professionals who've attended
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-8 h-8 text-saffron mb-4" />
                <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-saffron/20 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex justify-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-8 sm:px-12 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto max-w-md"
              onClick={redirectToPayment}
            >
              Reserve My Free Seat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedTestimonialsSection;
