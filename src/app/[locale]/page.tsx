import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('title'),
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>{t('header.home')}</li>
            <li>{t('header.experience')}</li>
            <li>{t('header.projects')}</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
