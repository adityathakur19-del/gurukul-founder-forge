import { Button } from "@/components/ui/button";
import { Target, User, Building, Users, Globe } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";

const NewWhoShouldAttendSection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  const shouldAttend = [
    {
      icon: Target,
      title: "Early-stage founders",
      description: "Building your first or second startup and need proven frameworks"
    },
    {
      icon: User,
      title: "Solo founders looking for structure",
      description: "Want to build systematically without the trial-and-error"
    },
    {
      icon: Building,
      title: "Corporate professionals",
      description: "Planning to launch a startup in the next 2 years"
    },
    {
      icon: Users,
      title: "Startup teams",
      description: "Seeking a repeatable revenue engine and growth systems"
    }
  ];

  const notFor = [
    "Looking for a quick fix without putting in the work",
    "Can't dedicate 2 full days to your startup foundation", 
    "Not ready to apply proven frameworks after the workshop"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-warm-white to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Who Should{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Attend
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-agnostic frameworks for all business models
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Who Should Attend */}
            <div className="space-y-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-green-accent mb-6">✅ Perfect For You If:</h3>
              <div className="space-y-6">
                {shouldAttend.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-accent to-startup-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Who This Is Not For */}
            <div className="space-y-8 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-startup-gray mb-6">❌ Not For You If:</h3>
              <div className="space-y-4">
                {notFor.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-muted/50 rounded-xl border border-startup-gray/20"
                  >
                    <div className="w-8 h-8 bg-startup-gray rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-saffron/10 to-deep-saffron/10 rounded-xl p-6 border border-saffron/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-5 h-5 text-saffron" />
                  <h4 className="font-semibold text-foreground">Industry Agnostic</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our frameworks work for tech, non-tech, service, product, B2B, and B2C businesses. 
                  40% of our past mentees were non-tech founders.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-accent to-startup-blue hover:from-startup-blue hover:to-green-accent text-white px-8 py-6 text-lg"
              onClick={redirectToPayment}
            >
              I Want These Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWhoShouldAttendSection;