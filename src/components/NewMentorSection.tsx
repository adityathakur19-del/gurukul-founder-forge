import { Users, Clock, Award } from "lucide-react";
const NewMentorSection = () => {
  return <section className="py-12 sm:py-20 bg-gradient-to-b from-muted/30 to-green-accent/5 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold break-words">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">Mentors</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Learn from founders who've been in the trenches
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Mentor 1: Aditya Thakur */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Aditya Thakur</h3>
                <p className="text-lg sm:text-xl text-saffron font-semibold">Startup Veteran & Growth Strategist</p>
                
                <div className="bg-gradient-to-r from-guru-gold/10 to-saffron/10 rounded-xl p-4 sm:p-6 border border-guru-gold/20">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed italic">
                    "I've been in the trenches of startups for over a decade, helping 150+ founders 
                    go from idea to execution. I know the mistakes, the chaos, and the breakthroughs — 
                    and my mission is to ensure you don't have to learn the hard way."
                  </p>
                </div>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  This workshop gives you the foundation, frameworks, and shortcuts I wish I had when I started. 
                  Combining traditional Gurukul wisdom with cutting-edge startup methodologies.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-accent/10 to-startup-blue/10 rounded-xl border border-green-accent/20">
                  <div className="flex justify-center mb-2">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-accent" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-green-accent">150+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Founders Mentored</div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-guru-gold/10 to-saffron/10 rounded-xl border border-guru-gold/20">
                  <div className="flex justify-center mb-2">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-guru-gold" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-guru-gold">30+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-saffron/10 to-deep-saffron/10 rounded-xl border border-saffron/20">
                  <div className="flex justify-center mb-2">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-saffron" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-saffron">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Mentor 2: Vaibhav Jaiswal */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-up delay-200">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Vaibhav Jaiswal</h3>
                <p className="text-lg sm:text-xl text-saffron font-semibold">Business, Operations and Product Leader</p>
                
                <div className="bg-gradient-to-r from-startup-blue/10 to-green-accent/10 rounded-xl p-4 sm:p-6 border border-startup-blue/20">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed italic">
                    "In my decade plus of experience across industries and business functions, I've donned various hats. 
                    I was fortunate to build and scale business streams from scratch. I now want to share stories 
                    behind these battle scars"
                  </p>
                </div>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Bringing real-world operational excellence and product strategy insights from building 
                  scalable business operations across multiple industries and functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NewMentorSection;