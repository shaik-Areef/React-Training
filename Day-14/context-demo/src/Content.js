import React, { useState, useContext, createContext } from "react";
import Toolbar from "./Toolbar";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
};

export const ThemeContext = createContext(themes.light);

const Content = () => {
    const [themeName, setThemeName] = useState("light");
    const currentTheme = themes[themeName];
    return (
        <div>
            <select
                onChange={(event) => setThemeName(event.target.value)}
                value={themeName}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <ThemeContext.Provider value={currentTheme}>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}
export default Content;