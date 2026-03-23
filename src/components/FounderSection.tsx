import { useState } from "react";
import { Award, ChevronDown, ChevronUp, Mail, Quote } from "lucide-react";
import founderImg from "@/assets/founder.png";

const FounderSection = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(153_93%_43%_/_0.06),_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            From The Founder
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Founder's Message
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Message Card */}
          <div className="card-glow rounded-2xl p-8 md:p-12 relative">
            <Quote className="w-10 h-10 text-secondary/20 absolute top-6 left-6" />
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                src={founderImg}
                alt="Zain Mudassar Iqbal - Founder & CEO"
                className="w-28 h-28 rounded-full object-cover border-2 border-secondary/30 shadow-glow flex-shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  SnapProve is built to solve one core problem: <span className="text-foreground font-medium">lack of trust in everyday transactions.</span>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In Pakistan and other emerging markets, millions of deals happen daily without proper proof. SnapProve makes it simple to create secure, verifiable, and court-admissible evidence within minutes using your smartphone.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our mission is to turn informal agreements into trusted, protected transactions at scale.
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display font-bold text-foreground text-lg">— Zain Mudassar Iqbal</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO, SnapProve</p>
                  <a href="mailto:zainmudassariqbal@gmail.com" className="inline-flex items-center gap-1.5 text-secondary text-sm mt-1 hover:text-secondary/80 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    zainmudassariqbal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* About Founder Toggle */}
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="mt-8 mx-auto flex items-center gap-2 text-secondary font-medium hover:text-secondary/80 transition-colors"
            >
              {showAbout ? "Hide" : "About the Founder"}
              {showAbout ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {/* About Section */}
            {showAbout && (
              <div className="mt-6 pt-6 border-t border-border animate-fade-in-up">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">Zain Mudassar Iqbal</span> is a Pakistan-based entrepreneur, LegalTech innovator, and founder of SnapProve.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  He specializes in building technology-driven solutions focused on digital trust, blockchain verification, and AI-powered systems for emerging markets. His work with SnapProve aims to secure informal transactions by enabling KYC-verified, blockchain-backed proof for everyday deals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Zain is also the founder of <span className="text-foreground font-medium">Three Reach AI</span>, focused on AI search visibility and Answer Engine Optimization (AEO).
                </p>

                {/* Achievements */}
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    "Connected Pakistan 30 Under 30 Awardee",
                    "Spark Tank Pakistan Top 0.1% Winner",
                    "PM Youth Program Innovate 4.0 Finalist",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 bg-secondary/5 border border-secondary/10 rounded-xl p-4">
                      <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  Currently pursuing Cambridge A Levels, he combines strong analytical thinking with real-world startup execution.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His vision is to build scalable global technology companies from Pakistan that improve trust, transparency, and digital infrastructure.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
