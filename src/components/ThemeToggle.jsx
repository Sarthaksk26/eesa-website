import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ onThemeChange, currentTheme: propTheme }) => {
  // Use the prop if provided, otherwise initialize from localStorage
  const [theme, setTheme] = useState(propTheme || localStorage.getItem("theme") || "dark");

  // Keep internal state synced with prop
  useEffect(() => {
    if (propTheme && propTheme !== theme) {
      setTheme(propTheme);
    }
  }, [propTheme, theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Notify parent component
    if (onThemeChange) {
      onThemeChange(newTheme);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <FaSun className="text-white" size={18} />
      ) : (
        <FaMoon className="text-primary" size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;