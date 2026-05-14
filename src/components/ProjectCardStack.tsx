import type { CardData } from "../data/Projects";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCardStack = ({ cards }: { cards: CardData[] }) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const count = cards.length;

	useGSAP(() => {
		const container = containerRef.current;
		if (!container) return;

		const cards = gsap.utils.toArray<HTMLElement>(
			container.querySelectorAll(".card-wrapper")
		);


		cards.forEach((card, i) => {
			gsap.to(card,
				{
					scale: 0.8 + 0.2 * (i / (count - 1)),
					ease: "none",
					scrollTrigger: {
						trigger: card,
						start: `top ${15 + 35 * i}`,
						end: "bottom bottom",
						endTrigger: container,
						scrub: true,
						pin: card,
						pinSpacing: false,
						invalidateOnRefresh: true,
					}
				}
			)
		});
	}, []);

	return (
		<div ref={containerRef} className="w-full min-h-[100vh] flex flex-col place-items-center relative">
			<div className="w-[clamp(85%, 4vw, 90%)] flex flex-col place-items-center">
				{cards.map((card, i) => (
					<div
						key={i}
						className="card-wrapper w-full mb-[75vh]"
					>
						<ProjectCard card={card} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectCardStack;