const EvergreenFoundersSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Built by{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                operators, not influencers.
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              We've spent years building, running, and fixing real businesses – now we help founders 
              and leaders install AI-first execution into their own teams.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12">
            {/* Founder 1: Aditya */}
            <div className="bg-gradient-to-br from-warm-white to-muted/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-saffron/20 shadow-warm animate-fade-in-up">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {/* Aditya's Photo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-saffron/30 mx-auto shadow-lg">
                  <img 
                    src="/lovable-uploads/aditya-thakur.png" 
                    alt="Aditya Thakur - Founder of NewGen Gurukul"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Aditya Thakur</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-saffron font-semibold">
                    Founder, NewGen Gurukul • Growth & Execution Coach
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-muted-foreground">
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
            <div className="bg-gradient-to-br from-warm-white to-muted/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-startup-blue/20 shadow-warm animate-fade-in-up delay-200">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {/* Photo placeholder */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-startup-blue/20 to-green-accent/20 border-4 border-startup-blue/30 mx-auto"></div>
                
                <div className="text-center space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Vaibhav Jaiswal</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-startup-blue font-semibold">
                    Co-creator, NewGen Gurukul • Startup & Systems Operator
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-muted-foreground">
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
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground italic max-w-3xl mx-auto px-2">
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
