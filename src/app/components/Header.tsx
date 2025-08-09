import { FileDown } from 'lucide-react'
import React from 'react'

export default function Header() {
    const aElStyle = `text-[var(--Dark2)] text-sm cursor-pointer`

    return (
        <header className='pb-36'>
            <div className='fixed bg-[var(--background)] left-0 right-0 top-0 h-16 blur-2xl'></div>
            <div className='fixed flex left-0 right-0 top-0 h-16 px-28 items-center gap-9 justify-center z-10'>
                <div>
                    <h1 className='text-3xl'><a href="#">ZOHAR<span className='text-3xl text-red-700'>.</span></a></h1>
                </div>
                <ul className='flex gap-9'>
                    <li><a href="#" className={aElStyle}>About</a></li>
                    <li><a href="#" className={aElStyle}>Service</a></li>
                    <li><a href="#" className={aElStyle}>Experiance And Education</a></li>
                </ul>
                <button className='flex items-center justify-center gap-2 h-8 ml-auto px-4 rounded-md bg-[var(--Dark2)] cursor-pointer'>
                   <span className='text-white text-sm'>My resume </span> 
                   <FileDown color='white' size={16} />
                </button>
            </div>
        </header>
    )
}
