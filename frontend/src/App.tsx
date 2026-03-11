import { useTheme } from "./hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import Hero from "./components/Hero";
import Button from "./components/ui/Button";
import Projects from "./components/projects/Projects";

const App = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="min-h-screen">
            <Button
                variant="ghost"
                size="icon"
                className="fixed top-6 right-6 border z-1"
                onClick={toggleTheme}
            >
                <Sun className="w-4 h-4 dark:hidden" />
                <Moon className="w-4 h-4 hidden dark:block" />
            </Button>
            <main>
                <Hero />
                <Projects />
            </main>
        </div>
    );
};

export default App;
