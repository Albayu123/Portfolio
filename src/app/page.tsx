import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <AppProvider>
      <Navbar />
      <main className="grow">
        <HeroSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal><ExperienceSection /></Reveal>
        <Reveal><TechStackSection /></Reveal>
        <Reveal><ProjectsSection /></Reveal>
        <Reveal><ServicesSection /></Reveal>
      </main>
      <Footer />
    </AppProvider>
  );
}
