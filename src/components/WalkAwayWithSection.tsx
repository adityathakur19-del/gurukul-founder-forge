import { Button } from "@/components/ui/button";
import { Target, Workflow, FileText, TrendingUp, Calendar } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";

const WalkAwayWithSection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  
  const outcomes = [
    {
      icon: Target,
      title: "90-Day AI-Powered Execution Roadmap",
      description: "A clear, actionable roadmap for your startup or team – focused on revenue, efficiency, and execution."
    },
    {
      icon: Workflow,
      title: "3–5 Ready-to-Use AI Workflows",
      description: "Practical workflows for sales, lead generation, operations, and decision-making that you can implement immediately."
    },
    {
      icon: FileText,
      title: "Library of Templates and Prompts",
      description: "Customizable templates for WhatsApp, LinkedIn, email and internal workflows tailored to your context."
    },
    {
      icon: TrendingUp,
      title: "AI Value Clarity",
      description: "Clear understanding of where AI actually saves time/money in your business vs where it is just hype."
    },
    {
      icon: Calendar,
      title: "First 7 Days Action Plan",
      description: "A concrete action plan for the first 7 days after the workshop so you don't go back to 'business as usual'."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-warm-white to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What You'll{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Walk Away With
              </span>{" "}
              in 3 Hours
            </h2>
          </div>
          
          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-deep-saffron rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              );
            })}
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

export default WalkAwayWithSection;
