'use client';

import { useEffect, useRef, useState } from 'react';
import { MdMenu } from 'react-icons/md';

import { Link } from '@/navigation';

import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as any)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        className={`w-11 h-11 rounded-full flex justify-center items-center
          cursor-pointer hover:text-blue-600 hover:bg-blue-800/10 dark:hover:bg-blue-400/10
          ${open ? 'text-blue-600 bg-blue-800/10 dark:bg-blue-400/10' : ''}`}
        onClick={() => setOpen(true)}
      >
        <MdMenu
          size={32}
          className={`dark:hover:text-blue-400 ${open ? 'dark:text-blue-400' : ''}`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 bg-slate-200 border border-slate-400/50 dark:border-none dark:bg-slate-800 rounded-md overflow-hidden"
        >
          <ul className="w-36">
            <li>
              <Link
                href="/"
                className={`block px-5 py-3 text-left w-full select-none hover:bg-blue-800/10 dark:hover:bg-blue-400/10
                text-slate-950 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block px-5 py-3 text-left w-full select-none hover:bg-blue-800/10 dark:hover:bg-blue-400/10
                text-slate-950 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400`}
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
          </ul>

          <div className="h-[1px] bg-slate-400/65 dark:bg-slate-700"></div>

          <div className="flex px-2 py-1">
            <ThemeSwitcher />

            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
