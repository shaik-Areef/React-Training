import React, { useContext } from "react";
import { ThemeContext } from "./Content";
const ThemedButton = () => {
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
export default ThemedButton