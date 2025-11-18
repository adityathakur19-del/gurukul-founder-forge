import { CheckCircle } from "lucide-react";

const ThisIsForYouSection = () => {
  const bullets = [
    "You are a **mid to senior professional or startup leader in India**.",
    "You're overwhelmed by AI noise and want **clear, practical ways to use AI in your business**.",
    "You want **business fundamentals + AI tools**, not just cool prompts and screenshots.",
    "You're tired of gyan and want **templates and workflows** you can actually deploy in the next 7–14 days.",
    "You want to **lead your team confidently in the age of AI**, instead of feeling like you're lagging behind."
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              This Workshop Is{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                For You If…
              </span>
            </h2>
          </div>
          
          {/* Bullets */}
          <div className="space-y-4">
            {bullets.map((bullet, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-accent" />
                </div>
                <p 
                  className="text-base sm:text-lg text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThisIsForYouSection;
