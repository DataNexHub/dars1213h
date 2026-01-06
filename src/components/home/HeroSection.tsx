import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Particles Background */}
      <Particles quantity={70} />

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full mb-8 border border-primary/30"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gradient-primary">
              Where Vision Meets Engineering Excellence
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] mb-8"
          >
            <span className="text-foreground">Code is Easy.</span>
            <br />
            <span className="text-gradient">
              Architecture is Art.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            Anyone can write code. But building systems that{" "}
            <span className="text-primary font-semibold">scale without breaking</span>—
            that's where we come in. We design infrastructure that grows with your ambition.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-14"
          >
            {[
              { value: "150+", label: "Projects Shipped", color: "text-primary" },
              { value: "99.9%", label: "Uptime Delivered", color: "text-secondary" },
              { value: "50M+", label: "Users Served", color: "text-accent" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`text-4xl md:text-5xl font-display font-extrabold ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-7 text-lg group glow-primary transition-all duration-300 hover:shadow-glow-lg"
              >
                <Zap className="mr-2 w-5 h-5" />
                Let's Build Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5 font-semibold px-10 py-7 text-lg transition-all duration-300"
              >
                See Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full"
            style={{ background: 'linear-gradient(180deg, hsl(175 100% 50%), hsl(280 80% 60%))' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
