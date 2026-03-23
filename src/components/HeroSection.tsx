import { Button } from "@/components/ui/button";
import GetStartedForm from "@/components/GetStartedForm";
import { Shield, ArrowRight, FileCheck, Share2, Video, MapPin, Clock, Smartphone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Badge */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 bg-muted/50">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">TrustTech Platform — Blockchain Verified</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Prove Every Deal.<br />
            <span className="text-gradient">Protect Every Rupee.</span>
          </h1>
        </div>

        <p className="text-center max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          For deals where a lawyer is too much, but a handshake isn't enough. Create instant, blockchain-verified Deal Certificates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <GetStartedForm trigger={
            <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-lg px-8 py-6 rounded-full animate-pulse-glow">
              Start Free — 5 Deals
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          } />
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted text-lg px-8 py-6 rounded-full"
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Watch Demo
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {/* Large card - Deal Certificate */}
          <div className="col-span-2 row-span-2 card-glow rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[240px]">
            <div>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Deal Certificate</h3>
              <p className="text-muted-foreground text-sm md:text-base">Instant blockchain-timestamped, GPS-tagged proof certificate for every transaction.</p>
            </div>
            <div className="mt-4 flex gap-6">
              <div>
                <div className="text-2xl font-bold text-secondary">60s</div>
                <div className="text-xs text-muted-foreground">Proof Creation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-xs text-muted-foreground">Tamper-Proof</div>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="card-glow rounded-2xl p-5 flex flex-col justify-center items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary">50M+</div>
            <div className="text-xs text-muted-foreground mt-1">Transactions</div>
          </div>

          {/* Feature list card */}
          <div className="card-glow rounded-2xl p-5">
            <div className="space-y-3">
              {[
                { icon: Video, label: "Record" },
                { icon: FileCheck, label: "Certify" },
                { icon: Share2, label: "Share" },
                { icon: Shield, label: "Protect" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deal Share card */}
          <div className="card-glow rounded-2xl p-5 flex flex-col justify-center">
            <Share2 className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-display font-bold text-foreground">Deal Share</h4>
            <p className="text-xs text-muted-foreground mt-1">Share verified proof with all parties instantly</p>
          </div>

          {/* Fully Automated card */}
          <div className="card-glow rounded-2xl p-5 flex flex-col justify-center">
            <div className="font-display text-lg font-bold text-foreground">Fully</div>
            <div className="font-display text-lg font-bold text-secondary italic">Automated</div>
            <div className="font-display text-lg font-bold text-foreground">Self-Service</div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <p className="text-sm text-muted-foreground mb-4">Trusted by thousands of users across Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
