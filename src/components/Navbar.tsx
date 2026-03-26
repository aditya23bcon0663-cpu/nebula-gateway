import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl glow-text">Aselea</a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        <Button size="sm" className="hidden md:inline-flex glow-border">
          Get Started
        </Button>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 py-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#features" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <Button size="sm" className="w-full mt-2 glow-border">Get Started</Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
