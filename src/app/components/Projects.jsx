'use client'

import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div className='w-full'>

            <motion.div
                className="bg-indigo-500 w-52 h-52"
                initial={{
                    opacity: 1
                }}
                whileInView={{
                    opacity: 0
                }}
                viewport={{
                    amount: "all"
                }}
            />



        </div>
    )
}
