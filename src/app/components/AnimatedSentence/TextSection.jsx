"use client";

export default function TextSection({ scene, refs }) {
    const { title, subtitle, subtitleBg, text, titleRotate, subtitleRotate, subtitleLeft } = scene;
    const [titleRef, subtitleRef, textRef] = refs;

    const baseClasses = "pointer-events-none absolute inset-0 z-30 gap-4 px-4 sm:px-8 md:px-16 lg:px-28";
    const titleClasses = `text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black p-4 sm:p-6 md:p-8 py-3 sm:py-4 md:py-5 bg-pink-200 absolute top-[150px] sm:top-[200px] md:top-[250px] left-4 sm:left-8 md:left-16 lg:left-28 rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] ${titleRotate} max-w-[90%] sm:max-w-none`;
    const subtitleClasses = `text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white p-4 sm:p-6 md:p-8 py-3 sm:py-4 md:py-5 ${subtitleBg} absolute top-[220px] sm:top-[280px] md:top-[338px] left-4 sm:left-8 md:left-16 ${subtitleLeft || "lg:left-28"} rounded drop-shadow-[0_6px_18px_rgba(255,255,255,0.25)] ${subtitleRotate} max-w-[90%] sm:max-w-none`;
    const textClasses = `text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-white absolute top-[400px] sm:top-[500px] md:top-[500px] left-4 sm:left-8 md:left-16 lg:left-28 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)] max-w-[90%] sm:max-w-[80%] md:max-w-none`;

    return (
        <div className={baseClasses}>
            <div ref={titleRef} className={titleClasses}>
                {title}
            </div>
            <div ref={subtitleRef} className={subtitleClasses}>
                {subtitle}
            </div>
            <p ref={textRef} className={textClasses}>
                {text.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < text.split('\n').length - 1 && (
                            <>
                                <br className="hidden sm:block" />
                                {line.trim() === '' && <br className="hidden md:block" />}
                            </>
                        )}
                    </span>
                ))}
            </p>
        </div>
    );
}

