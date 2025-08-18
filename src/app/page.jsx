import { ArrowUp, Mouse } from "lucide-react";
import AiBoxScroll from "./components/AiBoxScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EAESection from "./components/EAESection";
import AnimatedSentence from "./components/AnimatedSentence";

export default function Home() {
  return (
    <div >
      <div className="fixed bottom-2 right-2  z-10">
        <a href="#" className="flex w-8 h-12 border-1 bg-gradient-to-b from-purple-600/20 to-pink-50 bg-white border-gray-200 justify-center items-center flex-col p-2 rounded-4xl">
          <ArrowUp />
          <Mouse />
        </a>
      </div>

      <Header />
      <div className="bg-gradient-to-t from-pink-400/10 to-purple-200/10 p-28 ">
        <Hero />
        <AiBoxScroll />
      </div>
      <div className="relative z-10  h-12 rounded-2xl bg-pink-400/10 shadow-[0_25px_50px_-12px_rgba(236,72,153,0.25)]"></div>
      <AnimatedSentence />
      {/* <EAESection /> */}
      {/* <Projects /> */}

    </div>
  );
}
