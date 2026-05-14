import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Awards from "./components/Awards";

const App = () => {

	return (
		<div className="min-h-screen bg-[#F4F4F4]">
			<main>
				<Hero />
				<WorkExperience />
				<Projects />
				<Awards />
			</main>
		</div>
	);
};

export default App;