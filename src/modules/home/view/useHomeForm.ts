import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Alert } from 'react-native';
import * as z from 'zod';

import { sleep } from '#shared/utils/sleep';

const formSchema = z.object({
  amount: z.string().regex(/\d+((\.|,)(\d{1}|\d{2}))?$/),
  phoneNumber: z.string().regex(/\d{2} \d{2} \d{2} \d{2} \d{2}$/),
  splitPayment: z.object({ label: z.string(), value: z.string() }),
});

type FormInput = z.infer<typeof formSchema>;

export const useHomeForm = () => {
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

  return {
    control,
    formState,
    submit: handleSubmit(onSubmit),
  };
};
