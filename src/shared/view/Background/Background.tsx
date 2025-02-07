import { ImageBackground } from 'expo-image';
import type { ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const background = require('#assets/images/background.png');

type BackgroundProps = Pick<ViewProps, 'children'>;

export const Background = ({ children }: BackgroundProps) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
});
