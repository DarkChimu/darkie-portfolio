import { useEffect } from "react";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";

import Header from "@/components/Header";
import PresentationSection from "@/components/Sections/PresentationSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
import SocialSection from "@/components/Sections/SocialSection";
import ContactSection from "@/components/Sections/ContactSection";
import Separator from "@/components/core/Separator";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import Container from "./components/Container/Container";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Container>
        <PresentationSection />
        <Separator />
        <ExperienceSection />
        <ProjectsSection />
        <SocialSection />
        <ContactSection />
      </Container>
    </>
  );
}

export default App;
