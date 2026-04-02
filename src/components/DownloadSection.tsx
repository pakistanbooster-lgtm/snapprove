import { Button } from "@/components/ui/button";
import { Smartphone, Download, Shield, Zap, MapPin } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 bg-muted/50 mb-6">
              <Smartphone className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Available on Android</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Take SnapProve<br />
              <span className="text-gradient">Everywhere You Go</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Record deals, generate certificates, and share proof — all from your pocket. No internet needed for recording.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Zap, title: "Instant Proof", desc: "60-second certificates" },
                { icon: Shield, title: "Tamper-Proof", desc: "Blockchain verified" },
                { icon: MapPin, title: "GPS Tagged", desc: "Location stamped" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{title}</div>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gradient-primary border-0 text-primary-foreground text-lg px-8 py-6 rounded-full" asChild>
              <a
                href="https://drive.google.com/file/d/1MKv5OZEzVzuUPnlpNFBYQG-1eqwC-NsQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 w-5 h-5" />
                Download for Android
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">iOS coming soon • Free to start</p>
          </div>

          {/* Right — Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 rounded-[3rem] bg-secondary/10 blur-[40px] scale-90" />
              <div className="relative w-[260px] h-[520px] rounded-[2.5rem] border-[3px] border-border bg-card shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl" />
                {/* Content */}
                <div className="flex flex-col items-center gap-4 px-6 text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">SnapProve</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Record. Certify. Share.<br />Your deals are protected.
                  </p>
                  <div className="w-full h-px bg-border my-2" />
                  <div className="space-y-2 w-full">
                    {["Deal Certificate", "Deal Share", "GPS Proof"].map((f) => (
                      <div key={f} className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-xs text-foreground font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
