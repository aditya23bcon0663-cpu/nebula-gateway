import { motion } from "framer-motion";
import { Users, ClipboardCheck, UserCheck, Target } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Faculty", description: "Learn from IIT/NIT alumni and subject matter experts with 10+ years of experience." },
  { icon: Target, title: "Small Batch Sizes", description: "Limited seats per batch ensure every student gets individual focus and support." },
  { icon: ClipboardCheck, title: "Regular Tests", description: "Weekly assessments and mock exams to track progress and build exam confidence." },
  { icon: UserCheck, title: "Personalized Attention", description: "Dedicated mentors for doubt-clearing, performance tracking, and parent updates." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24" id="why-us">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-5 text-foreground">
              The <span className="text-primary">Lords Advantage</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We go beyond traditional coaching. Our holistic approach combines academic rigor with mentorship, ensuring every student reaches their full potential.
            </p>

            <div className="space-y-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "25", label: "Max Students / Batch" },
              { value: "50+", label: "Weekly Test Papers" },
              { value: "1:1", label: "Mentorship Ratio" },
              { value: "24/7", label: "Doubt Support" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center card-lift">
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
