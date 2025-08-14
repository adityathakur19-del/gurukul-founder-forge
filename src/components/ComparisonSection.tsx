import { X, CheckCircle } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Learning Format",
      generic: "Pre-recorded, self-paced",
      newgen: "Live, interactive, actionable"
    },
    {
      feature: "Content Type",
      generic: "Generic frameworks", 
      newgen: "Tailored founder-to-founder advice"
    },
    {
      feature: "AI Integration",
      generic: "No AI integration",
      newgen: "AI built into GTM & sales"
    },
    {
      feature: "Community Support",
      generic: "No community",
      newgen: "Peer group + follow-up support"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                NewGen Gurukul
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to generic founder courses
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-warm overflow-hidden border">
            <div className="grid grid-cols-3 bg-gradient-to-r from-soft-gray to-muted">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-muted-foreground">Feature</h3>
              </div>
              <div className="p-6 border-x border-border">
                <h3 className="text-lg font-semibold text-muted-foreground">Generic Founder Courses</h3>
              </div>
              <div className="p-6 bg-gradient-to-r from-sunrise to-saffron">
                <h3 className="text-lg font-bold text-white">NewGen Gurukul Workshop</h3>
              </div>
            </div>

            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-3 border-t border-border">
                <div className="p-6 bg-muted/20">
                  <div className="font-medium text-foreground">{comparison.feature}</div>
                </div>
                <div className="p-6 border-x border-border">
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{comparison.generic}</span>
                  </div>
                </div>
                <div className="p-6 bg-sunrise/5">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-trust-blue flex-shrink-0" />
                    <span className="text-foreground font-medium">{comparison.newgen}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;