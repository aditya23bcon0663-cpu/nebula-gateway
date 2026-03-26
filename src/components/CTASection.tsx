import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 md:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(37_90%_51%/0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-primary-foreground">
              Start Your Success Journey Today
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Limited seats available for the upcoming batch. Don't miss your chance to learn from the best.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-10 py-6 font-semibold shadow-lg group"
            >
              Join Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
