import { Award, TrendingUp, Users, Zap } from "lucide-react";

const WhyLearnFromUsSection = () => {
  const credentials = [
    {
      icon: Award,
      text: "Over a decade of hands-on experience in **startups, growth and sales**."
    },
    {
      icon: TrendingUp,
      text: "Has helped **multiple startups raise funding and scale** through better strategy and execution."
    },
    {
      icon: Users,
      text: "Has worked closely with **founders and senior leaders across different sectors** – including SaaS, D2C, EdTech and services."
    },
    {
      icon: Zap,
      text: "Combines **business fundamentals, real-world GTM, and AI tools** into practical, repeatable workflows – not theory."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-soft-cream to-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Learn From{" "}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                NewGen Gurukul
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mt-4">
              Led by a practitioner who's been in the startup trenches for over a decade.
            </p>
          </div>
          
          {/* Credentials */}
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald to-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-emerald-dark" />
                  </div>
                  <p 
                    className="text-base sm:text-lg text-foreground leading-relaxed flex-1"
                    dangerouslySetInnerHTML={{ 
                      __html: credential.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnFromUsSection;
