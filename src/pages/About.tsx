import Layout from "@/components/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is aligned with your business objectives. We measure success by your success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to bring you solutions that are future-proof and cutting-edge.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "Clean code, robust architecture, and comprehensive testing are non-negotiables in every project.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We're not just vendors—we're an extension of your team, invested in your long-term growth.",
  },
];

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Retention" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "24/7", label: "Support Coverage" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About Voratech
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Engineering Excellence{" "}
              <span className="text-primary">Since 2018</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're a team of passionate engineers, architects, and strategists 
              dedicated to building software that drives business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Our Story"
              title="From Vision to Reality"
              centered={false}
            />
            <div className="space-y-6 text-muted-foreground">
              <p>
                Voratech was founded with a simple belief: 
                <span className="text-foreground font-medium"> great software should empower businesses, not hold them back</span>.
              </p>
              <p>
                Too often, we saw companies struggle with outdated systems, poor architecture, 
                and development partners who couldn't deliver on their promises. 
                <span className="text-primary font-medium"> We set out to change that</span>.
              </p>
              <p>
                Today, we work with startups and Fortune 500 companies alike, bringing 
                the same level of dedication, expertise, and innovation to every project.
              </p>
              <p>
                Our team combines deep technical knowledge with business acumen, ensuring 
                that every solution we build doesn't just work—it drives measurable results.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card border border-border/50 rounded-3xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-background/50 rounded-2xl">
                    <div className="text-4xl font-display font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-card">
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          subtitle="These core principles guide every decision we make and every line of code we write."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Philosophy */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            badge="Our Philosophy"
            title="Technology with Purpose"
          />
          <p className="text-lg text-muted-foreground mb-8">
            We believe technology should serve people, not the other way around. 
            Every solution we create is designed with the end user in mind, 
            ensuring intuitive experiences that make complex tasks simple.
          </p>
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <blockquote className="text-xl font-display text-foreground italic">
              "The best technology is invisible—it just works, allowing people to focus on what matters most."
            </blockquote>
            <p className="text-muted-foreground mt-4">— Our founding principle</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
