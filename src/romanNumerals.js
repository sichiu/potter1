const repeatI = (occurrences) => {
  return "i".repeat(occurrences);
};

const romanNumeral = (numberToConvert) => {
  if (numberToConvert < 4) return repeatI(numberToConvert);
  if (numberToConvert === 4) return "iv";
  if (numberToConvert === 9) return "ix";
  return "v" + repeatI(numberToConvert - 5);
};

module.exports = { romanNumeral };
