import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useCardStack(count: number) {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const container = containerRef.current;
		if (!container) return;

		const inners = Array.from(
			container.querySelectorAll<HTMLElement>(".card-inner")
		);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: `+=${count*100}%`,
				pin: true,
				scrub: 0.6,
			}
		})

		inners.forEach((inner, i) => {
			tl.to(
				inner,
				{
					scale: 1 - (count - i) * 0.01,
					transformOrigin: "top center",
					ease: "none",
				}
			);
		});
	}, []);

	return { containerRef };
}