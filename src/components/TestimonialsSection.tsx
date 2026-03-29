import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Worked with him for a short-term project and honestly didn't expect this level of quality. Communication was smooth, delivery was on time, and the final output exceeded what I had in mind. Would definitely recommend",
    name: "Rohit Mehta",
    rating: 5,
    initials: "SC",
  },
  {
    quote:
      "I've worked with multiple freelancers before, but this experience was different. He actually understands what you're trying to achieve rather than just following instructions blindly. The attention to detail and consistency were impressive. Looking forward to collaborating again soon!",
    name: "Emily Carter",
    rating: 5,
    initials: "MR",
  },
  {
    quote:
      "Very professional and easy to work with. Delivered exactly what was promised, and even added small improvements that made a big difference. That's rare",
    name: "Aayush Sharma",
    rating: 4,
    initials: "AP",
  },
  {
    quote:
      "The motion graphics work was absolutely stunning. They brought our vision to life with incredible attention to detail.",
    name: "Daniel Brooks",
    rating: 5,
    initials: "JM",
  },
  {
    quote:
      "Super quick turnaround and clean work. Didn't have to explain things again and again, which saved a lot of time. Really satisfied with the result!",
    name: "Sneha Kapoor",
    rating: 4,
    initials: "ER",
  },
  {
    quote:
      "Honestly, I wasn't sure at first, but he proved me wrong. The work was creative, well-structured, and delivered before the deadline. Also very responsive throughout the process. Highly recommend if you want someone reliable..",
    name: "Lucas Fernandes",
    rating: 5,
    initials: "DK",
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
    <section id="testimonials" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-24 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p
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
            What our clients say
          </p>
          <h2
            className="mb-0 mx-auto max-w-[1200px] text-center"
            style={{
              fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
              fontWeight: 650,
              fontSize: 'clamp(70px, 15vw, 100px)',
              letterSpacing: '-0.01em',
              lineHeight: '1.08',
              color: '#111111',
            }}
          >
            Testimonials that
            <br />
            inspire confidence
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-x-8 gap-y-10 max-w-[1320px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="bg-white rounded-xl p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15),0_4px_10px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_8px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <blockquote className="text-[#1F2937] text-base leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar className="h-11 w-11">
                  <AvatarFallback className="bg-[#2563EB]/15 text-[#2563EB] text-sm font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[#1F2937] font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-yellow-400 text-sm">
                    {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                  </p>
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
