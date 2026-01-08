'use client'

import { ArrowDown, Sparkle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AiBoxScroll() {
  const [isCollapse, setIsCollapse] = useState(false)

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsCollapse(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='relative flex items-start justify-center h-120 z-10' aria-label="About me">
      <article className={`sticky top-16 sm:top-24 md:top-48 lg:top-96 flex flex-col w-full max-w-[840px] mx-4 sm:mx-8 p-4 sm:p-6 md:p-8 bg-white shadow-[0px_-30px_60px_-10px_rgba(255,255,255,0.9),0px_4px_50px_0px_rgba(173,216,230,0.6),0px_0px_35px_0px_rgba(173,216,230,0.15)_inset,8px_8px_15px_-5px_rgba(0,0,0,0.25)] border-0.5 rounded-xl font-bold will-change-[max-height] transition-all duration-500 ease-in-out ${isCollapse ? 'max-h-[80px] overflow-hidden' : 'max-h-[500px] mb-4'}`}>
        <header className={`flex flex-col sm:flex-row items-start sm:items-center text-sm sm:text-base md:text-lg lg:text-xl gap-2 pb-3 transition-all duration-500 ${isCollapse ? ' border-b-0 mb-0' : 'mb-4'}  border-b border-gray-300 bg-gradient-to-b from-gray-500 to-gray-200 bg-clip-text text-transparent`}>
          <span className='flex items-center gap-2 flex-shrink-0'>
            <Sparkle className='text-gray-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' aria-hidden="true" />
            <span className="whitespace-nowrap">"Full-Stack / Frontend / Salesforce Developer"</span>
          </span>
          <span className='flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl sm:ml-auto flex-shrink-0 whitespace-nowrap'>
            <span>scroll</span>
            <ArrowDown className='text-gray-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' aria-hidden="true" />
          </span>
        </header>
        <p className={`text-sm sm:text-base md:text-lg lg:text-xl font-light poppins overflow-hidden transition-all duration-500 ease-in-out ${isCollapse ? 'max-h-0' : 'max-h-[400px]'}`}>
          Full-Stack Web Developer with extensive experience in MERN stack and modern frontend frameworks. Graduated with distinction from Coding Academy's intensive 640-hour bootcamp program. Specialized in developing responsive user interfaces, RESTful APIs, and scalable backend architectures. Proven ability to adapt quickly, collaborate effectively in team environments, and deliver high-quality solutions in agile, deadline-driven settings. Currently developing enterprise Full-Stack and Salesforce solutions at Bank Leumi, working with large-scale data systems and complex business requirements.
        </p>
      </article>
    </section>
  )
}
