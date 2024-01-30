'use client';

import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    setLocale(window.location.pathname.startsWith('/en') ? 'en' : 'pt');
  }, []);

  return (
    <button
      className="w-10 h-10 rounded-full text-sm flex justify-center items-center cursor-pointer dark:hover:bg-blue-400/10 dark:hover:text-blue-400"
      onClick={() => {
        window.location.href = window.location.href.replace(
          /\/(en|pt)\b/,
          (match, locale) => (locale === 'en' ? '/pt' : '/en'),
        );
      }}
    >
      {locale.toUpperCase()}
    </button>
  );
}
