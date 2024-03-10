import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return { title: `${t('title')} - Gustavo Toyota` };
}

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex-1 flex justify-center items-center">
      <div className="px-7 py-20 text-center">
        <div className="text-2xl font-semibold text-slate-800 dark:text-slate-400">
          {t('gretting')}
        </div>

        <div className="pt-1 pb-4 text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r to-fuchsia-600 via-blue-600 from-cyan-500">
          Gustavo Toyota
        </div>

        <div className="text-3xl font-semibold  text-slate-800 dark:text-slate-300">
          {t('who')}
        </div>
      </div>
    </main>
  );
}
