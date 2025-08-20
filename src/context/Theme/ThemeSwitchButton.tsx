import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.ts";

const ThemeToggle = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) return null;

    const { theme, toggleTheme } = themeContext;

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
);
};

export default ThemeToggle;