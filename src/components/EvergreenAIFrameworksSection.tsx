import { Brain, BookOpen, Zap } from "lucide-react";

const EvergreenAIFrameworksSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              AI Tools +{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Business Frameworks
              </span>
              , Not Just Theory
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              A powerful blend of proven business frameworks, AI tools used live, and hands-on exercises tailored to your startup
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Proven Frameworks */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-startup-blue to-startup-blue/80 rounded-xl flex items-center justify-center mb-5 sm:mb-6 mx-auto">
                <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-4">
                Proven Business Frameworks
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">TAM/SAM/SOM</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Business Canvas model</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Sales Playbook Structure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Customer Service Automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Accurate Hiring and onbaording frameworks</span>
                </li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-saffron to-deep-saffron rounded-xl flex items-center justify-center mb-5 sm:mb-6 mx-auto">
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-4">
                AI Tools Used Live
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">ChatGPT, Gemini and Claude for strategy & content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Perplexity for research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Canva for design assets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Notion for organization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Zapier, N8N. Lovable for automation</span>
                </li>
              </ul>
            </div>

            {/* Hands-on Exercises */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-accent to-accent rounded-xl flex items-center justify-center mb-5 sm:mb-6 mx-auto">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-4">
                Hands-on Exercises
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Build your sales workflow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Create content automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Set up lead generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Design your ops system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Tailored to business function</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvergreenAIFrameworksSection;
