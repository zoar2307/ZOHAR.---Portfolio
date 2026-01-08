export const BREAKPOINTS = {
    mobile: 640,
    tablet: 1024,
};

export const ANIMATION_CONFIG = {
    offsetX: {
        mobile: () => window.innerWidth * 1.5,
        tablet: 1200,
        desktop: 1800,
    },
    scrollEnd: {
        mobile: "+=2500",
        tablet: "+=3500",
        desktop: "+=4500",
    },
    initialY: {
        title: { mobile: -50, desktop: -100 },
        subtitle: { mobile: 50, desktop: 100 },
        text: { mobile: 20, desktop: 40 },
    },
};

export const FLOAT_CONFIG = [
    { y: 12, rotate: 3, duration: 3.2 },
    { y: 16, rotate: -4, duration: 3.8 },
    { y: 10, rotate: 5, duration: 3.0 },
];

export const SCENE_DATA = [
    {
        title: "My Journey Into Development",
        subtitle: "The First Step",
        subtitleBg: "bg-orange-600",
        text: `"My journey started with a full-stack course.
I learned the foundations JavaScript, Node, databases, and React
and quickly realized I'm obsessed with the front end.
Animation became my language: with React and GSAP I turn static designs
into interactive stories. Today I code clean, performance-minded UI
and craft experiences that feel alive."`,
        titleRotate: "rotate-2",
        subtitleRotate: "-rotate-2",
    },
    {
        title: "My Journey Into Development",
        subtitle: "The Second Step",
        subtitleBg: "bg-blue-300",
        text: `"In the second step, I worked as a Teaching Assistant.
This experience gave me the opportunity to teach others, answer questions, 
and support students in understanding the material.
By explaining concepts to others, I strengthened my own knowledge, gained confidence,
and developed valuable skills in working with people in a professional setting."`,
        titleRotate: "-rotate-2",
        subtitleRotate: "rotate-2",
        subtitleLeft: "left-[120px] lg:left-[280px]",
    },
    {
        title: "My Journey Into Development",
        subtitle: "The Third Step",
        subtitleBg: "bg-yellow-500",
        text: `"In the third step I reached a big milestone — I joined Bank Leumi
as a Salesforce and Full-Stack Developer, where I combine Apex, React,
and Node.js to create real-world solutions used by thousands of people.
This position allows me to grow my technical expertise, work with professionals,
and apply the persistence, discipline, and communication skills I built along my journey.
It is not only about writing code anymore, but about shaping solutions,
collaborating in a team, and making a real impact."`,
        titleRotate: "-rotate-2",
        subtitleRotate: "rotate-2",
        subtitleLeft: "left-[120px] lg:left-[280px]",
    },
];

