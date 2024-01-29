import createMiddleware from 'next-intl/middleware';

import i18nConfig from './i18n.config.json';

export default createMiddleware(i18nConfig);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*'],
};
