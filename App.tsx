import { SystemBars } from 'react-native-edge-to-edge';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { IntlProvider } from '#app/i18n/IntlProvider';

import { Home } from './src/modules/home/view/Home';

export default function App() {
  return (
    <IntlProvider>
      <SafeAreaProvider>
        <SystemBars style={'auto'} />
        <Home />
      </SafeAreaProvider>
    </IntlProvider>
  );
}
