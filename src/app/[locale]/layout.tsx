import './globals.css';

import { Inter } from 'next/font/google';
import { getTranslations } from 'next-intl/server';

import { Providers } from '../providers';
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
  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} flex flex-col bg-slate-50 dark:bg-slate-900`}
      >
        <Providers>
          <Header />

          <div className="flex-1 flex flex-col">
            <div className="h-16"></div>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
