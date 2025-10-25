import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    // Initialize with saved theme or default to dark
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    // Apply theme class to body whenever it changes
    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded text-black dark:text-white"
        >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
};

export default ThemeToggle;
