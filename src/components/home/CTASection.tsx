import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden noise">
      {/* Particles */}
      <Particles quantity={50} />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Animated Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-[200px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

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
            className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-8 border border-primary/30"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Ready When You Are
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6">
            <span className="text-foreground">Your Next Chapter</span>
            <br />
            <span className="text-gradient">Starts Here</span>
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
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-7 text-lg group glow-primary transition-all duration-300 hover:shadow-glow-lg"
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
                className="border-secondary/50 text-foreground hover:border-secondary hover:bg-secondary/10 font-semibold px-10 py-7 text-lg transition-all duration-300"
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
            className="mt-20 pt-12 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-8">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              {["TechFlow", "DataScale", "CloudFirst", "Innovate", "GrowthLabs"].map((company, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ opacity: 1 }}
                  className="text-muted-foreground font-medium text-lg transition-opacity cursor-default"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
