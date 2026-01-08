'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Info, Monitor, ExternalLink, Maximize2, Minimize2 } from "lucide-react";

export default function EAESection({
    siteUrl,
    siteTitle,
    siteImage,
    projectInfo
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleToggleInfo = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowInfo(prev => !prev);
    };

    const handleToggleFullscreen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFullscreen(prev => !prev);
    };

    // Close fullscreen on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        if (isFullscreen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isFullscreen]);

    return (
        <>
            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        key="fullscreen-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 bg-black"
                        onClick={handleToggleFullscreen}
                    >
                        <div className="relative w-full h-full flex flex-col">
                            {/* Fullscreen Header */}
                            <div className="relative flex h-12 sm:h-14 items-center gap-2 border-b border-gray-700 bg-neutral-900 px-4 z-20">
                                <span className="absolute left-4 h-3 w-3 rounded-full bg-red-400 pointer-events-none" />
                                <span className="absolute left-8 h-3 w-3 rounded-full bg-yellow-400 pointer-events-none" />
                                <span className="absolute left-12 h-3 w-3 rounded-full bg-green-400 pointer-events-none" />
                                <a
                                    href={siteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-auto text-sm sm:text-base text-neutral-300 truncate px-20 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2 z-10 relative"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        window.open(siteUrl, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    {siteUrl}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleToggleFullscreen(e);
                                    }}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                    }}
                                    onTouchEnd={(e) => {
                                        e.stopPropagation();
                                        handleToggleFullscreen(e);
                                    }}
                                    onMouseDown={(e) => e.stopPropagation()}
                                    className="absolute right-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white transition-colors duration-200 shadow-sm z-30 cursor-pointer touch-manipulation"
                                    style={{ WebkitTapHighlightColor: 'transparent' }}
                                    aria-label="Exit fullscreen"
                                    title="Exit fullscreen"
                                    type="button"
                                >
                                    <Minimize2 className="w-4 h-4 pointer-events-none" />
                                </button>
                            </div>

                            {/* Fullscreen Content - Always show iframe in fullscreen */}
                            <div
                                className="relative flex-1 bg-neutral-900 overflow-hidden"
                                onClick={(e) => {
                                    // Only close if clicking the container, not the iframe
                                    if (e.target === e.currentTarget) {
                                        handleToggleFullscreen(e);
                                    }
                                }}
                            >
                                {isLoading && (
                                    <div className="absolute inset-0 grid place-items-center text-neutral-300 z-10">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-8 h-8 border-4 border-neutral-600 border-t-neutral-300 rounded-full animate-spin"></div>
                                            <p className="text-sm">Loading...</p>
                                        </div>
                                    </div>
                                )}
                                <iframe
                                    src={siteUrl}
                                    className="w-full h-full border-0 pointer-events-auto"
                                    title={`${siteTitle} - Fullscreen preview`}
                                    onLoad={() => setIsLoading(false)}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                    aria-label={`${siteTitle} fullscreen preview`}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Regular View */}
            <div>
                <div className="mx-auto max-w-5xl p-4 sm:p-6 md:p-8 flex justify-center">
                    <motion.div
                        initial={{ x: 0, y: 0, rotate: 0 }}
                        animate={{
                            x: [0, 4, 8, 4, 0],
                            y: [0, -6, 0, 6, 0],
                            rotate: [0, -0.3, 0, 0.3, 0]
                        }}
                        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                        whileInView={{ x: 0, transition: { type: "spring", stiffness: 120 } }}
                        className="my-8 sm:my-16 md:my-20 lg:my-26 mx-auto w-full max-w-full overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur relative"
                    >
                        <div className="relative flex h-10 sm:h-12 items-center gap-2 border-b border-black/10 bg-neutral-50/80 px-3 z-20">
                            <span className="absolute left-3 h-3 w-3 rounded-full bg-red-400 pointer-events-none" />
                            <span className="absolute left-7 h-3 w-3 rounded-full bg-yellow-400 pointer-events-none" />
                            <span className="absolute left-11 h-3 w-3 rounded-full bg-green-400 pointer-events-none" />
                            <a
                                href={siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-auto text-xs sm:text-sm text-neutral-500 truncate px-16 sm:px-20 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 z-10 relative"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    window.open(siteUrl, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {siteUrl}
                                <ExternalLink className="w-3 h-3 hidden sm:inline" />
                            </a>
                            <div className="absolute right-3 flex items-center gap-2">
                                {/* Fullscreen Button */}
                                <button
                                    onClick={handleToggleFullscreen}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();
                                    }}
                                    onMouseDown={(e) => {
                                        e.stopPropagation();
                                    }}
                                    className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white transition-colors duration-200 shadow-sm z-30 cursor-pointer touch-manipulation"
                                    style={{ WebkitTapHighlightColor: 'transparent' }}
                                    aria-label="Enter fullscreen"
                                    title="Enter fullscreen"
                                    type="button"
                                >
                                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
                                </button>
                                {/* Info Button */}
                                {projectInfo && (
                                    <button
                                        onClick={handleToggleInfo}
                                        onTouchStart={(e) => {
                                            e.stopPropagation();
                                        }}
                                        onMouseDown={(e) => {
                                            e.stopPropagation();
                                        }}
                                        className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white transition-colors duration-200 shadow-sm z-30 cursor-pointer touch-manipulation"
                                        style={{ WebkitTapHighlightColor: 'transparent' }}
                                        aria-label={showInfo ? "Show site" : "Show information"}
                                        title={showInfo ? "Show site" : "Show information"}
                                        type="button"
                                    >
                                        {showInfo ? (
                                            <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
                                        ) : (
                                            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="relative aspect-video bg-neutral-900 overflow-hidden" role="region" aria-label={showInfo ? "Project information" : "Project preview"}>
                            <AnimatePresence mode="wait">
                                {showInfo && projectInfo ? (
                                    <motion.div
                                        key="info"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto"
                                        role="article"
                                        aria-labelledby={`project-title-${siteTitle.replace(/\s+/g, '-').toLowerCase()}`}
                                    >
                                        <div className="max-w-2xl mx-auto w-full px-4">
                                            <h3 id={`project-title-${siteTitle.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center sm:text-left">
                                                {projectInfo.title}
                                            </h3>
                                            {projectInfo.description && (
                                                <p className="text-xs sm:text-sm md:text-base text-neutral-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-center sm:text-left">
                                                    {projectInfo.description}
                                                </p>
                                            )}

                                            {projectInfo.features && projectInfo.features.length > 0 && (
                                                <div className="mb-4 sm:mb-6 md:mb-8">
                                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-center sm:text-left">Features</h4>
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                                                        {projectInfo.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-neutral-300">
                                                                <span className="text-green-400 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {projectInfo.techStack && projectInfo.techStack.length > 0 && (
                                                <div className="mb-4 sm:mb-6 md:mb-8">
                                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-center sm:text-left">Tech Stack</h4>
                                                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 md:gap-3">
                                                        {projectInfo.techStack.map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-neutral-700/50 text-neutral-200 rounded-lg text-xs sm:text-sm font-medium border border-neutral-600/50"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start relative z-10">
                                                {projectInfo.liveUrl && (
                                                    <a
                                                        href={projectInfo.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 text-center cursor-pointer"
                                                    >
                                                        View Live Site
                                                    </a>
                                                )}
                                                {projectInfo.githubUrl && projectInfo.githubUrl !== "#" && (
                                                    <a
                                                        href={projectInfo.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 text-center cursor-pointer"
                                                    >
                                                        View on GitHub
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : isMobile && siteImage ? (
                                    <motion.div
                                        key="mobile-image"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-neutral-900 overflow-hidden"
                                    >
                                        <div className="relative w-full h-full flex justify-center items-center">
                                            <img
                                                src={siteImage}
                                                alt={`${siteTitle} - Project screenshot`}
                                                className="w-[50%] object-cover object-center"
                                                loading="lazy"
                                                decoding="async"
                                                width={800}
                                                height={600}
                                            />
                                        </div>
                                    </motion.div>
                                ) : isMobile ? (
                                    <motion.div
                                        key="mobile-preview"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-neutral-900 overflow-hidden flex flex-col items-center justify-center"
                                    >
                                        <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-4 flex flex-col items-center justify-center">
                                            <div className="text-center max-w-md">
                                                <h3 className="text-xl font-bold text-white mb-3">
                                                    {projectInfo?.title || siteTitle}
                                                </h3>
                                                {projectInfo?.description && (
                                                    <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                                                        {projectInfo.description}
                                                    </p>
                                                )}
                                                <a
                                                    href={siteUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer relative z-10"
                                                >
                                                    Open Site
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="iframe"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0"
                                    >
                                        {isLoading && (
                                            <div className="absolute inset-0 grid place-items-center text-neutral-300 z-10">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="w-8 h-8 border-4 border-neutral-600 border-t-neutral-300 rounded-full animate-spin"></div>
                                                    <p className="text-sm">Loading...</p>
                                                </div>
                                            </div>
                                        )}
                                        <iframe
                                            src={siteUrl}
                                            className="w-full h-full border-0"
                                            title={`${siteTitle} - Live preview`}
                                            onLoad={() => setIsLoading(false)}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                            loading="lazy"
                                            aria-label={`${siteTitle} preview`}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
