'use client'

import { ArrowDown, Sparkle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AiBoxScroll() {
  const [isCollapse, setIsCollapse] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapse(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='relative flex items-start justify-center h-120 z-10'>
      <div className={`sticky top-16 sm:top-24 md:top-48 lg:top-96 flex flex-col w-full max-w-[840px] mx-4 sm:mx-8 p-4 sm:p-6 md:p-8 bg-white shadow-[0px_-30px_60px_-10px_rgba(255,255,255,0.9),0px_4px_50px_0px_rgba(173,216,230,0.6),0px_0px_35px_0px_rgba(173,216,230,0.15)_inset,8px_8px_15px_-5px_rgba(0,0,0,0.25)] border-0.5 rounded-xl font-bold ${isCollapse ? '-translate-y-0' : '-translate-y-0'} duration-700 delay-400 `} >
        <span className={`flex flex-col sm:flex-row items-start sm:items-center text-sm sm:text-base md:text-lg lg:text-xl gap-2 pb-3 ${isCollapse ? ' border-b-0 mb-0' : 'mb-4'}  border-b border-gray-300 bg-gradient-to-b from-gray-500 to-gray-200 bg-clip-text text-transparent`}>
          <span className='flex items-center gap-2'><Sparkle className='text-gray-400 w-4 h-4 sm:w-5 sm:h-5' />"Full stack / Front end / Salesforce Developer."</span>
          <span className='flex items-center text-sm sm:text-base md:text-lg lg:text-xl ml-0 sm:ml-auto'>scroll  <ArrowDown className='text-gray-400 w-4 h-4 sm:w-5 sm:h-5' /></span>
        </span>
        <p className={` text-sm sm:text-base md:text-lg lg:text-xl font-light poppins ${isCollapse ? 'h-0' : 'h-auto sm:h-44 '}  overflow-hidden duration-600 `}>I'm a Full Stack developer specializing in building interactive, high-performance applications from end to end. I combine deep expertise in React, Node.js, and modern web technologies with the ability to translate complex needs into fast, efficient, and precise solutions. My focus is on creating smart products that deliver real value to users, with clean design, smooth user experiences, and optimized performance.</p>
      </div>
    </div>
  )
}
