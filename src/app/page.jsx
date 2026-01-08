import { ArrowUp, Mouse } from "lucide-react";
import AiBoxScroll from "./components/AiBoxScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EAESection from "./components/EAESection";
import AnimatedSentence from "./components/AnimatedSentence";
import ProjectsTitle from "./components/ProjectsTitle";
import WorkflowExperience from "./components/WorkflowExperience";
import SkillsSection from "./components/SkillsSection";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <a
        href="#top"
        aria-label="Scroll to top"
        className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 flex w-7 h-10 sm:w-8 sm:h-12 border-1 bg-gradient-to-b from-purple-600/20 to-pink-50 bg-white border-gray-200 justify-center items-center flex-col p-1.5 sm:p-2 rounded-4xl hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-opacity"
      >
        <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
        <Mouse className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
      </a>

      <Header />
      <main id="main-content" className="overflow-x-hidden">
        <div className="bg-gradient-to-t from-pink-400/10 to-purple-200/10 p-4 sm:p-8 md:p-16 lg:p-28">
          <Hero />
          <AiBoxScroll />
        </div>
        <section aria-label="Animated introduction" className="relative">
          {/* Smooth gradient background - continues from previous section */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/10 via-pink-200/10 to-purple-200/10"></div>
          <div className="relative">
            <AnimatedSentence />
          </div>
        </section>

        {/* Workflow & Experience Section */}
        <WorkflowExperience />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section aria-label="Projects" className="relative">
          {/* Smooth gradient background - continues from previous section */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/10 via-pink-200/10 to-transparent"></div>
          <div className="relative">
            <ProjectsTitle />
            <div className="py-4 sm:py-6 md:py-8">
              {projects.map((project, index) => (
                <EAESection
                  key={index}
                  siteUrl={project.siteUrl}
                  siteTitle={project.siteTitle}
                  siteImage={project.siteImage}
                  projectInfo={project.projectInfo}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
