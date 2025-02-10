export const formatPhoneNumber = (dirtyPhoneNumber: string) => {
  const onlyNumberText = dirtyPhoneNumber.replace(/\D/g, '');
  const formattedPhoneNumber = onlyNumberText.replace(/(\d{2})(?=\d)/g, '$1 ');

  return formattedPhoneNumber;
};
