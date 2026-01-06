import { Section, SectionHeader } from "@/components/ui/section";
import { Code2, Rocket, Shield, Zap, Cloud, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Bespoke Software",
    description: "Not templates. Not shortcuts. Custom-built solutions engineered for your exact needs.",
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Cloud Mastery",
    description: "AWS, Azure, GCP—we architect infrastructure that scales from startup to enterprise.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "API Ecosystems",
    description: "Seamless integrations that connect your world. Fast, reliable, bulletproof.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Zero compromises. SOC 2 compliant practices woven into every line of code.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Mobile Excellence",
    description: "Native performance. Cross-platform reach. Experiences users love.",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "Rapid MVPs",
    description: "Validate fast. Iterate faster. Get to market before your competition wakes up.",
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return { bg: 'bg-primary/10', hover: 'hover:border-primary/50', text: 'text-primary', glow: 'group-hover:shadow-glow-sm' };
    case 'secondary':
      return { bg: 'bg-secondary/10', hover: 'hover:border-secondary/50', text: 'text-secondary', glow: 'group-hover:shadow-glow-violet' };
    case 'accent':
      return { bg: 'bg-accent/10', hover: 'hover:border-accent/50', text: 'text-accent', glow: 'group-hover:shadow-glow-amber' };
    default:
      return { bg: 'bg-primary/10', hover: 'hover:border-primary/50', text: 'text-primary', glow: '' };
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <SectionHeader
          badge="What We Do"
          title="Capabilities That Move Needles"
          subtitle="We don't just write code. We solve problems that keep founders up at night."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-card border border-border/50 rounded-2xl p-8 ${colors.hover} transition-all duration-300 overflow-hidden gradient-border ${colors.glow}`}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}
                  >
                    <service.icon className={`w-7 h-7 ${colors.text}`} />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default ServicesSection;
