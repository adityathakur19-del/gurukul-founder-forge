import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Download, Sparkles } from "lucide-react";

const EvergreenLeadMagnetSection = () => {
  const handleGetToolkit = () => {
    window.location.href = 'https://forms.gle/QqYW7A7bNpxGnubq6';
  };

  const toolkitItems = [
    "10+ simple frameworks to think about execution, priorities, and focus",
    "15+ ready-to-use AI prompt flows for founders and leaders",
    "Multiple checklists to review your week and delegate better with AI"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-muted/30 to-warm-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-deep-saffron rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-saffron" />
            <span className="text-xs sm:text-sm font-medium text-saffron">Free Resource</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Free: AI-Ready Leader's Toolkit
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            A practical starter pack to help you think and operate like an AI-first leader, even before you join any programme.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Not ready to join a bootcamp yet? Start with this free toolkit. It's a no-fluff, multiple PDF and PPTs to help you get immediate clarity and small wins using AI.
            </p>

            {/* What's Inside */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">What's inside:</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {toolkitItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-saffron flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground italic border-l-2 border-saffron/40 pl-3 sm:pl-4">
              Designed specifically for startup leaders in India.
            </p>

            {/* CTA */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              <Button 
                onClick={handleGetToolkit}
                size="lg"
                className="w-full sm:w-auto bg-saffron hover:bg-deep-saffron text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-warm hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get the AI-Ready Leader's Toolkit
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Enter your email or join our WhatsApp group to receive the toolkit instantly.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-warm-white to-muted/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-saffron/20 shadow-warm max-w-md mx-auto lg:max-w-none">
              {/* Toolkit Visual */}
              <div className="relative">
                {/* Main PDF visual */}
                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-border/50 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-saffron" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-xs sm:text-sm">AI-Ready Leader's Toolkit</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">PDF + PPT Bundle</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="h-1.5 sm:h-2 bg-muted rounded w-full"></div>
                    <div className="h-1.5 sm:h-2 bg-muted rounded w-4/5"></div>
                    <div className="h-1.5 sm:h-2 bg-muted rounded w-3/4"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-saffron text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg">
                  <span className="text-[8px] sm:text-xs font-bold text-center leading-tight">FREE<br/>Download</span>
                </div>

                <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-white rounded-lg shadow-md p-2 sm:p-3 border border-border/50 transform -rotate-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span className="text-[10px] sm:text-xs font-medium text-foreground">Instant Access</span>
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

export default EvergreenLeadMagnetSection;
