import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-28 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Vision</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-8">
              Redefining <span className="gradient-text">Connectivity</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Aselea Network is pioneering the next generation of digital infrastructure. We believe in a world where connectivity is seamless, secure, and universally accessible. Our platform combines cutting-edge technology with intuitive design to deliver network solutions that empower businesses to thrive in the digital age.
          </motion.p>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From startups to Fortune 500 companies, we provide the backbone that keeps the digital world running — faster, safer, and smarter than ever before.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
