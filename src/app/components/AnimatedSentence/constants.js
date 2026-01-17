import { labels } from '../../customLabels/customLabels';

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
        title: labels.animatedSentence.scenes[0].title,
        subtitle: labels.animatedSentence.scenes[0].subtitle,
        subtitleBg: "bg-orange-600",
        text: labels.animatedSentence.scenes[0].text,
        titleRotate: "rotate-2",
        subtitleRotate: "-rotate-2",
    },
    {
        title: labels.animatedSentence.scenes[1].title,
        subtitle: labels.animatedSentence.scenes[1].subtitle,
        subtitleBg: "bg-blue-300",
        text: labels.animatedSentence.scenes[1].text,
        titleRotate: "-rotate-2",
        subtitleRotate: "rotate-2",
        subtitleLeft: "left-[120px] lg:left-[280px]",
    },
    {
        title: labels.animatedSentence.scenes[2].title,
        subtitle: labels.animatedSentence.scenes[2].subtitle,
        subtitleBg: "bg-yellow-500",
        text: labels.animatedSentence.scenes[2].text,
        titleRotate: "-rotate-2",
        subtitleRotate: "rotate-2",
        subtitleLeft: "left-[120px] lg:left-[280px]",
    },
];

