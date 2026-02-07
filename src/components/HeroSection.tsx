import { motion } from "framer-motion";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional video editing studio"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Additional bottom gradient for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(0 0% 4%))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <motion.h1
            className="hero-headline mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Editing that
            <br />
            commands
            <br />
            attention
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-md mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Premium video editing. Precision, speed, and cinematic
            impact—trusted by global creators.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <a
              href="#work"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              View work
            </a>
            <a
              href="#contact"
              className="border border-foreground/30 hover:border-foreground/60 text-foreground px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 hover:bg-foreground/5"
            >
              Start project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
