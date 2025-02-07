import type { PressableProps, ViewProps } from 'react-native';
import { Pressable } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type PressableWithFeedbackProps = Omit<PressableProps, 'style' | 'children'> &
  Pick<ViewProps, 'style' | 'children'>;

export const PressableWithFeedback = ({
  children,
  accessibilityRole,
  style,
  ...props
}: PressableWithFeedbackProps) => {
  const isPressedSharedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(isPressedSharedValue.value, [0, 1], [1, 0.6]),
    };
  });

  return (
    <AnimatedPressable
      {...props}
      onPressIn={() => {
        isPressedSharedValue.value = withTiming(1, {
          duration: 200,
          easing: Easing.inOut(Easing.ease),
        });
      }}
      onPressOut={() => {
        isPressedSharedValue.value = withTiming(0, {
          duration: 200,
          easing: Easing.inOut(Easing.ease),
        });
      }}
      accessibilityRole={accessibilityRole ?? 'button'}
      style={[animatedStyle, style]}
    >
      {children}
    </AnimatedPressable>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
