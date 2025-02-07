import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { PressableWithFeedback } from '#shared/view/PressableWithFeedback/PressableWithFeedback';

type ButtonProps = { label: string; onPress: () => void; disabled?: boolean };

export const Button = ({ label, onPress, disabled }: ButtonProps) => {
  return (
    <PressableWithFeedback
      onPress={onPress}
      style={styles.button(disabled)}
      disabled={disabled}
    >
      <Text style={styles.text}>{label}</Text>
    </PressableWithFeedback>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: (disabled?: boolean) => ({
    opacity: disabled ? 0.6 : 1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
    backgroundColor: theme.colors.purple,
    borderRadius: theme.radius.xs,
    alignItems: 'center',
  }),
  text: {
    color: theme.colors.white,
  },
}));
