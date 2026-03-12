import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="min-h-screen">
            <main>
                <Navbar />
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
