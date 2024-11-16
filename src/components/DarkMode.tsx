"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  // Check localStorage for dark mode preference or the system's theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // Use the saved theme from localStorage
      setIsDark(savedTheme === "dark");
    } else {
      // If no saved theme, use the system's preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme); // Save to localStorage
  };

  // Apply dark or light mode to the body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      onClick={toggleDarkMode}
      className="flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out"
    >
      {isDark ? <FaMoon fontSize={20} /> : <FaSun fontSize={20} />}
    </div>
  );
};

export default DarkMode;
