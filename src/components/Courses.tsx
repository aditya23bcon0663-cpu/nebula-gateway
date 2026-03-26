import { motion } from "framer-motion";
import { BookOpen, FlaskConical, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: BookOpen,
    title: "Class 9–10",
    description: "Strong foundation in Maths, Science & English with board exam-focused preparation.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FlaskConical,
    title: "Class 11–12",
    description: "In-depth coaching for CBSE & State Board with concept-first approach for Science & Commerce.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BrainCircuit,
    title: "JEE / NEET",
    description: "Intensive preparation for engineering and medical entrance exams with mock tests & mentoring.",
    color: "bg-success/10 text-success",
  },
  {
    icon: BookOpen,
    title: "SSC & Competitive",
    description: "Targeted coaching for SSC, Banking, and other government competitive examinations.",
    color: "bg-primary/10 text-primary",
  },
];

const Courses = () => {
  return (
    <section className="py-24 bg-secondary/30" id="courses">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Our Courses</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 text-foreground">
            Programs Designed for <span className="text-primary">Your Success</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-card rounded-2xl border border-border p-7 card-lift"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-5`}>
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{c.description}</p>
              <Button variant="ghost" size="sm" className="text-primary px-0 hover:bg-transparent hover:text-primary/80 group">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
