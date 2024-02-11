import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  return {
    title: t('pageTitle'),
  };
}

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <main>
      <div className="container px-7 mx-auto">
        <div className="max-w-md lg:max-w-[1000px] mx-auto">
          <div className="h-28"></div>

          <div className="text-center text-5xl font-bold">{t('title')}</div>

          <div className="h-28"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold">
                <a
                  href="https://deepnotes.app"
                  target="_blank"
                  className="hover:text-white"
                >
                  DeepNotes
                </a>
              </div>

              <div className="h-6"></div>

              <div>{t('deepnotes.description')}</div>
            </div>

            <div className="h-72 bg-neutral-500 rounded-2xl"></div>
          </div>

          <div className="h-24"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold">
                <a
                  href="https://visualsql.net"
                  target="_blank"
                  className="hover:text-white"
                >
                  VisualSQL
                </a>
              </div>

              <div className="h-6"></div>

              <div>{t('visualsql.description')}</div>
            </div>

            <div className="h-72 bg-neutral-500 rounded-2xl"></div>
          </div>

          <div className="h-24"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold">
                <a
                  href="https://sheetinsights.gustavotoyota.dev"
                  target="_blank"
                  className="hover:text-white"
                >
                  SheetInsights
                </a>
              </div>

              <div className="h-6"></div>

              <div>{t('sheetinsights.description')}</div>
            </div>

            <div className="h-72 bg-neutral-500 rounded-2xl"></div>
          </div>

          <div className="h-24"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold">
                <a
                  href="https://chessanalyzer.gustavotoyota.dev"
                  target="_blank"
                  className="hover:text-white"
                >
                  ChessAnalyzer
                </a>
              </div>

              <div className="h-6"></div>

              <div>{t('chessanalyzer.description')}</div>
            </div>

            <div className="h-72 bg-neutral-500 rounded-2xl"></div>
          </div>

          <div className="h-60"></div>
        </div>
      </div>
    </main>
  );
}
