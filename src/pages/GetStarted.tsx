import Layout from "@/components/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, Zap, Shield, Clock, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  {
    icon: Zap,
    title: "Weirdly Fast Delivery",
    description: "We move so fast you might struggle to keep up with testing",
  },
  {
    icon: Shield,
    title: "Quality Architecture",
    description: "Infrastructure designed to scale without collapsing",
  },
  {
    icon: Clock,
    title: "Transparent Process",
    description: "No surprises, no scope creep, just results",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn about your vision, challenges, and goals. This is where we see if we're a good fit.",
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description: "You'll receive a clear proposal with timeline, scope, and investment. No hidden costs.",
  },
  {
    step: "03",
    title: "Development Sprint",
    description: "We build fast, communicate often, and deliver incrementally so you see progress daily.",
  },
  {
    step: "04",
    title: "Launch & Beyond",
    description: "We don't disappear after launch. Ongoing support and optimization is part of our DNA.",
  },
];

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll review and get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Let's Build Together
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Ready to Build{" "}
              <span className="text-primary">Something Great?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tell us about your project and we'll show you how we can make 
              your product development sprint weirdly fast.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-2xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Application Form */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">No-Brainer Call</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              Start Your Project
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out this form and we'll schedule a discovery call to discuss your project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Startup Name *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="bg-background border-border/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-border/50 rounded-md text-foreground"
                  >
                    <option value="">Select type</option>
                    <option value="mvp">MVP Development</option>
                    <option value="fullstack">Full-Stack Application</option>
                    <option value="architecture">System Architecture</option>
                    <option value="audit">Code Audit</option>
                    <option value="augmentation">Team Augmentation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-border/50 rounded-md text-foreground"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2weeks">1-2 Weeks</option>
                    <option value="1month">1 Month</option>
                    <option value="2-3months">2-3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Tell Us About Your Project *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="What are you building? What problem are you solving? What's your current situation?"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
              >
                Submit Application
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                We'll respond within 24 hours. Usually much faster.
              </p>
            </form>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              How It Works
            </h2>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="text-4xl font-display font-bold text-primary/30">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* What You Get */}
            <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-4">
                What You Get With Every Project
              </h3>
              <ul className="space-y-3">
                {[
                  "Direct access to senior engineers",
                  "Daily progress updates",
                  "Clean, documented code",
                  "Architecture that scales",
                  "Post-launch support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default GetStarted;
