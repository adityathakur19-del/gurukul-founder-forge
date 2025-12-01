import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const EvergreenHeroSection = () => {
  const handlePrimaryCTA = () => {
    window.location.href = 'https://forms.gle/QqYW7A7bNpxGnubq6';
  };

  const handleSecondaryCTA = () => {
    window.location.href = 'https://forms.gle/QqYW7A7bNpxGnubq6';
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-warm-white to-background flex items-center py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground))_1px,transparent_0)] bg-[length:40px_40px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/newgen-gurukul-logo.png" 
                alt="NewGen Gurukul" 
                className="h-20 w-auto"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              In One Day, Turn AI Into a{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Revenue-Ready Execution Plan
              </span>{" "}
              for Your Startup
            </h1>

            {/* Subhead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Go from chaos to a clear, revenue-focused execution plan using AI tools, proven business frameworks, and hands-on guidance.
            </p>

            {/* 3 Bullets */}
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">
                  Map AI workflows for Sales, Marketing, Ops, and Hiring
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">
                  Ignore shiny tools and double down on actions that move revenue
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">
                  Leave with a plug-and-play execution plan you can start using tomorrow
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-8 py-6 text-lg font-semibold shadow-warm hover:shadow-xl hover:-translate-y-0.5 transition-all"
                onClick={handlePrimaryCTA}
              >
                Get Details on 9-Hour Bootcamp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-6 text-lg font-semibold hover:-translate-y-0.5 transition-all"
                onClick={handleSecondaryCTA}
              >
                Join Founders & Leaders WhatsApp Group
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in-scale delay-300">
            <div className="bg-white rounded-2xl shadow-soft border border-border p-8 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-saffron/10 to-transparent rounded-full blur-3xl"></div>
              
              {/* Workflow Board Visual */}
              <div className="relative z-10 space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Your AI Execution Stack</h3>
                  <p className="text-muted-foreground">Structured workflows that drive revenue</p>
                </div>

                {/* Workflow Columns */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Sales Column */}
                  <div className="bg-gradient-to-br from-green-accent/10 to-green-accent/5 rounded-xl p-4 border border-green-accent/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-accent" />
                      <h4 className="font-semibold text-foreground">Sales</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Lead generation
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Outreach automation
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Follow-ups
                      </div>
                    </div>
                  </div>

                  {/* Marketing Column */}
                  <div className="bg-gradient-to-br from-startup-blue/10 to-startup-blue/5 rounded-xl p-4 border border-startup-blue/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap className="w-5 h-5 text-startup-blue" />
                      <h4 className="font-semibold text-foreground">Marketing</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Content creation
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Social media
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Analytics
                      </div>
                    </div>
                  </div>

                  {/* Ops Column */}
                  <div className="bg-gradient-to-br from-saffron/10 to-saffron/5 rounded-xl p-4 border border-saffron/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-saffron" />
                      <h4 className="font-semibold text-foreground">Ops</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Process automation
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Documentation
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Project tracking
                      </div>
                    </div>
                  </div>

                  {/* Hiring Column */}
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 border border-accent/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold text-foreground">Hiring</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Job descriptions
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Screening
                      </div>
                      <div className="bg-white rounded-lg p-3 text-sm border border-border shadow-sm">
                        Onboarding
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Metric */}
                <div className="bg-gradient-to-r from-green-accent to-accent rounded-xl p-6 text-white text-center">
                  <div className="text-sm font-medium mb-1">Revenue Impact</div>
                  <div className="text-3xl font-bold flex items-center justify-center space-x-2">
                    <TrendingUp className="w-8 h-8" />
                    <span>Clear Path Forward</span>
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

export default EvergreenHeroSection;
