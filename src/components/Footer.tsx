import { Github, Twitter, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-bold text-xl glow-text">Aselea</span>
            <a href="tel:8979846922" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              8979846922
            </a>
          </div>

          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </nav>

          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors hover-scale"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground mt-10">
          © {new Date().getFullYear()} Aselea Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
