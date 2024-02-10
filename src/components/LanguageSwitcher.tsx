'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter } from '@/navigation';

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('en');

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLocale(window.location.pathname.startsWith('/en') ? 'en' : 'pt');
  }, []);

  return (
    <button
      className="w-11 h-11 rounded-full text-sm flex justify-center items-center cursor-pointer
        font-semibold select-none text-slate-950 dark:text-slate-300
      hover:text-blue-600 hover:bg-blue-800/10 dark:hover:bg-blue-400/10 dark:hover:text-blue-400"
      onClick={() => {
        router.replace(pathname, { locale: locale === 'en' ? 'pt' : 'en' });
      }}
    >
      {locale.toUpperCase()}
    </button>
  );
}
