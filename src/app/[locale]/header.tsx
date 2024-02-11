import './globals.css';

import { useTranslations } from 'next-intl';

import DropdownMenu from '@/components/DropdownMenu';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Link } from '@/navigation';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header
      className="fixed z-50 h-16 w-full flex items-center border-b
      border-slate-900/20 dark:border-slate-300/10 bg-slate-200 dark:bg-inherit"
    >
      <div className="container px-7 m-auto">
        <div className="flex items-center">
          <div className="flex-1"></div>

          <nav>
            <ul className="hidden md:flex">
              <li>
                <Link
                  href="/"
                  className="block px-5 py-3 cursor-pointer font-semibold select-none
                  text-slate-950 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block px-5 py-3 cursor-pointer font-semibold select-none
                  text-slate-950 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('projects')}
                </Link>
              </li>
              <li className="ml-2 flex items-center">
                <ThemeSwitcher />
              </li>
              <li className="ml-4 flex items-center">
                <LanguageSwitcher />
              </li>
            </ul>

            <div className="block md:hidden">
              <DropdownMenu
                translations={{
                  home: t('home'),
                  projects: t('projects'),
                }}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
