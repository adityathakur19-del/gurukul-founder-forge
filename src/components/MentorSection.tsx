import { Award, Users, Clock } from "lucide-react";
import mentorImage from "@/assets/hero-founder.jpg";

const MentorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/newgen-gurukul-logo.png" 
                alt="NewGen Gurukul - Build Smarter with AI"
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Mentor
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from a founder who's been in your shoes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mentor Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-warm">
                <img 
                  src={mentorImage} 
                  alt="Aditya Thakur - Startup Mentor and Growth Strategist"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-startup-blue/20 to-transparent"></div>
              </div>
              
              {/* Floating Achievement */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-soft border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-saffron">30+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Mentor Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Aditya Thakur</h3>
                <p className="text-xl text-saffron font-semibold">Startup Veteran & Growth Strategist</p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aditya combines traditional Gurukul wisdom with modern startup methodologies. 
                  He's guided founders through every stage of the startup journey – from idea 
                  validation to scaling and fundraising.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His practical, no-nonsense approach has helped startups build sustainable 
                  businesses across industries, integrating AI and modern tools with time-tested 
                  business principles.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-saffron/10 to-deep-saffron/10 rounded-xl border border-saffron/20">
                  <Users className="w-8 h-8 text-saffron mx-auto mb-2" />
                  <div className="text-2xl font-bold text-saffron">150+</div>
                  <div className="text-sm text-muted-foreground">Founders Mentored</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-startup-blue/10 to-accent/10 rounded-xl border border-startup-blue/20">
                  <Clock className="w-8 h-8 text-startup-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-startup-blue">30+</div>
                  <div className="text-sm text-muted-foreground">Years in Startups</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-accent/10 to-accent/10 rounded-xl border border-green-accent/20">
                  <Award className="w-8 h-8 text-green-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-r from-warm-white to-muted/50 rounded-xl p-6 border border-saffron/10">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <span className="mr-2">🕉️</span>
                  Philosophy
                </h4>
                <p className="text-muted-foreground italic">
                  "Ancient wisdom meets modern entrepreneurship. The Gurukul tradition of deep, 
                  personalized learning combined with cutting-edge startup methodologies creates 
                  founders who build with both heart and strategy."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;