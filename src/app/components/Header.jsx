'use client'

import { useState } from 'react'
import { FileDown } from 'lucide-react'
import ResumePreview from './ResumePreview'

export default function Header() {
    const [isResumeOpen, setIsResumeOpen] = useState(false)

    return (
        <>
            <header className=' fixed  flex left-0 right-0 top-0 h-16 pb-0 z-50' role="banner">
                <div className='fixed left-0 right-0 -top-4 h-20 backdrop-blur-xl bg-[linear-gradient(180deg,rgba(221,226,238,0.40)_0%,rgba(221,226,238,0.00)_100%)] mask-[linear-gradient(to_bottom,black_65%,rgba(0,0,0,0.88)_75%,transparent_100%)]' aria-hidden="true"></div>
                <nav className='fixed  flex left-0 right-0 top-0 h-16 px-4 sm:px-8 md:px-16 lg:px-28 items-center gap-4 sm:gap-6 md:gap-9 justify-between  z-10' aria-label="Main navigation">
                    <div>
                        <a
                            href="#top"
                            className='text-xl sm:text-2xl md:text-3xl h-title font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 rounded transition-opacity'
                            aria-label="ZOHAR. - Go to homepage"
                        >
                            ZOHAR<span className='text-xl sm:text-2xl md:text-3xl text-red-700'>.</span>
                        </a>
                    </div>
                    <button
                        onClick={() => setIsResumeOpen(true)}
                        className='flex items-center justify-center gap-2 h-8 px-3 sm:px-4 rounded-md bg-[var(--Dark2)] cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--Dark2)] focus:ring-offset-2 transition-opacity'
                        aria-label="Open resume preview"
                    >
                        <span className='text-white text-xs sm:text-sm'>My resume</span>
                        <FileDown color='white' className='w-3.5 h-3.5 sm:w-4 sm:h-4' aria-hidden="true" />
                    </button>
                </nav>
            </header>
            <ResumePreview isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    )
}
