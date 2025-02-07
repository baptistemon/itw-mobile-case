import { SystemBars } from 'react-native-edge-to-edge';

import { IntlProvider } from '#app/i18n/IntlProvider';

import { Home } from './src/modules/home/view/Home';

export default function App() {
  return (
    <IntlProvider>
      <SystemBars style={'auto'} />
      <Home />
    </IntlProvider>
  );
}
