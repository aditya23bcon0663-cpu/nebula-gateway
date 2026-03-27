import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  Layers,
  Cpu,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "Sub-millisecond response times powered by edge computing and intelligent caching across every node.",
    details: [
      "Global CDN with 200+ edge locations for near-zero latency",
      "Smart caching layers that adapt to traffic patterns automatically",
      "Hardware-accelerated packet processing for maximum throughput",
    ],
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description:
      "End-to-end encryption with biometric verification and AI-driven threat detection in real time.",
    details: [
      "AES-256 encryption at rest and TLS 1.3 in transit",
      "Continuous identity verification with multi-factor authentication",
      "AI anomaly detection that blocks threats before they reach your network",
    ],
  },
  {
    icon: Globe,
    title: "Worldwide Infrastructure",
    description:
      "70+ data centers spanning six continents with automatic geo-routing and instant failover.",
    details: [
      "Anycast routing directs users to the nearest healthy node",
      "99.999% uptime SLA backed by redundant multi-region architecture",
      "Automated disaster recovery with sub-second failover switching",
    ],
  },
  {
    icon: Layers,
    title: "Infinite Scalability",
    description:
      "Elastic resources that scale from zero to millions of requests — pay only for what you use.",
    details: [
      "Serverless auto-scaling with no cold starts or manual provisioning",
      "Horizontal scaling across thousands of containers in seconds",
      "Usage-based billing so you never pay for idle capacity",
    ],
  },
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    description:
      "Deep network insights with machine-learning models that predict bottlenecks before they happen.",
    details: [
      "Predictive traffic modeling that forecasts load spikes hours ahead",
      "Automated root-cause analysis reduces MTTR by up to 80%",
      "Custom ML pipelines you can train on your own telemetry data",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring",
    description:
      "Live dashboards with granular metrics, custom alerts, and full observability across your stack.",
    details: [
      "Sub-second metric ingestion with infinite cardinality support",
      "Customisable alert rules with multi-channel notifications",
      "Distributed tracing and log correlation in a single pane of glass",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Features = () => {
  return (
    <section className="py-28 relative overflow-hidden" id="features">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Why Choose <span className="gradient-text">Aselea</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            A next-generation platform engineered for speed, security, and
            scale — so you can focus on building, not firefighting.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              {/* Hover corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
