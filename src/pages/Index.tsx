import Navbar from "@/components/Navbar";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationSection from "@/components/PublicationSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="cosmos-bg relative min-h-screen">
    <ParticleField />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PublicationSection />
      <EducationSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
    </main>
  </div>
);

export default Index;
