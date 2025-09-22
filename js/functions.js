const getStringLengthCheck = (string, maxLength) => string.lenght <= maxLength;

const isPolydrome = (string) => {
  const startString = string.toLowerCase().replaceAll();
  let invertedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += startString[i];
  }
  return startString === invertedString;
};

