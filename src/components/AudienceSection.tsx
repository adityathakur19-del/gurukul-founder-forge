import { CheckCircle, XCircle, Users, Briefcase, User } from "lucide-react";

const AudienceSection = () => {
  const whoShouldAttend = [
    {
      icon: User,
      title: "Early-stage founders",
      description: "Ready to build on solid foundations"
    },
    {
      icon: Briefcase,
      title: "Aspiring entrepreneurs in corporate jobs",
      description: "Planning to launch in the next 2 years"
    },
    {
      icon: Users,
      title: "Solo founders",
      description: "Wanting to fix business fundamentals"
    }
  ];

  const whoThisIsNotFor = [
    "People looking for a 'get rich quick' hack",
    "Those not willing to apply learnings in real-time",
    "Anyone expecting results without putting in the work"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Who Should Attend */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
                Who Should{" "}
                <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                  Attend
                </span>
              </h2>
              
              <div className="space-y-6">
                {whoShouldAttend.map((audience, index) => {
                  const IconComponent = audience.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-sunrise/5 to-saffron/5 border border-sunrise/20"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-sunrise to-saffron rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {audience.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Who This Is Not For */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
                Who This Is{" "}
                <span className="text-destructive">Not For</span>
              </h2>
              
              <div className="space-y-4">
                {whoThisIsNotFor.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-destructive/5 border border-destructive/20"
                  >
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-trust-blue/5 border border-trust-blue/20 rounded-xl">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-trust-blue flex-shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-trust-blue">Perfect for you if:</h3>
                    <p className="text-muted-foreground">
                      You're serious about building a sustainable business and willing to apply proven frameworks immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;