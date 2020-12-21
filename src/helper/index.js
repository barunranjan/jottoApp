export const getLetterMatchCount = (gussedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(""));
  const gussedLetterSet = new Set(gussedWord.split(""));
  return [...secretLetterSet].filter((letter) => gussedLetterSet.has(letter))
    .length;
};
