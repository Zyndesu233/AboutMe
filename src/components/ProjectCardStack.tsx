import { useCardStack } from "../hooks/useCardStack";

export interface CardData {
	id: number;
	projectName: string;
	role: string;
	description: string;
	bgColor: string;
	accentColor: string;
}

interface CardStackProps {
	cards: CardData[];
}

const PROJECTS: CardData[] = [
	{
		id: 1,
		projectName: "treeSimulator",
		role: "Software Developer",
		description: "treeSimulator is a command line tool visualizing tree-like data structures. The data structures such as AVL trees and red black trees are implemented in C language. With REPL, users can see how the trees change after inserting or deleting nodes",
		bgColor: "#12122a",
		accentColor: "#f0d060",
	},
	{
		id: 2,
		projectName: "XXX Paper",
		role: "Full Stack Developer",
		description: "XXX Paper is a web-based AI essay marking agent. The prototype was constructed with Express.js library, EJS view engine, and MongoDB database. It is reconstructed in the Next.js framework later",
		bgColor: "#6b1440",
		accentColor: "#e8a0c8",
	},
	{
		id: 3,
		projectName: "Cultural Dessert",
		role: "Front-end Developer",
		description: "Cultural Dessert is a single page application allowing user to search for cultural activities. Responsible for front-end development using React framework with React Router and Typescript.",
		bgColor: "#1b5e96",
		accentColor: "#7ec8f5",
	},
];

function ProjectCard({ card }: { card: CardData }) {
	const border = "rgba(255,255,255,0.1)";

	return (
		<div
			className="card-inner relative w-9/10 place-self-center overflow-hidden rounded-[1rem] h-5/9"
			style={{
				padding: "2rem",
				backgroundColor: card.bgColor,
				boxShadow: "0 -8px 40px rgba(0,0,0,0.4)",
				display: "flex",
			}}
		>
			{/* ── Left info panel ─────────────────────────────────────────────── */}
			<div
				className="flex flex-col justify-between flex-shrink-0 p-12"
				style={{ width: 380, borderRight: `1px solid ${border}` }}
			>
				<div>
					<span
						className="inline-block text-[1rem] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6"
						style={{ color: "#fff", background: "rgba(255,255,255,0.12)" }}
					>
						Project {("0" + card.id).slice(-2)}
					</span>

					<h2 className="font-extrabold leading-[1.15] tracking-[-0.03em] mb-3 text-[4rem] text-white">
						{card.projectName}
					</h2>

					<p className="font-light text-[2rem] text-white">
						{card.role}
					</p>
				</div>

				<div>
					<ul className="mb-7 space-y-2 text-[1.5rem] leading-[1.85] max-w-[38ch] text-white">
						{card.description}
					</ul>
				</div>
			</div>

			{/* ── Right visual panel ──────────────────────────────────────────── */}
			<div className="relative flex-1 overflow-hidden">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `radial-gradient(ellipse 65% 55% at 55% 50%, ${card.accentColor}44, transparent)`,
					}}
				/>
				<div
					className="absolute right-[-0.5rem] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none"
					style={{
						fontSize: "clamp(8rem, 15vw, 16rem)",
						letterSpacing: "-0.08em",
						color: card.accentColor,
						opacity: 0.07,
					}}
				>
					{("0" + card.id).slice(-2)}
				</div>
				<div
					className="absolute bottom-0 left-0 right-0 h-[3px]"
					style={{
						background: `linear-gradient(to right, ${card.accentColor}00, ${card.accentColor}88, ${card.accentColor}00)`,
					}}
				/>
				<div className="absolute top-8 left-8 w-20 h-20 rounded-full border" style={{ borderColor: `${card.accentColor}33` }} />
				<div className="absolute top-11 left-11 w-[30px] h-[30px] rounded-full border" style={{ background: `${card.accentColor}22`, borderColor: `${card.accentColor}55` }} />
			</div>
		</div>
	);
}

export default function ProjectCardStack({
	cards = PROJECTS,
}: Partial<CardStackProps>) {
	const { containerRef, CARD_HEIGHT, SCROLL_DISTANCE } = useCardStack(cards.length);

	return (
		<div className="py-[3rem]">
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