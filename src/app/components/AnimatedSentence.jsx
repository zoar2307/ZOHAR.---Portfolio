"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSentencePinned() {
    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const textRef = useRef(null);      // "ZOHAR"
    const titleref = useRef(null);      // 
    const subtitleref = useRef(null);
    const txtref = useRef(null);
    const titleref2 = useRef(null);
    const subtitleref2 = useRef(null);
    const txtref2 = useRef(null);
    const titleref3 = useRef(null);
    const subtitleref3 = useRef(null);
    const txtref3 = useRef(null);

    // ✅ refs לצורות SVG
    const shape1Ref = useRef(null);    // blob
    const shape2Ref = useRef(null);    // gradient circle
    const shape3Ref = useRef(null);    // soft star
    const shape1Ref2 = useRef(null);    // blob
    const shape2Ref2 = useRef(null);    // gradient circle
    const shape3Ref2 = useRef(null);    // soft star
    const shape1Ref3 = useRef(null);    // blob
    const shape2Ref3 = useRef(null);    // gradient circle
    const shape3Ref3 = useRef(null);    // soft star

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const center = { x: 0, y: 0 };

            const computeCenter = () => {
                const r = textRef.current.getBoundingClientRect();
                center.x = r.right + 12;              // 12px אחרי ZOHAR
                center.y = r.top + r.height / 2;
            };

            computeCenter();

            // מצבים התחלתיים
            gsap.set(overlayRef.current, {
                clipPath: `circle(0px at ${center.x}px ${center.y}px)`,
            });
            gsap.set(titleref.current, { opacity: 0, y: -100 });
            gsap.set(subtitleref.current, { opacity: 0, y: 100 });
            gsap.set(txtref.current, { opacity: 0, y: 40 });
            gsap.set(titleref2.current, { opacity: 100, x: 1800 });
            gsap.set(subtitleref2.current, { opacity: 100, x: 1800 });
            gsap.set(txtref2.current, { opacity: 100, x: 1800 });
            gsap.set(titleref3.current, { opacity: 100, x: 1800 });
            gsap.set(subtitleref3.current, { opacity: 100, x: 1800 });
            gsap.set(txtref3.current, { opacity: 100, x: 1800 });
            gsap.set(shape1Ref2.current, { opacity: 100, x: 1800 });
            gsap.set(shape2Ref2.current, { opacity: 100, x: 1800 });
            gsap.set(shape3Ref2.current, { opacity: 100, x: 1800 });
            gsap.set(shape1Ref3.current, { opacity: 100, x: 1800 });
            gsap.set(shape2Ref3.current, { opacity: 100, x: 1800 });
            gsap.set(shape3Ref3.current, { opacity: 100, x: 1800 });


            // ✅ התחלה לצורות
            gsap.set([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
                opacity: 0,
                scale: 0.8,
                rotate: (i) => [-8, 10, -14][i] || 0,
                y: (i) => [-30, 30, -20][i] || 0,
                transformOrigin: "50% 50%",
            });


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "center center",
                    end: "+=4500",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onRefresh: () => {
                        computeCenter();
                        gsap.set(overlayRef.current, {
                            clipPath: `circle(0px at ${center.x}px ${center.y}px)`,
                        });
                    },
                },
            });

            // כיסוי
            tl.to(overlayRef.current, {
                clipPath: () => `circle(150% at ${center.x}px ${center.y}px)`,
                ease: "none",
                duration: 1,
            })
                // ✅ כניסת הצורות לפני הטקסט (עדינות)
                .to(
                    [shape1Ref.current, shape2Ref.current, shape3Ref.current],
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
                // הטקסטים
                .to(titleref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                })
                .to(
                    subtitleref.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )
                .to(
                    txtref.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        // ease: "power3.out",
                    },
                    "-=0.1"
                )
                .to(
                    [overlayRef.current, subtitleref.current, txtref.current, titleref.current, shape1Ref.current, shape2Ref.current, shape3Ref.current, shape1Ref2.current, shape2Ref2.current, shape3Ref2.current, subtitleref2.current, txtref2.current, titleref2.current],
                    {
                        opacity: 1,
                        x: '-=1800',
                        duration: 1,
                        // ease: "power3.out",
                    },
                    "-=0.1"
                )
                .to(
                    [overlayRef.current, subtitleref3.current, txtref3.current, titleref3.current, shape1Ref2.current, shape2Ref2.current, shape3Ref2.current, shape1Ref3.current, shape2Ref3.current, shape3Ref3.current, subtitleref2.current, txtref2.current, titleref2.current],
                    {
                        opacity: 1,
                        x: '-=1800',
                        duration: 1,
                        // ease: "power3.out",
                    },
                    "-=0.1"
                )



            // ✅ אנימציית "רחף" אינסופית לצורות (מחוץ לטיימליין, לא תלוי בסקרול)
            const float = (el, y = 10, r = 4, t = 3) => {
                gsap.to(el, {
                    y: `+=${y}`,
                    rotate: `+=${r}`,
                    duration: t,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            };
            float(shape1Ref.current, 12, 3, 3.2);
            float(shape2Ref.current, 16, -4, 3.8);
            float(shape3Ref.current, 10, 5, 3.0);
            float(shape1Ref2.current, 12, 3, 3.2);
            float(shape2Ref2.current, 16, -4, 3.8);
            float(shape3Ref2.current, 10, 5, 3.0);
            float(shape1Ref3.current, 12, 3, 3.2);
            float(shape2Ref3.current, 16, -4, 3.8);
            float(shape3Ref3.current, 10, 5, 3.0);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden">
            <div className="grid h-full place-items-center">
                <p ref={textRef} className="text-3xl font-semibold text-neutral-800 select-none">
                    <span className="text-8xl h-title font-bold">
                        ZOHAR<span className="text-8xl text-red-700">.</span>
                    </span>
                </p>
            </div>

            {/* כיסוי שחור מתרחב */}
            <div
                ref={overlayRef}
                className="pointer-events-none absolute inset-0 z-10 bg-black will-change-[clip-path] w-[300vw]"
                style={{ clipPath: "circle(0px at 50% 50%)" }}
            />

            {/* ✅ שכבת SVGs דקורטיבית (מאחורי הטקסטים) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <svg
                    ref={shape1Ref}
                    className="absolute right-[100px] top-[620px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="220"
                    height="220"
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

                {/* עיגול גרדיאנט תכלת */}
                <svg
                    ref={shape2Ref}
                    className="absolute right-[200px] top-[200px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="180"
                    height="180"
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

                {/* כוכב רך/פרח עדין */}
                <svg
                    ref={shape3Ref}
                    className="absolute right-96 top-[470px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="160"
                    height="160"
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

                {/* 1) בלוב זכוכיתי + גלואו עדין */}
                <svg
                    ref={shape1Ref2}
                    className="absolute right-[100px] top-[620px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* זוהר חיצוני */}
                        <filter id="glow1" x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="12" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        {/* גרדיאנט עם סיבוב עדין */}
                        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FF80AB" />
                            <stop offset="50%" stopColor="#FF6FD8" />
                            <stop offset="100%" stopColor="#845EC2" />
                            <animateTransform attributeName="gradientTransform" type="rotate"
                                from="0 0.5 0.5" to="360 0.5 0.5" dur="16s" repeatCount="indefinite" />
                        </linearGradient>
                        {/* היילייט פנימי “זכוכיתי” דרך מסכה */}
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

                    {/* הילה רכה מאחור */}
                    <path d="M60 20 H160 Q140 60 110 100 Q140 140 160 180 H60 Q80 140 110 100 Q80 60 60 20 Z"
                        fill="url(#g1)" opacity="0.92" filter="url(#glow1)" />
                    {/* קו חיצוני חצי־שקוף */}
                    <path d="M60 20 H160 Q140 60 110 100 Q140 140 160 180 H60 Q80 140 110 100 Q80 60 60 20 Z"
                        fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
                    {/* היילייט פנימי */}
                    <rect width="220" height="220" fill="url(#spec1)" mask="url(#glass1)" />
                </svg>

                {/* 2) אורב ניאון + רינג מסתובב */}
                <svg
                    ref={shape2Ref2}
                    className="absolute right-[200px] top-[200px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient id="g2" cx="50%" cy="50%" r="60%">
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

                    {/* דיסק זוהר */}
                    <circle cx="90" cy="90" r="78" fill="url(#g2)" opacity="0.9" filter="url(#glow2)" />
                    {/* רינג חצי־שקוף שמסתובב */}
                    <g transform="translate(90 90)">
                        <circle r="70" fill="none" stroke="url(#ring)" strokeWidth="8" strokeLinecap="round"
                            strokeDasharray="60 22 12 18 8 30" />
                        <animateTransform attributeName="transform" type="rotate"
                            from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite" />
                    </g>
                </svg>

                {/* 3) פרח/כוכב דינמי עם קרניים מסתובבות ופולס עדין */}
                <svg
                    ref={shape3Ref2}
                    className="absolute right-96 top-[470px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FFD180" />
                            <stop offset="60%" stopColor="#FFC371" />
                            <stop offset="100%" stopColor="#FF9A44" />
                        </linearGradient>
                        <filter id="glow3" x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="9" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>

                    {/* ליבה */}
                    <circle cx="80" cy="80" r="24" fill="url(#g3)" filter="url(#glow3)">
                        <animate attributeName="r" values="22;26;22" dur="3.4s" repeatCount="indefinite" />
                    </circle>

                    {/* עלי כותרת */}
                    <g transform="translate(80 80)">
                        <g>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <path key={i}
                                    d="M0,-12 C12,-36 32,-36 44,-12 C28,-8 16,-6 0,-12 Z"
                                    fill="url(#g3)" opacity="0.9" transform={`rotate(${i * 36})`} />
                            ))}
                        </g>
                        {/* קרניים דקות שמסתובבות */}
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

                {/* 1) בלוב צבעוני עם גרדיאנט מתחלף */}
                <svg
                    ref={shape1Ref3}
                    className="absolute right-[100px] top-[620px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"
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

                {/* 2) טבעת ניאון עם סיבוב */}
                <svg
                    ref={shape2Ref3}
                    className="absolute right-[200px] top-[200px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"
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

                {/* 3) כוכב/פרח מסתובב עם פולס */}
                <svg
                    ref={shape3Ref3}
                    className="absolute right-96 top-[470px] drop-shadow-[0_6px_18px_rgba(255,255,255,0.45)]"
                    width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"
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

            {/* שכבת הטקסטים/כרטיסים מעל ה-SVGs */}
            <div className="pointer-events-none absolute inset-0 z-30 gap-4 px-28">
                <div
                    ref={titleref}
                    className="text-5xl font-bold text-black p-8 py-5 bg-pink-200 absolute top-[250px] left-28 rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] rotate-2"
                >
                    My Journey Into Development
                </div>
                <div
                    ref={subtitleref}
                    className="text-5xl font-bold text-white p-8 py-5 bg-orange-600 absolute top-[338px] left-28 rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] -rotate-2"
                >
                    The First Step
                </div>
                <p
                    ref={txtref}
                    className="text-3xl font-light text-white absolute top-[600px] left-28 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]"
                >
                    “My journey started with a full-stack course. <br />
                    I learned the foundations JavaScript, Node, databases, and React<br />
                    and quickly realized I’m obsessed with the front end. <br />
                    Animation became my language: with React and GSAP I turn static designs <br />
                    into interactive stories. Today I code clean, performance-minded UI <br />
                    and craft experiences that feel alive.”
                </p>
            </div>

            <div className="pointer-events-none absolute inset-0 z-30 gap-4 px-28">
                <div
                    ref={titleref2}
                    className="text-5xl font-bold text-black p-8 py-5 bg-pink-200 absolute top-[250px] left-28 rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] -rotate-2"
                >
                    My Journey Into Development
                </div>
                <div
                    ref={subtitleref2}
                    className="text-5xl font-bold text-white p-8 py-5 bg-blue-300 absolute top-[338px] left-[280px] rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] rotate-2"
                >
                    The Second Step
                </div>
                <p
                    ref={txtref2}
                    className="text-3xl font-light text-white absolute top-[600px] left-28 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]"
                >
                    “In the second step, I worked as a Teaching Assistant.<br />
                    This experience gave me the opportunity to teach others,<br /> answer questions, and support students in understanding the material.<br />
                    By explaining concepts to others, I strengthened my own knowledge, gained confidence,<br />
                    and developed valuable skills in working with people in a professional setting.”
                </p>
            </div>

            <div className="pointer-events-none absolute inset-0 z-30 gap-4 px-28">
                <div
                    ref={titleref3}
                    className="text-5xl font-bold text-black p-8 py-5 bg-red-600 absolute top-[250px] left-28 rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] -rotate-2"
                >
                    My Journey Into Development
                </div>
                <div
                    ref={subtitleref3}
                    className="text-5xl font-bold text-white p-8 py-5 bg-yellow-500 absolute top-[338px] left-[280px] rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] rotate-2"
                >
                    The Third Step
                </div>
                <p
                    ref={txtref3}
                    className="text-3xl font-light text-white absolute top-[600px] left-28 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]"
                >
                    “In the third step I reached a big milestone — I joined Bank Leumi<br />
                    as a Salesforce and Full-Stack Developer, where I combine Apex, React,<br />
                    and Node.js to create real-world solutions used by thousands of people.<br /><br />
                    This position allows me to grow my technical expertise, work with professionals,<br />
                    and apply the persistence, discipline, and communication skills I built along my journey.<br /><br />
                    It is not only about writing code anymore, but about shaping solutions,<br />
                    collaborating in a team, and making a real impact.”
                </p>
            </div>

        </section>
    );
}
