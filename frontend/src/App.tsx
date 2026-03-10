import { useTheme } from "./hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import Hero from "./components/Hero";

const App = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="min-h-screen">
            <button
                className="fixed top-6 right-6 bg-primary text-white border p-2 rounded-lg hover:scale-[1.02] hover:bg-muted transition"
                onClick={toggleTheme}
            >
                <Sun className="w-4 h-4 dark:hidden" />
                <Moon className="w-4 h-4 hidden dark:block" />
            </button>
            <main>
                <Hero />
            </main>
        </div>
    );
};

export default App;
