import { StatusBar } from 'expo-status-bar';

import { IntlProvider } from '#app/i18n/IntlProvider';

import { Home } from './src/modules/home/view/Home';

export default function App() {
  return (
    <IntlProvider>
      <StatusBar style="auto" />
      <Home />
    </IntlProvider>
  );
}
