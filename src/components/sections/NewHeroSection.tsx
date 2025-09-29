import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, CheckCircle2, Users, Award } from "lucide-react";

const NewHeroSection = () => {
  const scrollToWorkshops = () => {
    const workshopsSection = document.getElementById('workshops-grid');
    workshopsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommunity = () => {
    const communitySection = document.getElementById('community-teaser');
    communitySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-card py-20 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pro-neutral/50 to-pro-neutral/20"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111827' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Build faster. Scale smarter.{" "}
            <span className="text-accent">Run on AI.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hands-on workshops for business professionals — Strategy, Sales, Finance, Operations, HR, Marketing, and AI Tools.
          </p>

          {/* Micro-claims row */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 mr-2 text-accent" />
              No coding required
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2 text-accent" />
              Designed for non-technical teams
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2 text-accent" />
              Certificate of completion
            </Badge>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
              onClick={scrollToWorkshops}
            >
              Explore Workshops
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 rounded-xl"
              onClick={scrollToCommunity}
            >
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;