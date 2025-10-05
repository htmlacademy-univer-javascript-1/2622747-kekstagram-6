const stringLengthCheck = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const startString = string.toLowerCase().replaceAll(' ', '');
  let invertedString = '';

  for (let i = startString.length - 1; i >= 0; i--) {
    invertedString += startString[i];
  }
  return startString === invertedString;
};

stringLengthCheck('проверяемая строка', 20);
isPalindrome('топот');
