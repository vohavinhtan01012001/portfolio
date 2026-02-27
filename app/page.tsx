import { MainLayout } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  FocusSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FocusSection />
      <ContactSection />
    </MainLayout>
  );
}
