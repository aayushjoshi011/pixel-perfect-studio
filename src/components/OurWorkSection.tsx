"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos } from "@/lib/videos";

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
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="work" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-6 mx-auto"
            style={{
              fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
              fontWeight: 650,
              fontSize: 'clamp(70px, 15vw, 100px)',
              letterSpacing: '-0.01em',
              lineHeight: '1.08',
              color: '#ffffff',
            }}
          >
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
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
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </motion.div>

        {activeVideo && (
          <VideoModal
            video={activeVideo}
            isOpen={activeVideo !== null}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </section>
  );
};

export default OurWorkSection;
