import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePaymentRedirect } from "@/hooks/usePaymentRedirect";

const OptimizedFAQSection = () => {
  const { redirectToPayment } = usePaymentRedirect();
  
  const faqs = [
    {
      question: "Who is this workshop for?",
      answer: "This workshop is designed for Indian mid to senior professionals and startup leaders who want practical AI workflows and business fundamentals. Perfect for founders, senior managers, and professionals looking to lead confidently in the age of AI."
    },
    {
      question: "Is it really free? What's the catch?",
      answer: "Yes, it's genuinely 100% free. No catch, no hidden fees, no forced upsell during the workshop. We're offering this as a value-add to help professionals and startup leaders get started with the right tools and frameworks. You'll only be invited to deeper programs at the end if you're interested."
    },
    {
      question: "Will I get a recording?",
      answer: "No, this is a live-only intensive workshop to ensure maximum engagement and interaction. However, you'll receive all downloadable templates, frameworks, and resources that you can reference anytime."
    },
    {
      question: "Do I need to be technical to benefit?",
      answer: "Not at all! The frameworks and AI tools we share work for any business model and don't require technical expertise. Many of our past participants were non-tech founders and professionals who got tremendous value."
    },
    {
      question: "What if I can't attend the full 3 hours?",
      answer: "We highly recommend attending the full session to get maximum value, as each segment builds on the previous one. The workshop is designed as a cohesive 3-hour experience. Since seats are limited, please only register if you can commit to the full duration."
    },
    {
      question: "Will you try to sell me something?",
      answer: "No heavy pitch in the middle of the workshop. You'll get practical value whether or not you join any advanced programs later. At the end, we may mention deeper programs for those interested, but there's zero pressure. You'll walk away with actionable value regardless."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-warm-white to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Everything you need to know before joining
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-soft mb-4 border border-saffron/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-saffron/5 transition-colors">
                    <span className="text-base sm:text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* CTA */}
          <div className="flex justify-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-8 sm:px-12 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto max-w-md"
              onClick={redirectToPayment}
            >
              Reserve My Free Seat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedFAQSection;
