import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import OurWorkSection from "@/components/OurWorkSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OurWorkSection />
      <CapabilitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
