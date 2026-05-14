import { useCardStack } from "../hooks/useCardStack";
import type { CardData } from "../data/Projects";
import ProjectCard from "./ProjectCard";


const ProjectCardStack = ({ cards }: { cards: CardData[] }) => {
	const { containerRef } = useCardStack(cards.length);

	return (
		<div style={{ paddingTop: "3rem" }}>
			<div ref={containerRef} className="relative w-full" >
				{cards.map((card, i) => (
					<div
						key={card.id}
						className="card-wrapper relative w-full"
						id={`card-${i}`}
						style={{
							position: "sticky",
							top: `${(i + 1) * 1.5 + 3}rem`,
							zIndex: i + 1,
						}}
					>
						<ProjectCard card={card} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectCardStack;