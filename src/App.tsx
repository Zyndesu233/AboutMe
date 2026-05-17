import Awards from "./components/AwardsSection/Awards";
import Hero from "./components/Hero";
import OtherExperience from "./components/OtherExprienceSection/OtherExperience";
import Projects from "./components/ProjectsSection/Projects";
import WorkExperience from "./components/WorkExperienceSection/WorkExperience";


const App = () => {

	return (
		<div className="min-h-screen bg-[#F4F4F4]">
			<main>
				<Hero />
				<WorkExperience />
				<Projects />
				<Awards />
				<OtherExperience />
			</main>
		</div>
	);
};

export default App;