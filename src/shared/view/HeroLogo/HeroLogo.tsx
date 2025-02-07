import { Image } from 'expo-image';
import { StyleSheet } from 'react-native-unistyles';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const heroLogo = require('#assets/images/hero.png');

type HeroLogoProps = {
  sizeRatio?: number;
};

export const HeroLogo = ({ sizeRatio = 1 }: HeroLogoProps) => {
  return <Image source={heroLogo} style={styles.image(sizeRatio)} />;
};

const HERO_LOGO_WIDTH = 336;
const HERO_LOGO_HEIGHT = 129;

const styles = StyleSheet.create({
  image: (sizeRatio) => ({
    width: HERO_LOGO_WIDTH * sizeRatio,
    aspectRatio: HERO_LOGO_WIDTH / HERO_LOGO_HEIGHT,
  }),
});
