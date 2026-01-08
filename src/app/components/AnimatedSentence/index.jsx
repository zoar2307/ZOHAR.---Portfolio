"use client";
import { useRef, useMemo } from "react";
import { SCENE_DATA } from "./constants";
import { useAnimation } from "./useAnimation";
import TextSection from "./TextSection";
import Shapes from "./Shapes";

export default function AnimatedSentence() {
    // All refs must be created at the top level (Rules of Hooks)
    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const textRef = useRef(null);

    // Scene refs (title, subtitle, text for each scene)
    const titleref = useRef(null);
    const subtitleref = useRef(null);
    const txtref = useRef(null);
    const titleref2 = useRef(null);
    const subtitleref2 = useRef(null);
    const txtref2 = useRef(null);
    const titleref3 = useRef(null);
    const subtitleref3 = useRef(null);
    const txtref3 = useRef(null);

    // Shape refs (3 shapes per scene)
    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);
    const shape3Ref = useRef(null);
    const shape1Ref2 = useRef(null);
    const shape2Ref2 = useRef(null);
    const shape3Ref2 = useRef(null);
    const shape1Ref3 = useRef(null);
    const shape2Ref3 = useRef(null);
    const shape3Ref3 = useRef(null);

    // Organize refs for easier access
    const sceneRefs = useMemo(() => [
        [titleref, subtitleref, txtref],
        [titleref2, subtitleref2, txtref2],
        [titleref3, subtitleref3, txtref3],
    ], []);

    const shapeRefs = useMemo(() => [
        [shape1Ref, shape2Ref, shape3Ref],
        [shape1Ref2, shape2Ref2, shape3Ref2],
        [shape1Ref3, shape2Ref3, shape3Ref3],
    ], []);

    // Use animation hook
    useAnimation({
        sectionRef,
        overlayRef,
        textRef,
        sceneRefs,
        shapeRefs,
    });

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden" aria-label="Animated introduction">
            <div className="grid h-full place-items-center">
                <p ref={textRef} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-800 select-none px-4" aria-label="ZOHAR.">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl h-title font-bold">
                        ZOHAR<span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-red-700">.</span>
                    </span>
                </p>
            </div>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="pointer-events-none absolute inset-0 z-10 bg-black will-change-[clip-path] w-[700vw] md:w-[700vw] lg:w-[700vw]"
                style={{ clipPath: "circle(0px at 50% 50%)" }}
                aria-hidden="true"
            />

            {/* SVG Shapes Layer */}
            <Shapes shapeRefs={shapeRefs} />

            {/* Text Sections */}
            {SCENE_DATA.map((scene, index) => (
                <TextSection
                    key={index}
                    scene={scene}
                    refs={sceneRefs[index]}
                />
            ))}
        </section>
    );
}

