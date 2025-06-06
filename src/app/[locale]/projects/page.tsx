import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import ProjectCard from '@/components/ProjectCard';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  return { title: `${t('title')} - Gustavo Toyota` };
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

          <ProjectCard
            title="DeepNotes"
            description={t('DeepNotes.description')}
            techStack="Vue.js, Quasar, Vite, Sass, Node.js, Typescript, Fastify, tRPC, Electron, Capacitor, Redis, PostgreSQL"
            liveUrl="https://deepnotes.app"
            sourceCodeUrl="https://github.com/DeepNotesApp/DeepNotes"
            imageSrc="/projects/deepnotes.webp"
            priority
          />

          <div className="h-32"></div>

          <ProjectCard
            title="Legit Inc®"
            description={t('LegitInc.description')}
            techStack="Vue.js, Nuxt.js, Typescript"
            liveUrl="https://legit-inc.com"
            imageSrc="/projects/legit-inc.webp"
            priority
          />

          <div className="h-32"></div>

          <ProjectCard
            title="VisualSQL"
            description={t('VisualSQL.description')}
            techStack="Vue.js, Nuxt.js, Vuetify, Typescript"
            liveUrl="https://visualsql.net"
            sourceCodeUrl="https://github.com/gustavotoyota/VisualSQL"
            imageSrc="/projects/visualsql.webp"
            priority
          />

          <div className="h-32"></div>

          <ProjectCard
            title="SheetInsights"
            description={t('SheetInsights.description')}
            techStack="React, Next.js, Tailwind CSS, Typescript"
            liveUrl="https://sheetinsights.gustavotoyota.com"
            sourceCodeUrl="https://github.com/gustavotoyota/SheetInsights"
            imageSrc="/projects/sheetinsights.webp"
          />

          <div className="h-32"></div>

          <ProjectCard
            title="ChessAnalyzer"
            description={t('ChessAnalyzer.description')}
            techStack="React, Next.js, Tailwind CSS, Typescript"
            liveUrl="https://chessanalyzer.gustavotoyota.com"
            sourceCodeUrl="https://github.com/gustavotoyota/ChessAnalyzer"
            imageSrc="/projects/chessanalyzer.webp"
          />

          <div className="h-32"></div>

          <ProjectCard
            title="GeoMaster"
            techStack="React, Next.js, Tailwind CSS, Typescript"
            description={t('GeoMaster.description')}
            liveUrl="https://geomaster.gustavotoyota.com"
            sourceCodeUrl="https://github.com/gustavotoyota/GeoMaster"
            imageSrc="/projects/geomaster.webp"
          />

          <div className="h-32"></div>

          <ProjectCard
            title="ChronoMap"
            techStack="React, Next.js, Tailwind CSS, Typescript"
            description={t('ChronoMap.description')}
            liveUrl="https://chronomap.gustavotoyota.com"
            sourceCodeUrl="https://github.com/gustavotoyota/ChronoMap"
            imageSrc="/projects/chronomap.webp"
          />

          <div className="h-32"></div>
        </div>
      </div>
    </main>
  );
}
