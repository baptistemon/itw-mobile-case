import type { ReactNode } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import frMessages from './locales/fr/fr.json';

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: 'fr',
    messages: frMessages,
  },
  cache,
);

const IntlProvider = ({ children }: { children: ReactNode }) => (
  <RawIntlProvider value={intl}>{children}</RawIntlProvider>
);

export { intl as intlInstance, IntlProvider };

declare global {
  // Used to add typing to the `ids` property of the `FormatjsIntl.Message` interface - https://formatjs.io/docs/react-intl/#typing-message-ids-and-locale
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof frMessages;
    }
  }
}
