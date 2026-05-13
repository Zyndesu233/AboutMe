import type { CardData } from "../data/Projects";

const ProjectCard = ({ card }: { card: CardData }) => {
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
				style={{ width: 380, borderRight: `1px solid rgba(255,255,255,0.1)` }}
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

					<p className="font-bold text-[2rem] text-white">
						{card.role}
					</p>

                    <p className="font-light text-[1.5rem] text-white">
						{card.date}
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
                <img className="place-self-center h-[100%]" src={card.img} alt="" />
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

export default ProjectCard;