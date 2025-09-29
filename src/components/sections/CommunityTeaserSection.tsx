import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, Video, ArrowRight } from "lucide-react";

const CommunityTeaserSection = () => {
  const features = [
    {
      icon: Calendar,
      text: "Weekly live clinics"
    },
    {
      icon: FileText,
      text: "Templates & scripts"
    },
    {
      icon: Users,
      text: "Private chat & accountability"
    },
    {
      icon: Video,
      text: "Mentor office hours (recorded)"
    }
  ];

  return (
    <section id="community-teaser" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Don't learn alone. Build with momentum.
          </h2>
          
          <p className="text-lg lg:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join a community of ambitious professionals who are applying what they learn and supporting each other's growth.
          </p>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 p-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-medium text-center">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-6 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl group"
          >
            Join the Community
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm opacity-75 mt-6">
            Connect with like-minded professionals and accelerate your growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityTeaserSection;