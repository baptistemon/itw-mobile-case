import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { IntlProvider } from '#app/i18n/IntlProvider';

export default function App() {
  return (
    <IntlProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </IntlProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
