import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in your web development service?",
    answer: "Our web development includes custom design, responsive development, SEO optimization, performance optimization, CMS integration, and ongoing support. Every website is built with conversion and user experience as top priorities."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A standard website takes 4-6 weeks, while complex automation projects may take 8-12 weeks. We provide detailed timelines during our discovery phase and keep you updated throughout the process."
  },
  {
    question: "Do you work with existing websites or only new builds?",
    answer: "We work with both! We can redesign existing websites, add new features, implement automation workflows, or optimize current performance. Our audit process helps determine the best approach for your specific situation."
  },
  {
    question: "What makes your AI automation different?",
    answer: "Our automation focuses on real business outcomes, not just technical complexity. We map your entire customer journey and create intelligent workflows that nurture leads, qualify prospects, and drive conversions automatically."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! All our plans include support periods, and we offer ongoing maintenance packages. This includes security updates, performance monitoring, content updates, and continuous optimization based on performance data."
  },
  {
    question: "Can you integrate with our existing tools and systems?",
    answer: "Absolutely. We specialize in creating seamless integrations with CRMs, email platforms, analytics tools, e-commerce systems, and custom APIs. We ensure your new systems work perfectly with your existing workflow."
  },
  {
    question: "What's your approach to SEO and conversion optimization?",
    answer: "SEO and CRO are built into every project from day one. We conduct keyword research, optimize technical SEO, implement tracking and analytics, and use data-driven design decisions to maximize conversions."
  },
  {
    question: "How do you measure project success?",
    answer: "We define success metrics during the discovery phase based on your business goals. This might include conversion rates, lead quality, page speed, search rankings, or automation efficiency. We provide detailed reporting on all key metrics."
  }
];

export const FAQAccordion = () => {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about working with Horizn.
          </p>
        </div>

        <div className="scroll-reveal">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border border-text-tertiary/20 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left text-text-primary hover:text-neon-cyan transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed pb-6">
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