import { Brain, BookOpen, Zap } from "lucide-react";

const EvergreenAIFrameworksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              AI Tools +{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Business Frameworks
              </span>
              , Not Just Theory
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A powerful blend of proven business frameworks, AI tools used live, and hands-on exercises tailored to your startup
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Proven Frameworks */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-startup-blue to-startup-blue/80 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-4">
                Proven Business Frameworks
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Business Model Canvas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>7Ps of Marketing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Sales Playbook Structure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Financial Modeling Basics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-startup-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>OKR & Metric Tracking</span>
                </li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-saffron to-deep-saffron rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-4">
                AI Tools Used Live
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                  <span>ChatGPT for strategy & content</span>
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
                  <span>Zapier for automation</span>
                </li>
              </ul>
            </div>

            {/* Hands-on Exercises */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-accent to-accent rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-4">
                Hands-on Exercises
              </h3>
              <ul className="space-y-3 text-muted-foreground">
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
                  <span>Tailored to your startup</span>
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
