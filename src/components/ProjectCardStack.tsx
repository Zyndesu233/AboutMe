import type { Dispatch, SetStateAction } from "react";
import { useCardStack } from "../hooks/useCardStack";
import type { CardData } from "../data/Projects";
import ProjectCard from "./ProjectCard";


const ProjectCardStack = ({
	cards,
	paddingSetter
}: {cards: CardData[], paddingSetter: Dispatch<SetStateAction<number>>}) => {
	const { containerRef, CARD_HEIGHT, SCROLL_DISTANCE } = useCardStack(cards.length);
	paddingSetter((CARD_HEIGHT+SCROLL_DISTANCE)*cards.length);

	return (
		<div style={{paddingTop: "3rem"}}>
			<div ref={containerRef} className="relative w-full">
				{cards.map((card, i) => (
					<div
						key={card.id}
						className="card-wrapper relative w-full"
						id={`card-${i}`}
						style={{
							height: CARD_HEIGHT + SCROLL_DISTANCE,
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