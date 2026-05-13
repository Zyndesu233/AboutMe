import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Awards from "./components/Awards";

const App = () => {
  const [projectPadding, setProjectPadding] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <WorkExperience />
        <Projects paddingSetter={setProjectPadding} />
        <div style={{height: `${projectPadding}px`}} />
        <Awards />
      </main>
    </div>
  );
};

export default App;