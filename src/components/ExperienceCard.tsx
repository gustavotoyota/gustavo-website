import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ExperienceCard(props: {
  name: string;
  image: string | StaticImport;
  width?: number;
  height?: number;
}) {
  const t = useTranslations(`experience.${props.name}`);

  return (
    <div className="p-6 max-w-md rounded-3xl bg-slate-200/75   dark:bg-slate-50/10">
      <div className="h-48 flex justify-center items-center">
        <div className="flex justify-center">
          <Image
            src={props.image}
            alt=""
            width={props.width}
            height={props.height}
          />
        </div>
      </div>

      <div className="h-8"></div>

      <div className="text-2xl font-bold">{t('organization')}</div>

      <div className="text-xl font-bold">{t('title')}</div>

      <div className="h-1"></div>

      <div>
        {t('startDate')} - {t('endDate')}
      </div>

      <div className="h-4"></div>

      <div>{t('description')}</div>
    </div>
  );
}
