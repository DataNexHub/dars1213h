import { Section, SectionHeader } from "@/components/ui/section";
import { X, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const challenges = [
  "Legacy code that feels like quicksand",
  "Deadlines that slip like water through fingers",
  "Developers who vanish when things get hard",
  "Technical debt that compounds daily",
];

const solutions = [
  "Modern architecture that accelerates, not anchors",
  "Sprints delivered like clockwork, every time",
  "A team that fights alongside you in the trenches",
  "Clean code that your future self will thank you for",
];

const WhyUsSection = () => {
  return (
    <Section className="bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10">
        <SectionHeader
          badge="The Difference"
          title="You've Been Burned Before. We Get It."
          subtitle="Bad development partners leave scars. Here's why working with us is different."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              Sound Familiar?
            </h3>
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-background/50 rounded-xl border border-destructive/20 group hover:border-destructive/40 transition-colors"
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              The Voratech Way
            </h3>
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-5 bg-primary/5 rounded-xl border border-primary/20 group hover:border-primary/40 transition-all cursor-default"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-foreground flex-1">{item}</p>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WhyUsSection;
