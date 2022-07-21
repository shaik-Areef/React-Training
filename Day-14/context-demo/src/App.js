
import React, { useState, useContext , createContext} from "react";

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
const ThemeContext = createContext(themes.light);

function App() {
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

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { background, foreground } = useContext(ThemeContext);
  return (
    <button
      style={{
        backgroundColor: background,
        color: foreground,
      }}
    >
      Click Me
    </button>
  );
}


export default App;
