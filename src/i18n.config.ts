import type createMiddleware from 'next-intl/middleware';

const config = {
  locales: ['en', 'pt'],

  defaultLocale: 'en',

  localePrefix: 'always',
} satisfies Parameters<typeof createMiddleware>[0];

export default config;
