import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProgramSection from "@/components/ProgramSection";
import TabbedSection from "@/components/TabbedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingTimer from "@/components/PricingTimer";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <TabbedSection />
      <TestimonialsSection />
      <PricingTimer />
      <CallToAction />
    </div>
  );
};

export default Index;
