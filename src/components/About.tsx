import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "10+ years of teaching excellence",
  "Faculty from IITs, NITs & top universities",
  "Proven methodology with consistent results",
  "Nurturing environment for every student",
];

const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary/5 rounded-3xl p-10 border border-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative space-y-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">Since 2014</h3>
                <p className="text-muted-foreground">Shaping futures, one student at a time.</p>
                <div className="flex justify-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Expert Faculty</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-5 text-foreground">
              Where Learning Meets <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lords Coaching is a premier coaching institute dedicated to empowering students with the knowledge, skills, and confidence to excel in their academic pursuits. Our experienced faculty, proven curriculum, and supportive learning environment make us the top choice for students and parents alike.
            </p>

            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
