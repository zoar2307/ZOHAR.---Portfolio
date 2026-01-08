const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Vue", "Angular", "React Native"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "WebSockets (Socket.IO)", "REST APIs"]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "SQL"]
    },
    {
        title: "Salesforce",
        skills: ["Apex", "Lightning Web Components (LWC)"]
    },
    {
        title: "Tools & Workflows",
        skills: ["Git", "REST APIs", "Agile/Scrum", "Responsive Design"]
    }
]

export default function SkillsSection() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Smooth gradient background - continues from previous section */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200/10 via-pink-200/10 to-purple-200/10"></div>
            
            <div className="relative max-w-[840px] mx-auto px-4 sm:px-8 md:px-16 lg:px-28">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl h-title font-bold bg-gradient-to-b from-gray-900 via-purple-800 to-pink-600 bg-clip-text text-transparent mb-8 sm:mb-12">
                    Technical Skills
                </h2>

                <div className="space-y-6 sm:space-y-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="border-b border-gray-200 pb-6 sm:pb-8 last:border-b-0"
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

