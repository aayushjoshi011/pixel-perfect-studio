import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of video editing do you offer?",
    answer:
      "We cover the full spectrum—commercial campaigns, music videos, documentaries, product launches, social content, and event recaps. Every project receives broadcast-level attention to detail.",
  },
  {
    question: "How fast is the typical turnaround?",
    answer:
      "Standard projects are delivered within 5–7 business days. We also offer expedited 48-hour and 72-hour turnarounds for time-sensitive campaigns at an additional rate.",
  },
  {
    question: "Do you handle raw footage or do I need a rough cut?",
    answer:
      "Both. We can work from raw camera files, selects, or an existing rough cut. Our editors are experienced in organizing and sorting large volumes of unstructured footage.",
  },
  {
    question: "Can you match our existing brand guidelines?",
    answer:
      "Absolutely. We integrate your brand kit—fonts, colors, motion templates, and tone guidelines—into every deliverable to ensure visual consistency across all touchpoints.",
  },
  {
    question: "What formats and platforms do you deliver for?",
    answer:
      "We export for every major platform: YouTube, Instagram (Reels, Stories, Feed), TikTok, LinkedIn, broadcast TV, and cinema DCP. Each export is optimized for its target platform's specs.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible plans—monthly retainers for ongoing content needs and per-project pricing for one-off campaigns. Reach out for a custom quote tailored to your scope.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-headline mb-6">
            Frequently asked
            <br />
            questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-foreground text-base md:text-lg font-medium text-left hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
