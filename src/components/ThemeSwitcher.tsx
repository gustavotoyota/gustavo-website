'use client';

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(
      localStorage.getItem('darkMode') != null
        ? localStorage.getItem('darkMode') === 'true'
        : window.matchMedia('(prefers-color-scheme: dark)').matches,
    );
  }, []);

  useEffect(() => {
    setDarkMode((darkMode) => {
      document.documentElement.classList.toggle('dark', darkMode);

      localStorage.setItem('darkMode', String(darkMode));

      return darkMode;
    });
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dark:hover:bg-blue-400/10 dark:hover:text-blue-400"
      onClick={toggleDarkMode}
    >
      {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
}
