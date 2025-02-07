import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Button } from '#shared/view/Button/Button';

type RadioButtonData = { label: string; value: string };

type RadioButtonsProps = {
  buttonsData: RadioButtonData[];
  select: (value: string) => void;
};

export const RadioButtons = ({ buttonsData, select }: RadioButtonsProps) => {
  return (
    <View style={styles.container}>
      {buttonsData.map((buttonData) => (
        <View key={buttonData.label} style={styles.singleButtonContainer}>
          <Button
            label={buttonData.label}
            onPress={() => {
              select(buttonData.value);
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
