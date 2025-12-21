import { Section, SectionHeader } from "@/components/ui/section";
import { Code2, Rocket, Shield, Zap, Cloud, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with modern technologies to solve your unique business challenges.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure on AWS, Azure, or GCP designed for reliability and performance.",
  },
  {
    icon: Zap,
    title: "API Development & Integration",
    description: "Robust APIs and seamless third-party integrations that power your digital ecosystem.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security practices and compliance frameworks built into every solution.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: Rocket,
    title: "MVP & Rapid Prototyping",
    description: "Validate your ideas quickly with functional prototypes and minimum viable products.",
  },
];

const ServicesSection = () => {
  return (
    <Section>
      <SectionHeader
        badge="Our Expertise"
        title="End-to-End Digital Solutions"
        subtitle="From concept to deployment, we deliver excellence at every stage of development."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
