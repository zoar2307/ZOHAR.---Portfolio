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

    // ✅ refs לצורות SVG
    const shape1Ref = useRef(null);    // blob
    const shape2Ref = useRef(null);    // gradient circle
    const shape3Ref = useRef(null);    // soft star

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
                    end: "+=2000",
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
                        ease: "power3.out",
                    },
                    "-=0.1"
                )
                .to(
                    [overlayRef.current, subtitleref.current, txtref.current, titleref.current, shape1Ref.current, shape2Ref.current, shape3Ref.current, subtitleref2.current, txtref2.current, titleref2.current],
                    {
                        opacity: 1,
                        x: '-=1800',
                        duration: 1,
                        ease: "power3.out",
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
                    className="text-5xl font-bold text-white p-8 py-5 bg-orange-600 absolute top-[338px] left-[280px] rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] rotate-2"
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


        </section>
    );
}
