import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AWARD_LIST from "../data/Award";

const AwardVisual = () => {
    const [activeAward, setActiveAward] = useState(0);
    const [prevAward, setPrevAward] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Animate indicator pill position when active tab changes
    useGSAP(() => {
        const activeEl = tabRefs.current[activeAward];
        const tabsEl = tabsRef.current;
        const indicator = indicatorRef.current;
        if (!activeEl || !tabsEl || !indicator) return;

        const tabsRect = tabsEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        const left = activeRect.left - tabsRect.left;

        gsap.to(indicator, {
            x: left,
            width: activeRect.width,
            duration: 0.45,
            ease: "power3.out",
        });
    }, { scope: containerRef, dependencies: [activeAward] });

    // Cross-fade content on tab change
    useGSAP(() => {
        if (activeAward === prevAward) return;
        const image = imageRef.current;
        const info = infoRef.current;
        if (!image || !info) return;

        const tl = gsap.timeline();
        tl.to([image, info], {
            opacity: 0,
            y: 12,
            duration: 0.2,
            ease: "power2.in",
        })
            .set([image, info], { y: -12 })
            .to([image, info], {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power3.out",
                stagger: 0.06,
            });
    }, { scope: containerRef, dependencies: [activeAward] });

    // Entrance animation on mount
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(tabsRef.current, { opacity: 0, y: 20, duration: 0.6 })
            .from(imageRef.current, { opacity: 0, y: 24, duration: 0.6 }, "-=0.3")
            .from(infoRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.35");
    }, { scope: containerRef });

    const handleTabClick = (index: number) => {
        if (index === activeAward) return;
        setPrevAward(activeAward);
        setActiveAward(index);
    };

    const award = AWARD_LIST[activeAward];
    const imageSrc = `./src/imgs/awardImgs/${award.shortName}.png`;

    return (
        <div ref={containerRef} className="h-[70vh]">
            {/* Tab bar */}
            <div className="max-w-4xl mx-auto mb-10 flex">
                <div
                    ref={tabsRef}
                    className="relative inline-flex items-center bg-[var(--color-surface-offset)] rounded-full p-1 gap-1"
                >
                    {/* Sliding pill indicator */}
                    <div
                        ref={indicatorRef}
                        className="absolute top-1 left-1 h-[calc(100%-8px)] rounded-full bg-[var(--color-primary)] pointer-events-none"
                        style={{ width: 0 }}
                    />

                    {AWARD_LIST.map((item, index) => (
                        <button
                            key={item.shortName}
                            ref={(el) => { tabRefs.current[index] = el; }}
                            onClick={() => handleTabClick(index)}
                            className={[
                                "relative z-10 px-5 py-2 rounded-full text-[2rem] font-semibold transition-colors duration-200 whitespace-nowrap",
                                activeAward === index
                                    ? "text-white"
                                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
                            ].join(" ")}
                        >
                            {item.shortName}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex place-content-center">

                {/* Image */}
                <div
                    ref={imageRef}
                    className="h-[40vh] relative rounded-xl overflow-hidden shadow-[var(--shadow-lg)] aspect-video bg-[var(--color-surface-offset)]"
                >
                    <img
                        src={imageSrc}
                        alt={`${award.competition}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Year badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {award.year}
                    </div>
                </div>

                {/* Info panel */}
                <div 
                    ref={infoRef} 
                    className="h-[50vh] w-[50vw] grid flex-col justify-center p-12" 
                    style={{ gridTemplateRows: 'auto 2rem 1fr', alignContent: 'start' }}
                >

                    {/* Competition name */}
                    <div className="text-[4rem] font-display font-bold text-[var(--color-text)] leading-tight mb-12">
                        <div>{award.prize}</div>
                        <div>{award.competition }</div>
                    </div>
                        <div />


                    {/* Description */}
                    <p className="text-[1.5rem] text-[var(--color-text-muted)] leading-relaxed">
                        {award.description}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AwardVisual;