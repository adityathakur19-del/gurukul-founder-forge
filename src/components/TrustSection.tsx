import { Award, Users, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const trustBadges = [
    {
      icon: Award,
      title: "30+ Years",
      subtitle: "Cumulative experience of trainers in startups"
    },
    {
      icon: Users,
      title: "150+ Founders",
      subtitle: "Worked with founders across industries"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      subtitle: "Helped companies raise funds, scale operations, and build sustainable growth"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-white shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sunrise to-saffron rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{badge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{badge.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;