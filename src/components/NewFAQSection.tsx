import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NewFAQSection = () => {
  const faqs = [
    {
      question: "Why is this workshop free?",
      answer: "We're offering this as a community initiative to help more founders get started with the right tools and frameworks. It's our way of giving back to the startup ecosystem. Limited to 20 seats to maintain quality."
    },
    {
      question: "Is this relevant for non-tech founders?",
      answer: "Absolutely! 40% of our past mentees were non-tech founders. Our frameworks work for service businesses, product companies, B2B, B2C - any business model. The principles are industry-agnostic."
    },
    {
      question: "Do I get the templates mentioned?",
      answer: "Yes, you get access to essential starter templates, frameworks, and our curated AI tools guide covering ChatGPT, Perplexity, Canva, Gamma, Notion, Zapier, and Vapi - all included free."
    },
    {
      question: "Will I get session recordings?",
      answer: "No, this is a live-only 3-hour intensive workshop. However, you'll receive downloadable templates and frameworks to reference later."
    },
    {
      question: "Is there ongoing community support?",
      answer: "Yes! You'll get access to our exclusive founder community where you can connect with fellow entrepreneurs, ask questions, and get ongoing peer support beyond the workshop."
    },
    {
      question: "What if I can't attend after registering?",
      answer: "Since this is a free workshop with limited seats, please only register if you're committed to attending. If plans change, let us know in advance so we can offer your seat to someone on the waitlist."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-white bg-lotus-pattern overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
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
                  <AccordionTrigger className="px-4 sm:px-6 py-4 text-left hover:no-underline hover:bg-saffron/5 transition-colors">
                    <span className="text-base sm:text-lg font-semibold text-foreground pr-2 sm:pr-4 break-words">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full">
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-soft max-w-full">
                <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Secure Payment</h4>
                <p className="text-xs sm:text-sm text-muted-foreground break-words">SSL encrypted checkout</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-soft max-w-full">
                <div className="text-2xl sm:text-3xl mb-3">💯</div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">90-Day Plan</h4>
                <p className="text-xs sm:text-sm text-muted-foreground break-words">Guaranteed outcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;