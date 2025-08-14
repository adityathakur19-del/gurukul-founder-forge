import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Will sessions be recorded?",
      answer: "Yes, 1-month access to recordings plus downloadable resources forever."
    },
    {
      question: "What's your refund policy?",
      answer: "No refunds after purchase. However, we're confident you'll find immense value in the workshop."
    },
    {
      question: "Do I need prior experience?", 
      answer: "No, we start from the ground up. Perfect for both aspiring and early-stage founders."
    },
    {
      question: "Will you cover fundraising?",
      answer: "Yes, we cover investor readiness and early pitch essentials as part of the finance module."
    },
    {
      question: "Will this work for non-tech startups?",
      answer: "Absolutely — our frameworks are industry-agnostic and work for any business model."
    },
    {
      question: "What if I miss a session?",
      answer: "All sessions are recorded and you'll get 1-month access to review everything at your pace."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-sunrise to-saffron bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before joining
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-border shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-sunrise flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sunrise flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-sunrise/5 to-saffron/5 rounded-xl p-8 border border-sunrise/20">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help! Reach out and we'll answer any concerns you might have.
              </p>
              <a 
                href="mailto:hello@newgengurukul.com"
                className="inline-flex items-center text-sunrise hover:text-saffron transition-colors font-semibold"
              >
                Contact us at hello@newgengurukul.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;