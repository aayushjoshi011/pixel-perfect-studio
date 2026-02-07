import { motion } from "framer-motion";
import { MessageSquare, UserRound, Film, Palette, Zap, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: MessageSquare,
    title: "Precision video editing",
    description:
      "Expert editors craft seamless, cinematic cuts for every platform. Broadcast-ready, every time.",
  },
  {
    icon: UserRound,
    title: "Motion graphics mastery",
    description:
      "Custom animations and branded visuals that command attention and elevate your content.",
  },
  {
    icon: Film,
    title: "Color grading & finishing",
    description:
      "Cinematic color science that transforms raw footage into polished, mood-driven narratives.",
  },
  {
    icon: Palette,
    title: "Brand identity design",
    description:
      "Cohesive visual systems that define your brand across every touchpoint and platform.",
  },
  {
    icon: Zap,
    title: "Fast turnaround delivery",
    description:
      "Rapid production pipelines engineered for speed without ever sacrificing quality standards.",
  },
  {
    icon: Globe,
    title: "Multi-platform optimization",
    description:
      "Content formatted and optimized for YouTube, Instagram, TikTok, and broadcast delivery.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-headline mb-6">
            Capabilities
            <br />
            built for creators
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Premium editing, motion, and delivery—trusted by industry leaders.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              className="capability-card"
            >
              <cap.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-foreground text-xl font-semibold mb-3">
                {cap.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
