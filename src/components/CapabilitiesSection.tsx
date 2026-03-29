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
    <section id="CAPABILITIES" className="py-[60px] lg:py-[80px] bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1510px]">
        <motion.div
          className="text-center mb-[100px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-[8px] mx-auto max-w-[1500px] text-center">
            <span
              style={{
                fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
                fontWeight: 650,
                fontSize: 'clamp(65px, 13vw, 90px)',
                letterSpacing: '-0.01em',
                lineHeight: '1.15',
                color: '#000000',
                display: 'block',
              }}
            >
              Capabilities
            </span>
            {/* <span
              style={{
                fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(25px, 2vw, 45px)',
                letterSpacing: '-0.01em',
                lineHeight: '1.10',
                color: '#000000',
                display: 'block',
              }}
            >
              built for creators
            </span> */}
          </h2>
          <p className="text-[#777777] text-[18px] font-normal max-w-[580px] mx-auto leading-relaxed mt-[24px] tracking-wide">
            Premium editing, motion, and delivery trusted by industry leaders.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-2 xl:gap-2 max-w-[1400px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-1 xl:col-span-7 bg-white rounded-xl p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15),0_4px_10px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_8px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <MessageSquare className="w-7 h-7 text-[#2563EB] mb-6" strokeWidth={1.5} />
            <h3 className="text-[#1F2937] text-xl font-semibold mb-3 leading-tight">
              Precision video editing
            </h3>
            <p className="text-[#4B5563] text-base leading-[1.6]">
              Expert editors craft seamless, cinematic cuts for every platform. Broadcast-ready, every time.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-1 xl:col-span-5 bg-white rounded-xl p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15),0_4px_10px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_8px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <UserRound className="w-7 h-7 text-[#2563EB] mb-6" strokeWidth={1.5} />
            <h3 className="text-[#1F2937] text-xl font-semibold mb-3 leading-tight">
              Motion graphics mastery
            </h3>
            <p className="text-[#4B5563] text-base leading-[1.6]">
              Custom animations and branded visuals that command attention and elevate your content.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-1 xl:col-span-5 bg-white rounded-xl p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15),0_4px_10px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_8px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <Film className="w-7 h-7 text-[#2563EB] mb-6" strokeWidth={1.5} />
            <h3 className="text-[#1F2937] text-xl font-semibold mb-3 leading-tight">
              Color grading & finishing
            </h3>
            <p className="text-[#4B5563] text-base leading-[1.6]">
              Cinematic color science that transforms raw footage into polished, mood-driven narratives.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-1 xl:col-span-7 bg-white rounded-xl p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15),0_4px_10px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_8px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <Palette className="w-7 h-7 text-[#2563EB] mb-6" strokeWidth={1.5} />
            <h3 className="text-[#1F2937] text-xl font-semibold mb-3 leading-tight">
              Brand identity design
            </h3>
            <p className="text-[#4B5563] text-base leading-[1.6]">
              Cohesive visual systems that define your brand across every touchpoint and platform.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
