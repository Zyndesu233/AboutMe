import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default App;