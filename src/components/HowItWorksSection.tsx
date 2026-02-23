import { UserCheck, Video, FileCheck, Share2 } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Verify Your Identity",
    description: "30-second CNIC verification during signup. One-time process for lifetime verification.",
  },
  {
    icon: Video,
    step: "02",
    title: "Record the Deal",
    description: "Record a 60-second guided video showing terms, product conditions, and both parties.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Deal Certificate",
    description: "Receive an instant blockchain-timestamped, GPS-tagged proof certificate.",
  },
  {
    icon: Share2,
    step: "04",
    title: "Share & Protect",
    description: "Share the Deal Certificate with all parties. Stored securely in the cloud forever.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Secure Any Deal in 3 Minutes
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="relative z-10 w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 shadow-brand group-hover:shadow-glow transition-shadow">
                <s.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Step {s.step}</span>
              <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
