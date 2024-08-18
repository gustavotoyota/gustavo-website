import type en from './locales/en';
import type pt from './locales/pt';

type EnMessages = typeof en;
type PtMessages = typeof pt;

type Messages = EnMessages & PtMessages;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends EnMessages {}
}
