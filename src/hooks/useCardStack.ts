import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const CARD_HEIGHT = 520;
export const SCROLL_DISTANCE = 700;

export function useCardStack(count: number) {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const container = containerRef.current;
		if (!container) return;

		const wrappers = Array.from(
			container.querySelectorAll<HTMLElement>(".card-wrapper")
		);
		const inners = Array.from(
			container.querySelectorAll<HTMLElement>(".card-inner")
		);

		// Create a sentinel element to act as the trigger for the last card
		const sentinel = document.createElement("div");
		sentinel.style.cssText = `
    height: ${SCROLL_DISTANCE}px;
    pointer-events: none;
    aria-hidden: true;
  `;
		container.appendChild(sentinel);

		const ctx = gsap.context(() => {
			inners.forEach((inner, i) => {
				const trigger = wrappers[i + 1] ?? sentinel;

				gsap.to(
					inner,
					{
						transformOrigin: "top center",
						ease: "none",
						scrollTrigger: {
							trigger,
							start: "top bottom",
							end: "top top",
							scrub: 0.6,
						},
					}
				);
			});
		}, container);

		return () => {
			sentinel.remove();
			ctx.revert();
		};
	}, [count]);

	return { containerRef, CARD_HEIGHT, SCROLL_DISTANCE };
}