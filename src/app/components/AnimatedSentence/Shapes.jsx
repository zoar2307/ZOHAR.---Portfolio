"use client";

export default function Shapes({ shapeRefs }) {
    const [shape1Ref, shape2Ref, shape3Ref, shape1Ref2, shape2Ref2, shape3Ref2, shape1Ref3, shape2Ref3, shape3Ref3] = shapeRefs.flat();

    return (
        <div className="absolute inset-0 z-20 pointer-events-none hidden sm:block">
            {/* Scene 1 Shapes */}
            <svg
                ref={shape1Ref}
                className="absolute right-[50px] md:right-[100px] top-[400px] md:top-[620px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]"
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF80AB" />
                        <stop offset="100%" stopColor="#FF4081" />
                    </linearGradient>
                </defs>
                <path
                    d="M60 20 H160 Q140 60 110 100 Q140 140 160 180 H60 Q80 140 110 100 Q80 60 60 20 Z"
                    fill="url(#g1)"
                    opacity="0.9"
                />
            </svg>

            <svg
                ref={shape2Ref}
                className="absolute right-[100px] md:right-[200px] top-[100px] md:top-[200px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px]"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="g2" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="#80D8FF" />
                        <stop offset="100%" stopColor="#00B0FF" />
                    </radialGradient>
                    <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0" />
                    </filter>
                </defs>
                <circle cx="90" cy="90" r="80" fill="url(#g2)" filter="url(#blur2)" opacity="0.75" />
            </svg>

            <svg
                ref={shape3Ref}
                className="absolute right-[150px] md:right-96 top-[300px] md:top-[470px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFD180" />
                        <stop offset="100%" stopColor="#FFAB40" />
                    </linearGradient>
                    <filter id="blur3" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0" />
                    </filter>
                </defs>
                <path
                    d="M80 10c8 18 14 24 32 32-18 8-24 14-32 32-8-18-14-24-32-32 18-8 24-14 32-32z"
                    fill="url(#g3)"
                    filter="url(#blur3)"
                    opacity="0.8"
                />
            </svg>

            {/* Scene 2 Shapes */}
            <svg
                ref={shape1Ref2}
                className="absolute right-[50px] md:right-[100px] top-[400px] md:top-[620px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]"
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="glow1" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="12" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="g1-2" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF80AB" />
                        <stop offset="50%" stopColor="#FF6FD8" />
                        <stop offset="100%" stopColor="#845EC2" />
                        <animateTransform attributeName="gradientTransform" type="rotate"
                            from="0 0.5 0.5" to="360 0.5 0.5" dur="16s" repeatCount="indefinite" />
                    </linearGradient>
                    <radialGradient id="spec1" cx="30%" cy="25%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                    <mask id="glass1">
                        <rect width="100%" height="100%" fill="black" />
                        <path d="M60 20 H160 Q140 60 110 100 Q140 140 160 180 H60 Q80 140 110 100 Q80 60 60 20 Z"
                            fill="white" />
                    </mask>
                </defs>
                <path d="M60 20 H160 Q140 60 110 100 Q140 140 160 180 H60 Q80 140 110 100 Q80 60 60 20 Z"
                    fill="url(#g1-2)" opacity="0.92" filter="url(#glow1)" />
                <path d="M60 20 H160 Q140 60 110 100 Q140 140 160 180 H60 Q80 140 110 100 Q80 60 60 20 Z"
                    fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
                <rect width="220" height="220" fill="url(#spec1)" mask="url(#glass1)" />
            </svg>

            <svg
                ref={shape2Ref2}
                className="absolute right-[100px] md:right-[200px] top-[100px] md:top-[200px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px]"
                viewBox="0 0 180 180"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="g2-2" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="#A1FFFE" />
                        <stop offset="60%" stopColor="#61DAFB" />
                        <stop offset="100%" stopColor="#00B0FF" />
                    </radialGradient>
                    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glow2" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="8" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>
                <circle cx="90" cy="90" r="78" fill="url(#g2-2)" opacity="0.9" filter="url(#glow2)" />
                <g transform="translate(90 90)">
                    <circle r="70" fill="none" stroke="url(#ring)" strokeWidth="8" strokeLinecap="round"
                        strokeDasharray="60 22 12 18 8 30" />
                    <animateTransform attributeName="transform" type="rotate"
                        from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite" />
                </g>
            </svg>

            <svg
                ref={shape3Ref2}
                className="absolute right-[150px] md:right-96 top-[300px] md:top-[470px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]"
                viewBox="0 0 160 160"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="g3-2" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFD180" />
                        <stop offset="60%" stopColor="#FFC371" />
                        <stop offset="100%" stopColor="#FF9A44" />
                    </linearGradient>
                    <filter id="glow3" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="9" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>
                <circle cx="80" cy="80" r="24" fill="url(#g3-2)" filter="url(#glow3)">
                    <animate attributeName="r" values="22;26;22" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <g transform="translate(80 80)">
                    <g>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <path key={i}
                                d="M0,-12 C12,-36 32,-36 44,-12 C28,-8 16,-6 0,-12 Z"
                                fill="url(#g3-2)" opacity="0.9" transform={`rotate(${i * 36})`} />
                        ))}
                    </g>
                    <g>
                        {Array.from({ length: 20 }).map((_, i) => (
                            <rect key={i}
                                x="-1" y="-70" width="2" height="22" rx="1"
                                fill="white" opacity="0.35" transform={`rotate(${i * 18})`} />
                        ))}
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 0 0" to="-360 0 0" dur="10s" repeatCount="indefinite" />
                    </g>
                </g>
            </svg>

            {/* Scene 3 Shapes */}
            <svg
                ref={shape1Ref3}
                className="absolute right-[50px] md:right-[100px] top-[400px] md:top-[620px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]"
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="g1-3" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF9A9E">
                            <animate attributeName="stop-color" values="#FF9A9E;#FAD0C4;#FF9A9E" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#FAD0C4">
                            <animate attributeName="stop-color" values="#FAD0C4;#FF9A9E;#FAD0C4" dur="6s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                </defs>
                <path
                    d="M110 20 C160 20 200 70 180 120 C160 170 60 190 40 130 C20 80 60 20 110 20Z"
                    fill="url(#g1-3)"
                    opacity="0.9"
                />
            </svg>

            <svg
                ref={shape2Ref3}
                className="absolute right-[100px] md:right-[200px] top-[100px] md:top-[200px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px]"
                viewBox="0 0 180 180"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="g2-3" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00F5A0" />
                        <stop offset="100%" stopColor="#00D9F5" />
                    </linearGradient>
                </defs>
                <circle cx="90" cy="90" r="70" fill="none" stroke="url(#g2-3)" strokeWidth="18" strokeLinecap="round"
                    strokeDasharray="60 40" />
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="10s" repeatCount="indefinite" />
            </svg>

            <svg
                ref={shape3Ref3}
                className="absolute right-[150px] md:right-96 top-[300px] md:top-[470px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)] w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]"
                viewBox="0 0 160 160"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="g3-3" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFD54F" />
                        <stop offset="100%" stopColor="#FF6F00" />
                    </radialGradient>
                </defs>
                <g transform="translate(80 80)">
                    <path
                        d="M0,-60 L15,-20 L60,0 L15,20 L0,60 L-15,20 L-60,0 L-15,-20Z"
                        fill="url(#g3-3)" opacity="0.9">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;0.6;0.9" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>
            </svg>
        </div>
    );
}

