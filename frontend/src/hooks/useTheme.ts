import { useState, useLayoutEffect } from "react";

export const useTheme = () => {
    // Initialize state directly from localStorage or system preference
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const stored = localStorage.getItem("theme") as "light" | "dark" | null;
        if (stored) return stored;

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    // Apply the theme to the DOM whenever state changes
    useLayoutEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme };
};
