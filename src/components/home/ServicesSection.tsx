import { Section, SectionHeader } from "@/components/ui/section";
import { Code2, Rocket, Shield, Zap, Cloud, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Bespoke Software",
    description: "Not templates. Not shortcuts. Custom-built solutions engineered for your exact needs.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud Mastery",
    description: "AWS, Azure, GCP—we architect infrastructure that scales from startup to enterprise.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Zap,
    title: "API Ecosystems",
    description: "Seamless integrations that connect your world. Fast, reliable, bulletproof.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Zero compromises. SOC 2 compliant practices woven into every line of code.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Excellence",
    description: "Native performance. Cross-platform reach. Experiences users love.",
    gradient: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: Rocket,
    title: "Rapid MVPs",
    description: "Validate fast. Iterate faster. Get to market before your competition wakes up.",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

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
    <Section>
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
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 overflow-hidden"
          >
            {/* Gradient Background on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ServicesSection;
