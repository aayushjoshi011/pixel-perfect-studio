import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Studio transformed our raw footage into a cinematic masterpiece. The turnaround was faster than any team we've worked with.",
    name: "Sarah Chen",
    role: "Creative Director, Luma Agency",
    initials: "SC",
  },
  {
    quote:
      "Their color grading alone elevated our brand film to award-show quality. We've never looked back since switching to Studio.",
    name: "Marcus Rivera",
    role: "Head of Content, Vortex Media",
    initials: "MR",
  },
  {
    quote:
      "From concept to delivery, Studio operates at a level most post-production houses can't match. Precision meets artistry.",
    name: "Aisha Patel",
    role: "Executive Producer, NorthStar Films",
    initials: "AP",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-headline mb-6">
            Trusted by
            <br />
            industry leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hear from the creators and brands who trust us with their vision.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="capability-card flex flex-col justify-between"
            >
              <blockquote className="text-foreground text-base leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar className="h-11 w-11">
                  <AvatarFallback className="bg-primary/15 text-primary text-sm font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
