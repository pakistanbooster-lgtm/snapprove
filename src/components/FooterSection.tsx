import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SnapProve" className="h-10 w-10" />
              <span className="font-display text-xl font-bold text-foreground">SnapProve</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For deals where a lawyer is too much, but a handshake isn't enough.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Deal Certificate", "Deal Share", "Pricing", "Download App"],
            },
            {
              title: "Company",
              links: ["About Us", "Blog", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Refund Policy"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SnapProve. All rights reserved. Made with ❤️ in Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
