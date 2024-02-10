import createMiddleware from 'next-intl/middleware';

import i18nConfig from './i18n.config';
import { pathnames } from './navigation';

export default createMiddleware({ ...i18nConfig, pathnames });

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*'],
};
