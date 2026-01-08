import { Code2, Sparkles } from 'lucide-react'

export default function ProjectsTitle() {
    return (
        <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Smooth gradient background - continues from previous section */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200/10 via-pink-200/10 to-purple-200/10"></div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-8 md:px-16 lg:px-28">
                <div className="text-center">
                    <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <Code2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-600" />
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-500" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl h-title font-bold bg-gradient-to-b from-gray-900 via-purple-800 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                        Projects
                    </h2>

                    <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 mx-auto max-w-xs sm:max-w-md rounded-full mb-4 sm:mb-6"></div>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto">
                        Exploring ideas, building solutions, and bringing concepts to life
                    </p>
                </div>
            </div>
        </div>
    )
}

