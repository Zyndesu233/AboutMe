import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"

const AwardMarquee = ({content, duration}: {content: string, duration: number}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const text = textRef.current;
        if(!container || !text) return;

        container.append(text.cloneNode(true));
        const animations = [];
        container.querySelectorAll(".award-marquee-text").forEach((text) => {
            const animation = gsap.to(text, {
                x: "-100%",
                repeat: -1,
                duration: duration,
                ease: "linear"
            });
            animations.push(animation);
        });
    }, []);
    
    return (
        <div ref={containerRef} className="h-[10rem] flex gap-[10rem] overflow-hidden absolute w-full bottom-0 z-1">
            <div ref={textRef} className="award-marquee-text text-[10rem] text-[#dddddd]">
                {`#${content}`}
            </div>
        </div>
    )
}

export default AwardMarquee;