import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Award } from "../../data/Award";

gsap.registerPlugin(useGSAP);

const AwardCurrent = ({ award }: { award: Award }) => {
    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.fromTo(
                ".award-image",
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.45, ease: "power3.out" }
            )
            .fromTo(
                ".award-title-line",
                { autoAlpha: 0, y: 28 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out",
                    stagger: 0.08,
                },
                "-=0.25"
            )
            .fromTo(
                ".award-description",
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.2"
            );
        },
        { scope: rootRef, dependencies: [award] }
    );

    return (
        <div ref={rootRef} className="z-2 relative">
            <div className="h-[60vh] flex place-content-center bg-white items-center">
                <div className="award-image h-[40vh] relative rounded-xl overflow-hidden shadow-[var(--shadow-lg)] aspect-video bg-[var(--color-surface-offset)]">
                    <img
                        src={award.img}
                        alt={award.competition}
                        className="w-full h-full object-cover"
                    />
                    <div className="award-badge absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[1.5rem] font-semibold px-3 py-1 rounded-full">
                        {award.year}
                    </div>
                </div>

                <div
                    className="w-[50vw] grid flex-col justify-center p-12"
                    style={{ gridTemplateRows: "auto 2rem 1fr", alignContent: "start" }}
                >
                    <div className="text-[4rem] font-display font-bold text-[var(--color-text)] leading-tight mb-12">
                        <div className="award-title-line">{award.prize}</div>
                        <div className="award-title-line">{award.competition}</div>
                    </div>

                    <div />

                    <p className="award-description text-[2rem] text-[var(--color-text-muted)] leading-relaxed">
                        {award.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AwardCurrent;