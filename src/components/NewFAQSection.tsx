import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NewFAQSection = () => {
  const faqs = [
    {
      question: "Will the sessions be recorded?",
      answer: "Yes, all sessions are recorded and you'll get 1-month access to replay any part of the workshop. This ensures you can revisit key frameworks and templates anytime."
    },
    {
      question: "Is this relevant for non-tech founders?",
      answer: "Absolutely! 40% of our past mentees were non-tech founders. Our frameworks work for service businesses, product companies, B2B, B2C - any business model. The principles are industry-agnostic."
    },
    {
      question: "Do I get the templates mentioned?",
      answer: "Yes, you get access to our complete toolkit: GTM templates, Sales frameworks, Financial planning models, Operations templates, and our curated AI tools shortlist - worth ₹15,000, included free."
    },
    {
      question: "Is there ongoing community support?",
      answer: "Yes! You'll get access to our exclusive founder community where you can connect with fellow entrepreneurs, ask questions, and get ongoing peer support beyond the workshop."
    },
    {
      question: "What if I can't implement everything immediately?",
      answer: "That's exactly why we include a 30-min 1:1 expert call post-workshop. You can get personalized guidance on your specific challenges and prioritize what to implement first."
    },
    {
      question: "Is there a refund policy?",
      answer: "We don't offer refunds, but we do offer something better - our 100% Confidence Guarantee. If you don't leave with a crystal-clear 90-day execution roadmap, we'll work with you 1:1 at no extra cost."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-white bg-lotus-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before joining
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-soft mb-4 border border-saffron/10 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-saffron/5 transition-colors">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-2xl">
              <div className="text-center p-6 bg-white rounded-xl shadow-soft">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-semibold text-foreground mb-2">Secure Payment</h4>
                <p className="text-sm text-muted-foreground">SSL encrypted checkout</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-soft">
                <div className="text-3xl mb-3">💯</div>
                <h4 className="font-semibold text-foreground mb-2">90-Day Plan</h4>
                <p className="text-sm text-muted-foreground">Guaranteed outcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;