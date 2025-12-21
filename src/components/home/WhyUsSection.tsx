import { Section, SectionHeader } from "@/components/ui/section";
import { X, Check } from "lucide-react";

const challenges = [
  "Struggling with legacy systems that slow down innovation",
  "Frustrated by missed deadlines and budget overruns",
  "Tired of poor communication and lack of transparency",
  "Dealing with technical debt that keeps piling up",
];

const solutions = [
  "Modern architecture that accelerates your growth",
  "On-time, on-budget delivery with clear milestones",
  "Daily updates and direct access to your dev team",
  "Clean, maintainable code with comprehensive documentation",
];

const WhyUsSection = () => {
  return (
    <Section className="bg-card">
      <SectionHeader
        badge="Why Choose Us"
        title="We Solve Real Engineering Challenges"
        subtitle="We understand the pain points of building software. Here's how we're different."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Challenges */}
        <div className="space-y-4">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <X className="w-6 h-6 text-destructive" />
            Common Frustrations
          </h3>
          {challenges.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-background/50 rounded-xl border border-destructive/20"
            >
              <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="space-y-4">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <Check className="w-6 h-6 text-primary" />
            Our Approach
          </h3>
          {solutions.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20"
            >
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyUsSection;
