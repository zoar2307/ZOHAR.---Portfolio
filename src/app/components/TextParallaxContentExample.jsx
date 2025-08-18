'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TextParallaxContentExample = () => {
    return (
        <div className="bg-white py-26">
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3"
                subheading="Chapter 1 - Education"
                heading="Full stack bootcamp"
            >
                <ExampleContent
                    h="Full stack bootcamp at Coding Academy"
                    p1="I completed an intensive full stack bootcamp at Coding Academy, founded by Yaron Biton, a former commander of the Mamram programming course. The training follows Mamram style methods with careful screening and a strong focus on clean code and architectural thinking."
                    p2="We worked on both client and server using React, Node.js, Express, and MongoDB. For my capstone project I built a task management system similar to Monday with a React and SCSS front end, a Node and Express back end, a MongoDB database, and real time communication with WebSockets."
                />
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3"
                subheading="Chapter 2 - Experiance"
                heading="Teaching at Coding Academy"
            >
                <ExampleContent
                    h="Teaching at Coding Academy"
                    p1="After graduating I was recruited to the Coding Academy team. They hire only the top technical graduates. I work directly with the course lead and the CTO and mentor students on the technical side."
                    p2="I teach students to think in architecture, to write readable and modular code, and to apply best practices in real projects. We do code reviews, live debugging, pair programming, a clear Git flow with clean pull requests and meaningful commits, Kanban on issues, and a clear definition of done."
                />
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3"
                subheading="Chapter 3 - Experiance"
                heading="Salesforce developer at Bank Leumi"
            >
                <ExampleContent
                    h="Salesforce developer at Bank Leumi"
                    p1="Today I work as a Salesforce developer at Bank Leumi. I handle very large datasets, core banking flows, and a customer facing chatbot with reliability, security, and performance as top priorities."
                    p2="My work includes Apex with queueable jobs, triggers and thorough tests with solid test data, SOAP integrations through WSDL2Apex such as ParkService, and business automations like creating routine maintenance cases. I manage permissions, profiles, and security, and build with Lightning App Builder and Dynamic Forms as well as the Mobile SDK. In parallel I build interfaces with React and Next.js, including an analytics dashboard with date filters and a custom analytics service."
                />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ h, p1, p2 }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h3 className="col-span-1 text-3xl font-bold md:col-span-4">
            {h}
        </h3>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                {p1}
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                {p2}
            </p>

        </div>
    </div>
);