import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import OurWorkSection from "@/components/OurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StoriesSection from "@/components/StoriesSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <OurWorkSection />
      <TestimonialsSection />
      <StoriesSection />
      <FAQSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
