import { StyleSheet } from 'react-native-unistyles';

import { colors } from '#shared/theme/colors';

export const unistylesTheme = {
  spacing: {
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
  },
  colors,
};

StyleSheet.configure({
  themes: { default: unistylesTheme },
});
