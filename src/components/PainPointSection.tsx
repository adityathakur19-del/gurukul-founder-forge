import { AlertCircle, Target, Zap, TrendingUp } from "lucide-react";

const PainPointSection = () => {
  const painPoints = [
    {
      icon: Target,
      text: "You've got the idea, but don't know where to start."
    },
    {
      icon: TrendingUp,
      text: "You're scaling, but revenue isn't keeping up."
    },
    {
      icon: Zap,
      text: "You're tired of free tips that don't connect the dots."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sound Familiar?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className="space-y-4 p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">{point.text}</p>
                </div>
              );
            })}
          </div>

          {/* Quote Box */}
          <div className="relative bg-gradient-to-r from-sunrise/5 to-saffron/5 border-l-4 border-sunrise p-8 rounded-lg shadow-soft">
            <div className="absolute -top-3 -left-3 bg-sunrise text-white w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">"</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground italic">
              "This is the workshop I wish I had before I burned 2 years and 20 lakhs figuring things out."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;