import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { PressableWithFeedback } from '#shared/view/PressableWithFeedback/PressableWithFeedback';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  textColor?: string;
};

export const Button = ({
  label,
  onPress,
  disabled,
  color,
  textColor,
}: ButtonProps) => {
  return (
    <PressableWithFeedback
      onPress={onPress}
      style={styles.button(disabled, color)}
      disabled={disabled}
    >
      <Text style={styles.text(textColor)}>{label}</Text>
    </PressableWithFeedback>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: (disabled?: boolean, color?: string) => ({
    opacity: disabled ? 0.6 : 1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
    backgroundColor: color ?? theme.colors.purple,
    borderRadius: theme.radius.xs,
    alignItems: 'center',
  }),
  text: (textColor?: string) => ({
    color: textColor ?? theme.colors.white,
    fontWeight: 'bold',
  }),
}));
