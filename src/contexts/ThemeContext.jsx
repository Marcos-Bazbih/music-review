import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const darkMode = {
    color: "#d5eeff",
    background: "#34495e",
    isDark: true
};
const dayMode = {
    color: "#34495e",
    background: "#d5eeff",
    isDark: false
};

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(dayMode);
    useEffect(() => {
        let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkMode ? setMode(darkMode) : setMode(dayMode)
    }, [])

    const ToggleTheme = () => {
        mode === dayMode ? setMode(darkMode) : setMode(dayMode)
    };

    return (
        <ThemeContext.Provider value={{ mode, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;