import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I enroll in a workshop?",
      answer: "You can enroll by clicking 'View Details' on any workshop card, or contact us directly through the community section. We'll guide you through the enrollment process and help you choose the right workshops for your needs."
    },
    {
      question: "Are the sessions recorded? Can I access them later?",
      answer: "Yes, all workshop sessions are recorded and made available to participants for 12 months after completion. You'll also get access to all templates, frameworks, and resources used during the sessions."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the workshop content and delivery within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "Do I need any prior experience or technical skills?",
      answer: "No technical skills required! Our workshops are designed for business professionals at all levels. We provide step-by-step guidance and all the tools you need. The only prerequisite is a willingness to learn and apply new frameworks."
    },
    {
      question: "What tools and software will I need?",
      answer: "Most workshops use commonly available tools like Google Workspace, Notion, and basic automation platforms. We provide detailed setup guides and alternative options. No expensive software purchases required."
    },
    {
      question: "How do I get support during and after the workshop?",
      answer: "You'll have access to our community forum, mentor office hours, and direct support channels. We also provide follow-up resources and check-ins to ensure you're successfully implementing what you've learned."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers. Can't find what you're looking for? Reach out to us directly.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;