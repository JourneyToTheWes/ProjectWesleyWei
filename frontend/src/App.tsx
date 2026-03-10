import { useTheme } from "./hooks/useTheme";

const App = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Wesley Wei</h1>
            <button className="border" onClick={toggleTheme}>
                Toggle
            </button>
        </div>
    );
};

export default App;
