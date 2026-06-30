import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <AppProvider>
      <Navbar />
      <main className="grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <ServicesSection />
      </main>
      <Footer />
    </AppProvider>
  );
}
