import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, X } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjblkwa";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="connect" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-headline mb-6 text-[#111111]">
              Connect with
              <br />
              us !
            </h2>
            <p className="text-[#555555] text-lg max-w-md mx-auto">
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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New contact form submission" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#111111]">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white border-gray-300 text-black placeholder:text-gray-400 h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#111111]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="bg-white border-gray-300 text-black placeholder:text-gray-400 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#111111]">
                Project details
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, timeline, and vision…"
                required
                rows={6}
                className="bg-white border-gray-300 text-black placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <Check className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-green-800">{message}</p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <X className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-red-800">{message}</p>
              </motion.div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading" || status === "success"}
              className="w-full py-6 text-base font-semibold"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
