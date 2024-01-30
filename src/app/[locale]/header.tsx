import './globals.css';

import { useTranslations } from 'next-intl';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className="fixed h-16 w-full flex items-center border-b border-slate-900/20 dark:border-slate-300/10">
      <div className="container m-auto">
        <div className="flex items-center">
          <div className="flex-1"></div>

          <nav className="text-slate-950 dark:text-slate-300 font-semibold select-none">
            <ul className="hidden md:flex">
              <li className="px-5 py-3 cursor-pointer dark:hover:text-blue-400">
                {t('home')}
              </li>
              <li className="px-5 py-3 cursor-pointer dark:hover:text-blue-400">
                {t('experience')}
              </li>
              <li className="px-5 py-3 cursor-pointer dark:hover:text-blue-400">
                {t('projects')}
              </li>
              <li className="px-5 py-3 cursor-pointer dark:hover:text-blue-400">
                {t('skills')}
              </li>
              <li className="px-5 py-3 cursor-pointer dark:hover:text-blue-400">
                {t('posts')}
              </li>
              <li className="ml-3 flex items-center">
                <ThemeSwitcher />
              </li>
              <li className="ml-5 flex items-center">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>

          <div className="flex-1 lg:hidden"></div>
        </div>
      </div>
    </header>
  );
}
