import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProgramSection from "@/components/ProgramSection";
import TabbedSection from "@/components/TabbedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseFormatsSection from "@/components/CourseFormatsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background space-y-20">
      <HeroSection />
      <div className="py-5">
        <BenefitsSection />
      </div>
      <div className="py-5">
        <ProgramSection />
      </div>
      <div className="py-5">
        <TabbedSection />
      </div>
      <div className="py-5">
        <ContactForm />
      </div>
      <div className="py-5">
        <TestimonialsSection />
      </div>
      <div className="py-5">
        <CourseFormatsSection />
      </div>
      <div className="py-5">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
