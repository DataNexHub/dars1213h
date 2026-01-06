import { Section, SectionHeader } from "@/components/ui/section";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "They didn't just build our platform—they architected our future. Three years later, we've scaled 100x and haven't touched the foundation.",
    author: "Sarah Chen",
    role: "CTO, Fintech Unicorn",
    rating: 5,
    color: "primary",
  },
  {
    quote: "Other agencies talked. Voratech delivered. On time, under budget, and with code so clean our internal team thought it was documentation.",
    author: "Marcus Rodriguez",
    role: "Founder & CEO, HealthTech",
    rating: 5,
    color: "secondary",
  },
  {
    quote: "We came with an idea and a napkin sketch. They gave us a platform that raised our Series A. Best investment we ever made.",
    author: "Emily Watson",
    role: "Co-founder, EdTech Startup",
    rating: 5,
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return { border: 'hover:border-primary/50', bg: 'from-primary/40 to-primary/20', text: 'text-primary', star: 'fill-primary text-primary' };
    case 'secondary':
      return { border: 'hover:border-secondary/50', bg: 'from-secondary/40 to-secondary/20', text: 'text-secondary', star: 'fill-secondary text-secondary' };
    case 'accent':
      return { border: 'hover:border-accent/50', bg: 'from-accent/40 to-accent/20', text: 'text-accent', star: 'fill-accent text-accent' };
    default:
      return { border: 'hover:border-primary/50', bg: 'from-primary/40 to-primary/20', text: 'text-primary', star: 'fill-primary text-primary' };
  }
};

const TestimonialsSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      <div className="relative z-10">
        <SectionHeader
          badge="Wall of Love"
          title="Don't Take Our Word For It"
          subtitle="Here's what happens when you work with people who actually care."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colors = getColorClasses(testimonial.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative glass rounded-2xl p-8 border border-border/50 ${colors.border} transition-all duration-300 group`}
              >
                {/* Quote Icon */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center glass border border-border/50`}>
                  <Quote className={`w-5 h-5 ${colors.text}`} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <Star className={`w-5 h-5 ${colors.star}`} />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                    <span className={`text-lg font-bold ${colors.text}`}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
