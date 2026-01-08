'use client'

import { ArrowDown, Sparkle } from 'lucide-react'
import { useEffect, useState, useRef, useCallback } from 'react'

export default function AiBoxScroll() {
  const [isCollapse, setIsCollapse] = useState(false)
  const ticking = useRef(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        // Only update if scroll position changed significantly (reduces updates)
        if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
          setIsCollapse(currentScrollY > 100);
          lastScrollY.current = currentScrollY;
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // Use passive listener for better mobile performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='relative flex items-start justify-center h-120 z-10'>
      <div className={`sticky top-16 sm:top-24 md:top-48 lg:top-96 flex flex-col w-full max-w-[840px] mx-4 sm:mx-8 p-4 sm:p-6 md:p-8 bg-white shadow-[0px_-30px_60px_-10px_rgba(255,255,255,0.9),0px_4px_50px_0px_rgba(173,216,230,0.6),0px_0px_35px_0px_rgba(173,216,230,0.15)_inset,8px_8px_15px_-5px_rgba(0,0,0,0.25)] border-0.5 rounded-xl font-bold will-change-transform`} >
        <span className={`flex flex-col sm:flex-row items-start sm:items-center text-sm sm:text-base md:text-lg lg:text-xl gap-2 pb-3 transition-all duration-300 ease-out ${isCollapse ? ' border-b-0 mb-0' : 'mb-4'}  border-b border-gray-300 bg-gradient-to-b from-gray-500 to-gray-200 bg-clip-text text-transparent`}>
          <span className='flex items-center gap-2'><Sparkle className='text-gray-400 w-4 h-4 sm:w-5 sm:h-5' />"Full stack / Front end / Salesforce Developer."</span>
          <span className='flex items-center text-sm sm:text-base md:text-lg lg:text-xl ml-0 sm:ml-auto'>scroll  <ArrowDown className='text-gray-400 w-4 h-4 sm:w-5 sm:h-5' /></span>
        </span>
        <div className={`overflow-hidden transition-all duration-300 ease-out will-change-[max-height] ${isCollapse ? 'max-h-0 opacity-0' : 'max-h-[500px] sm:max-h-[200px] opacity-100'}`}>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-light poppins'>I'm a Full Stack developer specializing in building interactive, high-performance applications from end to end. I combine deep expertise in React, Node.js, and modern web technologies with the ability to translate complex needs into fast, efficient, and precise solutions. My focus is on creating smart products that deliver real value to users, with clean design, smooth user experiences, and optimized performance.</p>
        </div>
      </div>
    </div>
  )
}
