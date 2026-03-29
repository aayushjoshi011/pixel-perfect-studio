import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of video editing do you offer?",
    answer:
      "We cover the full spectrum commercial campaigns, music videos, documentaries, product launches, social content, and event recaps. Every project receives broadcast-level attention to detail.",
  },
  {
    question: "How fast is the typical turnaround?",
    answer:
      "Standard projects are delivered within 5 to 7 business days. We also offer expedited 48-hour and 72-hour turnarounds for time-sensitive campaigns at an additional rate.",
  },
  {
    question: "Do you handle raw footage or do I need a rough cut?",
    answer:
      "Both. We can work from raw camera files, selects, or an existing rough cut. Our editors are experienced in organizing and sorting large volumes of unstructured footage.",
  },
  {
    question: "Can you match our existing brand guidelines?",
    answer:
      "Absolutely. We integrate your brand kit-fonts, colors, motion templates, and tone guidelines into every deliverable to ensure visual consistency across all touchpoints.",
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
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-24 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* <p
            className="mb-6 mx-auto"
            style={{
              fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(12px, 1.3vw, 13px)',
              letterSpacing: '0.14em',
              lineHeight: '1.4',
              color: '#9a9a9a',
              textTransform: 'uppercase',
            }}
          >
            Everything you need to know
          </p> */}
          <h2
            className="mb-6 mx-auto max-w-[1000px] text-center"
            style={{
              fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
              fontWeight: 650,
              fontSize: 'clamp(65px, 13vw, 90px)',
              letterSpacing: '-0.015em',
              lineHeight: '1.1',
              color: '#111111',
            }}
          >
            Frequently
            <br />
            asked questions
          </h2>
          <p className="text-[#555555] text-lg max-w-xl mx-auto whitespace-nowrap">
            Find answers to common inquiries about our services and processes.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-45px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="bg-white rounded-[20px] p-11 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 text-center"
              >
                <HelpCircle className="w-8 h-8 text-[#2563EB] mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-[#111111] text-lg font-semibold mb-3 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
