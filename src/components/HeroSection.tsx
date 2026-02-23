import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-accent/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <Shield className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">TrustTech Platform — Blockchain Verified</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
          Prove Every Deal.<br />
          <span className="text-secondary">Protect Every Rupee.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          For deals where a lawyer is too much, but a handshake isn't enough. Create instant, blockchain-verified Deal Certificates and share them securely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-lg px-8 py-6 shadow-brand animate-pulse-glow">
            Start Free — 5 Deals
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {[
            ["60s", "Proof Creation"],
            ["100%", "Tamper-Proof"],
            ["50M+", "Transactions"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold text-secondary">{num}</div>
              <div className="text-sm text-primary-foreground/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
