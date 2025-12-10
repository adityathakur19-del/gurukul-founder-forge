import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much time do I need to commit each week?",
    answer: "For the 9-hour intensive, it's one focused day plus a bit of prep and follow-up."
  },
  {
    question: "What if I can't attend live sessions?",
    answer: "All live sessions are recorded and shared with participants. That said, the biggest value comes from showing up live, getting feedback on your specific context, and learning from other founders. If you know you'll miss more than half the sessions, the 9-hour intensive might be a better starting point."
  },
  {
    question: "Is this useful for solo founders?",
    answer: "Yes. In fact, many solo founders use this to build a lightweight system before they hire. You'll learn how to use AI as a force multiplier – for research, outreach, planning, and basic operations – so you can move faster without burning out."
  },
  {
    question: "Do I need to be good with AI tools already?",
    answer: "No. You only need to be comfortable using a browser. We'll walk you through the specific AI workflows step by step. This is not about becoming a prompt engineer; it's about making your existing work faster and sharper with AI."
  },
  {
    question: "What if this doesn't work for me? Do you offer refunds?",
    answer: "We want this to be a high-trust, high-value space. If you show up and still feel it's not useful for you, reach out and we'll have a fair, human conversation about refunds or credits."
  },
  {
    question: "Is this only for tech startups?",
    answer: "No, anyone who is currently a leader or willing to learn business fundamentals and how they can leverage AI tools can join."
  },
  {
    question: "Do I get the templates?",
    answer: "Yes."
  }
];

const EvergreenFAQSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            FAQs for Leaders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            If you're serious about execution, these might be on your mind.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border rounded-lg px-4 sm:px-6 bg-card"
            >
              <AccordionTrigger className="text-left text-foreground font-medium py-4 sm:py-5 hover:no-underline text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default EvergreenFAQSection;
