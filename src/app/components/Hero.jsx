import { FileDown } from 'lucide-react'

import InformationCube from './InformationCube'

export default function Hero() {

    const h1SpanStyle = `text-8xl whitespace-nowrap font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent`

    return (
        <div id='about' className='px-8 flex flex-col items-center justify-center mb-24'>
            <div className='w-[840px] flex flex-col items-start'>
                <div>
                    <h1 className='h-title -tracking-widest'>
                        <span className={h1SpanStyle}>
                            It's My Journey
                        </span>
                        <div className='mt-4 h-0.5 bg-gray-50 rounded-3xl'></div>
                        <span className={h1SpanStyle}>
                            Learning, Evolving
                        </span>
                        <div className='my-4 h-0.5 bg-gray-50 rounded-3xl'></div>
                    </h1>
                </div>
                <h2 className='text-2xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                    A personal space where my ideas take shape every project, every experiment, and every lesson learned along the way.
                </h2>
                <button className='flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-[var(--Dark2)] cursor-pointer my-4 shadow-2xl'>
                    <span className='text-white text-sm'>My resume </span>
                    <FileDown color='white' size={16} />
                </button>
            </div>
            <div className='relative w-[840px]'>
                <div className="absolute -top-[380px] -left-[280px] rotate-[-45deg]">
                    <InformationCube icon="Cpu" />
                </div>

                <div className="absolute -bottom-[200px] -left-[280px] rotate-[-105deg]">
                    <InformationCube icon="CircuitBoard" />
                </div>

                <div className="absolute -top-[400px] -right-[280px] rotate-[65deg]">
                    <InformationCube icon="CloudCog" />
                </div>

                <div className="absolute -bottom-[230px] -right-[280px] rotate-[105deg]">
                    <InformationCube icon="Atom" />
                </div>

            </div>
        </div>
    )
}
