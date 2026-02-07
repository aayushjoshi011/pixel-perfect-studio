const Footer = () => {
  return (
    <footer id="contact" className="py-16 lg:py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-foreground font-extrabold text-2xl tracking-tight">
              STUDIO<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Premium video editing and motion design studio. Trusted by
              creators, brands, and agencies worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
              Studio
            </h4>
            <ul className="space-y-3">
              {["Work", "Capabilities", "About", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@studio.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                  hello@studio.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Los Angeles, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Vimeo"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
