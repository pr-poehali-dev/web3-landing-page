import GalaxyInteractiveHeroSection from "@/components/ui/galaxy-interactive-hero-section";
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
    <div className="min-h-screen bg-background scroll-smooth">
      <GalaxyInteractiveHeroSection />
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="program">
        <ProgramSection />
      </div>
      <div id="team">
        <TabbedSection />
      </div>
      <div id="contacts">
        <ContactForm />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="formats">
        <CourseFormatsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
