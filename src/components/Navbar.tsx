import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import GetStartedForm from "@/components/GetStartedForm";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="SnapProve" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-foreground">SnapProve</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Demo</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" variant="outline" className="rounded-full px-5" asChild>
            <a href="https://drive.google.com/file/d/1MKv5OZEzVzuUPnlpNFBYQG-1eqwC-NsQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download App
            </a>
          </Button>
          <GetStartedForm trigger={
            <Button size="sm" className="gradient-primary border-0 text-primary-foreground rounded-full px-6">
              Get Started
            </Button>
          } />
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#demo" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Demo</a>
          <a href="#pricing" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Pricing</a>
          <a href="https://drive.google.com/file/d/1MKv5OZEzVzuUPnlpNFBYQG-1eqwC-NsQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Download App</a>
          <GetStartedForm trigger={<Button className="w-full gradient-primary border-0 rounded-full" size="sm">Get Started</Button>} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
