import { Section, SectionHeader } from "@/components/ui/section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The execution was fast, communication was very good and overall it's easy to work with you guys",
    author: "Tuomas Lehtovirta",
    role: "CEO at Nordic Gulf Partners",
  },
  {
    quote: "I was in urgent need and the team delivered the module within 2 hours, hats-off for the exceptional quality of work.",
    author: "Michael Cole",
    role: "Enterprise Client",
  },
  {
    quote: "Wow! You guys are moving so fast that we're behind testing/deploy. Crazy stuff!",
    author: "Marc Ruskin",
    role: "Project Manager NAHL",
  },
  {
    quote: "Sometimes you need a reality check, and you gave it solidly - harsh but necessary!",
    author: "Shachi Mall",
    role: "100k+ Subscribers",
  },
  {
    quote: "As soon as we had the call my mind was going crazy with ideas",
    author: "Harry Latos",
    role: "Founder of Acuired",
  },
  {
    quote: "I read the approach about Athena to retrieve data from SES and it's amazingly explained.",
    author: "Bill Palter",
    role: "Senior Software Engineer",
  },
];

const TestimonialsSection = () => {
  return (
    <Section className="bg-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <SectionHeader
        badge="low-key our fav section"
        title="What Our Partners Say"
        subtitle="We let our work speak for itself, but here's what our partners have to say"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground mb-6 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-semibold">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
