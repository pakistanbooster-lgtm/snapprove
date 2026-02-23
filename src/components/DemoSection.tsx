const DemoSection = () => {
  return (
    <section id="demo" className="py-24 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Product Demo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            See SnapProve in Action
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg">
            Watch how easy it is to create a Deal Certificate and share it with Deal Share.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-brand border border-secondary/20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            src="/demo-video.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
