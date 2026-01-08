import { ArrowUp, Mouse } from "lucide-react";
import AiBoxScroll from "./components/AiBoxScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EAESection from "./components/EAESection";
import AnimatedSentence from "./components/AnimatedSentence";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-10">
        <a href="#" className="flex w-7 h-10 sm:w-8 sm:h-12 border-1 bg-gradient-to-b from-purple-600/20 to-pink-50 bg-white border-gray-200 justify-center items-center flex-col p-1.5 sm:p-2 rounded-4xl">
          <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
          <Mouse className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>

      <Header />
      <div className="bg-gradient-to-t from-pink-400/10 to-purple-200/10 p-4 sm:p-8 md:p-16 lg:p-28">
        <Hero />
        <AiBoxScroll />
      </div>
      <div className="relative z-10 h-6 sm:h-8 md:h-12 rounded-2xl bg-pink-400/10 shadow-[0_25px_50px_-12px_rgba(236,72,153,0.25)]"></div>
      <AnimatedSentence />

      {/* Projects Section */}
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
  );
}
