import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CARD_HEIGHT = 520;
export const SCROLL_DISTANCE = 700;

export function useCardStack(count: number) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wrappers = Array.from(
      container.querySelectorAll<HTMLElement>(".card-wrapper")
    );
    const inners = Array.from(
      container.querySelectorAll<HTMLElement>(".card-inner")
    );

    const ctx = gsap.context(() => {
      inners.forEach((inner, i) => {
        const nextWrapper = wrappers[i + 1];
        if (!nextWrapper) return; // last card never shrinks

        const scaleEnd = 0.9 - i * 0.03;
        // Shift card up so its top peeks above the next card
        const yEnd = -(i + 1) * (CARD_HEIGHT * 0.06);

        gsap.fromTo(
          inner,
          { scale: 1, y: 0 },
          {
            scale: scaleEnd,
            y: yEnd,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: nextWrapper,
              start: "top bottom",
              end: "top top",
              scrub: 0.6,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [count]);

  return { containerRef, CARD_HEIGHT, SCROLL_DISTANCE };
}