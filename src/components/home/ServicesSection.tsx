import { Section, SectionHeader } from "@/components/ui/section";
import { Code2, Rocket, Shield, Zap, Brain, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end product development with modern tech stacks. From MVP to scale.",
  },
  {
    icon: Brain,
    title: "System Architecture",
    description: "Design infrastructure that grows without collapsing. Built for scale from day one.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Transform your ideas into working prototypes in record time. Ship faster.",
  },
  {
    icon: Shield,
    title: "Code Audit & Review",
    description: "Identify bottlenecks, security issues, and technical debt before they become problems.",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description: "From development to deployment. We handle the entire journey to market.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Scale your team with senior engineers who integrate seamlessly.",
  },
];

const ServicesSection = () => {
  return (
    <Section>
      <SectionHeader
        badge="What We Do"
        title="Services Built for Speed"
        subtitle="We don't just write code. We architect solutions that scale."
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
