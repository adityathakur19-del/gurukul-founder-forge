import { BookOpen, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                NewGen Gurukul
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We blend modern startup strategies with timeless learning discipline. 
              Led by Aditya Thakur – startup veteran, growth strategist, and founder mentor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sunrise to-saffron rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Traditional Wisdom</h3>
              <p className="text-muted-foreground">
                Drawing from the ancient Gurukul system of personalized, hands-on learning
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-saffron to-trust-blue rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Modern Methodology</h3>
              <p className="text-muted-foreground">
                Cutting-edge startup frameworks, AI tools, and real-world case studies
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-trust-blue to-accent rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-muted-foreground">
                150+ founders guided, millions in funding raised, countless success stories
              </p>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="bg-white rounded-xl p-8 shadow-soft border border-border">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Meet Your Mentor</h3>
              <div className="text-left space-y-4">
                <h4 className="text-xl font-semibold text-sunrise">Aditya Thakur</h4>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div className="space-y-2">
                    <p>• 15+ years in startup ecosystem</p>
                    <p>• Former startup founder (2 exits)</p>
                    <p>• Growth strategist for 100+ companies</p>
                  </div>
                  <div className="space-y-2">
                    <p>• AI & automation expert</p>
                    <p>• Fundraising advisor</p>
                    <p>• TEDx speaker on entrepreneurship</p>
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

export default AboutSection;