import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AwardMarquee = ({ content, duration }: {
    content: string;
    duration: number;
}) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        const tween = gsap.to(
            track,
            {
                xPercent: -50,
                duration,
                ease: "none",
                repeat: -1,
                force3D: true,
            }
        );

        return () => {
            tween.kill();
        };
    }, { scope: rootRef });

    const items = Array.from({ length: 6 }, (_, i) => (
        <span
            key={i}
            className="flex-shrink-0 whitespace-nowrap text-[10rem] leading-none text-[#dddddd]"
            aria-hidden={i !== 0}
        >
            #{content}
        </span>
    ));

    return (
        <div
            ref={rootRef}
            className="absolute bottom-0 z-[1] w-full overflow-hidden"
        >
            <div
                ref={trackRef}
                className="flex w-max gap-40 will-change-transform"
            >
                <div className="flex gap-40">
                    {items}
                </div>
                <div className="flex gap-40" aria-hidden="true">
                    {items}
                </div>
            </div>
        </div>
    );
};

export default AwardMarquee;