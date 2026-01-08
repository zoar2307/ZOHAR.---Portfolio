import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS, ANIMATION_CONFIG, FLOAT_CONFIG } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export function useAnimation({
    sectionRef,
    overlayRef,
    textRef,
    sceneRefs,
    shapeRefs,
}) {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !textRef.current) return;

            const center = { x: 0, y: 0 };
            const isMobile = typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.mobile;
            const isTablet = typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.tablet;

            // Helper functions
            const getOffsetX = () => {
                if (typeof window === 'undefined') return ANIMATION_CONFIG.offsetX.desktop;
                if (isMobile) return ANIMATION_CONFIG.offsetX.mobile();
                if (isTablet) return ANIMATION_CONFIG.offsetX.tablet;
                return ANIMATION_CONFIG.offsetX.desktop;
            };

            const computeCenter = () => {
                if (textRef.current) {
                    const rect = textRef.current.getBoundingClientRect();
                    center.x = rect.right + (isMobile ? 8 : 12);
                    center.y = rect.top + rect.height / 2;
                }
            };

            const getCircleSize = () => {
                if (typeof window === 'undefined') return '150%';
                const width = window.innerWidth;
                const height = window.innerHeight;
                // Calculate diagonal to ensure full coverage, add extra margin
                const diagonal = Math.sqrt(width * width + height * height);
                return `${diagonal * 1.5}px`;
            };

            const getScrollEnd = () => {
                if (typeof window === 'undefined') return ANIMATION_CONFIG.scrollEnd.desktop;
                if (isMobile) return ANIMATION_CONFIG.scrollEnd.mobile;
                if (isTablet) return ANIMATION_CONFIG.scrollEnd.tablet;
                return ANIMATION_CONFIG.scrollEnd.desktop;
            };

            computeCenter();
            const offsetX = getOffsetX();

            // Initial states
            if (overlayRef.current) {
                gsap.set(overlayRef.current, {
                    clipPath: `circle(0px at ${center.x}px ${center.y}px)`,
                });
            }

            // Set initial states for first scene
            const [titleRef1, subtitleRef1, textRef1] = sceneRefs[0];
            gsap.set(titleRef1.current, {
                opacity: 0,
                y: isMobile ? ANIMATION_CONFIG.initialY.title.mobile : ANIMATION_CONFIG.initialY.title.desktop
            });
            gsap.set(subtitleRef1.current, {
                opacity: 0,
                y: isMobile ? ANIMATION_CONFIG.initialY.subtitle.mobile : ANIMATION_CONFIG.initialY.subtitle.desktop
            });
            gsap.set(textRef1.current, {
                opacity: 0,
                y: isMobile ? ANIMATION_CONFIG.initialY.text.mobile : ANIMATION_CONFIG.initialY.text.desktop
            });

            // Set initial states for subsequent scenes (off-screen)
            sceneRefs.slice(1).forEach(sceneRefGroup => {
                sceneRefGroup.forEach(ref => {
                    if (ref.current) {
                        gsap.set(ref.current, {
                            opacity: 0,
                            x: offsetX
                        });
                    }
                });
            });

            // Set initial states for shapes
            shapeRefs.forEach((shapeGroup, groupIndex) => {
                shapeGroup.forEach((shapeRef, shapeIndex) => {
                    if (shapeRef.current) {
                        if (groupIndex === 0) {
                            // First group: initial animation state
                            gsap.set(shapeRef.current, {
                                opacity: 0,
                                scale: 0.8,
                                rotate: [-8, 10, -14][shapeIndex] || 0,
                                y: [-30, 30, -20][shapeIndex] || 0,
                                transformOrigin: "50% 50%",
                            });
                        } else {
                            // Other groups: off-screen and invisible initially
                            gsap.set(shapeRef.current, {
                                opacity: 0,
                                x: offsetX
                            });
                        }
                    }
                });
            });

            // Create timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "center center",
                    end: getScrollEnd(),
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onRefresh: () => {
                        computeCenter();
                        if (overlayRef.current) {
                            gsap.set(overlayRef.current, {
                                clipPath: `circle(0px at ${center.x}px ${center.y}px)`,
                            });
                        }
                    },
                },
            });

            // Overlay animation - expand to cover screen
            const circleSize = getCircleSize();

            // Calculate viewport center (stays fixed relative to viewport)
            const viewportCenterX = typeof window !== 'undefined' ? window.innerWidth / 2 : center.x;
            const viewportCenterY = typeof window !== 'undefined' ? window.innerHeight / 2 : center.y;

            // Track cumulative horizontal offset
            let cumulativeOffset = 0;

            tl.to(overlayRef.current, {
                clipPath: () => `circle(${circleSize} at ${center.x}px ${center.y}px)`,
                ease: "none",
                duration: 1,
            })
                // First scene shapes entrance
                .to(
                    shapeRefs[0].map(ref => ref.current).filter(Boolean),
                    {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.08,
                    },
                    "-=0.35"
                )
                // First scene text entrance
                .to(titleRef1.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                })
                .to(subtitleRef1.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                }, "-=0.25")
                .to(textRef1.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                }, "-=0.1")
                // Transition to second scene - synchronized movement
                .to(
                    [
                        overlayRef.current,
                        ...sceneRefs[0].map(ref => ref.current),
                        ...shapeRefs[0].map(ref => ref.current),
                        ...sceneRefs[1].map(ref => ref.current),
                        ...shapeRefs[1].map(ref => ref.current),
                    ].filter(Boolean),
                    {
                        opacity: 1,
                        x: `-=${offsetX}`,
                        duration: 1.2,
                        ease: "power2.inOut",
                    },
                    "-=0.1"
                )
                // Update overlay clip-path center to compensate for movement
                .to(overlayRef.current, {
                    clipPath: () => {
                        cumulativeOffset = offsetX;
                        // Adjust center point to account for overlay's x transform
                        // Since overlay moved left by offsetX, add offsetX to center to keep it on viewport
                        const adjustedCenterX = viewportCenterX + cumulativeOffset;
                        return `circle(${circleSize} at ${adjustedCenterX}px ${viewportCenterY}px)`;
                    },
                    duration: 1.2,
                    ease: "power2.inOut",
                }, "-=1.2")
                // Transition to third scene - synchronized movement
                .to(
                    [
                        overlayRef.current,
                        ...sceneRefs[1].map(ref => ref.current),
                        ...shapeRefs[1].map(ref => ref.current),
                        ...sceneRefs[2].map(ref => ref.current),
                        ...shapeRefs[2].map(ref => ref.current),
                    ].filter(Boolean),
                    {
                        opacity: 1,
                        x: `-=${offsetX}`,
                        duration: 1.2,
                        ease: "power2.inOut",
                    },
                    "-=0.1"
                )
                // Update overlay clip-path center to compensate for movement
                .to(overlayRef.current, {
                    clipPath: () => {
                        cumulativeOffset = offsetX * 2;
                        // Adjust center point to account for overlay's x transform
                        const adjustedCenterX = viewportCenterX + cumulativeOffset;
                        return `circle(${circleSize} at ${adjustedCenterX}px ${viewportCenterY}px)`;
                    },
                    duration: 1.2,
                    ease: "power2.inOut",
                }, "-=1.2");

            // Floating animations for all shapes
            const float = (el, config) => {
                if (!el) return;
                gsap.to(el, {
                    y: `+=${config.y}`,
                    rotate: `+=${config.rotate}`,
                    duration: config.duration,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            };

            shapeRefs.flat().forEach((shapeRef, index) => {
                if (shapeRef.current) {
                    float(shapeRef.current, FLOAT_CONFIG[index % FLOAT_CONFIG.length]);
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [sectionRef, overlayRef, textRef, sceneRefs, shapeRefs]);
}

