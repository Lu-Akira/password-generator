const getRandomCharacter = (charSet) => {
  return charSet[Math.floor(Math.random() * charSet.length)];
};

export default getRandomCharacter;
