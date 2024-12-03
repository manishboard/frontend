"use client";
import { useState } from "react";

export default function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark-theme-variables");
  };

  return (
    <div className="theme-toggler" onClick={toggleTheme}>
      <span className={`material-icons ${theme === "light" ? "active" : ""}`}>
        light_mode
      </span>
      <span className={`material-icons ${theme === "dark" ? "active" : ""}`}>
        dark_mode
      </span>
    </div>
  );
}
