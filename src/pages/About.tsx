import Layout from "@/components/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome-Focused",
    description: "Our incentives are tied to project completion, not milking changes. We succeed when you succeed.",
  },
  {
    icon: Lightbulb,
    title: "Brutally Honest",
    description: "Sometimes you need a reality check. We give it straight - harsh but necessary.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "The difference between good and great is in the details. We obsess over architecture and code quality.",
  },
  {
    icon: Users,
    title: "True Partners",
    description: "We're not just a vendor. We're your extended team, invested in your long-term success.",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "2hr", label: "Fastest Delivery" },
  { number: "24/7", label: "Global Support" },
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
              About Techiebutler
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              We Build Things That{" "}
              <span className="text-primary">Actually Work</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Think of it like building a city. Anyone can lay bricks, but it takes 
              vision and foresight to design infrastructure that grows without collapsing.
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
              title="From Code to Architecture"
              centered={false}
            />
            <div className="space-y-6 text-muted-foreground">
              <p>
                Writing code? That's the easy part now. AI can do that. But writing 
                <span className="text-foreground font-medium"> quality code</span>? 
                That's becoming harder than ever.
              </p>
              <p>
                Today, the real challenge lies in 
                <span className="text-primary font-medium"> system design, architecture, and scalability</span>. 
                That's where Techiebutler comes in.
              </p>
              <p>
                We partner with CTOs and startup founders who understand that the 
                difference between good and great isn't in the code itself—it's in how 
                it's architected, how it scales, and how it evolves.
              </p>
              <p>
                Coding is getting democratised. But exceptional execution? That's our 
                specialty.
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
          subtitle="Unlike other agencies, our team incentives aren't tied to milking changes. Instead, it's on project completion."
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
            title="Partners, Not Vendors"
          />
          <p className="text-lg text-muted-foreground mb-8">
            We don't just take orders—we challenge assumptions, ask tough questions, 
            and sometimes tell you things you might not want to hear. Because that's 
            what true partners do.
          </p>
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <blockquote className="text-xl font-display text-foreground italic">
              "Sometimes you need a reality check, and you gave it solidly - harsh but necessary"
            </blockquote>
            <p className="text-muted-foreground mt-4">— One of our favorite client feedbacks</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
