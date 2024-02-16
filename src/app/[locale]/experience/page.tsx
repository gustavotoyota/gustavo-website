import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import cieloImage from '@/../public/experience/cielo.svg';
import ufscarImage from '@/../public/experience/ufscar.png';
import ExperienceCard from '@/components/ExperienceCard';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'experience' });

  return { title: `${t('title')} - Gustavo Toyota` };
}

export default function Contact() {
  const t = useTranslations('experience');

  return (
    <main>
      <div className="h-28"></div>

      <div className="container px-7 mx-auto">
        <div className="text-center text-5xl font-bold">
          {t('professionalExperience')}
        </div>

        <div className="h-20"></div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-10">
          <ExperienceCard
            name="cieloMidLevelDev"
            image={cieloImage}
            width={220}
          />

          <ExperienceCard
            name="cieloIntern"
            image={cieloImage}
            width={220}
          />
        </div>

        <div className="h-24"></div>

        <div className="text-center text-5xl font-bold">{t('education')}</div>

        <div className="h-20"></div>

        <div className="flex justify-center">
          <ExperienceCard
            name="ufscarCompSci"
            image={ufscarImage}
            width={170}
          />
        </div>
      </div>

      <div className="h-32"></div>
    </main>
  );
}
