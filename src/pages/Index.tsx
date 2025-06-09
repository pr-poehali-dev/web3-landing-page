import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProgramSection from "@/components/ProgramSection";
import TabbedSection from "@/components/TabbedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseFormatsSection from "@/components/CourseFormatsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <TabbedSection />
      <ContactForm />
      <TestimonialsSection />
      <CourseFormatsSection />
      <FAQSection />
    </div>
  );
};

export default Index;
