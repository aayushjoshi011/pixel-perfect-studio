const Footer = () => {
  return (
    <footer id="contact" className="py-16 lg:py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Premium video editing and motion design studio. Trusted by
              creators, brands, and agencies worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
            </h4>
            <ul className="space-y-2">
              {[""].map((item) => (
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
            <ul className="space-y-3">
              <li>    
              </li>
              <li>  
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center gap-4">
          <p className="text-muted-foreground text-sm ml-auto">
            © 2026 Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
