'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer
        font-semibold select-none text-slate-950 dark:text-slate-300
      hover:text-blue-600 hover:bg-blue-800/10 dark:hover:bg-blue-400/10 dark:hover:text-blue-400"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {!mounted || resolvedTheme === 'light' ? (
        <MdLightMode size={24} />
      ) : (
        <MdDarkMode size={24} />
      )}
    </button>
  );
}
