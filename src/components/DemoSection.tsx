const DemoSection = () => {
  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Product Demo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            See SnapProve <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Watch how easy it is to create a Deal Certificate and share it with Deal Share.
          </p>
        </div>

        <div className="max-w-4xl mx-auto card-glow rounded-2xl overflow-hidden">
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
