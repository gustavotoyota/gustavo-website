import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'experience' });

  return {
    title: t('pageTitle'),
  };
}

export default function Experience() {
  const t = useTranslations('experience');

  return <main></main>;
}
