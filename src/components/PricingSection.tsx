import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/project",
    description: "Perfect for one-off campaigns and standalone edits.",
    features: [
      "Up to 5 minutes final cut",
      "2 revision rounds",
      "Single platform export",
      "5-day delivery",
      "Stock music included",
    ],
    highlighted: false,
    cta: "Get started",
  },
  {
    name: "Professional",
    price: "$4,500",
    period: "/month",
    description: "For brands shipping content consistently every month.",
    features: [
      "Up to 20 minutes monthly",
      "Unlimited revisions",
      "Multi-platform exports",
      "48-hour rush available",
      "Dedicated editor",
      "Motion graphics included",
      "Brand kit integration",
    ],
    highlighted: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-service production partnership for large teams.",
    features: [
      "Unlimited content volume",
      "Priority 24-hour delivery",
      "All platform optimization",
      "Dedicated team of 3+",
      "Color grading & finishing",
      "Custom motion templates",
      "Account manager",
      "SLA guarantee",
    ],
    highlighted: false,
    cta: "Contact sales",
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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-headline mb-6">Choose your plan</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Flexible pricing built for creators at every scale.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`rounded-xl border p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/30 hover:bg-secondary"
              }`}
            >
              {plan.highlighted && (
                <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
                  Most popular
                </span>
              )}
              <h3 className="text-foreground text-2xl font-bold mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-foreground text-4xl font-extrabold">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground text-base">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full py-6 text-base font-semibold"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
