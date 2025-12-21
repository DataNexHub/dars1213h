import { Section, SectionHeader } from "@/components/ui/section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Techiebutler transformed our legacy system into a modern, scalable platform. The team's expertise and professionalism exceeded our expectations.",
    author: "Sarah Mitchell",
    role: "CTO, FinanceFlow",
  },
  {
    quote: "Their cloud architecture saved us 40% on infrastructure costs while improving performance. Highly recommended for any enterprise project.",
    author: "David Chen",
    role: "VP Engineering, DataScale",
  },
  {
    quote: "From day one, the communication was excellent. They delivered our MVP in 6 weeks and it's now serving 100k+ users.",
    author: "Emily Rodriguez",
    role: "Founder, HealthTech Startup",
  },
  {
    quote: "The code quality and documentation they provide is outstanding. Our internal team can easily maintain and extend the system.",
    author: "Michael Foster",
    role: "Tech Lead, RetailPro",
  },
  {
    quote: "They don't just write code—they understand business goals. The strategic guidance was invaluable for our product roadmap.",
    author: "Jennifer Park",
    role: "Product Director, SaaS Platform",
  },
  {
    quote: "Security was paramount for our fintech app. Techiebutler implemented enterprise-grade security that passed our strictest audits.",
    author: "Robert Williams",
    role: "CISO, PaymentHub",
  },
];

const TestimonialsSection = () => {
  return (
    <Section className="bg-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <SectionHeader
        badge="Client Success Stories"
        title="Trusted by Industry Leaders"
        subtitle="See what our partners have to say about working with us"
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
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
