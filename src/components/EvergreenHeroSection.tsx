import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const EvergreenHeroSection = () => {
  const handlePrimaryCTA = () => {
    window.location.href = 'https://payments.cashfree.com/forms/NEWGENGURUKULFOUNDERWORKSHOP';
  };

  const handleSecondaryCTA = () => {
    window.location.href = 'https://chat.whatsapp.com/GMmI4uX5gLOAPuMHkSmic9?mode=hqrt3';
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-warm-white to-background flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground))_1px,transparent_0)] bg-[length:40px_40px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content - Mobile First */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 animate-fade-in-up">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/newgen-gurukul-logo.png" 
                alt="NewGen Gurukul" 
                className="h-14 sm:h-16 lg:h-20 w-auto"
              />
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
              In One Day, Turn AI Into a{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Revenue-Ready Execution Plan
              </span>{" "}
              for Your Startup
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Go from chaos to a clear, revenue-focused execution plan using AI tools, proven business frameworks, and hands-on guidance.
            </p>

            {/* 3 Bullets */}
            <ul className="space-y-3 sm:space-y-4 text-left max-w-xl mx-auto lg:mx-0">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base lg:text-lg text-foreground">
                  Map AI workflows for Sales, Marketing, Ops, and Hiring
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base lg:text-lg text-foreground">
                  Ignore shiny tools and double down on actions that move revenue
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base lg:text-lg text-foreground">
                  Leave with a plug-and-play execution plan you can start using tomorrow
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-lg mx-auto lg:mx-0">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-6 py-5 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold shadow-warm hover:shadow-xl hover:-translate-y-0.5 transition-all leading-tight"
                onClick={handlePrimaryCTA}
              >
                9 hours Business Fundamental with Tools Bootcamp @ INR 999/-
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-6 py-5 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold hover:-translate-y-0.5 transition-all"
                onClick={handleSecondaryCTA}
              >
                Join Founders & Leaders WhatsApp Group
              </Button>
            </div>
          </div>

          {/* Right Visual - Hidden on small screens, shown on lg+ */}
          <div className="relative order-2 hidden lg:block animate-fade-in-scale delay-300">
            <div className="bg-white rounded-2xl shadow-soft border border-border p-4 lg:p-6 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-gradient-to-br from-saffron/10 to-transparent rounded-full blur-3xl"></div>
              
              {/* Workflow Board Visual */}
              <div className="relative z-10 space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1">Your AI Execution Stack</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">Structured workflows that drive revenue</p>
                </div>

                {/* Workflow Columns */}
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                  {/* Sales Column */}
                  <div className="bg-gradient-to-br from-green-accent/10 to-green-accent/5 rounded-lg p-2 lg:p-3 border border-green-accent/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-green-accent" />
                      <h4 className="text-xs lg:text-sm font-semibold text-foreground">Sales</h4>
                    </div>
                    <div className="space-y-1 lg:space-y-1.5">
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Lead generation
                      </div>
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Outreach automation
                      </div>
                    </div>
                  </div>

                  {/* Marketing Column */}
                  <div className="bg-gradient-to-br from-startup-blue/10 to-startup-blue/5 rounded-lg p-2 lg:p-3 border border-startup-blue/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-3 h-3 lg:w-4 lg:h-4 text-startup-blue" />
                      <h4 className="text-xs lg:text-sm font-semibold text-foreground">Marketing</h4>
                    </div>
                    <div className="space-y-1 lg:space-y-1.5">
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Content creation
                      </div>
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Social media
                      </div>
                    </div>
                  </div>

                  {/* Ops Column */}
                  <div className="bg-gradient-to-br from-saffron/10 to-saffron/5 rounded-lg p-2 lg:p-3 border border-saffron/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-saffron" />
                      <h4 className="text-xs lg:text-sm font-semibold text-foreground">Ops</h4>
                    </div>
                    <div className="space-y-1 lg:space-y-1.5">
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Process automation
                      </div>
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Documentation
                      </div>
                    </div>
                  </div>

                  {/* Hiring Column */}
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-2 lg:p-3 border border-accent/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-3 h-3 lg:w-4 lg:h-4 text-accent" />
                      <h4 className="text-xs lg:text-sm font-semibold text-foreground">Hiring</h4>
                    </div>
                    <div className="space-y-1 lg:space-y-1.5">
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Job descriptions
                      </div>
                      <div className="bg-white rounded p-1.5 lg:p-2 text-[10px] lg:text-xs border border-border shadow-sm">
                        Screening
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Metric */}
                <a 
                  href="https://payments.cashfree.com/forms/NEWGENGURUKULFOUNDERWORKSHOP"
                  className="block bg-gradient-to-r from-green-accent to-accent rounded-lg p-3 lg:p-4 text-white text-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <div className="text-[10px] lg:text-xs font-medium mb-1">Revenue Impact</div>
                  <div className="text-base lg:text-xl font-bold flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span>Clear Path Forward</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenHeroSection;
