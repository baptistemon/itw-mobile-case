export const formatAmount = (dirtyAmount: string) => {
  const onlyNumberAndCommaText = dirtyAmount
    .replace(/[^0-9.,]/g, '')
    .replace(',', '.');

  if (onlyNumberAndCommaText.indexOf('.') === -1) {
    return onlyNumberAndCommaText;
  }

  if (
    onlyNumberAndCommaText.indexOf('.') ===
    onlyNumberAndCommaText.lastIndexOf('.')
  ) {
    const parts = onlyNumberAndCommaText.split('.');
    parts[1] = parts[1].substring(0, 2);
    return parts.join('.');
  }
  return onlyNumberAndCommaText.substring(0, onlyNumberAndCommaText.length - 1);
};
