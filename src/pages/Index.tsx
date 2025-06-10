import Header from "@/components/Header";
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
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <TabbedSection />
      <ContactForm />
      <TestimonialsSection />
      <CourseFormatsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
