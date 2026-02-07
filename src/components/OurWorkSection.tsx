import { motion } from "framer-motion";

interface WorkItem {
  id: number;
  title: string;
  category: string;
  videoSrc: string;
}

const workItems: WorkItem[] = [
  { id: 1, title: "Brand Campaign — Nike", category: "Commercial", videoSrc: "/videos/showreel.mp4" },
  { id: 2, title: "Music Video — Eclipse", category: "Music", videoSrc: "/videos/showreel.mp4" },
  { id: 3, title: "Documentary — Origins", category: "Documentary", videoSrc: "/videos/showreel.mp4" },
  { id: 4, title: "Product Launch — Aura", category: "Product", videoSrc: "/videos/showreel.mp4" },
  { id: 5, title: "Social Series — Pulse", category: "Social", videoSrc: "/videos/showreel.mp4" },
  { id: 6, title: "Event Recap — Summit", category: "Event", videoSrc: "/videos/showreel.mp4" },
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const OurWorkSection = () => {
  return (
    <section id="work" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-headline mb-6">Our work</h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            A selection of projects that push creative boundaries and deliver
            measurable impact.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="work-card group aspect-video"
            >
              <video
                src={item.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="work-card-overlay">
                <div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.category}
                  </span>
                  <span className="work-card-title">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkSection;
