'use client'
import { motion } from "framer-motion";


export default function EAESection() {
    return (
        <div>
            <div className="mx-auto max-w-5xl p-8">
                <motion.div
                    initial={{ x: 0, y: 0, rotate: 0 }}
                    animate={{
                        x: [0, 4, 8, 4, 0],
                        y: [0, -6, 0, 6, 0],
                        rotate: [0, -0.3, 0, 0.3, 0]
                    }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    whileInView={{ x: 10, transition: { type: "spring", stiffness: 120 } }}
                    className="my-26 mx-auto w-full overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur"
                >
                    <div className="relative flex h-10 items-center gap-2 border-b border-black/10 bg-neutral-50/80 px-3">
                        <span className="absolute h-3 w-3 rounded-full bg-red-400" />
                        <span className="absoluteh-3 w-3 rounded-full bg-yellow-400" />
                        <span className="absolute h-3 w-3 rounded-full bg-green-400" />
                        <div className="mx-auto text-xs text-neutral-500">http://localhost:3000/</div>
                    </div>
                    <div className="aspect-video bg-neutral-900 grid place-items-center text-neutral-300">
                        Your UI here
                    </div>
                </motion.div>
            </div>

        </div >
    )
}
