import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="connect" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-headline mb-6">
              Connect with
              <br />
              our editor
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-card border-border h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="bg-card border-border h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Project details
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project, timeline, and vision…"
                rows={6}
                className="bg-card border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full py-6 text-base font-semibold"
            >
              Send message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
