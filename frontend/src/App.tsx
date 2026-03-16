import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="min-h-screen">
            <main>
                <Hero />
                <About />
                <Projects />
                <WorkExperience />
                <Contact />
            </main>
        </div>
    );
};

export default App;
