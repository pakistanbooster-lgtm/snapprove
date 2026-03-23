import { FileCheck, Share2, Shield, Video, MapPin, Clock, Smartphone, Bell } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Deal Certificate",
    description: "Get an instant blockchain-timestamped certificate with GPS verification for every transaction.",
  },
  {
    icon: Share2,
    title: "Deal Share",
    description: "Securely share deal proof with all parties. Both buyer and seller get verified copies.",
  },
  {
    icon: Shield,
    title: "KYC Verified Identity",
    description: "Every user is verified via CNIC. Know exactly who you're dealing with.",
  },
  {
    icon: Video,
    title: "60-Second Video Proof",
    description: "Record key terms, product conditions, and identities in a guided video.",
  },
  {
    icon: MapPin,
    title: "GPS Location Tagging",
    description: "Every deal is stamped with precise GPS coordinates proving where it took place.",
  },
  {
    icon: Clock,
    title: "Blockchain Timestamp",
    description: "Tamper-proof timestamps anchored to the blockchain ensure proof can never be altered.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Everything You Need to <span className="text-gradient">Secure Deals</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From Deal Certificates to Deal Sharing — SnapProve provides complete protection for your everyday transactions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-glow rounded-2xl p-6 group"
            >
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon className="w-5 h-5 text-primary-foreground" />
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
