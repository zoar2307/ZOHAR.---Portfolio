import { FileDown } from 'lucide-react'

import InformationCube from './InformationCube'

export default function Hero() {

    const h1SpanStyle = `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent`

    return (
        <section id='about' className='px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center mb-12 sm:mb-16 md:mb-24 pt-24 md:pt-0' aria-labelledby="hero-heading">
            <div className='w-full max-w-[840px] flex flex-col items-start'>
                <div>
                    <h1 id="hero-heading" className='h-title -tracking-wider sm:-tracking-widest'>
                        <span className={h1SpanStyle}>
                            It's My Journey
                        </span>
                        <div className='mt-2 sm:mt-4 h-0.5 bg-gray-50 rounded-3xl' aria-hidden="true"></div>
                        <span className={h1SpanStyle}>
                            Learning, Evolving
                        </span>
                        <div className='my-2 sm:my-4 h-0.5 bg-gray-50 rounded-3xl' aria-hidden="true"></div>
                    </h1>
                </div>
                <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent mt-4 sm:mt-6'>
                    A personal space where my ideas take shape every project, every experiment, and every lesson learned along the way.
                </h2>
                <a
                    href="/resume.pdf"
                    download
                    className='flex items-center justify-center gap-2 h-10 sm:h-12 px-6 sm:px-8 rounded-md bg-[var(--Dark2)] cursor-pointer my-4 shadow-2xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--Dark2)] focus:ring-offset-2 transition-opacity'
                    aria-label="Download resume PDF"
                >
                    <span className='text-white text-xs sm:text-sm'>My resume </span>
                    <FileDown color='white' className='w-3.5 h-3.5 sm:w-4 sm:h-4' aria-hidden="true" />
                </a>
            </div>
            <div className='relative w-full max-w-[840px] h-0 sm:h-auto' aria-hidden="true">
                <div className="hidden sm:block absolute -top-[200px] sm:-top-[300px] md:-top-[380px] -left-[140px] sm:-left-[200px] md:-left-[280px] rotate-[-45deg]">
                    <InformationCube icon="Cpu" />
                </div>

                <div className="hidden sm:block absolute -bottom-[100px] sm:-bottom-[150px] md:-bottom-[200px] -left-[140px] sm:-left-[200px] md:-left-[280px] rotate-[-105deg]">
                    <InformationCube icon="CircuitBoard" />
                </div>

                <div className="hidden sm:block absolute -top-[220px] sm:-top-[320px] md:-top-[400px] -right-[140px] sm:-right-[200px] md:-right-[280px] rotate-[65deg]">
                    <InformationCube icon="CloudCog" />
                </div>

                <div className="hidden sm:block absolute -bottom-[120px] sm:-bottom-[180px] md:-bottom-[230px] -right-[140px] sm:-right-[200px] md:-right-[280px] rotate-[105deg]">
                    <InformationCube icon="Atom" />
                </div>

            </div>
        </section>
    )
}
