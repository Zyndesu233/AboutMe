export interface CardData {
	id: number;
	projectName: string;
	role: string;
    date: string;
	description: string;
	bgColor: string;
	accentColor: string;
}

const PROJECTS: CardData[] = [
	{
		id: 1,
		projectName: "treeSimulator",
		role: "Software Developer",
        date: "Mar 2026 - May 2026",
		description: "treeSimulator is a command line tool visualizing tree-like data structures. The data structures such as AVL trees and red black trees are implemented in C language. With REPL, users can see how the trees change after inserting or deleting nodes.",
		bgColor: "#12122a",
		accentColor: "#e2d8b5",
	},
	{
		id: 2,
		projectName: "XXX Paper",
		role: "Full Stack Developer",
        date: "Jul 2025 - Feb 2026",
		description: "XXX Paper is a web-based AI essay marking agent. The prototype was constructed with Express.js library, EJS view engine, and MongoDB database. It is reconstructed in the Next.js framework now.",
		bgColor: "#2E2C1A",
		accentColor: "#4A4A52",
	},
	{
		id: 3,
		projectName: "Cultural Dessert",
		role: "Front-end Developer",
        date: "Nov 2025 - Dec 2025",
		description: "Cultural Dessert is a single page application allowing user to search for cultural activities. I am responsible for front-end development using React framework with React Router and Typescript.",
		bgColor: "#1b5e96",
		accentColor: "#7ec8f5",
	},
];

export default PROJECTS;