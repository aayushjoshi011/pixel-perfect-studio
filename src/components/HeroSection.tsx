import { motion } from "framer-motion";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image - full viewport width */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional video editing studio"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Cinematic gradient overlay - left to right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.25) 60%, transparent 85%)",
        }}
      />

      {/* Additional bottom gradient for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(0 0% 4%))",
        }}
      />

      {/* Content - centered in max-width 1510px */}
      <div className="relative z-10 w-full max-w-[1510px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="max-w-2xl pt-12 lg:pt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="hero-headline mb-10">
              Editing that
              <br />
              commands
              <br />
              attention
            </h1>

            <motion.p
              className="text-white/70 text-lg md:text-xl max-w-[520px] mb-10 leading-relaxed"
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
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                View work
              </a>
              <a
                href="#contact"
                className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Start project
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Video/Image showcase */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Video editing workspace"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Subtle gradient overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
