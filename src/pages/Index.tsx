import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProgramSection from "@/components/ProgramSection";
import TabbedSection from "@/components/TabbedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import PricingTimer from "@/components/PricingTimer";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <TabbedSection />
      <ContactForm />
      <TestimonialsSection />
      <PricingTimer />
      <CallToAction />
    </div>
  );
};

export default Index;
