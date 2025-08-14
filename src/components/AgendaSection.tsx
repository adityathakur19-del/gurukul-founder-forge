import { Eye, Megaphone, DollarSign, CreditCard, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgendaSection = () => {
  const takeaways = [
    {
      icon: Eye,
      title: "Nail your vision, mission & strategy",
      description: "so you can align your entire business."
    },
    {
      icon: Megaphone,
      title: "Build a GTM playbook",
      description: "that generates predictable leads."
    },
    {
      icon: DollarSign,
      title: "Design offers & messaging",
      description: "that convert without price drops."
    },
    {
      icon: CreditCard,
      title: "Master founder-friendly finance planning",
      description: "to control cash flow."
    },
    {
      icon: Bot,
      title: "Harness AI tools",
      description: "to automate research, outreach, and decision-making."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Five Core Takeaways You'll{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                Walk Away With
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {takeaways.map((takeaway, index) => {
              const IconComponent = takeaway.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sunrise to-saffron rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {takeaway.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {takeaway.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg" className="px-12 py-6 h-auto">
              Get These Tools & More - Reserve Seat Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;