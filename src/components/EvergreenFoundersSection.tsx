const EvergreenFoundersSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-muted/30 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold break-words">
              Built by{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                operators, not influencers.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We've spent years building, running, and fixing real businesses – now we help founders 
              and leaders install AI-first execution into their own teams.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
            {/* Founder 1: Aditya */}
            <div className="bg-gradient-to-br from-warm-white to-muted/30 rounded-2xl p-6 sm:p-8 border border-saffron/20 shadow-warm animate-fade-in-up">
              <div className="space-y-4 sm:space-y-6">
                {/* Photo placeholder - will be added */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-saffron/20 to-deep-saffron/20 border-4 border-saffron/30 mx-auto mb-4"></div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Aditya Thakur</h3>
                  <p className="text-base sm:text-lg text-saffron font-semibold">
                    Founder, NewGen Gurukul • Growth & Execution Coach
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Startup Veteran & Growth Strategist:</strong>
                    <br />
                    "I've been in the trenches of startups for over a decade, helping 150+ founders 
                    go from idea to execution. I know the mistakes, the chaos, and the breakthroughs — 
                    and my mission is to ensure you don't have to learn the hard way."
                  </p>
                  
                  <p className="leading-relaxed">
                    Helps founders install AI workflows into sales, ops, and leadership routines.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 2: Vaibhav */}
            <div className="bg-gradient-to-br from-warm-white to-muted/30 rounded-2xl p-6 sm:p-8 border border-startup-blue/20 shadow-warm animate-fade-in-up delay-200">
              <div className="space-y-4 sm:space-y-6">
                {/* Photo placeholder - will be added */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-startup-blue/20 to-green-accent/20 border-4 border-startup-blue/30 mx-auto mb-4"></div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Vaibhav Jaiswal</h3>
                  <p className="text-base sm:text-lg text-startup-blue font-semibold">
                    Co-creator, NewGen Gurukul • Startup & Systems Operator
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
                  <p className="leading-relaxed">
                    "In my decade plus of experience across industries and business functions, I've 
                    donned various hats. I was fortunate to build and scale business streams from scratch. 
                    I now want to share stories behind these battle scars"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Reassurance */}
          <div className="text-center">
            <p className="text-lg sm:text-xl text-muted-foreground italic max-w-3xl mx-auto">
              We don't just teach frameworks – we help you install them in the messy, real world of 
              your organisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenFoundersSection;
