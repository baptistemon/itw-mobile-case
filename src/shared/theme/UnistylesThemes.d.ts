import type { unistylesTheme } from '#shared/theme/unistyles';

type CustomUnistylesThemes = { default: typeof unistylesTheme };

declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends CustomUnistylesThemes {}
}
