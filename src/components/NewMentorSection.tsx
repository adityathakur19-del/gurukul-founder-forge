import { Users, Clock, Award } from "lucide-react";
const NewMentorSection = () => {
  return <section className="py-20 bg-gradient-to-b from-muted/30 to-green-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">Mentors</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from a founder who's been in the trenches
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mentor 1: Aditya Thakur */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Aditya Thakur</h3>
                <p className="text-xl text-saffron font-semibold">Startup Veteran & Growth Strategist</p>
                
                <div className="bg-gradient-to-r from-guru-gold/10 to-saffron/10 rounded-xl p-6 border border-guru-gold/20">
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "I've been in the trenches of startups for over a decade, helping 150+ founders 
                    go from idea to execution. I know the mistakes, the chaos, and the breakthroughs — 
                    and my mission is to ensure you don't have to learn the hard way."
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This workshop gives you the foundation, frameworks, and shortcuts I wish I had when I started. 
                  Combining traditional Gurukul wisdom with cutting-edge startup methodologies.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-accent/10 to-startup-blue/10 rounded-xl border border-green-accent/20">
                  <Users className="w-8 h-8 text-green-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-accent">150+</div>
                  <div className="text-sm text-muted-foreground">Founders Mentored</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-guru-gold/10 to-saffron/10 rounded-xl border border-guru-gold/20">
                  <Clock className="w-8 h-8 text-guru-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-guru-gold">30+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-saffron/10 to-deep-saffron/10 rounded-xl border border-saffron/20">
                  <Award className="w-8 h-8 text-saffron mx-auto mb-2" />
                  <div className="text-2xl font-bold text-saffron">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-r from-startup-blue/10 to-green-accent/10 rounded-xl p-6 border border-startup-blue/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <span className="mr-2 text-2xl">🕉️</span>
                  Philosophy
                </h4>
                <p className="text-muted-foreground italic">
                  "Blending cardinal Gurukul wisdom with modern startup tools. Practical, 
                  founder-to-founder learning that combines time-tested principles with 
                  cutting-edge methodologies."
                </p>
              </div>
            </div>

            {/* Mentor 2: Vaibhav Jaiswal */}
            <div className="space-y-8 animate-fade-in-up delay-200">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Vaibhav Jaiswal</h3>
                <p className="text-xl text-saffron font-semibold">Business, Operations and Product Leader</p>
                
                <div className="bg-gradient-to-r from-startup-blue/10 to-green-accent/10 rounded-xl p-6 border border-startup-blue/20">
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "In my decade plus of experience across industries and business functions, I've donned various hats. 
                    I was fortunate to build and scale business streams from scratch. I now want to share stories 
                    behind these battle scars"
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bringing real-world operational excellence and product strategy insights from building 
                  scalable business operations across multiple industries and functions.
                </p>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-wisdom bg-gradient-to-br from-startup-blue/20 to-green-accent/10 p-8">
                  {/* Mentor Representation */}
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-startup-blue to-green-accent rounded-full flex items-center justify-center mx-auto">
                      <span className="text-6xl text-white">👨‍💼</span>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground">Operations Excellence</h4>
                      <p className="text-muted-foreground">
                        Practical insights from building and scaling business operations
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl animate-wisdom-glow">⚙️</div>
                        <div className="text-xs text-muted-foreground mt-1">Operations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl animate-floating">📊</div>
                        <div className="text-xs text-muted-foreground mt-1">Strategy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl animate-lamp-glow">🎯</div>
                        <div className="text-xs text-muted-foreground mt-1">Execution</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NewMentorSection;