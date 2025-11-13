import { Button } from "@/components/ui/button";
import { FileText, Brain, Video, Award, Users, Phone, Calendar, Clock } from "lucide-react";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";
const NewWhatYoullGetSection = () => {
  const {
    redirectToPayment
  } = usePaymentRedirect();
  const inclusions = [{
    icon: FileText,
    title: "Proven Frameworks & Templates",
    items: ["Business Canvas model", "7Ps of marketing", "Financial Modelling for Startups", "Scalable System Framework"],
    highlight: "Essential Starter Templates Included"
  }, {
    icon: Brain,
    title: "Curated AI Tools List",
    items: ["ChatGPT for content & strategy", "Perplexity for research", "Canva for design", "Gamma for presentations", "Notion for organization", "Zapier for automation", "Vapi for voice AI"],
    highlight: "7 Essential AI Tools Covered"
  }];
  const bonuses = [{
    icon: Phone,
    title: "Exclusive 1:1 Expert Call",
    description: "Complementary 30-min post-workshop call for personalized guidance on your specific challenges",
    highlight: true
  }, {
    icon: Award,
    title: "Digital Certificate",
    description: "Professional completion certificate for your LinkedIn and professional profiles",
    highlight: false
  }, {
    icon: Users,
    title: "Founder Community Access",
    description: "Connect with fellow entrepreneurs and get ongoing peer support",
    highlight: false
  }];
  return <section className="py-20 bg-gradient-to-b from-background to-warm-white bg-lotus-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You'll{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Get
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build a successful startup
            </p>
          </div>

          {/* Main Inclusions */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {inclusions.map((inclusion, index) => {
            const IconComponent = inclusion.icon;
            return <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-saffron to-deep-saffron rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {inclusion.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {inclusion.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-green-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>)}
                  </ul>
                  
                  <div className="bg-gradient-to-r from-green-accent/10 to-startup-blue/10 rounded-lg p-3 border border-green-accent/20">
                    <p className="text-sm font-semibold text-green-accent text-center">
                      {inclusion.highlight}
                    </p>
                  </div>
                </div>;
          })}
          </div>

          {/* Bonuses */}
          <div className="bg-gradient-to-r from-guru-gold/10 to-saffron/10 rounded-2xl p-8 border border-guru-gold/20 mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Exclusive Bonuses</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return <div key={index} className="text-center p-6 rounded-xl transition-all duration-300 bg-white shadow-warm border border-saffron/20 hover:shadow-lg hover:-translate-y-1">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-saffron to-deep-saffron">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {bonus.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {bonus.description}
                    </p>
                    {bonus.highlight && <div className="mt-3">
                        
                      </div>}
                  </div>;
            })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-10 py-6 text-lg" onClick={redirectToPayment}>
              Yes, I Want Access to These Resources
            </Button>
            
            {/* Session Dates */}
            <div className="bg-gradient-to-r from-saffron/10 to-guru-gold/10 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-6 text-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-saffron" />
                  <span className="font-semibold">23 Nov 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-saffron" />
                  <span className="font-semibold">10 AM to 1 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NewWhatYoullGetSection;