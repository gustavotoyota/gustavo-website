import './globals.css';

import { Inter } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Header from './header';

const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'app' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} flex flex-col bg-slate-50 dark:bg-slate-900`}
      >
        <Header />

        <div className="flex-1 flex flex-col">
          <div className="h-16"></div>

          {children}
        </div>
      </body>
    </html>
  );
}
