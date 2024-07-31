const getCharacterSet = (generatorConfig) => {
  const characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz".split(""),
    numbers: "0123456789".split(""),
    symbols: "!@#$%^&*()_+[]{}|;:,.<>?".split(""),
  };

  let filteredCharacterSets = [];

  if (generatorConfig.includesLowercase) {
    filteredCharacterSets = filteredCharacterSets.concat(
      characterSets.lowercase
    );
  }

  if (generatorConfig.includesUppercase) {
    filteredCharacterSets = filteredCharacterSets.concat(
      characterSets.lowercase.map((val) => {
        return val.toUpperCase();
      })
    );
  }

  if (generatorConfig.includesNumbers) {
    filteredCharacterSets = filteredCharacterSets.concat(characterSets.numbers);
  }

  if (generatorConfig.includesSymbols) {
    filteredCharacterSets = filteredCharacterSets.concat(characterSets.symbols);
  }

  return filteredCharacterSets;
};

export default getCharacterSet;
