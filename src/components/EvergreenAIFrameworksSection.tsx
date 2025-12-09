import { Brain, BookOpen, Zap } from "lucide-react";

const EvergreenAIFrameworksSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Proven Frameworks */}
            <div className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-startup-blue to-startup-blue/80 rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 mx-auto">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-3 sm:mb-4">
                Proven Business Frameworks
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>TAM/SAM/SOM</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Business Canvas model</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Sales Playbook Structure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Customer Service Automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Accurate Hiring and onbaording frameworks</span>
                </li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-saffron to-deep-saffron rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 mx-auto">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-3 sm:mb-4">
                AI Tools Used Live
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span>ChatGPT, Gemini and Claude for strategy & content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span>Perplexity for research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span>Canva for design assets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span>Notion for organization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span>Zapier, N8N. Lovable for automation</span>
                </li>
              </ul>
            </div>

            {/* Hands-on Exercises */}
            <div className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-accent to-accent rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 mx-auto">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-3 sm:mb-4">
                Hands-on Exercises
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Build your sales workflow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Create content automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Set up lead generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Design your ops system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Tailored to business function</span>
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
