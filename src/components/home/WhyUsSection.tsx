import { Section, SectionHeader } from "@/components/ui/section";
import { X, Check } from "lucide-react";

const antiReasons = [
  "You enjoy unnecessary changes from project managers",
  "You prefer agencies that milk changes for more billable hours",
  "You want someone who says 'yes' to everything without pushback",
  "You're looking for the cheapest option regardless of quality",
];

const reasons = [
  "Our team incentives are tied to project completion, not changes",
  "We give you reality checks - harsh but necessary",
  "We move so fast you might struggle to keep up with testing",
  "We focus on quality code and exceptional architecture",
];

const WhyUsSection = () => {
  return (
    <Section className="bg-card">
      <SectionHeader
        badge="Heads Up"
        title="You'll Hate Techiebutler If..."
        subtitle="Unlike other agencies, we're not for everyone. Here's how to know if we're a fit."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Anti-reasons */}
        <div className="space-y-4">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <X className="w-6 h-6 text-destructive" />
            We're NOT for you if...
          </h3>
          {antiReasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-background/50 rounded-xl border border-destructive/20"
            >
              <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground">{reason}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="space-y-4">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <Check className="w-6 h-6 text-primary" />
            We're PERFECT for you if...
          </h3>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20"
            >
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyUsSection;
