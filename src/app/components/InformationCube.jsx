'use client'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function InformationCube({ icon }) {
    const IconComponent = LucideIcons[icon]
    return (
        <motion.div
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
                x: [0, 4, 8, 4, 0],
                y: [0, -6, 0, 6, 0],
                rotate: [0, -0.3, 0, 0.3, 0]
            }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            whileInView={{ x: 10, transition: { type: "spring", stiffness: 120 } }}
            className="flex justify-center items-center w-48 h-48 rounded-2xl bg-gradient-to-b from-purple-300/20 to-pink-50 shadow-[20px_20px_40px_rgba(0,0,0,0.25),-20px_-20px_40px_rgba(255,255,255,0.7),-20px_-20px_40px_rgba(168,85,247,0.25),inset_0_0_12px_rgba(168,85,247,0.32)]">
            {IconComponent ? <IconComponent className="text-purple-200/80" size={90} /> : null}
        </motion.div>
    )
}
