import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
