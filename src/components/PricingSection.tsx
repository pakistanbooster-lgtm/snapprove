import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import GetStartedForm from "@/components/GetStartedForm";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "",
    deals: "5 Deals Free",
    description: "Try SnapProve risk-free",
    features: [
      "5 Deal Certificates",
      "Deal Share",
      "KYC Verification",
      "GPS Location Tagging",
      "Blockchain Timestamp",
      "7-Day Cloud Storage",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "999",
    period: "/mo",
    deals: "50 Deals/Month",
    description: "For regular buyers & sellers",
    features: [
      "50 Deal Certificates/Month",
      "Deal Share Unlimited",
      "Priority KYC Verification",
      "GPS + Blockchain Proof",
      "1-Year Cloud Storage",
      "Smart Reminders",
      "Customer Support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "1,999",
    period: "/mo",
    deals: "Unlimited Deals",
    description: "For shops & businesses",
    features: [
      "Unlimited Deal Certificates",
      "Deal Share Unlimited",
      "Instant KYC Verification",
      "GPS + Blockchain Proof",
      "Lifetime Cloud Storage",
      "Smart Reminders & Analytics",
      "Priority Support",
      "Team Management",
    ],
    cta: "Go Business",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Pricing</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Start free, upgrade when you need more. All prices in PKR.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border border-secondary/50 bg-card shadow-brand"
                  : "card-glow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>

              <div className="mt-6 mb-2">
                <span className="text-4xl font-bold text-foreground">PKR {plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm font-semibold text-secondary mb-6">{plan.deals}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <GetStartedForm trigger={
                <Button
                  className={`w-full rounded-full ${plan.popular ? "gradient-primary border-0 text-primary-foreground" : "border-border"}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              } />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
