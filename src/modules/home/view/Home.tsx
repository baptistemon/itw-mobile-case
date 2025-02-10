import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Alert, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import * as z from 'zod';

import { formatAmount } from '#shared/utils/formatAmount';
import { formatPhoneNumber } from '#shared/utils/formatPhoneNumber';
import { sleep } from '#shared/utils/sleep';
import { Background } from '#shared/view/Background/Background';
import { Button } from '#shared/view/Button/Button';
import { HeroLogo } from '#shared/view/HeroLogo/HeroLogo';
import type { RadioButtonData } from '#shared/view/RadioButtons/RadioButtons';
import { RadioButtons } from '#shared/view/RadioButtons/RadioButtons';
import { TextInput } from '#shared/view/TextInput/TextInput';

const RADIO_BUTTONS_DATA: RadioButtonData[] = [
  { label: 'P1X', value: '1' },
  { label: 'P3X', value: '3' },
  { label: 'P4X', value: '4' },
];

const formSchema = z.object({
  amount: z.string().regex(/\d+(\.|,)\d{2}$/),
  phoneNumber: z.string().regex(/\d{2} \d{2} \d{2} \d{2} \d{2}$/),
  splitPayment: z.object({ label: z.string(), value: z.string() }),
});

type FormInput = z.infer<typeof formSchema>;

export const Home = () => {
  const intl = useIntl();

  const onSubmit = useCallback(
    async (data: FormInput) => {
      await sleep(1500);
      Alert.alert(
        intl.formatMessage({ id: 'link.sended' }),
        intl.formatMessage(
          { id: 'payment' },
          {
            amount: data.amount,
            phoneNumber: data.phoneNumber,
            splitPayment: data.splitPayment.value,
          },
        ),
      );
    },
    [intl],
  );

  const { control, formState, handleSubmit } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: { amount: '', phoneNumber: '', splitPayment: undefined },
  });

  return (
    <Background>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.keyboardAvoidingContainer}
      >
        <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.logoContainer}>
              <HeroLogo sizeRatio={0.4} />
            </View>
            <Controller
              name="amount"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder={intl.formatMessage({ id: 'amount.placeholder' })}
                  onChangeText={(text: string) => onChange(formatAmount(text))}
                  value={value}
                  keyboardType="decimal-pad"
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder={intl.formatMessage({
                    id: 'phoneNumber.placeholder',
                  })}
                  onChangeText={(text: string) =>
                    onChange(formatPhoneNumber(text))
                  }
                  value={value}
                  keyboardType="phone-pad"
                  maxLength={14}
                />
              )}
            />
            <Controller
              name="splitPayment"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioButtons
                  buttonsData={RADIO_BUTTONS_DATA}
                  select={onChange}
                  selectedButton={value}
                />
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              label={intl.formatMessage({ id: 'send.link' })}
              onPress={handleSubmit(onSubmit)}
              disabled={!formState.isDirty || !formState.isValid}
              isLoading={formState.isSubmitting}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingHorizontal: theme.spacing.s,
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
    gap: theme.spacing.l,
  },
  logoContainer: {
    paddingVertical: theme.spacing.s,
  },
  buttonContainer: {
    width: '100%',
  },
  keyboardAvoidingContainer: { flex: 1 },
}));
