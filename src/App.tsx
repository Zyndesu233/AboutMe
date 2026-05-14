import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Awards from "./components/Awards";

const App = () => {

  return (
    <div className="min-h-screen bg-white">
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