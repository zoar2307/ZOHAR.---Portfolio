import { Briefcase, Code } from 'lucide-react'

const experienceItems = [
    {
        role: "Full-Stack & Salesforce Developer",
        company: "Bank Leumi",
        period: "2025 – Present",
        description: "Develop enterprise Salesforce solutions using Apex and LWC. Work with high volumes of data; focus on performance and maintainability. Collaborate in a team environment with agile delivery. Worked on major projects including the 'Write to a Banker' experience (Pepper / Bank Leumi).",
        technologies: ["Salesforce", "Apex", "Lightning Web Components", "LWC", "Enterprise Systems"],
        icon: Briefcase
    },
    {
        role: "Full-Stack Developer",
        company: "Coding Academy (Bootcamp & Mentoring)",
        period: "Feb 2024 – Jun 2025",
        description: "Built end-to-end projects using React, Vue, Angular, Express, MongoDB. Conducted code reviews for junior developers (architecture, clean patterns). Mentored students on database integrations, cloud APIs, and deployment.",
        technologies: ["React", "Vue", "Angular", "Express.js", "MongoDB", "Node.js"],
        icon: Code
    }
]

export default function WorkflowExperience() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Smooth gradient background - continues from previous section */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200/10 via-pink-200/10 to-purple-200/10"></div>
            
            <div className="relative max-w-[840px] mx-auto px-4 sm:px-8 md:px-16 lg:px-28">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl h-title font-bold bg-gradient-to-b from-gray-900 via-purple-800 to-pink-600 bg-clip-text text-transparent mb-10 sm:mb-14">
                    Experience
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    <div className="space-y-10 sm:space-y-12">
                        {experienceItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.role}
                                    className="relative pl-12 sm:pl-16"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-3 sm:left-4 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-400 rounded-full"></div>
                                    </div>
                                    
                                    <div className="bg-white rounded-lg border border-gray-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-3 sm:gap-4 mb-3">
                                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200">
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                                                    {item.role}
                                                </h3>
                                                <p className="text-sm sm:text-base text-gray-700 font-medium mb-1">
                                                    {item.company}
                                                </p>
                                                <span className="text-xs sm:text-sm text-gray-500">
                                                    {item.period}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                            {item.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs sm:text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

