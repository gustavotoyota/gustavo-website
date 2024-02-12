import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { FaRedditAlien } from 'react-icons/fa6';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from 'react-icons/io5';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return { title: `${t('title')} - Gustavo Toyota` };
}

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <main>
      <div className="container px-7 mx-auto">
        <div className="max-w-md lg:max-w-[1000px] mx-auto">
          <div className="h-28"></div>

          <div className="text-center text-5xl font-bold">{t('title')}</div>

          <div className="h-24"></div>

          <div className="flex w-min flex-col items-start sm:items-center gap-0 sm:gap-6 mx-auto">
            <div className="flex gap-x-10 flex-col sm:flex-row">
              <a
                href="mailto:mail@gustavotoyota.dev"
                className="flex items-center gap-2 text-slate-950 dark:text-slate-200 p-2 rounded-lg hover:brightness-200 hover:bg-neutral-600/10 dark:hover:bg-neutral-500/10"
              >
                <IoMail size={32} />
                <div>mail@gustavotoyota.dev</div>
              </a>

              <a
                className="flex items-center gap-2 text-blue-800 dark:text-blue-500 p-2 rounded-lg hover:brightness-125 hover:bg-blue-500/10 dark:hover:bg-blue-500/10"
                href="https://linkedin.com/in/gustavotoyota/"
                target="_blank"
              >
                <IoLogoLinkedin size={32} />
                <div>LinkedIn</div>
              </a>
            </div>
            <div className="flex gap-x-10 flex-col sm:flex-row">
              <a
                className="flex items-center gap-2 text-slate-950 dark:text-slate-200 p-2 rounded-lg hover:brightness-200 hover:bg-neutral-600/10 dark:hover:bg-neutral-500/10"
                href="https://github.com/gustavotoyota"
                target="_blank"
              >
                <IoLogoGithub size={32} />
                <div>GitHub</div>
              </a>

              <a
                className="flex items-center gap-2 text-blue-800 dark:text-blue-500 p-2 rounded-lg hover:brightness-125 hover:bg-blue-500/10 dark:hover:bg-blue-500/10"
                href="https://facebook.com/gustavotoyota"
                target="_blank"
              >
                <IoLogoFacebook size={32} />
                <div>Facebook</div>
              </a>

              <a
                className="flex items-center gap-2 text-amber-600 dark:text-amber-600 p-2 rounded-lg hover:brightness-110 hover:bg-amber-500/10 dark:hover:bg-amber-500/10"
                href="https://reddit.com/u/gustavotoyota"
                target="_blank"
              >
                <FaRedditAlien size={32} />
                <div>Reddit</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
