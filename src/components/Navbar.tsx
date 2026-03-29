import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
    <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/50" />
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/profile.jpeg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <a href="#" className="text-foreground font-extrabold text-xl tracking-tight">
              Ansh Raj Singh<span className="text-primary"></span>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  const targetId = item.href.replace("#", "");
                  const targetSection = document.getElementById(targetId);
                  if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                const targetSection = document.getElementById("contact");
                if (targetSection) {
                  e.preventDefault();
                  targetSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold transition-colors duration-300"
            >
              Start project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative bg-background border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    const targetId = item.href.replace("#", "");
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                      e.preventDefault();
                      targetSection.scrollIntoView({ behavior: "smooth" });
                    }
                    setMobileOpen(false);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  const targetSection = document.getElementById("contact");
                  if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setMobileOpen(false);
                }}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-center font-semibold mt-2"
              >
                Start project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
