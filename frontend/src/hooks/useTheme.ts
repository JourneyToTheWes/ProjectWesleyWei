export const useTheme = () => {
    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        localStorage.setItem(
            "theme",
            root.classList.contains("dark") ? "dark" : "light",
        );
    };

    return { toggleTheme };
};
