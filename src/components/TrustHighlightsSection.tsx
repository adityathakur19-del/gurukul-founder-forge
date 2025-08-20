import { CheckCircle, FileText, BarChart3, Users } from "lucide-react";

const TrustHighlightsSection = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Live & Interactive",
      description: "Real-time learning, not pre-recorded videos"
    },
    {
      icon: FileText,
      title: "Templates & AI Tools Included",
      description: "Ready-to-use frameworks worth ₹15,000"
    },
    {
      icon: BarChart3,
      title: "Proven Frameworks",
      description: "Battle-tested by 150+ successful founders"
    },
    {
      icon: Users,
      title: "30+ Years Experience",
      description: "150+ founders mentored, proven results"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-warm-white">
      <div className="w-full px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-none">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlightsSection;