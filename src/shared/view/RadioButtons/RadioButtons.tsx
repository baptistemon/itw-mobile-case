import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Button } from '#shared/view/Button/Button';

export type RadioButtonData = { label: string; value: string };

type RadioButtonsProps = {
  buttonsData: RadioButtonData[];
  select: (value: RadioButtonData) => void;
  selectedButton?: RadioButtonData;
};

export const RadioButtons = ({
  buttonsData,
  select,
  selectedButton,
}: RadioButtonsProps) => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      {buttonsData.map((buttonData) => (
        <View key={buttonData.label} style={styles.singleButtonContainer}>
          <Button
            color={
              selectedButton?.label === buttonData.label
                ? theme.colors.purple
                : theme.colors.white
            }
            textColor={
              selectedButton?.label === buttonData.label
                ? theme.colors.white
                : theme.colors.darkGray
            }
            label={buttonData.label}
            onPress={() => {
              select(buttonData);
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: { flexDirection: 'row', gap: theme.spacing.s, width: '100%' },
  singleButtonContainer: { flex: 1 },
}));
