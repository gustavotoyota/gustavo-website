import { useTranslations } from 'next-intl';

export default function ProjectCard(props: {
  title: string;
  description: string;
  techStack?: string;
  liveUrl?: string;
  sourceCodeUrl: string;
}) {
  const t = useTranslations('projectCard');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="text-3xl font-bold">{props.title}</div>

        <div className="h-6"></div>

        <div>{props.description}</div>

        <div className="h-5"></div>

        <div>
          <b>Tech stack:</b> {props.techStack}
        </div>

        <div className="h-6"></div>

        <div>
          {props.liveUrl && (
            <>
              <a
                href={props.liveUrl}
                target="_blank"
              >
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
                  {t('seeLive')}
                </button>
              </a>

              <div className="w-6 inline-block"></div>
            </>
          )}

          <a
            href={props.sourceCodeUrl}
            target="_blank"
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
              {t('sourceRepo')}
            </button>
          </a>
        </div>
      </div>

      <div className="h-72 bg-neutral-500 rounded-2xl"></div>
    </div>
  );
}
