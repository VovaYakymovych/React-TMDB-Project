// import { useState, type ReactNode } from "react";
// import { ThemeContext, type Theme } from "./ThemeContext.ts";
//
// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//     const [theme, setTheme] = useState<Theme>("light");
//
//     const toggleTheme = () =>
//         setTheme((prev: string) => (prev === "light" ? "dark" : "light"));
//
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <div data-theme={theme}>{children}</div>
//         </ThemeContext.Provider>
//     );
// };
