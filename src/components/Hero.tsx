import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-pattern overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-accent/8 blur-3xl" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge mb-6">🎓 Trusted by 500+ Students</span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-6 text-foreground">
              Empowering Students for{" "}
              <span className="text-primary">Academic Excellence</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Join Lords Coaching and achieve your dreams with expert guidance, personalized attention, and a proven track record of success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 shadow-lg shadow-primary/25 group">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 group">
                <PlayCircle className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </div>
          </motion.div>

          {/* Visual cards */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: BookOpen, label: "Expert Curriculum", desc: "Structured for results", color: "bg-primary/10 text-primary" },
                { icon: Users, label: "Small Batches", desc: "Max 25 students", color: "bg-accent/10 text-accent" },
                { icon: Award, label: "Top Results", desc: "95%+ success rate", color: "bg-success/10 text-success" },
                { icon: ArrowRight, label: "Career Guidance", desc: "Beyond academics", color: "bg-primary/10 text-primary" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-card rounded-2xl border border-border p-6 shadow-sm card-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
