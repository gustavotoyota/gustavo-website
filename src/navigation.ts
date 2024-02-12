import type { Pathnames } from 'next-intl/navigation';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import i18nConfig from './i18n.config';

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',

  '/experience': {
    en: '/experience',
    pt: '/experiencia',
  },

  '/projects': {
    en: '/projects',
    pt: '/projetos',
  },

  '/contact': {
    en: '/contact',
    pt: '/contato',
  },
} satisfies Pathnames<typeof i18nConfig.locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales: i18nConfig.locales,
    localePrefix: i18nConfig.localePrefix,
    pathnames,
  });
