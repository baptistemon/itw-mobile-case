import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { PressableWithFeedback } from '#shared/view/PressableWithFeedback/PressableWithFeedback';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  color?: string;
  textColor?: string;
};

export const Button = ({
  label,
  onPress,
  disabled,
  color,
  textColor,
  isLoading,
}: ButtonProps) => {
  const { theme } = useUnistyles();
  return (
    <PressableWithFeedback
      onPress={onPress}
      style={styles.button(disabled, color)}
      disabled={disabled}
    >
      {color ? (
        <ButtonContent
          label={label}
          isLoading={isLoading}
          textColor={textColor}
        />
      ) : (
        <>
          <LinearGradient
            colors={[theme.colors.purpleLight, theme.colors.purpleDarken]}
            style={styles.gradient}
            start={[0, 1]}
            end={[1, 0]}
          />
          <ButtonContent
            label={label}
            isLoading={isLoading}
            textColor={textColor}
          />
        </>
      )}
    </PressableWithFeedback>
  );
};

type ButtonContentProps = {
  label: string;
  isLoading?: boolean;
  textColor?: string;
};

const ButtonContent = ({ label, textColor, isLoading }: ButtonContentProps) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return <Text style={styles.text(textColor)}>{label}</Text>;
};

const styles = StyleSheet.create((theme) => ({
  button: (disabled?: boolean, color?: string) => ({
    opacity: disabled ? 0.6 : 1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
    backgroundColor: color,
    borderRadius: theme.radius.xs,
    alignItems: 'center',
    overflow: 'hidden',
  }),
  text: (textColor?: string) => ({
    color: textColor ?? theme.colors.white,
    fontWeight: 'bold',
  }),
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
