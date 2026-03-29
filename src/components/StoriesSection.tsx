import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Quote } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "300", label: "Global Clients" },
  { value: "500", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Enterprise Brands" },
];

const StoriesSection = () => {
  return (
    <section id="stories" className="py-[140px] lg:py-[170px] bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-[90px] lg:mb-[110px]"
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
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
            }}
          >
            Trusted by industry leaders
          </p>
          <h2
            className="mb-0 mx-auto max-w-[900px] text-center"
            style={{
              fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
              fontWeight: 650,
              fontSize: 'clamp(65px, 13vw, 90px)',
              letterSpacing: '-0.02em',
              lineHeight: '1.05',
              color: '#ffffff',
            }}
          >
            Stories that move
            <br />
            brands forward
          </h2>
        </motion.div>

        <motion.div
          className="max-w-[1600px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-[24px] pt-10 pb-[100px] px-[80px] lg:px-[100px] shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
            {/* Top row: Quote icon only */}
            <div className="flex justify-end mb-6">
              <Quote className="w-14 h-14 text-gray-400 opacity-15" strokeWidth={1.5} />
            </div>

            {/* Testimonial */}
            <blockquote className="mb-12 max-w-[1200px]">
              <p
                className="text-xl leading-relaxed"
                style={{ color: '#111111' }}
              >
                "Working with this studio transformed our entire content strategy. The quality, speed, and creative vision exceeded every expectation we had."
              </p>
            </blockquote>

            {/* Author */}
            <div className="mb-8">
              <p
                className="font-semibold text-[15px]"
                style={{ color: '#111111' }}
              >
                Iman Gadzhi
              </p>
              <p className="text-[12px]" style={{ color: '#777777' }}>
                Entrepreneur & Content Creator
              </p>
            </div>

            {/* Metrics Grid - 4 items in one row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: 'Inter, "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif',
                      fontWeight: 650,
                      fontSize: 'clamp(48px, 5vw, 80px)',
                      letterSpacing: '-0.02em',
                      lineHeight: '1',
                      color: '#111111',
                    }}
                  >
                    {metric.value}
                  </p>
                  <p
                    className="text-[14px]"
                    style={{ color: '#777777' }}
                  >
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#2563EB] hover:text-[#1d4ed8] transition-colors duration-300"
            >
              Read more
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesSection;
