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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-warm-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-deep-saffron rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span className="text-sm font-medium text-saffron">Free Resource</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Free: AI-Ready Leader's Toolkit
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A practical starter pack to help you think and operate like an AI-first leader, even before you join any programme.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Not ready to join a bootcamp yet? Start with this free toolkit. It's a no-fluff, multiple PDF and PPTs to help you get immediate clarity and small wins using AI.
            </p>

            {/* What's Inside */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">What's inside:</h3>
              <ul className="space-y-3">
                {toolkitItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground italic border-l-2 border-saffron/40 pl-4">
              Designed specifically for startup leaders in India.
            </p>

            {/* CTA */}
            <div className="space-y-3 pt-4">
              <Button 
                onClick={handleGetToolkit}
                size="lg"
                className="w-full sm:w-auto bg-saffron hover:bg-deep-saffron text-white font-semibold px-8 py-6 text-lg shadow-warm hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Get the AI-Ready Leader's Toolkit
              </Button>
              <p className="text-sm text-muted-foreground">
                Enter your email or join our WhatsApp group to receive the toolkit instantly.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-warm-white to-muted/50 rounded-2xl p-8 sm:p-10 border border-saffron/20 shadow-warm">
              {/* Toolkit Visual */}
              <div className="relative">
                {/* Main PDF visual */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-border/50 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-saffron" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">AI-Ready Leader's Toolkit</p>
                      <p className="text-xs text-muted-foreground">PDF + PPT Bundle</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-full"></div>
                    <div className="h-2 bg-muted rounded w-4/5"></div>
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-saffron text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-center leading-tight">FREE<br/>Download</span>
                </div>

                <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-md p-3 border border-border/50 transform -rotate-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-foreground">Instant Access</span>
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
