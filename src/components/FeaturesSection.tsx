import { FileCheck, Share2, Shield, Video, MapPin, Clock, Smartphone, Bell } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Deal Certificate",
    description: "Get an instant blockchain-timestamped certificate with GPS verification for every transaction. Court-admissible proof in 60 seconds.",
  },
  {
    icon: Share2,
    title: "Deal Share",
    description: "Securely share deal proof with all parties. Both buyer and seller get verified copies stored safely in the cloud.",
  },
  {
    icon: Shield,
    title: "KYC Verified Identity",
    description: "Every user is verified via CNIC. Know exactly who you're dealing with before any money changes hands.",
  },
  {
    icon: Video,
    title: "60-Second Video Proof",
    description: "Record key terms, product conditions, and identities in a guided video — creating comprehensive evidence in under a minute.",
  },
  {
    icon: MapPin,
    title: "GPS Location Tagging",
    description: "Every deal is stamped with precise GPS coordinates, proving exactly where the transaction took place.",
  },
  {
    icon: Clock,
    title: "Blockchain Timestamp",
    description: "Tamper-proof timestamps anchored to the blockchain ensure your proof can never be altered or backdated.",
  },
  {
    icon: Smartphone,
    title: "Offline Recording",
    description: "Record deals even without internet. Your proof syncs and gets verified as soon as you're back online.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automatic payment reminders and deal follow-ups so nothing slips through the cracks.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Everything You Need to Secure Deals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From Deal Certificates to Deal Sharing — SnapProve provides complete protection for your everyday transactions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-brand transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
