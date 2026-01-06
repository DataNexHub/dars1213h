import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Particles */}
      <Particles quantity={40} />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Ready When You Are
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
            Your Next Chapter
            <br />
            <span className="text-primary">Starts Here</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you're building from scratch or scaling to millions—
            we're ready to make it happen.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendly.com/voratech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-7 text-lg group shadow-lg shadow-primary/25"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Free Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold px-10 py-7 text-lg"
              >
                Send a Message
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative teams at</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50">
              {["Startup A", "TechCorp", "Innovate Inc", "Growth Labs", "Scale Co"].map((company, i) => (
                <span key={i} className="text-muted-foreground font-medium text-lg">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
