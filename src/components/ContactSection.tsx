import { Mail, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Contact Us
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12">
          Have questions about SnapProve? We'd love to hear from you.
        </p>

        <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-brand border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-bold text-foreground text-lg">Zain Mudassar Iqbal</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
          </div>

          <a
            href="mailto:zainmudassariqbal@gmail.com"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            zainmudassariqbal@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
