import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Story {
  title: string;
  description: string;
  category: string;
}

const stories: Story[] = [
  {
    title: "How a DTC brand doubled engagement with cinematic product films",
    description:
      "We partnered with a fast-growing skincare brand to replace static ads with narrative-driven product videos—resulting in 2× watch-through rates.",
    category: "Case Study",
  },
  {
    title: "Behind the edit: crafting a music video in 72 hours",
    description:
      "An artist needed a festival-ready visual in three days. Our rapid pipeline delivered broadcast-quality work on an impossible timeline.",
    category: "Behind the Scenes",
  },
  {
    title: "Scaling content for a global launch across 12 markets",
    description:
      "A tech company tapped us to localize and adapt a hero launch film for twelve regional markets—without losing brand consistency.",
    category: "Enterprise",
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

const StoriesSection = () => {
  return (
    <section id="stories" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-headline mb-6">
            Stories that move
            <br />
            brands forward
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Real results from real partnerships—see how our work drives impact.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stories.map((story) => (
            <motion.article
              key={story.title}
              variants={itemVariants}
              className="group capability-card flex flex-col justify-between cursor-pointer"
            >
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-4 block">
                  {story.category}
                </span>
                <h3 className="text-foreground text-xl font-semibold mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read more
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesSection;
