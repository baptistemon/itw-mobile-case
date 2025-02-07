import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Background } from '#shared/view/Background/Background';

export const Home = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
