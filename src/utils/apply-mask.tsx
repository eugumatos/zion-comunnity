export const applyMask = (value: string, mask: string) => {
  let maskedValue = '';
  let maskIndex = 0;
  const numbersOnly = value.replace(/\D/g, ''); 

  for (let i = 0; i < numbersOnly.length && maskIndex < mask.length; i++) {
    if (mask[maskIndex] === '9') {
      maskedValue += numbersOnly[i];
    } else {
      maskedValue += mask[maskIndex];
      i--;  
    }
    maskIndex++;
  }
  return maskedValue;
};
