import { FileDown } from 'lucide-react'
import React from 'react'

export default function Hero() {

    const h1SpanStyle = `text-8xl whitespace-nowrap font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent`

  return (
    <div className='px-8 flex items-center justify-center'>
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
            <p className='text-2xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                A personal space where my ideas take shape every project, every experiment, and every lesson learned along the way.
            </p>
            <button  className='flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-[var(--Dark2)] cursor-pointer my-4 shadow-2xl'>
                   <span className='text-white text-sm'>My resume </span> 
                   <FileDown color='white' size={16} />
            </button>
        </div>
    </div>
  )
}
