import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-7 w-7" />
              <span className="font-display font-bold text-xl">Lords Coaching</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Empowering students with quality education, expert guidance, and a path to academic excellence since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm text-background/60">
              {["About", "Courses", "Results", "Contact", "Privacy Policy"].map((l) => (
                <a key={l} href="#" className="block hover:text-background transition-colors">{l}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@lordscoaching.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>123, Education Lane, New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Lords Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
