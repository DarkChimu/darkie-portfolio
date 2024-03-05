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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
        <main className="flex flex-col gap-16">
          <PresentationSection />
          <Separator />
          <ExperienceSection />
          <ProjectsSection />
          <SocialSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export default App;
