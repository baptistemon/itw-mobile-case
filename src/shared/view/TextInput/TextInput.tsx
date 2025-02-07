import type { TextInputProps } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

export const TextInput = (props: Omit<TextInputProps, 'style'>) => {
  const { theme } = useUnistyles();
  return (
    <RNTextInput
      style={styles.container}
      {...props}
      placeholderTextColor={theme.colors.gray}
    />
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    height: 50,
    borderRadius: theme.radius.xs,
    padding: theme.spacing.s,
    width: '100%',
    backgroundColor: theme.colors.white,
    color: theme.colors.darkGray,
  },
}));
