import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Contact Us
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12">
          Have questions or facing any issues? Our team is here to help.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Founder */}
          <div className="bg-card rounded-2xl p-6 shadow-brand border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg">Zain Mudassar Iqbal</h3>
            <p className="text-sm text-muted-foreground mb-3">Founder & CEO</p>
            <a href="mailto:zainmudassariqbal@gmail.com" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium text-sm">
              <Mail className="w-4 h-4" />
              zainmudassariqbal@gmail.com
            </a>
          </div>

          {/* Azhar */}
          <div className="bg-card rounded-2xl p-6 shadow-brand border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg">Azhar Mehmood</h3>
            <p className="text-sm text-muted-foreground mb-3">Team Member</p>
            <a href="tel:+923428109285" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium text-sm">
              <Phone className="w-4 h-4" />
              +92 342 8109285
            </a>
          </div>

          {/* Abdulrehman */}
          <div className="bg-card rounded-2xl p-6 shadow-brand border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg">Abdulrehman Naveed</h3>
            <p className="text-sm text-muted-foreground mb-3">Team Member</p>
            <a href="tel:+923424223885" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium text-sm">
              <Phone className="w-4 h-4" />
              +92 342 4223885
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
