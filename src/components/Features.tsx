import { motion } from "framer-motion";
import { Shield, Zap, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-low latency infrastructure optimized for peak performance across global endpoints.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and zero-trust architecture protecting every layer of your network.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy across 50+ regions worldwide with automatic failover and intelligent routing.",
  },
  {
    icon: Layers,
    title: "Seamless Scaling",
    description: "Auto-scaling infrastructure that grows with your demand — from startup to enterprise.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Features = () => {
  return (
    <section className="py-28 relative" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Why Choose <span className="gradient-text">Aselea</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item} className="glass-card-hover p-8 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
