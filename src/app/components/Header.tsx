import { FileDown } from 'lucide-react'
import React from 'react'

export default function Header() {
    const aElStyle = `text-[var(--Dark2)] text-sm cursor-pointer`

    return (
        <header className='pb-36'>
            <div className='fixed left-0 right-0 -top-4 h-20 backdrop-blur-xl bg-[linear-gradient(180deg,rgba(221,226,238,0.40)_0%,rgba(221,226,238,0.00)_100%)] mask-[linear-gradient(to_bottom,black_65%,rgba(0,0,0,0.88)_75%,transparent_100%)]'></div>
            <div className='fixed  flex left-0 right-0 top-0 h-16 px-28 items-center gap-9 justify-center z-10'>
                <div>
                    <span className='text-3xl h-title font-bold'><a href="#">ZOHAR<span className='text-3xl text-red-700'>.</span></a></span>
                </div>
                <ul className='flex gap-9'>
                    <li><a href="#" className={aElStyle}>About</a></li>
                    <li><a href="#" className={aElStyle}>Service</a></li>
                    <li><a href="#" className={aElStyle}>Experiance And Education</a></li>
                </ul>
                <button className='flex items-center justify-center gap-2 h-8 ml-auto px-4 rounded-md bg-[var(--Dark2)] cursor-pointer' >
                   <span className='text-white text-sm'>My resume </span> 
                   <FileDown color='white' size={16} />
                </button>
            </div>
        </header>
    )
}
